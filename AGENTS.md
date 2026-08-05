# AGENTS.md — schema and standing instructions for agents in pistol

*Read this first, every session. This is the wiki pattern's schema layer:
the file that makes an agent a disciplined maintainer of this project
rather than a generic assistant. Co-evolved with the owner; propose changes
by PR, don't just accumulate habits.*

## What this project is

Formalizing and elucidating the Lawvere–Schreiber modal ladder (see
`README.md` and `objective-logic-roadmap.md`). The project runs three
coupled artifact streams plus process:

| Layer | Directory | Nature | Who gates it |
|---|---|---|---|
| Spec | `spec/` | Canon: terse, checkable mathematics; frozen notation | Owner gate; never edit casually |
| Text | `text/` | The three-track education (A story / B math / C compute) | Owner gate |
| Notes | `notes/` | Narrative research documents, graded claims | Lightweight |
| Wiki | `wiki/` | **Atomic labeled claims** — the knowledge base | This file's rules |
| Examples | `examples/` | Machine-computes every finite-model spec claim | `node examples/run.mjs` must stay green |
| Epics | `epics/` | Gate-A briefs for standing work | Owner approval (`approved-A`) before execution |

Frozen and not re-litigated in passing: the notation register
(`spec/NOTATION.md`, decisions N1–N7), the grade vocabulary
(established / claimed / conjectural / open), and the plan's exit criteria
(`PHASE-0-PLAN.md`). Corrections to frozen artifacts go through recorded
errata, not silent edits.

## The wiki discipline (the load-bearing part)

1. **Intake rule.** Any session — yours included — that produces a claim,
   construction, or reading worth keeping files it as a wiki entry via
   `wiki/TEMPLATE.md`, adds its `wiki/INDEX.md` row, and appends a
   `wiki/log.md` line. Narrative goes to `notes/`; the atomic claims inside
   it go to the wiki. Chat residue is not a storage layer.
2. **Three labels, always, independently.** Provenance (where it came
   from), verification (strongest check actually applied), grade
   (epistemic standing). Taxonomy in `wiki/README.md`. Verification
   upgrades require evidence links (script run, source quote, spec
   section) and never change provenance.
3. **Provenance is checkable.** Entries with provenance `llm-*` or
   `human-conjecture` must cite a transcript in `wiki/transcripts/` that
   exists. `sourced` claims must carry citations; the audit verifies the
   source exists *and says what is claimed*.
4. **One-way flow.** The wiki may cite the spec; **the spec never cites
   the wiki**. Never promote an LLM-generated derivative into a source
   layer. Promotion (wiki → `OPEN-PROBLEMS.md` → spec) means
   re-establishment at the destination's standard.
5. **Refutations are results.** Refuted or disposed entries are relabeled
   and kept, never deleted.
6. **Lint before commit.** `node wiki/lint.mjs` must pass whenever you
   touch `wiki/`. The lint checks structure deterministically (headers,
   vocabularies, index agreement, link and transcript integrity, log
   format); semantic honesty stays with humans and red legs — do not
   treat a green lint as verification.
7. **Log format.** `wiki/log.md` entries start
   `## [YYYY-MM-DD] <op> | <subject>` — ops: `seed`, `ingest`, `file`,
   `survey`, `audit`, `reprocess`, `promote`, `dispose`, `wire`. The log
   is append-only; read its tail to learn what happened recently.

## Honesty mechanism (project-wide)

- Finite-model claims never rest on prose: they get a script in
  `examples/` (run `node examples/run.mjs`; 26+ checks, all green).
- Red legs are **authorship-blind**: a reviewer receives artifacts only —
  never the rationale, the brief, or this session's history. Findings use
  Break / Underpriced / Preference. Do not grade your own homework and
  call it review.
- LLMs (you) are conjecture engines here: propose boldly, label
  immediately, demand a typed statement before promoting, seek the
  cheapest countermodel before confirming examples. The happy accident is
  allowed to originate anywhere; its justification cannot remain an
  accident.

## Session protocol

1. Read `README.md`, this file, and the tail of `wiki/log.md`.
2. Read the docs your task touches (spec work → `spec/NOTATION.md` first;
   process work → `PHASE-0-PLAN.md` and the epic briefs).
3. Work. File claims as you go (intake rule), not in a terminal dump.
4. Before finishing: lint the wiki if touched, run the examples if
   touched, append the log line, update `INDEX.md`, commit in logical
   units, and leave gated things (spec, text, plan, epic approval) as
   proposals for the owner.
