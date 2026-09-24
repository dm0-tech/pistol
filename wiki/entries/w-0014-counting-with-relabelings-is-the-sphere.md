# Counting possibilities without forgetting relabelings is 𝕊 (Barratt–Priddy–Quillen); π₁ is the sign

- **ID:** W-0014
- **Provenance:** sourced (BPQ) + llm-derived (the 𝕊-vs-ℤ reading)
- **Verification:** source-audited (nLab "stable cohomotopy" states K(FinSet) ≃ 𝕊); machine-computed (Σₙ^ab = ℤ/2, n = 2..6); red-legged
- **Grade:** established (BPQ; π₁𝕊 = ℤ/2 = sign) / conjectural (the descent argument, OP-18)
- **Sources:** Barratt–Priddy (1972); Quillen; Segal, *Categories and cohomology theories* (Topology 1974); nLab, *stable cohomotopy*
- **Transcript:** T-2026-09-23-A
- **Cross-refs:** `notes/no-nothing-no-thing.md` §4; OP-18; `examples/run.mjs` [W-0014]
- **Status:** draft

## Statement

K(FinSet^≃, ⊔) ≃ 𝕊 and Ω^∞𝕊 ≃ ℤ × BΣ_∞⁺. π₀ = ℤ counts, and
π₁ = Σ_∞^ab = ℤ/2 is the sign of a permutation. Reading: ℤ is counting of
isomorphism classes, which uses non-canonical identifications, while 𝕊 is
counting that keeps them. The conjecture (OP-18) is that descent, i.e.
gluing counts along covers of a possibility space, forces the groupoid and
hence 𝕊. That would answer the earlier self-objection "initiality is cheap:
why 𝕊 and not ℤ?".

## Context

The foil's original guess (item 1 of the transcript) flagged this objection as its main weakness.

## What would change the labels

Prove or refute OP-18 on finite covering spaces (count sections; compare iso-class counting with groupoid counting under gluing).

## Log

- 2026-09-24 — created by the foil session (T-2026-09-23-A); red-legged by a fresh-context subagent before filing, corrections applied.
