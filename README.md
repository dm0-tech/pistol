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

## Where things stand

Phase 0 ("Spec and seed") has not started. Per roadmap §8, the immediate next
actions are:

1. Fix the spec's table of contents and notation.
2. Write rungs 0–1 of the spec (∅ ⊣ ∗ and ♭ ⊣ ♯, with the Sierpiński topos
   and sSet worked in full).
3. Build the Sierpiński explorer prototype (single React artifact).
4. Set up the Agda skeleton against agda-unimath's `modal-type-theory`
   namespace and confirm the `--cohesion` toolchain on a toy theorem.
5. Draft the open-problems list from the seeds in roadmap §4.3.
