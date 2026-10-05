# Octonionic possibility composes only classically: no exceptional EJA has a non-classical partner

- **ID:** W-0022
- **Provenance:** sourced (Barnum–Graydon–Wilce) + human-conjecture (the owner's phrase) + llm-derived (the classical-composite construction) + llm-conjecture (reading composition as Cox's product rule for systems)
- **Verification:** source-audited (BGW Definition 4.1, Propositions 4.3, 4.9, 4.14); red-legged
- **Grade:** established (BGW) / conjectural (the reading and the retyping of OP-23)
- **Sources:** Barnum, Graydon, Wilce, *Composites and categories of Euclidean Jordan algebras*, Quantum 4, 359 (2020), arXiv:1606.09331; Jordan–von Neumann–Wigner (1934)
- **Transcript:** T-2026-09-23-A; T-2026-10-05-A
- **Cross-refs:** `notes/shadow-of-the-octonions.md` §3; OP-23; OP-12; W-0015; W-0021
- **Status:** draft

## Statement

The exceptional Jordan algebra 𝔥₃(𝕆) is a coherent single-system
octonionic state space. Under BGW's Definition 4.1 it has no composite with
a nontrivial (non-classical) EJA. It does, however, compose with every
finite classical EJA C = ℝⁿ:

AB = A^⊕n, π(a, (bᵢ)) = (bᵢa)ᵢ.

This is a Definition-4.1 composite. Positivity, the unit and product states
hold componentwise; G(ℝⁿ) is the connected group of positive diagonal
rescalings, acting componentwise with G(A); the adjoint condition is
componentwise; and the tensors a ⊗ eᵢ generate A^⊕n. Conversely, BGW
Proposition 4.9 decomposes any proposed A(ℝⁿ) into n composites Aℝ, while
Proposition 4.3 identifies each Aℝ canonically with A. Hence every such
composite is A^⊕n up to the canonical factorwise isomorphisms.

This is classical control or superselection, not an entangling composite:
the normalized state space is the classical convex sum of n copies of the
state space of A. Proposition 4.14 says these are the only possible
partners when A has an exceptional ideal.

Reading: exceptionality is a **non-classical composition boundary**. This
does not imply that every composable EJA is one of the real, complex or
quaternionic matrix families: special spin factors also exist and can
compose. An ℝ/ℂ/ℍ-only conclusion needs the separate Hilbert/Solèr
assumptions. The selecting requirement here is only that an exceptional
possibility algebra combine with an independent non-classical system, not
associativity of an algebra.

## Context

The first draft's "Cox associativity ⇒ ℍ" was broken by the red leg, since
Cox's associativity is a functional equation on reals. The red leg's
counterexample 𝔥₃(𝕆) led here. A later audit corrected the stronger phrase
"possible alone and impossible in company": BGW themselves note A⊗ℝ ≅ A,
and their direct-sum results force and permit the ℝⁿ construction above.

## What would change the labels

Attack: a physically adequate composable category admitting an exceptional
factor with a non-classical partner under weaker axioms. Upgrade: exhibit a
typed map relating BGW's rank/specialness obstruction to the octonion
associator of W-0021.

## Log

- 2026-09-24 — created by the foil session (T-2026-09-23-A); red-legged by a fresh-context subagent before filing, corrections applied.
- 2026-10-05 — source audit repaired the classical exception: A⊗ℝⁿ exists and is A^⊕n; “impossible in company” narrowed to “no non-classical partner.”
- 2026-10-05 — fresh-context red leg broke the implied ℝ/ℂ/ℍ classification: special spin factors compose. Narrowed to the exceptional-factor no-go; the classical construction survived.
