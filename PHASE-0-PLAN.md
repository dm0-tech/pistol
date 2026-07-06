# Phase 0 Plan — Spec and Seed

*Status: draft for review. Derived from `objective-logic-roadmap.md` §6 (Phase 0) and §8 (immediate next actions).*

## Objective

Produce the canonical spec that every later artifact must agree with, plus the
first two rungs of the expository text (D2) and the first interactive artifact,
in weeks not months.

**Exit criterion (from the roadmap, verbatim):** "Spec notation frozen; rungs
0–1 checkable by a category-literate reader."

## Deliverables

| ID | Deliverable | Description | Acceptance test |
|---|---|---|---|
| P0.1 | `spec/NOTATION.md` | The frozen notation and conventions register: every modal operator, adjunction ordering, and diagram convention, each with the source it follows and the alternatives rejected | Zero notational choices left implicit; every symbol machine-typeable (Unicode) and used consistently by P0.2–P0.4 |
| P0.2 | `spec/` rungs 0–1 | Precise statement of levels 0 (∅ ⊣ ∗) and 1 (♭ ⊣ ♯): definitions, the Sierpiński topos and sSet worked in full, Aufhebung relation between the rungs stated exactly, every claim graded established/claimed/conjectural | A category-theory-literate reader can verify every proof by hand; the two small models are computed, not sketched |
| P0.3 | `text/` rungs 0–1 draft | D2 treatment of rungs 0–1 in the three-track format (roadmap §3): dialectical motivation, categorical definition, small models, payoff | Track A readable standalone; Track A asserts nothing Track B doesn't prove |
| P0.4 | `explorer/` Sierpiński explorer prototype | Single-file React artifact: objects of Set^→ as clickable function-of-sets diagrams; apply ♭, ♯, ∅, ∗ and watch the images; exhibit the first Aufhebung | A reader who knows only "a function between two sets" can click through discreteness vs codiscreteness |
| P0.5 | `formal/` Agda toolchain check | Agda skeleton against agda-unimath's `modal-type-theory` namespace; one toy theorem through `--cohesion` end to end | The toy theorem type-checks in CI; a written note records what the toolchain can and cannot express |
| P0.6 | `OPEN-PROBLEMS.md` | The maintained open-problems list, seeded from roadmap §4.3, each item graded and with its blocking relationship to phases noted | Every §4.3 seed item captured; format supports public issue-style tracking |

## Work breakdown and order

Dependencies run left to right; items on the same line can proceed in parallel.

```
P0.1 (notation freeze)
  ├─► P0.2 (spec rungs 0–1) ──► P0.3 (text rungs 0–1)
  ├─► P0.4 (explorer)            [P0.4 needs only rung-0/1 notation]
  └─► P0.5 (Agda skeleton)       [independent of P0.2 content]
P0.6 (open problems) — anytime; finalize after P0.2 so gradings are informed
```

1. **Notation freeze (P0.1, ~half day once research is in).** Decide once:
   shape symbol (ʃ vs ∫ vs Π), infinitesimal-flat symbol (& vs ♭-variant),
   super-rung symbols (⇉/⇝), Aufhebung notation, adjunction ordering
   conventions, and the grading vocabulary (established / claimed /
   conjectural). Research inputs: notation audit across nLab, dcct, Shulman
   2018, Myers, agda-unimath, and current Sati–Schreiber papers (in flight,
   see §Decision register).
2. **Spec rungs 0–1 (P0.2, the bulk of the phase).** Level 0: initial/terminal
   opposition in an arbitrary topos, the subobject-classifier remark from
   roadmap §1.1 stated precisely. Level 1: ♭ ⊣ ♯ over Set^→ (Sierpiński) and
   over sSet; the Aufhebung of level 0 by level 1 computed explicitly in both
   models. This is where "checkable by a category-literate reader" bites:
   full proofs, no "clearly".
3. **Explorer prototype (P0.4, parallel).** Single-file React artifact, zero
   infrastructure, per roadmap §5. Scope strictly to Sierpiński: objects,
   the four modal images, the Aufhebung click-through.
4. **Agda skeleton (P0.5, parallel).** Confirm the `--cohesion` toolchain does
   what Phase 1 needs *before* Phase 1 depends on it. Output is a go/no-go
   note, not a library.
5. **Text draft (P0.3).** Written after P0.2 stabilizes; the three-track
   discipline is cheaper to apply to settled mathematics.
6. **Open-problems list (P0.6).** Transcribe §4.3 seeds early; grade and
   cross-link after P0.2.

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
| N6 | Formal toolchain for rungs 1–2 | Agda `--cohesion` on agda-unimath vs standalone Agda vs wait for Narya | **Agda 2.8.0 with `--cohesion --flat-split`, building on agda-unimath's `modal-type-theory` namespace, pinned to a release tag.** Rationale and red flags in §Toolchain findings below. Narya watched, not adopted (its multimodal support is aspirational as of 2026); mitten remains a preorder-mode-theory prototype |
| N7 | Explorer stack | Single-file React (roadmap §5) | Adopted as stated; no build infrastructure in Phase 0 |

## Toolchain findings (July 2026 survey)

Facts the P0.5 toy theorem is scoped around:

- Agda 2.8.0 (current stable) provides crisp variables (`@♭`) and, with
  `--flat-split`, crisp induction. **♯ is not a native type former** in any
  released Agda — agda-unimath postulates it (self-declared unstable) and
  proves e.g. ♭(♯A) ≃ ♭A from the postulates. Native `@♯` lands in the
  unreleased 2.9.0. **ʃ does not exist at all** and would be fully axiomatic.
- `--cohesion` is infective (propagates to importing modules) — an
  architectural choice, not a local one. Cubical + cohesion don't mix yet
  (crisp matching may not compute).
- agda-unimath's `modal-type-theory` namespace has the crisp/♭ infrastructure
  and the postulated ♭ ⊣ ♯ adjunction, but has been essentially dormant since
  late 2024; expect to upstream fixes.
- **P0.5 toy theorem, concretely:** (1) with no postulates, the ♭ idempotent
  comonad package — counit, ♭♭A ≃ ♭A, functoriality, crisp identity
  induction, ♭(A × B) ≃ ♭A × ♭B; (2) with agda-unimath's postulated ♯,
  reprove ♭(♯A) ≃ ♭A, using upstream as the oracle.
- For Thread P (later): Lean/Mathlib now has `Stoch` as a Markov category —
  the Phase 2 framework decision should weigh this.

## Roadmap errata (fold into next D1 iteration)

The notation audit surfaced two errors in `objective-logic-roadmap.md`:

1. **Rung-4 labels (§1 table):** the roadmap writes "⇉ ⊣ ⇝ (fermionic ⊣
   rheonomic)". Per dcct/nLab, ⇝ is the *bosonic* modality; the rheonomy
   modality is Rh, the third member of ⇉ ⊣ ⇝ ⊣ Rh. Physical super-fields are
   modal types for Rh, not ⇝.
2. **Attribution (§6 Phase 0 sources, Appendix):** *Commuting Cohesions*
   (arXiv:2301.13780) is by **Myers–Riley**, not Sati–Schreiber (Schreiber is
   acknowledged, not an author).

## Out of scope for Phase 0

Rungs 2–4 spec content; any Agda work beyond the toy theorem; the §1.1 Wheeler
essay (Phase 1); all of Thread P (enters after Phase 1); site/static
infrastructure for the explorer.

## Risks specific to this phase

- **Spec scope creep upward.** Rungs 0–1 are the *easy* rungs; the temptation
  is to draft rung 2 "while we're here". Mitigation: the phase table's exit
  criterion mentions only rungs 0–1; anything above goes into notes, not spec.
- **Notation churn after the freeze.** Mitigation: N1–N4 are resolved against
  the audit of what sources actually use, and the spec records the rejected
  alternatives so the question doesn't reopen.
- **Agda toolchain surprises.** If `--cohesion` can't express the toy theorem,
  that is a Phase 0 *result* (roadmap §4.2(4): the obstruction is a
  first-class output), recorded in P0.5's note and `OPEN-PROBLEMS.md`.

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
└── formal/
    ├── README.md                   # P0.5 — toolchain go/no-go note
    └── ...                         # Agda skeleton
```
