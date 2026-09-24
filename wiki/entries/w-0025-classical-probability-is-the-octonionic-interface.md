# Classical probability is the only interface to octonionic possibility (reading of BGW); the classical system in plain sight is open

- **ID:** W-0025
- **Provenance:** sourced (Barnum–Graydon–Wilce; G₂ structure theory) + human-conjecture (the owner's "a classical system in plain sight") + llm-conjecture (the interface reading; the bit loop; the candidates, including colour)
- **Verification:** source-audited (BGW abstract, Def. 4.1, Thm 4.12, Prop. 4.14, arXiv:1606.09331); machine-computed (dimensions only: stabilizer of a unit 8, of an ℍ-slice 6; identifications SU(3), SO(4) recalled); unverified (whether classical composites with 𝔥₃(𝕆) exist; the readings); red-legged
- **Grade:** established (BGW; G₂ facts) / conjectural (everything interpretive)
- **Sources:** Barnum, Graydon, Wilce, *Composites and categories of Euclidean Jordan algebras*, Quantum 4, 359 (2020); Baez, *The octonions* (Bull. AMS 2002); Baez–Huerta, *G₂ and the rolling ball* (Trans. AMS 2014); Dubois-Violette–Todorov and Boyle on 𝔥₃(𝕆) and the Standard Model (recalled, not audited)
- **Transcript:** T-2026-09-23-A
- **Cross-refs:** `notes/shadow-of-the-octonions.md`; OP-24; W-0022; W-0012 (the bit); W-0019 (base/fibre); W-0021; W-0007 (triality); `examples/run.mjs` [W-0025]
- **Status:** draft

## Statement

*Established (BGW, source-audited: abstract, Definition 4.1, Theorem 4.12,
Proposition 4.14).*
- A composite of Euclidean Jordan algebras (Def. 4.1) is an EJA AB with a
  bilinear π : A ⊗ B → AB satisfying three conditions: dynamical
  compatibility, compatibility of the dagger (†), and generation by pure
  tensors.
- Prop. 4.14: if A has an exceptional ideal and B a nontrivial ideal, no
  composite AB exists. So if A is exceptional and AB exists, B is a direct
  sum of one-dimensional EJAs: ℝⁿ with the pointwise product, i.e. the
  functions on n points, i.e. finite classical probability (Cox–Jaynes).
- This is a **necessary condition only**. Whether an exceptional factor
  admits a composite even with a classical partner is *not* settled by
  what has been read. The obvious candidate ⊕ₙ 𝔥₃(𝕆) would have an
  exceptional summand, and the abstract's first clause ("no such
  composite has the exceptional Jordan algebra as a direct summand") may
  exclude it, depending on that clause's scope (Theorem 4.12 is stated for
  simple, nontrivial factors). *Unverified until the paper body is read in
  full.*
- **Caveat either way:** combining with classical systems is the trivial
  case in any theory. The substance is that 𝕆 admits no non-classical
  partner in BGW's category.

*Reading (conjectural; conditional on BGW's category).*
- In the Jordan-algebraic setting of BGW, no quantum (ℝ, ℂ, ℍ) system can
  form a composite with an octonionic one. At most classical inference
  touches it. Outside that setting, for example with minimal tensor
  products in general probabilistic theories, classical correlations with
  anything always exist, and the reading does not transfer automatically.
- If the paper also excludes classical composites, 𝕆 is *fully* isolated
  within BGW's category. That is a stronger version of "possible alone,
  impossible in company".
- The smallest classical partner, ℝ² = functions on S⁰, is the bit that
  survived W-0012.

*Candidates for "the classical system in plain sight" (owner's phrase),
with red-leg caveats.* BGW's classical partners are **finite** ℝⁿ.
Continuous classical data (spacetime points, a point of S⁶) is classical,
but it is not literally a BGW partner, and extending BGW to it is
itself open.
1. Spacetime points: 𝔥₃(𝕆)-bundles (structure group F₄) over a classical
   base, matching W-0019's base/fibre split. Continuous.
2. Superselection labels. Often finite, so the best fit.
3. The measurement record (Bohr's classical apparatus). Finite outcomes.
4. A chosen direction in Im 𝕆. Fixing a unit breaks G₂ to an 8-dimensional
   stabilizer, SU(3) (dimension machine-checked; the identification is
   standard but recalled). Continuous (a point of S⁶).
5. *Demoted:* BGW's "extra classical bit" in the composite of two
   **complex** systems. No 𝕆 is involved, so it says nothing about the
   interface to 𝕆. Listed only as evidence that classical structure
   appears unasked in composites.

*Flagged hard.* Colour confinement read as non-composability ("only
singlets are seen") could be a physical face of this, or numerology on
SU(3) ⊂ G₂. QCD tensors colour in its state space, so the claim could hold
only at the level of the algebra of observables.

## Context

The owner, on reading "can't be combined with any non-classical system":
"opens up a breath-taking possibility... what if we are missing a classical
system in plain sight?" The foil's reminder of what G₂ is:
- Aut(𝕆);
- the stabilizer of φ;
- G₂/SU(3) = S⁶;
- G₂/SO(4) = the 8-dimensional space of ℍ-slices;
- the triality-fixed subgroup of Spin(8);
- split G₂ as the rolling-ball symmetry;
- the holonomy group chosen for the seven extra dimensions in G₂-compactifications of M-theory (a modelling choice, not a fact about G₂).

## What would change the labels

- **First audit:** read BGW's definition of composite and judge whether it
  is physically forced. A weaker, physically acceptable notion admitting
  octonionic partners would drain the reading.
- **Cheapest mathematical test:** do "classical base × 𝔥₃(𝕆) fibre"
  composites with local, gauge-invariant observables satisfy BGW's axioms?
  Could a colour-singlet observable algebra?

## Log

- 2026-09-24 — created by the foil session (T-2026-09-23-A) at the owner's request.
- 2026-09-24 — red-legged. Break: the ⊕ₙ 𝔥₃(𝕆) composite had been filed as established, but BGW give only a necessary condition, and their abstract's first clause may exclude even that composite; downgraded to unverified after reading Def. 4.1, Thm 4.12 and Prop. 4.14. Also fixed: the reading made conditional on BGW's category; continuous labels distinguished from BGW's finite partners; the complex-composite classical bit demoted; the SU(3)/SO(4) identifications marked as dimension-checked; the M-theory holonomy phrasing.
