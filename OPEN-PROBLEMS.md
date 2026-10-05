# Open Problems

*Maintained, public. Seeded from `objective-logic-roadmap.md` §4.3. Each item
carries a grade — **established** / **claimed** / **conjectural** / **open** —
and a note on which phase it blocks or informs. Gradings marked (†) are
provisional until the Phase 0 spec exists to grade them against.*

## Formalization

- **OP-1. Internal universes for ♭.** Licata–Orton–Pitts–Spitters show a no-go
  for naive internal universes in models with ♭; workarounds exist. What is
  the precise statement of the obstruction? *Grade: established (the no-go);
  open (best workaround). Watch item since the draft-1.2 formalization
  descope — relevant again only if formalization is readopted at the Phase 2
  gate.*
- **OP-2. Substitution-stability for the elastic modalities.** ℜ, ℑ, & as
  type-formers: which have a known judgmental discipline, which don't?
  *Grade: open. Watch item (see OP-1); part of the Phase 2 framework
  re-assessment.*
- **OP-3. Is Aufhebung statable internally?** Or is it irreducibly
  external/2-categorical (mode-theory-level)? *Grade: open. Central to Phase 2.*
- **OP-4. The fermionic modality ⇉ in existing syntax.** Does any current
  type theory accommodate it? *Grade: open. Phase 4; watched via Narya/H.O.T.T.*

## Physics endpoint

- **OP-5. Rheonomy-as-modality coverage.** Beyond the flagship cases, to what
  extent has the modal characterization been checked against D'Auria–Fré?
  The Giotopoulos–Sati–Schreiber super-embedding work is the live frontier.
  *Grade: claimed (†). Phase 4.*

## Conceptual (from roadmap §1.1)

- **OP-6. Where does time live?** Is ʃ-as-ℝ¹-localization the right formal
  home of physical time, or does it belong to the elastic rung's jet/PDE
  structure, or Lawvere's dynamical-systems toposes? *Grade: conjectural. Phase 1 essay.*
- **OP-7. Does the Wheeler reading survive precision?** "It from bit,
  transformationally" as a defensible formal claim rather than a slogan.
  *Grade: conjectural. Phase 1 essay.*
  **S⁴ test (Oct 5, 2026; W-0028).** “Possibility, incarnate” remains
  structural. Mosseri–Dandoloff's oriented Hopf map turns a chosen
  two-qubit state into S⁴ coordinates with
  c²=x₃²+x₄², but this uses a bipartition, complex structure and fibre
  orientation not supplied by bare S⁴. Globally, Hypothesis H supplies a
  twisted cocycle represented by a section of an associated S⁴-bundle,
  considered up to homotopy. An ordinary map χ:X→S⁴ requires a
  trivialization of the twist; flatness alone does not suffice. This and
  the C-field flux character do not yet supply the extra two-qubit data.
  If the target-bundle data alone is to carry the Born reading, its
  twist/equivariance must canonically reduce to a
  subgroup preserving the separable S² and concurrence foliation, making
  the corresponding fibrewise function gauge invariant. Extra physical
  fields could instead supply such a reduction. Until either mechanism is
  exhibited, the reading adds no constraint beyond the geometry.

## Thread P (from roadmap §1.3)

- **OP-8. Is Ω → probability monad an Aufhebung?** In any precise sense — or
  does it attach to the ladder differently, or not at all? *Grade: conjectural.
  Thread P3.*
- **OP-9. Markov-categorical vs quantum-monadic faces.** How do the two
  presentations of forced probability (Fritz/Cho–Jacobs synthetic probability;
  Sati–Schreiber Quantum Monadology) relate formally? *Grade: open. Thread P3.*
- **OP-10. Goyal–Knuth–Skilling, categorically.** Does the complex-amplitude
  forcing derivation admit a clean Markov-categorical or dagger-categorical
  restatement? *Grade: open. Thread P4.*
- **OP-11. One summit or two?** Are the Solèr/Hurwitz terminus of the codomain
  ladder and the Baez–Huerta brane-scan terminus of the geometric ladder
  formally the same fact or merely parallel? *Grade: conjectural — the central
  Thread P research question. Thread P4.*
- **OP-12. The exceptional Jordan algebra's other face.** What, if anything,
  does its possibility-calculus correspond to on the geometric side of the
  summit? *Grade: open. Thread P4.*

## Spec-internal

- **OP-15. The resolution-clause fork. RESOLVED (July 11, 2026).** D0.4
  defines i ≪ j by i ≼ j plus the single nonautomatic clause
  ◯ⱼ□ᵢ ≅ □ᵢ; the question was whether the literature adds the companion
  □ⱼ◯ᵢ ≅ ◯ᵢ — the two variants give different Aufhebung answers in 𝒮
  (`spec/01-level-1.md` §5.4). All three parts are now discharged from
  primary sources:
  1. *Clause question:* order plus one additional clause, unanimously
     (Lawvere 1991 Como / 1992 /
     2009; Kennett–Riehl–Roy–Zaks 2011; Marmolejo–Menni "Level ε"; Menni
     TAC 2019; nLab "Aufhebung"). The companion clause is the nLab's
     separate notion of *co-resolution*, never part of the Aufhebung. Hence
     0̄_𝒮 = the open level (Prop 1.13), consistent with nLab's ⊥-scattered
     result (Aufhebung of ∅ ⊣ ∗ is the ¬¬-subtopos).
  2. *Order question:* sources order levels by subtopos inclusion and state
     equivalence with containment of both modal images (Menni 2019 p. 715;
     Lawvere 1991); D0.3 cites this as *claimed* and never relies on it.
  3. *sSet classification:* verified against Kelly–Lawvere 1989 Thm 4.4
     (original scan) and proved self-containedly via the idempotent ideals
     of Δ (`spec/01-level-1.md` Lemmas 1.12a–b); no exotic level below the
     0-skeletal one; Marmolejo–Menni's "level ε" degenerates to level 0 in
     sSet.
  Residue for the red leg: the D0.4 source note and Lemma 1.12a citation
  were independently re-verified during P0.7. That review also repaired one
  residual defect: way-above's “above” relation is reflexive, so an
  Aufhebung need not be strictly higher (erratum E5). *Grade: resolved.*

## Wheeler / self-reference (from `notes/bootstrap-stones.md`)

- **OP-13. The Löb question.** Does the "later" modality ▷ (topos of trees,
  guarded recursion) occupy a definite position relative to a cohesion
  ladder? Can Löb induction be consistently adjoined to cohesive HoTT, and
  does any of ♭, ♯, ʃ validate or refute a Löb-type axiom? Includes the
  "modal Lawvere theorem" sub-question: which modalities preserve/reflect
  point-surjectivity. Wheeler's 1989 agenda item Four cites the GL
  literature directly, so this is his exhortation transcribed into our
  setting. *Grade: conjectural. Cross-references the Aufhebung thread;
  candidate Phase 2 side-quest.* **Sharpened (July 14, 2026):** 𝒮 is the
  two-stage truncation of the topos of trees (modulo a variance dictionary
  to be pinned), so Ω_𝒮's third truth value "later" is ▷'s two-stage
  shadow. The finite attack was to distinguish the later endofunctor,
  `next`, and its induced Ω-operator in the 2-/3-/4-stage truncations, then
  locate the later structure against the level diamond of
  `spec/01-level-1.md` §4. The endofunctor is not idempotent, so it is no
  level's modality; the question is its typed relation to the open level
  and whether any level modality validates or refutes a Löb-type axiom.
  **Bounded result (August 12, 2026):** independent finite-sieve
  enumeration, the 2/3/4-stage Ω counts, predicate-level later action, and
  exact variance dictionary are implemented in
  `examples/src/guarded.mjs`; a separate object-level witness shows the
  later endofunctor is non-idempotent and kills the naive identification
  with a level modality. The script does not test Löb's rule. The broader
  typed-relation and Löb questions remain open. See
  `notes/internal-language-and-room-for-two.md` §4.
- **OP-14. Wheeler's clue as a theorem.** State Kheyfets–Wheeler's
  "all law from no law" via ∂∂ = 0 as the theorem it wants to be: the
  brane-scan cocycle conditions (Baez–Huerta; Schreiber's L∞ formulation)
  as the nontrivial solutions of d² = 0 constraints on super-Minkowski
  Chevalley–Eilenberg algebras. *Grade: conjectural. Feeds the Phase 1
  essay and Phase 4; cross-references OP-5, OP-11.*
- **OP-16. The room for two.** Is "containing two independent copies of
  one's own possibility-structure" a formal precondition of
  self-representation? The stones: the 240 unit integral octonions are the
  E8 roots (Coxeter 1946); d = 16 admits exactly two even unimodular
  lattices, E8 ⊕ E8 and D16⁺ (Witt 1941), and heterotic consistency forces
  exactly this pair; Lawvere's diagonal requires a point-surjection
  A → Yᴬ — the universe holding a copy of its own self-transformations
  beside itself. The typed question: a fixed-point or valuation-theoretic
  statement in which second-order possibility (valuing the valuations)
  forces the doubling, with d = 16 as an instance rather than a metaphor.
  Cheapest attacks first: the rootless Leech lattice at d = 24; the generic
  doubling at d = 32 (> 10⁷ classes, King 2003) — any formal claim must
  explain why 16 and not 32, or die. The exponentials-vs-orthogonal-sums
  gap now has a **candidate typing (Aug 20, 2026, W-0006 — "the linear
  bridge")**: for dualizable A the internal hom collapses,
  [A, A] ≅ A* ⊗ A — self-transformation-space as *a copy beside a
  co-copy* — with the ⊕-shadow via hyperbolicization (A ⊕ A* with the
  evaluation pairing; self-duality, i.e. unimodularity, collapsing co-copy
  to copy, giving A ⊕ A at exactly E8); and the regime claim that the
  statement is well-posed only after the ladder's linear/quantum turn. New
  attacks inherited with the typing: the D16⁺/Spin(32)/ℤ₂ necessity
  problem, and the dualizability question (which rung first provides
  duals). A proof that no bridge exists remains an acceptable disposal.
  *Grade: conjectural. Thread P4; cross-references OP-11, OP-12, OP-17;
  stone S17, W-0003, W-0006;
  `notes/internal-language-and-room-for-two.md` §5 and
  `notes/direction-review-2026-08-20.md` §4.*
- **OP-17. The triple at the summit (the becoming between the referents).**
  The owner's sharpening of OP-16 (Aug 20, 2026, W-0007): the summit's
  self-reference should *mirror the ladder's own structural setup* — not a
  binary doubling but a ternary form, "the self-reference becomes the
  becoming between the two referents of what has become and what will" —
  with the exceptional trialities hoped to realize it. Candidate typings,
  in order of ownedness: (1) the rung-0 shadow — Ω_𝒮's three-valued bit
  {now, later, never}, the middle value pure deferral (machine-computed,
  spec Prop 0.10); (2) the ladder's engine — every rung an adjoint triple
  with unity □X → X → ◯X, the object suspended between its two modal
  referents; (3) the summit candidate — the division-algebra trilinears
  8ₛ ⊗ 8꜀ → 8ᵥ with {Q, Q} = P (Baez–Huerta), *the becoming as the
  vector* (translation carries what-has-become to what-will-become),
  Spin(8) triality as the S₃ symmetrizing referents and becoming; with the
  sub-conjecture of a symmetrization ladder: asymmetric outer triple →
  ambidexterity (ℤ/2, the linear turn) → triality (S₃). First attacks: E8
  has no outer automorphisms, so the triality must live at the
  Spin(8)/magic-square/𝔥₃(𝕆) level or the phrase is empty; the trilinear
  exists at all four division-algebra rungs (the mirror-of-ascent reading
  survives, summit-exclusivity does not); becoming = translation must
  survive W-0002's variance dictionary; the cheapest full statement is the
  d = 3 real case. *Grade: conjectural. Thread P4; cross-references OP-13,
  OP-14, OP-16; S7, S9, S15; W-0007;
  `notes/direction-review-2026-08-20.md` §5.*

## Foil session (Sept 24, 2026; `notes/no-nothing-no-thing.md`)

- **OP-18. Does descent force 𝕊 over ℤ?** State precisely that counting on
  a site of possibility-spaces which glues along covers must be
  groupoid-valued, so that its group completion is 𝕊 (BPQ) and not ℤ.
  This would turn "𝕊 is initial" from cheap into forced. First test: count
  sections of finite covering spaces. *Grade: conjectural. W-0014.*
- **OP-19. Is reversible becoming forced?** The owner's ontology gives
  pointedness (W-0012). Stability, Σ ⊣ Ω an equivalence, is a second axiom
  (W-0013). Does anything in the ontology, or in Hegel §§176–180, force it,
  or is 𝒮_∗ with the smash product the honest stopping point?
  *Grade: open.*
- **OP-20. Height as the dimension of the possibility field theory.** For
  p-groups, height-n cardinality |BG|ₙ equals the untwisted
  Dijkgraaf–Witten number on Tⁿ (W-0018). Do twisted cardinalities
  reproduce twisted Dijkgraaf–Witten (cocycle ω ∈ Hⁿ(BG; U(1)))? And is the
  owner's ontology the (−1) rung of the same ambidexterity ladder in any
  sense stronger than indexing? This is also where amplitudes would first
  enter. The untwisted cardinalities are *counts* (sectors, classes), with
  no inner product, no |ψ|², no ħ. U(1)-twisting is the first place a phase
  appears, so OP-20 doubles as the "counts, not amplitudes" obstacle
  (session T-2026-09-23-A, obstacle 3). *Grade: conjectural.*

### Obstacles to "reality oozing" (owner's challenge, Sept 24, 2026)

*The owner's test: the geometry should "fly off the page" (Wheeler). It
should yield an output about the world that was not put in, such as a
number, a structure (Born rule, signature, arrow of time) or a checkable
prediction. As of this filing the program yields none. The following name
why. The realistic bar is the precedent where stable homotopy has already
met experiment: Kitaev's periodic table (KO Bott periodicity) and the
Freed–Hopkins classification of invertible phases (Anderson dual of the
sphere).*

- **OP-21. Universality versus particularity (the selection problem).**
  𝕊 is initial, so it maps uniquely into every world and singles out none.
  The more forced the object, the less it says about which world. Physics
  enters Sati–Schreiber at a *choice* (4-cohomotopy, S⁴), and nothing in
  the possibility chain makes a choice. What would: a selection principle,
  plausibly self-reference in Wheeler's sense, typed as a fixed point
  (Lawvere) rather than an initial object. Question: is there a
  fixed-point characterization that picks out a specific cohomotopy degree
  or a specific rung? *Grade: open. Cross-refs OP-7, OP-16, OP-17;
  notes/bootstrap-stones.md.*
  **Update (Sept 24, 2026; `notes/shadow-of-the-octonions.md` §4,
  W-0023).** The owner's answer is "objectivity does the choosing," by
  uniqueness "expressed in the right way," not initiality. The first
  candidate was genericity plus extremality (Hitchin: open orbit of
  3-forms in 7d, G₂-holonomy as critical points). It fails as stated.
  There are two open orbits (compact and split G₂), and random 3-forms land
  in the split one (machine-checked). Positivity (a definite metric) is the
  residual choice. Independently, formal reality/Euclidean positivity
  selects the division-octonion Albert algebra over the split Albert
  algebra: an isotropic split octonion produces a nonzero Hermitian X with
  X²=0. Thus positivity rather than genericity does select compact 𝕆 in
  two precise mathematical settings. The sharpened question is whether
  positivity of plausibility forces either the definite orbit or the
  homogeneous self-dual cone. Flagged as a possible pun until typed.
- **OP-22. Reversible becoming cannot yield actuality.** Stability (A2,
  W-0013) makes coming-to-be and ceasing-to-be mutually inverse. It is
  time-symmetric, so it gives no arrow of time and no irreversible
  measurement. Hegel's becoming "destroys itself" and collapses into
  determinate being (§181), which is irreversible. Conjecture: A2 is the
  right axiom for *possibility* and the wrong one for *actuality*.
  Actuality should be sought where stabilization loses information: the
  unstable pointed world 𝒮_∗, the failure of X → ΩΣX to be an
  equivalence, and the Freudenthal range. Question: is there a typed sense
  in which "measurement" is the unstable-to-stable comparison map, or its
  failure? *Grade: conjectural. Cross-refs OP-6 (where time lives), OP-19,
  W-0013.*
  **Revision (Sept 24, 2026; `notes/shadow-of-the-octonions.md` §6).** The
  owner: "a reversible actuality being some inconvenient glitch to a
  stable eternity." That names structure Hypothesis H already has. Charges
  live in J-twisted *unstable* 4-cohomotopy. The quaternionic Hopf
  fibration is unstable and stabilizes to ν. Stabilization
  π₇S⁴ ≅ ℤ ⊕ ℤ/12 → π₃ˢ = ℤ/24 is not injective. So "stable for
  possibility, unstable for actuality" is existing structure read in the
  project's terms (the owner's reading, not Sati–Schreiber's claim). What
  remains open is typing measurement via the non-injectivity of
  stabilization, and whether reversible dynamics is the glitch's inside
  view.
- **OP-23. Is the exceptional composition obstruction a shadow of the
  octonion associator?** Octonionic single-system possibility exists as
  the exceptional Jordan algebra 𝔥₃(𝕆). Barnum–Graydon–Wilce show that,
  under their Definition 4.1, an EJA with an exceptional ideal has no
  non-classical partner. Finite classical partners do exist and are forced
  to be classical control: 𝔥₃(𝕆)⊗ℝⁿ ≅ ⊕ₙ𝔥₃(𝕆), with no entangled sector.
  This is an **exceptional composition boundary**, not an ℝ/ℂ/ℍ
  classification: special spin factors remain, while the three-fold
  conclusion belongs to the separate Hilbert/Solèr hypotheses. Cox's
  associativity is only a functional equation on real plausibility values
  and does not touch the octonion product.

  Geometrically, 𝕆's associator carves out ℍ-slices (Harvey–Lawson), and
  the M2 of G₂ compactifications lives on associative cycles. But the two
  obstructions are not presently the same theorem. BGW's proof forces a
  nontrivial composite to be special by a rank argument, then contradicts
  the faithful embedding of the exceptional factor. Harvey–Lawson's
  obstruction is the trilinear octonion associator and its zero locus.
  Central question: *is there a natural map from associator data to the
  failure of special embeddability/composability?* Without such a map,
  “same obstruction” is only a common-cause conjecture. *Grade: open.
  Cross-refs OP-11, OP-12, W-0015, W-0021, W-0022.*
- **OP-24. The classical system in plain sight.** Barnum–Graydon–Wilce,
  Prop. 4.14: if an exceptional (octonionic) Jordan factor has a
  composite, the partner is a direct sum of ℝ, i.e. finite classical
  probability. Such composites exist and are unique up to canonical
  factorwise isomorphisms: A⊗ℝⁿ ≅ A^⊕n (Definition 4.1; Propositions 4.3
  and 4.9). Their states are classical distributions over labels with an
  A-state conditional on each label; they add no entangled sector. The
  substance is that 𝕆 composes with nothing non-classical within BGW's
  Jordan-algebraic category. The owner's question: *what if we are
  missing a classical system in plain sight?* Candidates:
  - spacetime points (𝔥₃(𝕆)/F₄-bundles over a classical base; cf. W-0019);
  - superselection labels;
  - the measurement record;
  - a chosen direction in Im 𝕆 (fixing one breaks G₂ to SU(3)).
  BGW's “extra classical bit” in complex–complex composites is contextual
  evidence that classical structure may appear in their tensor products,
  not a candidate octonionic interface.

  Reading: classical probability is the only interface to octonionic
  possibility, and its smallest nontrivial instance is the bit S⁰ that survived
  W-0012. A colour-confinement reading ("only singlets are seen" as
  non-composability) is flagged as possibly numerological. Its test lives
  at the level of the algebra of observables, not states. First move: judge
  which BGW axioms are physically forced and whether a weaker acceptable
  composite admits a non-classical exceptional partner. *Grade:
  established (classical composite and no-go) / conjectural (reading).
  W-0025; cross-refs OP-12, OP-23, W-0022.*
  **Addendum (Sept 24, 2026; W-0026).** Coxeter's picture shows the same
  SU(3) at root level. G₂'s 12 roots form a hexagram. The long hexagon is
  A₂ (SU(3)) and the short one is 3 ⊕ 3̄, so 14 = 8 + 6 and, on Im 𝕆,
  7 = 1 + 3 + 3̄. The 1 is the fixed direction: classical *data*, but a
  point of S⁶, not a finite BGW partner. Extending BGW to continuous
  classical labels is itself part of this problem. Machine-checked, except
  the 7-dimensional weight statement, which is recalled.

