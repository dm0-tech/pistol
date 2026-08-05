#!/usr/bin/env node
// wiki/lint.mjs — deterministic structural lint for the pistol wiki.
//
// Philosophy (per the ecosystem's wikilint finding, W-0005): structure is
// checked by code; semantics — whether a source really says what an entry
// claims — stays with humans and red legs. A green lint is NOT verification.
//
// Checks: entry headers (fields present, vocabularies respected, ID matches
// filename), required sections, per-entry logs, index/entry agreement,
// markdown link integrity across wiki/, transcript pointers resolving to
// archived files, and log.md format. Exits 1 on errors, 0 otherwise.

import { readFileSync, readdirSync, existsSync } from 'node:fs';
import { dirname, join, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

const WIKI = dirname(fileURLToPath(import.meta.url));
const ENTRIES = join(WIKI, 'entries');
const TRANSCRIPTS = join(WIKI, 'transcripts');

const errors = [];
const warnings = [];
const err = (file, msg) => errors.push(`ERROR ${file}: ${msg}`);
const warn = (file, msg) => warnings.push(`warn  ${file}: ${msg}`);

const PROVENANCE = [
  'sourced-tier2', 'sourced', 'spec', 'llm-derived', 'llm-conjecture',
  'human-conjecture', 'folklore',
];
const VERIFICATION = [
  'unverified', 'llm-checked', 'source-audited', 'machine-computed',
  'spec-proved', 'red-legged', 'formally-verified', 'refuted',
];
const GRADE = ['established', 'claimed', 'conjectural', 'open'];
const STATUS = ['draft', 'checked', 'promoted', 'disputed', 'disposed'];
const FIELDS = [
  'ID', 'Provenance', 'Verification', 'Grade', 'Sources', 'Transcript',
  'Cross-refs', 'Status',
];
const SECTIONS = [
  '## Statement', '## Context', '## What would change the labels', '## Log',
];
const LOG_LINE = /^- \d{4}-\d{2}-\d{2} — .+/;
const TRANSCRIPT_ID = /T-\d{4}-\d{2}-\d{2}-[A-Z]/g;

const hasToken = (value, vocab) =>
  vocab.some((tok) => new RegExp(`(^|[^\\w-])${tok}([^\\w-]|$)`).test(value));

// ---- entries ---------------------------------------------------------------

const entryFiles = readdirSync(ENTRIES).filter((f) => f.endsWith('.md')).sort();
const registry = readFileSync(join(TRANSCRIPTS, 'README.md'), 'utf8');

for (const file of entryFiles) {
  const rel = `entries/${file}`;
  const text = readFileSync(join(ENTRIES, file), 'utf8');
  const lines = text.split('\n');

  if (!/^w-\d{4}-[a-z0-9-]+\.md$/.test(file)) {
    err(rel, `filename does not match w-NNNN-slug.md`);
  }

  const h1s = lines.filter((l) => /^# /.test(l));
  if (h1s.length !== 1) err(rel, `expected exactly one H1, found ${h1s.length}`);

  const fields = {};
  for (const l of lines) {
    const m = l.match(/^- \*\*([A-Za-z-]+):\*\* (.*)$/);
    if (m) fields[m[1]] = m[2].trim();
  }
  for (const f of FIELDS) {
    if (!(f in fields)) err(rel, `missing header field "${f}"`);
  }

  const idMatch = file.match(/^w-(\d{4})-/);
  if (fields.ID && idMatch && fields.ID !== `W-${idMatch[1]}`) {
    err(rel, `ID "${fields.ID}" does not match filename (expected W-${idMatch[1]})`);
  }

  if (fields.Provenance && !hasToken(fields.Provenance, PROVENANCE)) {
    err(rel, `Provenance "${fields.Provenance}" contains no allowed token`);
  }
  if (fields.Verification && !hasToken(fields.Verification, VERIFICATION)) {
    err(rel, `Verification "${fields.Verification}" contains no allowed token`);
  }
  if (fields.Grade && !hasToken(fields.Grade, GRADE)) {
    err(rel, `Grade "${fields.Grade}" contains no allowed token`);
  }
  if (fields.Status && !hasToken(fields.Status, STATUS)) {
    err(rel, `Status "${fields.Status}" contains no allowed token`);
  }

  const needsTranscript =
    fields.Provenance && /llm-|human-conjecture/.test(fields.Provenance);
  const tIds = (fields.Transcript || '').match(TRANSCRIPT_ID) || [];
  if (needsTranscript && tIds.length === 0) {
    err(rel, `provenance "${fields.Provenance}" requires a transcript pointer (T-YYYY-MM-DD-X)`);
  }
  for (const t of tIds) {
    if (!registry.includes(t)) err(rel, `transcript ${t} not in transcripts/README.md registry`);
    if (!existsSync(join(TRANSCRIPTS, `${t}.md`))) {
      err(rel, `transcript ${t} has no archived file wiki/transcripts/${t}.md`);
    }
  }

  const needsSources = fields.Provenance && /sourced/.test(fields.Provenance);
  if (needsSources && (!fields.Sources || fields.Sources === '—')) {
    err(rel, `provenance "sourced" requires non-empty Sources`);
  }

  for (const s of SECTIONS) {
    if (!lines.some((l) => l.trim() === s)) err(rel, `missing section "${s}"`);
  }

  const logIdx = lines.findIndex((l) => l.trim() === '## Log');
  if (logIdx >= 0) {
    const logLines = lines.slice(logIdx + 1).filter((l) => l.startsWith('- '));
    if (logLines.length === 0) err(rel, `empty ## Log section`);
    for (const l of logLines) {
      if (!LOG_LINE.test(l)) err(rel, `malformed log line: "${l.slice(0, 60)}"`);
    }
  }
}

// ---- index -----------------------------------------------------------------

const index = readFileSync(join(WIKI, 'INDEX.md'), 'utf8');
for (const file of entryFiles) {
  if (!index.includes(`](entries/${file})`)) {
    err('INDEX.md', `no row links to entries/${file}`);
  }
}
for (const m of index.matchAll(/\]\((entries\/[^)#]+)\)/g)) {
  if (!existsSync(join(WIKI, m[1]))) err('INDEX.md', `dead link ${m[1]}`);
}

// ---- link integrity across wiki/ -------------------------------------------

const wikiMdFiles = [
  ...readdirSync(WIKI).filter((f) => f.endsWith('.md')).map((f) => join(WIKI, f)),
  ...entryFiles.map((f) => join(ENTRIES, f)),
  ...readdirSync(TRANSCRIPTS).filter((f) => f.endsWith('.md')).map((f) => join(TRANSCRIPTS, f)),
];
for (const abs of wikiMdFiles) {
  const relName = abs.slice(WIKI.length + 1) || abs;
  const text = readFileSync(abs, 'utf8');
  for (const m of text.matchAll(/\]\(([^)]+)\)/g)) {
    const target = m[1];
    if (/^(https?:|mailto:|#)/.test(target)) continue;
    const path = target.split('#')[0];
    if (!path) continue;
    if (!existsSync(resolve(dirname(abs), path))) {
      err(relName, `dead relative link ${target}`);
    }
  }
}

// ---- log.md ----------------------------------------------------------------

const logPath = join(WIKI, 'log.md');
if (!existsSync(logPath)) {
  err('log.md', 'missing');
} else {
  const log = readFileSync(logPath, 'utf8').split('\n');
  const heads = log.filter((l) => l.startsWith('## '));
  if (heads.length === 0) warn('log.md', 'no entries yet');
  for (const h of heads) {
    if (!/^## \[\d{4}-\d{2}-\d{2}\] [a-z-]+ \| .+$/.test(h)) {
      err('log.md', `malformed log heading: "${h.slice(0, 60)}"`);
    }
  }
}

// ---- transcript registry ---------------------------------------------------

for (const t of new Set(registry.match(TRANSCRIPT_ID) || [])) {
  if (!existsSync(join(TRANSCRIPTS, `${t}.md`))) {
    warn('transcripts/README.md', `registered ${t} has no archived file yet`);
  }
}

// ---- report ----------------------------------------------------------------

for (const w of warnings) console.log(w);
for (const e of errors) console.log(e);
console.log(
  `\nwiki lint: ${entryFiles.length} entries, ${errors.length} error(s), ${warnings.length} warning(s)`,
);
process.exit(errors.length > 0 ? 1 : 0);
