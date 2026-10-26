#!/usr/bin/env node
// Regression test for INDEX/header agreement. The real checkout is read-only;
// the deliberately stale row lives only in a disposable copy.

import assert from 'node:assert/strict';
import {
  cpSync, mkdtempSync, readFileSync, rmSync, writeFileSync,
} from 'node:fs';
import { tmpdir } from 'node:os';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';
import { spawnSync } from 'node:child_process';

const wiki = dirname(fileURLToPath(import.meta.url));
const root = dirname(wiki);
const temp = mkdtempSync(join(tmpdir(), 'pistol-wiki-lint-test-'));

try {
  cpSync(wiki, join(temp, 'wiki'), { recursive: true });
  for (const dir of ['spec', 'notes', 'reviews', 'text', 'epics', 'examples']) {
    cpSync(join(root, dir), join(temp, dir), { recursive: true });
  }
  for (const file of [
    'OPEN-PROBLEMS.md', 'README.md', 'AGENTS.md',
    'objective-logic-roadmap.md', 'PHASE-0-PLAN.md', 'PHASE-0-ASSESSMENT.md',
  ]) {
    cpSync(join(root, file), join(temp, file));
  }

  const indexPath = join(temp, 'wiki/INDEX.md');
  const index = readFileSync(indexPath, 'utf8');
  const stale = index.replace(
    '| sourced | source-audited | established (the mathematics); the *reading* is exposition, not a claim | checked | Track H;',
    '| folklore | unverified | conjectural | disputed | Track H;',
  );
  assert.notEqual(stale, index, 'W-0001 control row was not found');
  writeFileSync(indexPath, stale);

  const result = spawnSync(
    process.execPath,
    [join(temp, 'wiki/lint.mjs')],
    { encoding: 'utf8' },
  );
  assert.notEqual(result.status, 0, result.stdout + result.stderr);
  assert.match(
    result.stdout,
    /ERROR INDEX\.md: labels for W-0001 do not exactly match entry headers/,
  );
  console.log('PASS  stale INDEX labels are rejected');
} finally {
  rmSync(temp, { recursive: true, force: true });
}
