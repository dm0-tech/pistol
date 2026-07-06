# pistol

Formalizing and elucidating the Lawvere–Schreiber program: the modal ladder from
the trivial opposites (∅ ⊣ ∗) up through cohesion, elasticity, and solidity to
the rheonomy principle of D'Auria–Fré supergravity.

The project name is from the roadmap's §1.3 epigraph: *"First God invented
Bayes' rule; then He drew His pistol."*

## Canonical documents

- [`objective-logic-roadmap.md`](objective-logic-roadmap.md) — the roadmap and
  manifesto (deliverable D1): thesis, audience strategy, formalization
  strategy, phase plan, and working bibliography.
- [`modal-ladder-figure.svg`](modal-ladder-figure.svg) — visual companion to
  roadmap §§1.1–1.2: the ladder as a generative ascent.

- [`PHASE-0-PLAN.md`](PHASE-0-PLAN.md) — the Phase 0 ("Spec and seed") work
  breakdown, decision register, and toolchain findings.
- [`OPEN-PROBLEMS.md`](OPEN-PROBLEMS.md) — the maintained open-problems list
  (roadmap §4.3, graded).
- [`spec/NOTATION.md`](spec/NOTATION.md) — the notation and conventions
  register (proposed; freezes on plan approval).

## Where things stand

Phase 0 is planned and awaiting review. The plan resolves the notation
decisions (N1–N4) against a July 2026 audit of the sources, fixes the formal
toolchain (Agda 2.8.0 `--cohesion` on agda-unimath, N6), and scopes the
remaining deliverables: spec rungs 0–1, the three-track text draft, the
Sierpiński explorer, and the Agda toy theorem.
