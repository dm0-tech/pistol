# Bootstrap Stones: Wheeler's Self-Reference Exhortation, and Where to Look

*Research note, July 2026. Status: reference material — everything in §1 is
sourced to primary texts (folklore risks flagged); every entry in §2 carries
an honest contact assessment; §3 states the cross-references to this project's
threads as precise questions, graded per spec discipline. Not spec; feeds
`OPEN-PROBLEMS.md` and the Phase 1 essay.*

## 1. What Wheeler actually asked for

The exhortation is not folklore; it is agenda item **Four** of "Information,
Physics, Quantum: The Search for Links" (1989), §19.6 "Agenda", verbatim:

> "Survey one by one with an imaginative eye the powerful tools that
> mathematics — including mathematical logic — has won and now offers … and
> for each such technique work out the transcription into the world of bits.
> **Give special attention to one and another deductive axiomatic system which
> is able to refer to itself [159], one and another self-referential deductive
> system.**"

His reference [159] is **C. Smoryński, *Self-Reference and Modal Logic*
(Springer, 1985)** — the provability-logic literature. Wheeler's own citation
for "self-referential deductive system" is the modal logic GL. For a modal
program, this is the most consequential sentence in the paper: Wheeler's
pointer lands inside our subject matter.

Item **Five** continues: "From the wheels-upon-wheels-upon-wheels evolution of
computer programming dig out, systematize and display every feature that
illuminates the level-upon-level-upon-level structure of physics."

The load-bearing role of self-reference (§19.3): physics should be
"foundation-free as a logic loop, the closed circuit of ideas in a
self-referential deductive axiomatic system," with infinite regress refused —
"To endlessness no alternative is evident but loop, such a loop as this:
Physics gives rise to observer-participancy; observer-participancy gives rise
to information; and information gives rise to physics."

**The frame (1989, §19.1):** three questions (How come existence? How come
the quantum? How come "one world"?), four no's (**no tower of turtles, no
laws, no continuum, no space/no time**), five clues (**the boundary of a
boundary is zero**, no question? no answer!, the super-Copernican principle,
"consciousness", more is different).

**Self-synthesis (IBM J. Res. Dev. 32, 1988):** the world as "a
self-synthesizing system of existences, built on observer-participancy";
postulating either "an inexplicable something on which to build" or infinite
regress are "twin rocks of destruction"; the only course between them is "a
closed circuit." On the mathematics: "we do not even know what the
mathematics is, except that it cannot but be based on the integers and
capitalize, surely, on information theory and on … 'More is different.'"

**∂∂ = 0 as origin of law (1989 §19.4; 1988 "Austerity"):** "The boundary of
a boundary is zero. This central principle of algebraic topology, identity,
triviality, tautology though it is, is also the unifying theme of Maxwell
electrodynamics, Einstein geometrodynamics and almost every version of modern
field theory… inspires hope that we will someday … **derive everything from
nothing, all law from no law**."

**The pregeometry episode (folklore-flagged):** MTW *Gravitation* §44.4–44.5
(1973) proposed pregeometry as "the calculus of propositions" — physics
emerging "from the statistics of very long propositions"; by Patton–Wheeler
1975 and "Pregeometry: Motivations and Prospects" (1980) he had retreated,
concluding pure logic alone could not found physics and installing
observer-participancy instead. *Caveat: the retreat is documented secondhand
(Meschini–Lehto–Piilonen 2005 §5.3); no single primary "I retract" sentence
was located. The Gödel anecdote (Wheeler asking Gödel about
incompleteness-vs-uncertainty) exists in two versions — Wheeler's "threw me
out of his office" dramatization (via Holt) vs Bernstein's sober
changed-the-subject account (Quantum Profiles, 1991).*

## 2. The stones

Each entry: statement, citation, its self-referential character, and an
honest contact assessment with (a) the modal/Aufhebung thread or (b) the
exceptional-geometry/Thread-P summit. "None apparent" means exactly that.

### 2.1 Mathematics and logic

- **S1. Lawvere's fixed-point theorem** (keystone). In any cartesian closed
  category, a point-surjective φ : A → Yᴬ forces every endomorphism of Y to
  have a fixed point; contrapositive instances are Cantor, Russell, Tarski,
  Gödel's diagonal lemma, halting, and the Y combinator. (Lawvere 1969, LNM
  92; survey Yanofsky, BSL 9 (2003), arXiv:math/0305282.) *Contact: maximal
  and by construction — holds in every topos on the ladder; the program's
  author is the theorem's author.*
- **S2. Löb's theorem and provability logic GL.** □(□P → P) → □P; GL is
  arithmetically complete for PA-provability (Solovay 1976) and proves the
  de Jongh–Sambin explicit fixed-point theorem. The same axiom reappears as
  **Löb induction for the "later" modality ▷** in guarded type theory
  (Nakano 2000; Birkedal et al., topos of trees, LMCS 2012; guarded cubical,
  arXiv:1606.05223; clocked TT, LICS 2017). *Contact: the strongest modal
  contact on the list — ▷ is a live modality in current type theory,
  validated in a presheaf topos. This is the literature Wheeler's [159]
  points at, matured.*
- **S3. Kleene's second recursion theorem / Rogers / quines.** Every
  computable program transformation has a program that is its own fixed
  point. (Kleene 1938; Rogers 1967.) *Contact: modest — Lawvere's theorem
  internal to the effective topos (realizability).*
- **S4. Scott's D∞ ≅ [D∞ → D∞].** A nontrivial space isomorphic to its own
  function space; reflexive objects in a CCC. (Scott 1972, LNM 274.)
  *Contact: reflexive objects are exactly what satisfy Lawvere's hypothesis;
  synthetic guarded domain theory rebuilds D∞ via ▷ — same stone as S2.*
- **S5. Final coalgebras, coinduction, anti-foundation; Lambek's lemma.**
  Initial algebras/final coalgebras are fixed points of their functor
  (Lambek 1968); Aczel's AFA (1988) legitimizes Ω = {Ω}; coinduction as
  observation-driven self-specification. *Contact: guarded fixed points
  ▷X → X implement final coalgebras — one stone with S2.*
- **S6. Universe self-containment and stratification.** Type : Type is
  inconsistent (Girard 1972; Hurkens 1995); the escape is the cumulative
  hierarchy U₀ : U₁ : ⋯ (HoTT Book §1.3). *Contact: direct — universe
  hierarchies are the ambient structure of modal HoTT, and
  stratification-as-escape is structurally cognate to Aufhebung.*

### 2.2 Exceptional and geometric self-reference

- **S7. Spin(8) triality.** The S₃ outer automorphisms permute 8ᵥ, 8ₛ, 8꜀ —
  uniquely among simple Lie groups, "what acts" and "what is acted on" are
  exchangeable; the seed of octonion multiplication and, via Baez–Huerta
  (arXiv:0909.0551, 1003.3436), of supersymmetry in d = 3, 4, 6, 10.
  *Contact: direct — the brane scan is Thread P's own terminus.*
- **S8. E8: adjoint = smallest fundamental; E8 lattice self-duality.** The
  group whose defining action is on its own Lie algebra; the unique even
  unimodular lattice in d = 8. (Adams 1996; Conway–Sloane.) *Contact: direct
  with the summit; whether adjoint=fundamental admits a fixed-point-theoretic
  formulation is open.*
- **S9. Exceptional Jordan algebra / 𝕆P².** 𝔥₃(𝕆) admits no faithful
  associative representation — it exists only as itself; F4/E6 as its
  automorphism/collineation groups; the Freudenthal–Tits magic square as a
  two-input bootstrap (algebra ⊗ algebra → exceptional group).
  (Jordan–von Neumann–Wigner 1934; Barton–Sudbery, math/0203010.)
  *Contact: direct — this is OP-12's object.*
- **S10. Monstrous moonshine.** V♮'s graded dimensions are the j-function's
  coefficients; Borcherds 1992. *Contact: decorative for this project;
  tenuous lattice-theoretic kinship with S11 only.*
- **S11. Self-dual lattices and codes in string consistency.** Modular
  invariance of the heterotic string forces the d = 16 even self-dual
  lattices — E8 × E8 or Spin(32)/ℤ₂ (Gross–Harvey–Martinec–Rohm 1985);
  Narain lattices likewise. *Contact: genuine — the one place where a
  self-duality condition literally forces E8 into physics.*
- **S17. Room for two: the even unimodular doublings.** The unit integral
  octonions (Coxeter–Dickson maximal order) are the 240 roots of E8
  (Coxeter 1946); E8 is the unique even unimodular lattice in d = 8
  (Mordell 1938) and the densest packing there (Viazovska 2017). Dimension
  16 is the first with room for two copies: exactly two even unimodular
  lattices, E8 ⊕ E8 and D16⁺ (Witt 1941) — isospectral, non-isometric
  (Milnor 1964) — and heterotic consistency forces exactly this pair (S11).
  Independently, the amplitudes double copy (KLT 1986; BCJ 2008) exhibits
  gravity as the "square" of gauge theory. In d = 24 the densest lattice
  (Leech) has no roots; in d = 32 the doubling is generic (King 2003 mass
  formula: > 10⁷ classes). *Contact: direct with Thread P's terminus
  (OP-11/OP-12) via the integral-octonion identification; whether
  "containing two copies of one's own possibility-structure" has a
  fixed-point-theoretic formulation is OP-16's question — see
  `internal-language-and-room-for-two.md` §5.*

### 2.3 Physics bootstraps

- **S12. S-matrix bootstrap → conformal bootstrap.** Physics as the fixed
  point of its own consistency conditions; the 3d Ising island
  (arXiv:0807.0004; 1203.6064; review 1805.04405). *Contact: none apparent
  formally; the existence proof that "self-consistency selects the physics"
  can be made quantitative.*
- **S13. Wheeler–Feynman absorber theory; Novikov self-consistency.**
  Global self-consistency as a selection principle. *Contact: none apparent.*
- **S14. It from qubit (entanglement/tensor networks/HaPPY code).**
  Bootstrap-flavored but not a fixed point: geometry reconstructed from
  consistency of entanglement data, not generated by a diagonal argument.
  *Contact: none apparent formally; conceptually adjacent to Wheeler only.*
- **S15. ∂∂ = 0 as the origin of law.** Wheeler's own candidate tautology
  (MTW §15.3; Kheyfets–Wheeler, IJTP 25 (1986)): Bianchi identities and
  charge conservation as expressions of nilpotency. But d² = 0 is *exactly*
  the defining identity of the Chevalley–Eilenberg algebras / FDAs
  (L∞-algebras) on which D'Auria–Fré rheonomic supergravity and the
  brane-scan cocycles are built. *Contact: strong — Wheeler's first clue is,
  unnoticed by him, the algebraic backbone of the ladder's summit.*
- **S16. RG fixed points / universality.** Physics at a fixed point of a
  self-map on theory space (Wilson 1971). *Contact: none apparent formally;
  conceptual template.*
- **Informal (one line each):** Hofstadter's strange loops — motivational,
  not formal. Maturana–Varela autopoiesis — suggestive of coalgebraic
  formalization, none canonical; metaphorical here.

## 3. Convergence candidates — the precise questions

Cross-referenced to project threads; these are the stones worth turning
first. All grades: **conjectural** unless noted.

1. **The Löb question (S2+S4+S5 ↔ modal ladder).** Does the later modality ▷
   occupy a definite position relative to a cohesion ladder? Can Löb
   induction be consistently adjoined to cohesive HoTT, and does any of
   ♭, ♯, ʃ validate or refute a Löb-type axiom? Sharpened by §1: Wheeler's
   own citation for self-reference is the GL literature, so this question
   *is* agenda item Four transcribed into our setting. → new **OP-13**.
   *Sharpened again July 14, 2026:* 𝒮 is the two-stage truncation of the
   topos of trees (modulo a variance dictionary), so the spec's third truth
   value "later" is ▷'s shadow and the finite attack is available now —
   compute ▷ and its Ω-operator in the 2-/3-/4-stage truncations and locate
   it against the level diamond. See
   `internal-language-and-room-for-two.md` §4.
2. **The modal Lawvere theorem (S1 ↔ everything).** Classify which
   modalities preserve/reflect point-surjectivity — fixed points guaranteed
   only up to ◯. One lemma that would organize S1–S5 inside the program's
   own machinery. → folds into OP-13's formal side.
3. **Wheeler's clue as a theorem (S15 ↔ rheonomy thread).** State
   Kheyfets–Wheeler as the theorem it wants to be: the brane-scan cocycle
   conditions (Baez–Huerta; Schreiber's L∞ formulation) as the nontrivial
   solutions of d² = 0 constraints on super-Minkowski CE-algebras — "all law
   from no law" as a literal description of where the exceptional cocycles
   come from. → new **OP-14**; feeds the Phase 1 essay and Phase 4.
4. **Self-duality at the summit (S7+S8+S11 ↔ Thread P/OP-11).** Is there a
   fixed-point or reflexive-object characterization of the summit — Spin(8)
   as the self-dual point of a duality on representation categories, E8 as a
   reflexive object in a category of self-actions? Cross-examine whenever
   OP-11/OP-12 produce structure.
5. **Stratification as Aufhebung (S6 ↔ Aufhebung thread).** Does the
   universe-hierarchy resolution of Girard's paradox instantiate Aufhebung
   formally — each Uₙ₊₁ sublating the self-reference forbidden at Uₙ? Ties
   the ladder's logical spine to its own consistency mechanism.
6. **The room for two (S17 + S1 ↔ Thread P summit).** Is "containing two
   independent copies of one's own possibility-structure" a formal
   precondition of self-representation — the diagonal's A-beside-Yᴬ and the
   dimension-16 doubling E8 ⊕ E8 as two instances of one statement, or
   provably not? The analogy is currently untyped (exponentials vs
   orthogonal sums); typing it or disposing of it is the first task, and
   the d = 24 (rootless Leech) and d = 32 (generic doubling) countermodels
   are the cheapest attacks. → new **OP-16**; see
   `internal-language-and-room-for-two.md` §5.

## 4. Primary sources for §1

Wheeler, *Information, Physics, Quantum* (1989) — full text at
philpapers.org/archive/WHEIPQ.pdf. — Wheeler, *World as system
self-synthesized by quantum networking*, IBM J. Res. Dev. 32 (1988) 4–15. —
Wheeler, *Law without Law*, in Wheeler–Zurek (1983) 182–213. — Wheeler,
*Frontiers of Time* (1979). — MTW, *Gravitation* (1973) §§15.3, 44.4–44.5. —
Patton–Wheeler, *Is Physics Legislated by Cosmogony?* (1975). —
Kheyfets–Wheeler, IJTP 25 (1986) 573. — Smoryński, *Self-Reference and Modal
Logic* (1985) — Wheeler's ref [159]. — Meschini–Lehto–Piilonen,
*Geometry, pregeometry and beyond* (gr-qc/0411053) §5.3 (pregeometry
retreat, secondhand). — Bernstein, *Quantum Profiles* (1991) (Gödel
anecdote, sober version).
