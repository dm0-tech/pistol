# Jaynes's transformation-group priors are orbit-simplex counting in the Burnside ring; Carlsson makes it cohomotopy of BG

- **ID:** W-0017
- **Provenance:** sourced (Segal; Carlsson) + llm-conjecture (the bridge to Hypothesis H)
- **Verification:** machine-computed (invariant-vector dimension = #orbits = Burnside average, small cases); llm-checked
- **Grade:** established (substrate; the finite statement is trivial) / conjectural (the bridge)
- **Sources:** Jaynes, *Prior probabilities* (IEEE Trans. SSC 1968); Segal, *Equivariant stable homotopy theory* (ICM 1970); Carlsson, *Equivariant stable homotopy and Segal's Burnside ring conjecture* (Annals 1984)
- **Transcript:** T-2026-09-23-A
- **Cross-refs:** `notes/no-nothing-no-thing.md` §6; OP-8; `examples/run.mjs` [W-0017]
- **Status:** draft

## Statement

G-invariant priors on a finite G-set X form the simplex on the orbits of X,
which are the transitive summands of [X] ∈ A(G) = π₀ of the G-equivariant
sphere. Carlsson: π⁰_s(BG₊) ≅ A(G)^∧_I, so stable cohomotopy of BG is
completed G-counting. Caveat: Hypothesis H uses unstable 4-cohomotopy, and
Carlsson is about stable degree 0.

## Context

Jaynes's own method for priors is invariance under a transformation group; this files where that lands in stable homotopy.

## What would change the labels

Upgrade: a statement in which Jaynes's continuous-group priors (not only finite G-sets) arise from equivariant 𝕊.

## Log

- 2026-09-24 — created by the foil session (T-2026-09-23-A); red-legged by a fresh-context subagent before filing, corrections applied.
