# Wiki log

*Append-only, chronological. Entries start `## [YYYY-MM-DD] <op> | <subject>`
so `grep "^## \[" wiki/log.md | tail -5` gives the recent history. Ops:
seed, ingest, file, survey, audit, reprocess, promote, dispose, wire.*

## [2026-07-14] seed | Session T-2026-07-14-A distilled into notes/internal-language-and-room-for-two.md

The dialectic session: P0.3 criticism → Track H proposal; adjunction
distillate; internal language graded against OP-3; 𝒮 as two-stage topos of
trees (OP-13 sharpened); room-for-two conjecture (OP-16, S17). Wiki did not
yet exist; the note carried the capture.

## [2026-08-05] seed | Wiki scaffold created with four entries (W-0001–W-0004)

Taxonomy (provenance × verification × grade), TEMPLATE, INDEX, transcript
registry. Entries seeded from the July 14 session note. Epic briefs for the
daily gated-epic loop (Epic 1) and the knowledge base (Epic 2) landed
alongside.

## [2026-08-05] survey | llm-wiki landscape surveyed; pistol wiki measured against it

Karpathy gist (April 2026) read in full; ecosystem (microsoft/llmwiki,
Labhund, MemoryWiki, SwarmVault, synthadoc, wikilint, ai-memex-cli)
surveyed; Equational Theories Project taken as the mathematical gold
standard. Verdict and gaps filed as W-0005.

## [2026-08-05] wire | Four gaps closed: AGENTS.md schema, this log, transcript digests, deterministic lint

Per the W-0005 survey: `AGENTS.md` wires the wiki discipline into agent
startup (Epic 2 D1); `wiki/log.md` added; agent-written digests archived
for T-2026-07-14-A and T-2026-08-05-A (verbatim export remains with the
owner); `wiki/lint.mjs` enforces structure deterministically (Epic 2 D6
re-scoped from optional to mandatory-but-tiny).

## [2026-08-05] reprocess | Existing entries W-0001–W-0004 brought under lint

Header/index agreement verified mechanically; transcript pointers now
resolve to archived digests; log lines appended to each entry.
