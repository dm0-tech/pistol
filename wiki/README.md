# The Pistol Wiki — a labeled knowledge base

*Purpose: the third artifact stream. The spec carries the terse mathematics;
the text carries the education; the wiki carries the **build-up of
mathematical ideas and thinking** produced along the way — by humans, by
LLMs, and by their dialogues — in a form that cannot quietly confabulate.
Every entry declares where it came from, how hard it has been checked, and
what would change that.*

## Why labels

LLMs confabulate; so do humans; so, especially, do enthusiastic dialogues
between the two. The wiki's defense is not to exclude unverified material —
the Phase 0 assessment's discipline explicitly welcomes bold conjecture —
but to make its status **machine-legible and auditable**. Three orthogonal
labels, all mandatory:

### Provenance — where the claim came from

| Label | Meaning | Obligation |
|---|---|---|
| `sourced` | Traced to a reliable external source: nLab, textbook, refereed paper, primary text | Citation required; the audit checks the source *exists and says this* |
| `sourced-tier2` | Traced only to Wikipedia, blogs, forums, or lecture notes | Citation required; flagged for upgrade |
| `spec` | Originates in this repo's spec | Spec section reference |
| `llm-derived` | Produced by an LLM with a derivation/argument attached | Transcript pointer required |
| `llm-conjecture` | LLM speculation, no derivation | Transcript pointer required |
| `human-conjecture` | Human speculation | Transcript or note pointer required |
| `folklore` | Widely believed, no located source | Flag inherited from `notes/bootstrap-stones.md` practice |

### Verification — the strongest check actually applied

| Label | Meaning |
|---|---|
| `unverified` | Nothing beyond the author's say-so |
| `llm-checked` | An LLM (ideally fresh-context) has checked the argument |
| `source-audited` | A human or agent confirmed the citation exists and supports the claim |
| `machine-computed` | Reproduced by executable examples (finite models; `examples/`) |
| `spec-proved` | Proved in the spec at checkable standard |
| `red-legged` | Survived fresh-context adversarial review |
| `formally-verified` | Proof assistant (none yet; watch list per N6) |
| `refuted` | A countermodel or source contradiction was found — kept, not deleted |

### Grade — epistemic standing, in the project's frozen vocabulary

`established` / `claimed` / `conjectural` (per `spec/NOTATION.md` and the
open-problems register). A single entry may carry per-claim grades in its
body; the header grade is the weakest one that occurs.

**The three labels are independent.** A claim can be `sourced` yet
`unverified` (nobody checked the citation), or `llm-derived` yet
`machine-computed` (the finite model confirms it). Verification upgrades
never change provenance — the wiki remembers where ideas were born.

## Entry format

One file per entry in `entries/`, named `w-NNNN-slug.md`, following
[`TEMPLATE.md`](TEMPLATE.md). Entries are **atomic**: one claim, reading,
or construction each. Narrative research documents stay in `notes/`; the
wiki holds the claims they contain, one by one, so each can be audited,
upgraded, or refuted independently.

## Lifecycle

```
draft ──► checked ──► promoted (to OPEN-PROBLEMS or spec)
   │           │
   └───────────┴────► disputed ──► disposed (refuted entries are kept and labeled)
```

Flow is one-way upward: the wiki may cite spec and sources; **the spec must
never cite the wiki**. Promotion means the content is re-established at the
destination's own standard, not that the entry is trusted.

## Navigation, log, and lint

- [`INDEX.md`](INDEX.md) — the register: every entry with its three labels
  and status, plus the standing upgrade and attack queues. Read first when
  querying; regenerated whenever entries change.
- [`log.md`](log.md) — append-only chronological record of ingests,
  audits, surveys, and reprocessing. Entries start
  `## [YYYY-MM-DD] <op> | <subject>`, so
  `grep "^## \[" wiki/log.md | tail -5` gives recent history.
- [`transcripts/`](transcripts/README.md) — the registry of dialogue
  transcripts that conjecture entries point into. An entry with provenance
  `llm-*` or `human-conjecture` must name its transcript, and the pointer
  must resolve to an archived file (digest or verbatim).
- [`lint.mjs`](lint.mjs) — deterministic structural lint:
  `node wiki/lint.mjs` checks header fields and vocabularies, ID/filename
  agreement, required sections, index/entry agreement, link integrity,
  transcript resolvability, and log format. Run it before committing any
  wiki change. **A green lint is not verification** — it checks structure,
  never whether a source says what an entry claims; that remains the
  audit's job (below).

## Audit discipline

Periodically (cadence set by the knowledge-base epic), a fresh-context
agent samples entries and attacks: does the citation exist and say what is
claimed? Does the derivation hold? Is the grade honest? Findings use the
red-leg vocabulary (Break / Underpriced / Preference) and are recorded in
the entry's log line. The wiki's value *is* this discipline; without it,
the wiki is a confabulation amplifier.
