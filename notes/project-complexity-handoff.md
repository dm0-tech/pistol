# Project Complexity Handoff after the Rung 0 → 1 Push

*Prepared August 12, 2026 for the owner's subsequent complexity review.
Descriptive, not a process decision. It identifies what each mechanism buys
and where the project may be holding itself up.*

## 1. Dependency map

```
primary sources ──► notes / wiki ──► spec ──► text ──► red leg ──► owner gate
                                │       │
                                │       ├──► finite examples
                                │       └──► explorer
                                └──────────► open-problems register
```

The arrows are evidentiary, not merely chronological:

- sources justify cited statements;
- notes synthesize; wiki entries atomize and label;
- spec is canon;
- text teaches canon;
- examples challenge finite calculations but do not prove general theorems;
- the explorer visualizes the shared finite core;
- the red leg attacks the complete artifact without author rationale.

Rung 0→1 currently fits in this graph. Rung 2 will make the `spec → finite
examples` edge much weaker because the central models cease to be finite.

## 2. Artifact inventory by value

| Artifact or mechanism | Primary value | Keep because | Cost / failure mode |
|---|---|---|---|
| `spec/NOTATION.md` | mathematically necessary | prevents symbol and orientation drift | freeze can become ceremony if errata are feared |
| `spec/00-level-0.md`, `01-level-1.md` | mathematically necessary | canon and hand-checkable proofs | proof maintenance and source audit |
| `text/` | pedagogically necessary | the project is educational research, not a paper archive | owner reading is inherently serial |
| Track H | pedagogically valuable | lineage becomes a generator rather than decoration | correspondence can sprawl or be mistaken for evidence |
| `notes/` | research-generative | holds narrative synthesis without changing canon | duplicate retellings |
| atomic `wiki/` | epistemically protective | preserves provenance, grade, attacks, and refutations | entry/index/log overhead can exceed idea value |
| `OPEN-PROBLEMS.md` | mathematically necessary | keeps open claims out of canon | can become a parking lot |
| finite `examples/` | epistemically protective | caught the linear-ladder error class cheaply | verification zoo; false confidence from shared code |
| explorer | pedagogically valuable | makes the diamond and obstruction manipulable | UI maintenance can outrun mathematics |
| P0.7 red leg | epistemically protective | only independent check after proof assistants were descoped | expensive if repeated on every prose increment |
| claim ledgers | epistemically protective | make A→B→source/check traceable | manual duplication across files |
| transcript registry | provenance support | conjectures remain attributable | archival work unrelated to mathematics |
| Epic 1 daily automation | merely procedural until proven | might support the fly/cow practice | largest current risk of gate theater and automation scope creep |
| Epic 2 refinement machinery | protective at scale | audits prevent conjecture laundering | premature at seven entries if treated as a standing bureaucracy |
| branch/PR review | protective and collaborative | records owner gates and diffable proposals | many tiny PRs can fragment reading |

## 3. Current gates and recurring checks

### Gates that protect substance

1. Owner gate on frozen spec and text.
2. Explicit erratum for frozen notation.
3. A fresh-context red leg at phase exit.
4. Proof or reliable citation before a claim enters Track B.

### Cheap recurring checks

```
node examples/run.mjs
node wiki/lint.mjs
```

These should remain because they are deterministic and dependency-free.
Their green result has narrow meaning: finite computations and wiki
structure, respectively.

### Gates not yet shown to earn their cost

- one daily GitHub epic per research atom;
- automated transcript export and fresh grader dispatch per atom;
- a permanent two-week atom queue;
- proof-assistant framework monitoring before the Phase 2 decision point.

The associated epic briefs are proposals, not active obligations.

## 4. Candidate simplifications

These are review questions, not recommendations already adopted.

1. **Keep the two-text layout.** Do not split 0·0, rung 0, and rung 1 into
   more files until navigation rather than authorship becomes the actual
   problem.
2. **One source dossier per rung transition.** Let it contain the strand map
   and analogy atlas; atomize only claims that need independent lifecycle
   management.
3. **Use Track C by a cost/discrimination test.** Mandatory for finite-model
   spec claims; optional elsewhere. A hand-worked example or precise source
   pointer is a valid C endpoint.
4. **Run the red leg at coherent gates.** Authoring checks can happen
   continuously, but authorship-blind review has most value over a stable
   phase-sized artifact.
5. **Do not automate the daily epic before three manual trials.** This is
   already Epic 1's stated rule and should remain a hard brake.
6. **Let wiki volume trigger machinery.** Seven entries need lint and
   provenance, not a large refinement service.
7. **Use one ledger as the source of truth where possible.** The text ledger
   may point to spec ledger identifiers rather than restating proofs and
   grades in full.
8. **Keep the explorer frozen after it teaches the diamond.** A new visual
   artifact should require a new pedagogical obstruction that prose cannot
   expose as cheaply.

## 5. What must not be simplified away

- claim grades and the difference between source fact, theorem, reading,
  and conjecture;
- the one-way wiki→open-problem→spec promotion boundary;
- a countermodel-first habit for analogies;
- exact scope statements on truncated computation;
- independent red review at phase exit;
- the owner's educational judgment, which no mechanical check substitutes
  for.

## 6. Review questions

1. Which duplicated ledgers can become generated views or links?
2. Does every mandatory gate catch a distinct failure class?
3. Is any proposed automation solving observed repetition rather than
   anticipated repetition?
4. Which notes are active research instruments, and which are historical
   records that should stop receiving maintenance?
5. At rung 2, what is the cheapest honest replacement for finite exhaustive
   computation?
6. Can Track H and the analogy atlas share one source-audit cadence without
   turning the public text into a research notebook?

The complexity review succeeds if it shortens the path from source to
checkable mathematics and from mathematics to readable text while preserving
the mechanisms that exposed the Sierpiński counterexample. It fails if it
merely removes visible ceremony while leaving hidden epistemic work to chat
memory.
