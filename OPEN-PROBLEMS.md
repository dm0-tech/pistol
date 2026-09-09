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
