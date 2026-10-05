# Genericity does not pick 𝕆; definiteness and formal reality independently select the compact octonions

- **ID:** W-0023
- **Provenance:** sourced (Hitchin; Bryant; Jordan–von Neumann–Wigner) + llm-derived (split-Albert formal-reality witness) + human-conjecture ("objectivity does the choosing") + llm-conjecture (positivity of plausibility ↔ definiteness/formal reality)
- **Verification:** machine-computed (stab(φ) = Der(𝕆), dimension 14; definite B for φ; 40/40 random forms in the split orbit, 660/660 in exploratory sampling); source-audited (Hitchin §7.1 and Theorem 19; Euclidean-Jordan classification); llm-checked (split-Albert witness); red-legged
- **Grade:** established (two mathematical positivity selections) / conjectural (the plausibility bridge)
- **Sources:** Hitchin, *The geometry of three-forms in six and seven dimensions*, arXiv:math/0010054, §7.1 and Theorem 19; Bryant, *Some remarks on G₂-structures*, arXiv:math/0305124; Jordan–von Neumann–Wigner, *On an algebraic generalization of the quantum mechanical formalism* (1934); Barnum–Graydon–Wilce, *Composites and categories of Euclidean Jordan algebras* (2020), §3
- **Transcript:** T-2026-09-23-A; T-2026-10-05-A
- **Cross-refs:** `notes/shadow-of-the-octonions.md` §4; OP-21; W-0012; `examples/run.mjs` [W-0022]
- **Status:** draft

## Statement

Λ³(ℝ⁷)* has two open GL(7)-orbits, with stabilizers compact G₂ = Aut(𝕆)
and split G₂. B(u,v)·vol = ι_uφ∧ι_vφ∧φ is definite exactly on the compact
one. All random integer forms in the recorded box samples landed in the
split orbit; this is sampling-dependent and not a canonical measure.
The existence of two open orbits—not the sample—shows that genericity
alone does not select compact 𝕆.

Two precise positivity requirements do:
1. **Stable-form geometry:** requiring Bφ to be positive definite selects
   the compact G₂ orbit; the split orbit induces signature (3,4).
2. **Possibility algebra:** requiring a Euclidean/formally-real Jordan
   algebra selects the division-octonion Albert algebra over its split
   form. Indeed, choose nonzero x in the split octonions with N(x)=0. The
   Hermitian matrix X with x and x̄ in one off-diagonal 2×2 block is
   nonzero but X²=0, directly violating formal reality.

Hitchin's extremality (Theorem 19) likewise presupposes a positive form and
a closed manifold. What remains open is not whether mathematical
positivity selects compact 𝕆—it does twice—but whether positivity of
plausibility forces either definiteness or formal reality. That is
currently a verbal link between distinct ordered structures.

## Context

The first candidate for OP-21 ("objectivity = genericity + extremality picks 𝕆") was broken by the red leg.

## What would change the labels

Upgrade: a functor from positive plausibility structures to definite
G₂-structures or Euclidean Jordan algebras. Refute the proposed bridge by
showing that the same positive plausibility structure maps naturally to
both compact and split forms. The established selections themselves would
be refuted by a split Albert algebra that is formally real, or a split-G₂
stable form inducing a definite metric.

## Log

- 2026-09-24 — created by the foil session (T-2026-09-23-A); red-legged by a fresh-context subagent before filing, corrections applied.
- 2026-10-05 — separated two established positivity selections (definite stable form; formally-real Albert algebra) from the still-untyped plausibility bridge.
- 2026-10-05 — fresh-context red leg confirmed the split-Albert witness and narrowed the random-form sentence to the recorded samples.
