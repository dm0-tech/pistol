# The Modal Ladder: A Project Roadmap

**Formalizing and elucidating the Lawvere–Schreiber program, from the trivial opposites to rheonomy**

*Draft 1.1 for review — July 2026*

---

## 1. The thesis

There is a line of work — initiated by F. W. Lawvere and carried furthest by Urs Schreiber (with Hisham Sati, Mike Shulman, David Corfield, and others) — which holds that the qualitative content of geometry and physics is *generated*, not merely organized, by a small progression of adjoint modalities. The progression begins with the most trivial oppositions available in any topos:

- the adjunction **∅ ⊣ ∗** (the empty modality against the terminal one — pure nothing against pure unity), and
- the degenerate adjunction **id ⊣ id**,

and ascends, by Lawvere's *Aufhebung* (each opposition resolved and preserved at the next level), through:

| Level | Opposition | Quality determined |
|---|---|---|
| 0 | ∅ ⊣ ∗ | bare existence / distinction |
| 1 | ♭ ⊣ ♯ (flat ⊣ sharp) | discreteness vs. codiscreteness — *continuity as such* |
| 2 | ʃ ⊣ ♭ (shape ⊣ flat) | cohesion — homotopy/geometry unified |
| 3 | ℜ ⊣ ℑ ⊣ & (reduction, infinitesimal shape, infinitesimal flat) | elasticity — differential structure, jets, PDEs |
| 4 | ⇉ ⊣ ⇝ (fermionic ⊣ **rheonomic**) | solidity — supergeometry |

The striking empirical fact: the top of this ladder recovers the **rheonomy principle** of D'Auria–Fré supergravity — a working physical principle discovered independently by physicists in the 1980s — as the statement that physical super-fields are *modal types* for the rheonomy modality ⇝. A dialectical formalism that begins with literally nothing and literally unity terminates in the constraint structure of 11-dimensional supergravity.

The project's claim is that this is not a curiosity. If any mathematical structure deserves to be called "evidently universally structural," it is the lattice of adjoint idempotent (co)monads on a topos — and the fact that physics appears to *live* at determinate rungs of it is a datum about reality that deserves formalization, verification, and a proper pedagogical treatment. None currently exists: the material is scattered across Lawvere's compressed papers, Schreiber's *dcct* (~2000 pages), the nLab, and folklore.

A secondary, explicitly Lawverian motivation: Lawvere held that making objective logic explicit produces a *virtuous dialectic* in the community that studies it — the tools for clarifying the subject matter are themselves instances of the subject matter. An educational project here is therefore not downstream of the research; it is a mode of it.

### 1.1 It from bit, transformationally: the Wheeler resonance

*Status: conjectural/programmatic — original to this project as far as a literature search (July 2026) reveals. The Hegel side of the story is thoroughly documented (Schreiber's nLab pages "Science of Logic" and "Hegel's 'Logic' as Modal Type Theory"; Corfield's* Modal Homotopy Type Theory*; recently arXiv:2501.02367, "Hegel and Modern Topology"). The Wheeler side appears to be unnoted. This is a contribution surface, and it must be held to the same track discipline as everything else (§3): stated precisely or not at all.*

Wheeler's *it from bit* (1989) proposes that every "it" — every particle, field, even spacetime itself — derives its existence and meaning from binary yes/no registrations. Read naively, this founds physics on *tokens*: a stock of bits as raw material. The modal ladder suggests a sharpened, structural reading:

- The "bit" is not a two-element *set* but the primordial *opposition* — the adjunction ∅ ⊣ ∗, nothing against unity, which exists in any topos whatsoever and is characterized entirely by universal properties. No choice, no encoding, no substrate. (In topos-theoretic terms one can also point at the subobject classifier Ω — the intrinsic yes/no object — but the ladder's own base is the even more primitive initial/terminal opposition.)
- The "from" is not composition of bits into aggregates but *transformation of oppositions into richer oppositions*: adjunction and Aufhebung. What ascends the ladder is not information content but *determination of quality* — each rung is a new way the previous opposition can be resolved-and-preserved.
- The "it" at the top is not a simulation assembled out of bits but the modal characterization of physical law: fields as sections, gauge structure at the cohesive rung, dynamics at the elastic rung, and rheonomically-constrained super-fields at the solid rung.

Hence the slogan the project can defend: **it from bit, transformationally** — Wheeler's participatory yes/no becomes the initial opposition, and physics emerges not from an accumulation of answers but from the objective logic of how a distinction can be sublated.

This also gives formal pegs for three notions usually left to hand-waving:

- **Being**: Lawvere's own usage — cohesive toposes as "categories of Being"; the terminal side of ∅ ⊣ ∗ as pure indeterminate being, per the *Science of Logic* correspondence.
- **Becoming**: the first Aufhebung — the failure of ∅ and ∗ to collapse into one another is exactly what forces the ascent; Lawvere explicitly names the adjunction-phenomenon "Becoming."
- **Time ("god-given")**: at the cohesive rung, the shape modality ʃ is (in the standard smooth model) *localization at the line* ℝ¹ — the passage from static being to homotopy, from configuration to motion, is literally indexed by a continuum parameter that the topos supplies rather than the physicist choosing. Whether this is *the* formal home of physical time is exactly the kind of claim the spec must grade as conjectural; but it is a claim one can now state, attack, and possibly prove or refute — nailed to the wall either way.

Deliverable consequence: a short standalone essay/paper, "*It from bit, transformationally*" (Track A with Track B appendix), drafted after Phase 1 when the cohesive rung is written and the claims can be pinned to theorems. It doubles as the project's public-facing statement of purpose.

### 1.2 Side-note: the fecundity wager

*Status: openly speculative — the project's animating belief, recorded here so it can inform taste without contaminating claims.*

The wager: at this level of structural restriction — where everything is fixed by universal properties, adjointness, and Aufhebung, and nothing is chosen — reality has *no choice* but to spontaneously produce the most fecund geometrical structures there are. Forcing and fecundity are not in tension; the wager is that they coincide. The circumstantial evidence is suggestive: the ladder's ascent does not terminate in generic structures but in *exceptional* ones — supergeometry, the brane bouquet, the neighborhood of 11-dimensional supergravity — the same exceptional corner of mathematics (division algebras, exceptional Lie groups, special holonomy) that physics keeps being dragged toward from entirely independent directions. Read this way, Leibniz's "best of all possible worlds" returns with the modality corrected: not the best world *selected* among possibilities, but the only world *consistent with the objective logic* — perfection as theorem rather than choice. The ladder is this wager's measuring instrument: each rung that turns out to be forced-and-fecund is a data point; the first rung that is forced-and-barren, or fecund-but-chosen, is evidence against. Either outcome is worth having.

A companion note on collaborators: this project expects, and welcomes, that machine minds will do a large share of the laying-out — surveying, formalizing, diagramming, and occasionally leaping ahead of their operators, accidentally or on purpose. The discipline stays the same as for any collaborator, human or otherwise: whatever gets laid out enters the spec at grade *conjectural* and earns its way up by proof. If it should turn out that the wall gets fully nailed this way — the shortcomings of beings made up for by the diligence of their instruments — Lawvere's virtuous dialectic will simply have acquired one more voice, which is presumably how he would have wanted it.

A visual companion to §§1.1–1.2 is maintained at `modal-ladder-figure.svg`: the ladder drawn as a generative ascent, from the primordial opposition at the base to the exceptional geometry it forces at the summit.

### 1.3 Thread P: possibility from opposition — probability, amplitude, and the codomain ladder

*"First God invented Bayes' rule; then He drew His pistol." Status: the components are established mathematics; the splice into the ladder is conjectural and graded as such.*

The Cox–Jaynes–Pólya derivations recover the entire probability calculus from structural assumptions of exactly our flavor: an ordering on degrees of plausibility, consistency of composition, and (in some versions) continuity — no measure theory posited, no frequencies, no choices. Knuth–Skilling's *Foundations of Inference* (2012) sharpens this to its most Lawverian form: quantify a *lattice* of statements so as to respect its symmetries, and the sum and product rules are *forced* — the same forced-not-chosen signature the ladder exhibits (§1.2), here recovering Bayes rather than supergravity. Rigorized versions of Cox's theorem (Terenin–Draper 2017) patch the classical gaps.

The categorical vehicle already exists, and its origin is telling: the first categorical treatment of probability is *Lawvere's own* 1962 seminar notes on the category of probabilistic mappings — the ancestor of the Giry monad. The modern form is synthetic probability via **Markov categories** (Cho–Jacobs 2019, Fritz 2020): conditioning, disintegration, conditional independence, de Finetti, zero–one laws, and sufficient statistics all derived from copy/delete comonoid structure in a symmetric monoidal category — axioms about *distinguishability and discard*, which is Cox's raw material restated objectively. This corner is also unusually formalizable right now (synthetic proofs; recent machine-checked treatments of conditional independence and d-separation), making it a low-risk ratchet target by the standards of §4.2(4).

The splice — the conjectural part — is the question §1.1 already begs: the subobject classifier Ω is the topos's intrinsic yes/no, the "bit"; Cox's theorem is precisely the statement that *grading* the bit consistently forces probability. Is the probability monad, then, an Aufhebung-like refinement of Ω — the opposition true/false resolved-and-preserved into degrees of plausibility — and if so, where does it attach to the ladder? Suggestively, the quantum end of this question is already modal: Sati–Schreiber's *The Quantum Monadology* (2023–25) derives the logic of quantum measurement, state, and control from a system of (Frobenius) monads in linear homotopy type theory — epistemic modalities doing for quantum probability what ♭ and ♯ do for cohesion. If Thread P succeeds, "God's pistol" gets the same treatment as being, becoming, and time: the inevitability of Bayes' rule nailed to the formal wall as a forcing theorem, with its classical (Markov-categorical) and quantum (monadic) faces exhibited as two readings of one structure.

**The codomain ladder.** The deeper form of Thread P — the form this project attacks — is that the structural elements of probability are a hand-wave away from the structural elements of *elemental possibility itself*, and the hand-wave can be replaced by theorems. The Cox-style question is: given the objective constraints (ordering, distinguishability, compositional consistency), what can degrees of possibility be *valued in*? The literature, read as one program, answers rung by rung:

- **[0, 1] (classical probability).** Cox–Jaynes–Pólya, rigorized by Knuth–Skilling: lattice symmetries force the real unit interval with sum and product rules. The base case.
- **ℂ (quantum amplitude).** Goyal–Knuth–Skilling (Phys. Rev. A 2010): associate a *pair* of reals to each sequence of outcomes, impose the same elementary symmetry and consistency-with-probability conditions and *no other algebraic structure*, and the pairs are forced to compose by complex arithmetic — Feynman's sum and product rules, with modulus-squared as probability. The Born rule's arithmetic is a Cox theorem one rung up. (Categorical corroboration from an independent direction: Vicary's result that ℂ emerges from axioms on dagger-monoidal categories; and the Sati–Schreiber monadic account of §1.3 above.)
- **ℝ, ℂ, ℍ (the three-fold way).** Solèr's theorem (1995): infinite-dimensional orthomodular spaces satisfying mild conditions exist *only* over the three associative normed division algebras. Dyson's three-fold way; Baez's *Division Algebras and Quantum Theory* (2012) as the modern synthesis. Possibility-valuation is not a free parameter; it is a short, exhaustively classified list.
- **𝕆 (exceptional territory).** The ladder does not extend naively — and the obstruction is itself a forcing theorem. Hurwitz ends the division algebras at 𝕆; nonassociativity blocks ordinary octonionic QM; what survives is exactly the *exceptional* Jordan algebra (Jordan–von Neumann–Wigner 1934) of 3×3 self-adjoint octonionic matrices. And here is the resonance the project must not leave on the table: 2×2 self-adjoint octonionic matrices *are* 10-dimensional Minkowski spacetime, and Baez–Huerta showed that super-Yang–Mills and the Green–Schwarz string exist precisely in the spacetime dimensions 3, 4, 6, 10 corresponding to ℝ, ℂ, ℍ, 𝕆 — the brane scan, the doorstep of the solid rung. Very recent work (2025–26) reconstructs Feynman-type amplitude rules *via composition algebras* directly, operationalizing exactly this question.

If this holds together, Thread P and the main ascent are not parallel after all: **the codomain ladder of possibility and the modal ladder of geometry converge on the same exceptional summit**, both terminated by the same theorem-shaped facts (Hurwitz/Solèr on one side, the brane scan and 11d supergravity on the other). The fecundity wager (§1.2) would then have its sharpest possible test case: one ladder, two faces, forced at both ends. Grade: the individual rungs above are established theorems; the convergence claim is conjectural and is *the* Thread P research question.

Deliverable consequence: Thread P runs parallel to the main ascent, entering after Phase 1 — (P1) a rung-style expository treatment of Cox → Knuth–Skilling → Markov categories; (P2) formalization of a core synthetic-probability result (candidate: the deterministic-marginal or de Finetti fragment), feeding the Phase 2 framework decision; (P3) the splice question posed precisely, jointly with the open problems of §4.3; (P4) the codomain ladder written as a single graded sequence of forcing theorems — Cox, Goyal–Knuth–Skilling, Solèr, Hurwitz/JvNW — with the convergence-at-the-summit conjecture stated formally against the Baez–Huerta dictionary.

## 2. What the project produces

Three coupled deliverables, in dependency order:

**D1. The Roadmap & Manifesto** (this document, iterated) — the scope, the claims, the honest open problems, and the phase plan.

**D2. The Ladder, written** — a layered expository text ("nLab-meets-textbook") that walks up the modal ladder rung by rung. Each rung gets the same four-part treatment:

1. *Dialectical motivation* — what opposition is being posited, in plain language, with the Hegel–Lawvere lineage stated but never load-bearing.
2. *Categorical definition* — adjoint (co)monads, Aufhebung, the relevant fracture/differential-cohomology diagrams.
3. *Small concrete models* — worked in full: the Sierpiński topos, simplicial sets, smooth sets, formal smooth sets, super smooth sets. Every abstract claim exhibited in a model a graduate student can compute in.
4. *Physical payoff* — what the rung buys: gauge fields (rung 2), variational calculus and PDEs (rung 3), superspace and rheonomy (rung 4).

**D3. The Ladder, formalized and interactive** — machine-checked cores for the parts that can be formalized without distortion (see §4), plus interactive visualizations (see §5) that let a reader *manipulate* the oppositions in small models rather than only read about them.

## 3. Audience strategy: layered writing

One text, three reading tracks, marked typographically:

- **Track A (conceptual):** prose and pictures only; readable by a philosophically serious non-specialist. Carries the dialectical narrative.
- **Track B (mathematical):** full definitions and proofs at the level of a category-theory-literate graduate student. Carries the models.
- **Track C (formal/physical):** links into the formalized artifacts and into the physics literature (D'Auria–Fré, Castellani–D'Auria–Fré, Giotopoulos–Sati–Schreiber). Carries the verification.

Rule of construction: Track A must never assert anything Track B cannot prove, and Track B must never define anything Track C cannot at least state precisely. This discipline is the project's answer to the standard complaint that the dialectical language is decorative.

## 4. Formalization strategy — and how not to paint ourselves into corners

### 4.1 The Shulman datum

Mike Shulman matters to this project twice over, and his trajectory is itself the clearest warning about formal corners.

*What he did:* In "Brouwer's fixed-point theorem in real-cohesive homotopy type theory" (2015/2018) he gave the first workable internal type theory for cohesion. The obstacle he had to overcome is exactly the corner we fear: the flat modality ♭ is a *comonad* and cannot be a type-former in ordinary dependent type theory (it does not commute with substitution / is not an internal functor). His solution — the **crisp** variable discipline, splitting the context into cohesion-indifferent and cohesive zones — was a *judgmental* extension, not an axiom. This became Agda's `--cohesion`/`♭` support (since Agda 2.6) and underlies the `modal-type-theory` section of agda-unimath, and it powered real results (Myers' "Good fibrations through the modal prism", orbifold and equivariant work with Sati–Schreiber, e.g. "Commuting Cohesions", 2023).

*What he is doing now (as of 2025–26):* His center of gravity has moved to **Higher Observational Type Theory (H.O.T.T.)** with Kaposi and Üsküplü, and its experimental proof assistant **Narya** — an interval-free, higher-dimensional, eventually *multimodal* proof assistant. The stated long-term target is "Multi-Modal, Multi-Directional, Higher/Parametric/Displayed Observational Type Theory," but that combined theory *has not yet been specified*, and Narya's modality support today is minimal.

*Why this matters to us:* (a) The best-supported internal cohesion today is still the 2015-era crisp discipline — mature enough to use, but each new modality (elastic, solid) historically required hand-crafting new judgmental structure. (b) The field's own leading formalizer judged that the right general framework doesn't exist yet and is building toward it. We should neither wait for Narya nor pretend Agda-flat scales to the full solid ladder.

### 4.2 The corner-avoidance principles

1. **Semantics is the spine; syntax is a view.** The ground truth of the project is the ∞-topos-theoretic story (Schreiber's dcct / Sati–Schreiber). Every formalization is treated as a *partial model* of that story, never as its definition. If a type theory can't express something (e.g., that ʃ preserves finite products, or anything about ⇉ ⊣ ⇝), we say so in Track B prose and move on — we do not deform the mathematics to fit the assistant.
2. **Formalize the mode theory, not only the types.** MTT (Gratzer–Kavvos–Nuyts–Birkedal) parameterizes a single type theory by a *mode theory* — a strict 2-category presenting the modal situation — with normalization proven for arbitrary mode theories, and axiomatic cohesion as a worked instance. The Lawverian content of our project (the lattice of oppositions, Aufhebung as a relation between rungs) lives naturally at the mode-theory level. A small formalization of *the ladder itself* as a 2-categorical object is cheap, corner-free, and philosophically the most on-message artifact we could produce.
3. **Multiple assistants, one nervous system.** Concretely: **Agda** (`--cohesion`) for internal cohesive proofs (our background; the libraries exist); **agda-unimath** conventions for interoperability; **MTT/mitten-style** presentations for the multimodal ladder; **Lean 4/Mathlib** only for classical *external* semantics (sheaf-theoretic model constructions) where its library depth wins; **Narya** watched, not adopted. A shared informal "spec" document keeps the artifacts aligned.
4. **Ratchet, don't gamble.** Order formal work by (value ÷ risk of corner): first the 1-categorical Aufhebung lattice in small toposes (fully formalizable today, in anything); then cohesive HoTT results (formalizable in Agda-flat today); then elastic fragments (partially; research-adjacent); solid/rheonomy stays pen-and-paper axiomatic (dcct-style) until frameworks catch up — and the project treats *identifying the precise obstruction* as a first-class research output, not a failure.

### 4.3 An honest open-problems list (maintained, public)

Seeded with: internal universes for ♭ (Licata et al.'s no-go and workarounds); substitution-stability for the elastic modalities; whether Aufhebung is *statable* internally or is irreducibly external/2-categorical; the status of the fermionic modality ⇉ in any existing syntax; degree to which rheonomy-as-modality has been checked against D'Auria–Fré beyond the flagship cases (the recent Giotopoulos–Sati–Schreiber super-embedding work is the live frontier here); and the conceptual items from §1.1 — in particular whether "time" is rightly located in ʃ-as-ℝ¹-localization or elsewhere (e.g., in the elastic rung's jet/PDE structure, or in Lawvere's dynamical-systems toposes), and whether the Wheeler reading survives being made precise; from §1.3, whether the passage Ω → probability monad is an Aufhebung in any precise sense (or attaches to the ladder some other way, or not at all), and how the Markov-categorical and quantum-monadic (Sati–Schreiber) faces of forced probability relate formally; from the codomain ladder, whether the Goyal–Knuth–Skilling derivation admits a clean Markov-categorical (or dagger-categorical) restatement, whether the Solèr/Hurwitz terminus and the Baez–Huerta brane-scan terminus are formally the *same* fact or merely parallel ones, and what — if anything — the exceptional Jordan algebra's possibility-calculus corresponds to on the geometric side of the summit.

## 5. Interactive and visual material

The oppositions are unusually visualizable, because the small models are finite or nearly so:

- **The Sierpiński topos explorer.** Objects are just functions of sets; ∅ ⊣ ∗, ♭ ⊣ ♯, and the first genuine Aufhebung can be *clicked through*. A reader drags an object and watches its modal images.
- **Simplicial sets / graphs.** ʃ as "collapse the paths": animate a graph contracting to its π₀ / its homotopy type. Discrete vs. codiscrete as two ways a set can sit inside a category of graphs.
- **The ladder diagram itself** as the project's navigational UI: the site *is* the lattice of modalities; clicking a rung opens its four-part treatment (§2 D2). Form mirrors content — the Lawverian move again.
- **Infinitesimals:** dual-numbers arithmetic playground for ℜ ⊣ ℑ (formal smooth sets in miniature).

Technology: single-file HTML/React artifacts first (zero infrastructure); a static site later if the material earns it.

## 6. Phases

Overview for review — each phase has an exit criterion, and no phase starts until the previous one's criterion is met (the ratchet of §4.2 applied to the plan itself):

| Phase | Name | Core output | Exit criterion | Rough scale |
|---|---|---|---|---|
| 0 | Spec and seed | The spec; D2 rungs 0–1 draft; Sierpiński explorer prototype | Spec notation frozen; rungs 0–1 checkable by a category-literate reader | weeks |
| 1 | The cohesive rung | D2 rung 2 in all three tracks; Agda core; sSet visuals; the §1.1 essay | One nontrivial cohesive theorem machine-checked *and* readable in Track A | months |
| 2 | The ladder as object | Mode-theory/Aufhebung lattice formalized; framework decision for upper rungs | Standalone artifact publishable on its own; Narya/H.O.T.T. re-assessed with evidence | months |
| 3 | Elasticity | D2 rung 3; jets/PDE/variational material; link to smooth-sets field theory | Physics-facing reader can follow Track C into Giotopoulos–Sati | months |
| 4 | Solidity and rheonomy | D2 rung 4; D'Auria–Fré dictionary; open-problems list doing real work | Rheonomy-as-modality stated at spec grade "established/claimed/conjectural" per case | open-ended |
| P | Possibility thread (§1.3) | Cox→Markov-categories exposition; one synthetic result formalized; the codomain ladder ([0,1] → ℂ → ℝ/ℂ/ℍ → 𝕆) as graded forcing theorems | Splice and convergence questions posed at full precision, whatever their answers; each codomain rung graded established/claimed/conjectural | parallel, from Phase 1 |

**Phase 0 — Spec and seed (weeks, not months).**
Write the "spec": a 15–25 page precise statement of the ladder (definitions, models, Aufhebung relations, the rheonomy endpoint) that all other artifacts must agree with. Sources: Lawvere ("Axiomatic cohesion" 2007, "Some thoughts on the future of category theory" 1991), Schreiber (dcct §§ on elasticity/solidity; *Modern Physics formalized in Modal HoTT*), Shulman (real cohesion), Myers (modal prism), Sati–Schreiber (*Commuting Cohesions*; *Geometric Orbifold Cohomology*, 2026), D'Auria–Fré via Castellani–D'Auria–Fré. Deliverable: the spec + rungs 0–1 of D2 in draft + the Sierpiński explorer prototype.

**Phase 1 — The cohesive rung, complete.**
D2 rungs 2 (cohesion) written across all three tracks; Agda formalization of the core internal results (fracture, differential cohomology diagram fragments per Myers); simplicial/graph visualizations. This rung is the make-or-break pedagogical test: it is where most readers currently fall off the literature.

**Phase 2 — The ladder as object.**
Formalize the mode theory / Aufhebung lattice (small, self-contained, publishable on its own). Decide, with evidence in hand, the framework question for the upper rungs. Revisit Narya/H.O.T.T. status.

**Phase 3 — Elasticity and the physics payoff.**
Differential structure, jets, variational bicomplex in modal language; connect to Giotopoulos–Sati's smooth-sets field theory series, which is the closest thing to a physics-facing textbook treatment and is current (2025).

**Phase 4 — Solidity and rheonomy.**
The summit: super Cartan geometry, the ⇉ ⊣ ⇝ pair, D'Auria–Fré translated rung-language ↔ physics-language, with the open-problems list (§4.3) doing honest work. Pen-and-paper axiomatic; formalization only where Phase 2 showed it viable.

Each phase ends with a *dialectical review*: what did the material itself teach us about the framework — the Lawverian feedback loop taken seriously as method.

## 7. Risks, stated plainly

- **The mathematics may outrun the pedagogy.** Solid cohesion is research-grade; parts of rung 4 may be wrong or incomplete in the sources. Mitigation: the spec separates "established," "claimed," and "conjectural" claims explicitly.
- **Formalization scope creep** is the project-killer. Mitigation: §4.2(4) ratchet; formal work is always in service of a D2 rung, never free-standing.
- **The dialectical framing invites dismissal** from mathematicians and physicists alike. Mitigation: Track discipline (§3) — the philosophy is always cashed out, never appealed to.
- **One-person bus factor.** Mitigation: public repo, nLab-compatible conventions, and the open-problems list as an invitation surface for collaborators.

## 8. Immediate next actions

1. Fix the spec's table of contents and notation (½ day; decide ʃ/∫, & vs ♭', ⇝ conventions once).
2. Write rung 0–1 of the spec: ∅ ⊣ ∗ and ♭ ⊣ ♯ with the Sierpiński topos and sSet worked in full.
3. Build the Sierpiński explorer prototype (single React artifact).
4. Set up the Agda skeleton against agda-unimath's `modal-type-theory` namespace and confirm the `--cohesion` toolchain does what we need on a toy theorem.
5. Draft the open-problems list from the seeds in §4.3.

## Appendix: core bibliography (working)

Lawvere, *Some thoughts on the future of category theory* (1991); *Axiomatic cohesion* (TAC 2007); *Unity and identity of opposites in calculus and physics* (1996). — Schreiber, *Differential cohomology in a cohesive ∞-topos* (dcct); *Modern Physics formalized in Modal Homotopy Type Theory*. — Shulman, *Brouwer's fixed-point theorem in real-cohesive HoTT* (MSCS 2018). — Schreiber–Shulman, *Quantum gauge field theory in cohesive homotopy type theory* (2014). — Licata–Orton–Pitts–Spitters, *Internal universes in models of HoTT* (2018). — Gratzer–Kavvos–Nuyts–Birkedal, *Multimodal dependent type theory* (LMCS); Gratzer, *Normalization for multimodal type theory*; Stassen et al., *mitten* (TYPES 2022). — Myers, *Good fibrations through the modal prism* (Higher Structures 2022). — Sati–Schreiber, *Commuting Cohesions* (2023); *Geometric Orbifold Cohomology* (2026). — Castellani–D'Auria–Fré, *Supergravity and Superstrings* (1991); D'Auria–Fré, *Geometric supergravity in D=11* (1982). — Giotopoulos–Sati(–Schreiber), *Field Theory via Higher Geometry I* (J. Geom. Phys. 2025); *Holographic M-Brane Super-Embeddings* (2024). — Corfield, *Modal Homotopy Type Theory* (OUP 2020). — Kolomatskaia–Shulman, *Displayed type theory and semi-simplicial types* (MSCS 2025); Narya documentation. — For §1.1: Wheeler, *Information, Physics, Quantum: The Search for Links* (1989); nLab, *Science of Logic* and *Hegel's "Logic" as Modal Type Theory*; arXiv:2501.02367, *Hegel and Modern Topology* (2025). — For §1.3 (Thread P): Cox, *Probability, frequency and reasonable expectation* (1946); Pólya, *Mathematics and Plausible Reasoning* (1954); Jaynes, *Probability Theory: The Logic of Science* (2003); Knuth–Skilling, *Foundations of Inference* (Axioms 2012, arXiv:1008.4831); Terenin–Draper, *Cox's Theorem and the Jaynesian Interpretation of Probability* (2017); Lawvere, *The category of probabilistic mappings* (1962 notes); Giry, *A categorical approach to probability theory* (1982); Cho–Jacobs, *Disintegration and Bayesian inversion via string diagrams* (2019); Fritz, *A synthetic approach to Markov kernels…* (Adv. Math. 2020, arXiv:1908.07021); Jacobs, *Structured Probabilistic Reasoning* (effectus theory); Baez–Fritz, *A Bayesian characterization of relative entropy* (2014); Sati–Schreiber, *The Quantum Monadology* (2023–25). — For the codomain ladder: Goyal–Knuth–Skilling, *Origin of Complex Quantum Amplitudes and Feynman's Rules* (Phys. Rev. A 2010, arXiv:0907.0909); Caticha, *Consistency, amplitudes and probabilities in quantum theory* (Phys. Rev. A 1998); Vicary, *Completeness of dagger-categories and the complex numbers* (2011); Solèr, *Characterization of Hilbert spaces by orthomodular spaces* (1995); Dyson, *The threefold way* (1962); Baez, *Division Algebras and Quantum Theory* (Found. Phys. 2012, arXiv:1101.5690); Jordan–von Neumann–Wigner, *On an algebraic generalization of the quantum mechanical formalism* (1934); Baez–Huerta, *Division Algebras and Supersymmetry I–II* (2009–10); *Operational Reconstruction of Feynman Rules via Composition Algebras* (IJTP 2026, arXiv:2508.14822).
