# Open Problems

*Maintained, public. Seeded from `objective-logic-roadmap.md` §4.3. Each item
carries a grade — **established** / **claimed** / **conjectural** / **open** —
and a note on which phase it blocks or informs. Gradings marked (†) are
provisional until the Phase 0 spec exists to grade them against.*

## Formalization

- **OP-1. Internal universes for ♭.** Licata–Orton–Pitts–Spitters show a no-go
  for naive internal universes in models with ♭; workarounds exist. What is
  the precise statement of the obstruction as it applies to our Agda skeleton?
  *Grade: established (the no-go); open (best workaround for us). Informs P0.5, Phase 1.*
- **OP-2. Substitution-stability for the elastic modalities.** ℜ, ℑ, & as
  type-formers: which have a known judgmental discipline, which don't?
  *Grade: open. Blocks any Phase 3 formalization; Phase 2 framework decision.*
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

## Wheeler / self-reference (from `notes/bootstrap-stones.md`)

- **OP-13. The Löb question.** Does the "later" modality ▷ (topos of trees,
  guarded recursion) occupy a definite position relative to a cohesion
  ladder? Can Löb induction be consistently adjoined to cohesive HoTT, and
  does any of ♭, ♯, ʃ validate or refute a Löb-type axiom? Includes the
  "modal Lawvere theorem" sub-question: which modalities preserve/reflect
  point-surjectivity. Wheeler's 1989 agenda item Four cites the GL
  literature directly, so this is his exhortation transcribed into our
  setting. *Grade: conjectural. Cross-references the Aufhebung thread;
  candidate Phase 2 side-quest.*
- **OP-14. Wheeler's clue as a theorem.** State Kheyfets–Wheeler's
  "all law from no law" via ∂∂ = 0 as the theorem it wants to be: the
  brane-scan cocycle conditions (Baez–Huerta; Schreiber's L∞ formulation)
  as the nontrivial solutions of d² = 0 constraints on super-Minkowski
  Chevalley–Eilenberg algebras. *Grade: conjectural. Feeds the Phase 1
  essay and Phase 4; cross-references OP-5, OP-11.*
