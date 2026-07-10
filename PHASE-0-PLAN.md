# Phase 0 Plan — Spec and Seed

*Status: **approved** (July 9, 2026) — notation frozen (N1–N4), decisions
N5–N7 in force. Process decisions recorded at approval: public repo at
`dm0-tech/pistol`; licensing CC BY 4.0 for text/spec/notes, MIT for code
(explorer, examples), confirmed with client; lightweight push-to-main until
the project demonstrably needs more. Derived from
`objective-logic-roadmap.md` §6 (Phase 0) and §8 (immediate next actions).*

*Revision (July 2026): formalization descoped from proof-assistant work to
executable examples, per the toolchain survey's findings and the project
owner's call. Proof integrity now rests on three legs: full pen-and-paper
proofs in the spec, adversarial red-leg review before any exit criterion is
declared met, and the educational discipline that proofs must be written to
be self-evidently clear. See N6 and §Honesty mechanism.*

## Objective

Produce the canonical spec that every later artifact must agree with, plus the
first two rungs of the expository text (D2) and the first interactive artifact,
in weeks not months.

**Exit criterion (from the roadmap, verbatim):** "Spec notation frozen; rungs
0–1 checkable by a category-literate reader."

## Deliverables

| ID | Deliverable | Description | Acceptance test |
|---|---|---|---|
| P0.1 | `spec/NOTATION.md` | The frozen notation and conventions register: every modal operator, adjunction ordering, and diagram convention, each with the source it follows and the alternatives rejected | Zero notational choices left implicit; every symbol machine-typeable (Unicode) and used consistently by P0.2–P0.5 |
| P0.2 | `spec/` rungs 0–1 | Precise statement of levels 0 (∅ ⊣ ∗) and 1 (♭ ⊣ ♯): definitions, the Sierpiński topos and sSet worked in full, Aufhebung relation between the rungs stated exactly, every claim graded established/claimed/conjectural | A category-theory-literate reader can verify every proof by hand; the two small models are computed, not sketched |
| P0.3 | `text/` rungs 0–1 draft | D2 treatment of rungs 0–1 in the three-track format (roadmap §3): dialectical motivation, categorical definition, small models, payoff | Track A readable standalone; Track A asserts nothing Track B doesn't prove |
| P0.4 | `explorer/` Sierpiński explorer prototype | Single-file React artifact: objects of Set^→ as clickable function-of-sets diagrams; apply ♭, ♯, ∅, ∗ and watch the images; exhibit the first Aufhebung | A reader who knows only "a function between two sets" can click through discreteness vs codiscreteness |
| P0.5 | `examples/` executable examples | Plain-code computations (no proof assistant) that machine-*compute* the spec's model claims: the modal operators, their images, and the Aufhebung check ♯∅ ≃ ∅ over the Sierpiński topos and small finite graph models — feasible because these models are finite. sSet is covered via truncated/finite fragments only; the examples never claim to compute the infinite case (approved scope call: educate up the ladder, don't push frontiers en route) | Every concrete computation asserted in P0.2's model sections is reproduced by a script; any mismatch is a spec bug filed before exit |
| P0.6 | `OPEN-PROBLEMS.md` | The maintained open-problems list, seeded from roadmap §4.3, each item graded and with its blocking relationship to phases noted | Every §4.3 seed item captured; format supports public issue-style tracking |
| P0.7 | Red-leg review | A fresh-context, authorship-blind adversarial review of the P0.2 spec sections and P0.3 text before the exit criterion is declared met (protocol per §Honesty mechanism) | Review memo produced; every Break fixed; Underpriced items dispositioned; Preferences recorded |

## Work breakdown and order

Dependencies run left to right; items on the same line can proceed in parallel.

```
P0.1 (notation freeze)
  ├─► P0.2 (spec rungs 0–1) ──► P0.3 (text rungs 0–1) ──► P0.7 (red leg)
  ├─► P0.4 (explorer)            [P0.4 needs only rung-0/1 notation]
  └─► P0.5 (examples)            [tracks P0.2's model sections as they land]
P0.6 (open problems) — anytime; finalize after P0.2 so gradings are informed
```

1. **Notation freeze (P0.1, ~half day once research is in).** Decide once:
   shape symbol (ʃ vs ∫ vs Π), infinitesimal-flat symbol (& vs ♭-variant),
   super-rung symbols (⇉/⇝), Aufhebung notation, adjunction ordering
   conventions, and the grading vocabulary (established / claimed /
   conjectural). Research inputs: the July 2026 notation audit across nLab,
   dcct, Shulman 2018, Myers, agda-unimath, and current Schreiber-school
   papers (complete; resolutions in §Decision register).
2. **Spec rungs 0–1 (P0.2, the bulk of the phase).** Level 0: initial/terminal
   opposition in an arbitrary topos, the subobject-classifier remark from
   roadmap §1.1 stated precisely. Level 1: ♭ ⊣ ♯ over Set^→ (Sierpiński) and
   over sSet; the Aufhebung of level 0 by level 1 computed explicitly in both
   models. This is where "checkable by a category-literate reader" bites:
   full proofs, no "clearly".
3. **Explorer prototype (P0.4, parallel).** Single-file React artifact, zero
   infrastructure, per roadmap §5. Scope strictly to Sierpiński: objects,
   the four modal images, the Aufhebung click-through.
4. **Executable examples (P0.5, parallel).** Ordinary code, not a proof
   assistant: objects of Set^→ and small graph categories are finite data, so
   the functors ♭, ♯, ʃ (where defined) and the Aufhebung condition are
   directly computable. Each model computation in the spec gets a script that
   reproduces it. Natural home: the same code that powers the explorer
   (P0.4), factored so the mathematical core is shared.
5. **Text draft (P0.3).** Written after P0.2 stabilizes; the three-track
   discipline is cheaper to apply to settled mathematics.
6. **Open-problems list (P0.6).** Transcribe §4.3 seeds early; grade and
   cross-link after P0.2.
7. **Red leg (P0.7, last).** Dispatched as a fresh subagent (or separate
   session) that receives only the artifacts, never the authoring rationale.
   Gate for declaring the phase done.

## Honesty mechanism

With machine-checked proof descoped, the spec's claims are kept honest by
three reinforcing disciplines:

1. **Proofs written to be checkable.** The P0.2 acceptance test stands: a
   category-literate reader can verify every proof by hand, no "clearly".
   The educational goal and the honesty goal are the same artifact — a proof
   that isn't self-evidently clear fails *both*.
2. **Executable examples (P0.5).** Everything the spec asserts about a
   finite model is computed, not trusted. This catches the class of error
   proof assistants catch cheapest — wrong concrete calculations — without
   the type-theory overhead.
3. **Red legs (P0.7).** Fresh-context, authorship-blind adversarial review
   before any phase exit, per the memo format: **Break** (contradiction or
   wrong proof — blocks exit), **Underpriced** (claim's grade or evidence
   doesn't justify it — fixed before exit), **Preference** (recorded, never
   blocks). The reviewer reconstructs the justification from the artifacts
   alone; where they cannot, that is itself a finding.

## Decision register (Phase 0)

Resolved against the July 2026 notation audit and toolchain survey (see
`spec/NOTATION.md` for the full audit table and sources). Frozen on plan
approval:

| ID | Decision | Options | Resolution |
|---|---|---|---|
| N1 | Shape symbol | ʃ (esh, Shulman/nLab) vs ∫ vs Π | **ʃ (U+0283).** The convention Shulman, Myers, Myers–Riley, and the maintained nLab pages share; one codepoint; avoids the Π (dependent product) and ∫ (integral) collisions. Π/∫ listed once in a synonym table, never used |
| N2 | Infinitesimal-flat symbol | & vs ♭-variant vs ℑ-right-adjoint name | **& (with ℜ ⊣ ℑ ⊣ &).** Unchallenged in every source since dcct. Spec flags the ℜ/ℑ real/imaginary-part collision, and that ♭_dR/ʃ_dR are the *different* de Rham fracture operators — never conflated |
| N3 | Super-rung symbols | ⇉ ⊣ ⇝ vs current Sati–Schreiber usage | **⇉ ⊣ ⇝ ⊣ Rh** (fermionic ⊣ bosonic ⊣ rheonomic) per dcct/nLab/Myers–Riley; the GSS decorator form X^⇝ (bosonic body) admitted as derived notation |
| N4 | Aufhebung notation | Lawvere's level notation vs explicit ⊣-diagrams | **nLab convention:** oppositions □ ⊣ ◯ with unity transform □X → X → ◯X; levels i ≺ j; "j resolves i" as i ≪ j (◯ⱼ□ᵢ = □ᵢ); Aufhebung of level i written ī |
| N5 | Spec source format | Markdown with Unicode vs LaTeX | Markdown-first (repo-native, diffable, nLab-compatible); LaTeX only if a rung's diagrams defeat it. All frozen symbols are single Unicode codepoints, so this is compatible with N1–N3 |
| N6 | Formalization level | Proof-assistant cores (Agda `--cohesion`) vs executable examples vs nothing | **Executable examples only; no proof-assistant dependency.** Revised July 2026, superseding the initial Agda resolution. The toolchain survey showed `--cohesion` is a bolt-on: no native ♯ in any released Agda (postulates until 2.9.0), no ʃ at all, infective flags, dormant upstream. Rather than build on postulates, proofs stay pen-and-paper and honesty comes from the three-leg mechanism (§Honesty mechanism). Proof assistants (Agda 2.9.0, Narya, MTT) stay on the watch list — OP-1/OP-2 remain open as *watch items*, and the roadmap's Phase 2 framework decision becomes "re-assess with evidence, adopt only if the gymnastics have disappeared" |
| N7 | Explorer stack | Single-file React (roadmap §5) | Adopted as stated; no build infrastructure in Phase 0 |

## Toolchain findings (July 2026 survey) — the evidence behind N6

Retained as the record of why proof-assistant work was descoped:

- Agda 2.8.0 (current stable) provides crisp variables (`@♭`) and, with
  `--flat-split`, crisp induction. **♯ is not a native type former** in any
  released Agda — agda-unimath postulates it (self-declared unstable).
  Native `@♯` lands only in the unreleased 2.9.0. **ʃ does not exist at all**
  and would be fully axiomatic.
- `--cohesion` is infective (propagates to importing modules) — an
  architectural choice, not a local one. Cubical + cohesion don't mix yet
  (crisp matching may not compute).
- agda-unimath's `modal-type-theory` namespace has been essentially dormant
  since late 2024.
- Net: rung-2 formalization today means building on unstable postulates with
  hand-crafted judgmental structure — exactly the "applied type theory
  gymnastics" the roadmap's corner-avoidance principles warn about. The
  ladder's mathematics is topos-theoretic (semantics is the spine); the
  finite models are computable without any of this machinery.
- Watch list for re-assessment (Phase 2): Agda 2.9.0's native `@♯`; Narya's
  multimodal roadmap; MTT implementations. For Thread P (later): Lean/Mathlib
  now has `Stoch` as a Markov category — relevant if Thread P ever wants a
  machine-checked synthetic-probability result.

## Roadmap errata — discharged in draft 1.2

The notation audit surfaced two errors in `objective-logic-roadmap.md`, both
now corrected in the draft-1.2 iteration (kept here as the record):

1. **Rung-4 labels (§1 table):** draft 1.1 wrote "⇉ ⊣ ⇝ (fermionic ⊣
   rheonomic)". Per dcct/nLab, ⇝ is the *bosonic* modality; the rheonomy
   modality is Rh, the third member of ⇉ ⊣ ⇝ ⊣ Rh. Physical super-fields are
   modal types for Rh, not ⇝. Corrected.
2. **Attribution (§6 Phase 0 sources, Appendix):** *Commuting Cohesions*
   (arXiv:2301.13780) is by **Myers–Riley**, not Sati–Schreiber (Schreiber is
   acknowledged, not an author). Corrected.

## Out of scope for Phase 0

Rungs 2–4 spec content; all proof-assistant work (descoped per N6; watch-list
only); the §1.1 Wheeler essay (Phase 1); all of Thread P (enters after Phase
1); site/static infrastructure for the explorer.

## Risks specific to this phase

- **Spec scope creep upward.** Rungs 0–1 are the *easy* rungs; the temptation
  is to draft rung 2 "while we're here". Mitigation: the phase table's exit
  criterion mentions only rungs 0–1; anything above goes into notes, not spec.
- **Notation churn after the freeze.** Mitigation: N1–N4 are resolved against
  the audit of what sources actually use, and the spec records the rejected
  alternatives so the question doesn't reopen.
- **Prose proofs drifting from rigor without a type-checker backstop.** This
  is the risk the descoping buys. Mitigation is the three-leg honesty
  mechanism, and one structural rule: any spec claim about a *finite* model
  must have a P0.5 script — no concrete assertion rests on prose alone.
- **Red leg run by the author in disguise.** A review that shares the
  authoring context grades its own homework. Mitigation: the reviewer gets
  file paths and the memo format, never the rationale or this plan's history.

## Proposed repo layout after Phase 0

```
pistol/
├── README.md
├── objective-logic-roadmap.md      # D1, iterated
├── modal-ladder-figure.svg
├── PHASE-0-PLAN.md                 # this file
├── OPEN-PROBLEMS.md                # P0.6
├── spec/
│   ├── NOTATION.md                 # P0.1 — the freeze
│   ├── 00-level-0.md               # P0.2 — ∅ ⊣ ∗
│   └── 01-level-1.md               # P0.2 — ♭ ⊣ ♯, Sierpiński + sSet
├── text/
│   └── rung-0-1-draft.md           # P0.3 — three-track exposition
├── explorer/
│   └── sierpinski.html             # P0.4 — single-file artifact
├── examples/
│   ├── README.md                   # P0.5 — what each script verifies
│   └── ...                         # plain-code model computations
└── reviews/
    └── phase-0-red-leg.md          # P0.7 — memo + triage
```
