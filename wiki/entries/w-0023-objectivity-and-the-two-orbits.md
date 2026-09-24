# Objectivity by genericity does not pick 𝕆: two open orbits of 3-forms, and random forms land in split G₂; positivity is the residual choice

- **ID:** W-0023
- **Provenance:** sourced (Hitchin; Bryant) + human-conjecture ("objectivity does the choosing") + llm-conjecture (positivity of plausibility ↔ definiteness)
- **Verification:** machine-computed (stab(φ) = Der(𝕆), dimension 14; definite B for φ; 40/40 random forms in the split orbit, 660/660 in exploratory sampling); source-audited (Hitchin §7.1, Theorem 19, from arXiv HTML); Bryant's two-orbit statement not audited from the text; red-legged
- **Grade:** established (orbits; Hitchin) / conjectural (the positivity link)
- **Sources:** Hitchin, *The geometry of three-forms in six and seven dimensions*, arXiv:math/0010054, §7.1 and Theorem 19; Bryant, *Some remarks on G₂-structures*, arXiv:math/0305124
- **Transcript:** T-2026-09-23-A
- **Cross-refs:** `notes/shadow-of-the-octonions.md` §4; OP-21; W-0012; `examples/run.mjs` [W-0022]
- **Status:** draft

## Statement

Λ³(ℝ⁷)* has two open GL(7)-orbits, with stabilizers compact G₂ = Aut(𝕆)
and split G₂. B(u,v)·vol = ι_uφ∧ι_vφ∧φ is definite exactly on the compact
one. Random integer 3-forms land in the split orbit (sampling-dependent,
not a canonical measure). So genericity does not select 𝕆, and positivity
does. Hitchin's extremality (Theorem 19) also presupposes positivity and a
closed manifold. Open question: does positivity of plausibility force the
definite orbit? That is currently a verbal link.

## Context

The first candidate for OP-21 ("objectivity = genericity + extremality picks 𝕆") was broken by the red leg.

## What would change the labels

Upgrade: a functor from positive plausibility structures to definite G₂-structures. Refute: show split-𝕆 supports an equally consistent possibility calculus.

## Log

- 2026-09-24 — created by the foil session (T-2026-09-23-A); red-legged by a fresh-context subagent before filing, corrections applied.
