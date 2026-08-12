# Rung 0 → 1: Source Dossier, Strand Map, and Analogy Atlas

*Working research note, August 12, 2026. Not spec. This note prepares the
expository ascent from rung 0·0 through rung 1, records the source checks that
the text may rely on, and gives conjectures a nursery without granting them
the status of evidence. Atomic claims live in `wiki/`; frozen definitions
remain in `spec/`.*

## 1. Research verdict

The mathematical route is now clearer than the original linear picture:

1. Adjunction supplies the form: two contexts related by an exact
   translation law, with unit and counit locating their failure to be
   equivalent.
2. An idempotent adjunction internalizes as opposed modalities.
3. Every topos supplies the first opposition, ∅ ⊣ ∗, and an internal
   truth-value object Ω.
4. The two-stage topos adds the value *later* and, with it, a basic figure
   having no point.
5. Rung 1, ♭ ⊣ ♯, opposes two completions of the same points.
6. Whether rung 1 resolves rung 0 is not part of the notation or the story:
   it is a theorem about the ambient topos. In sSet it does; in 𝒮 it does
   not, and the open level resolves first.

The important correction is therefore not “replace the ladder by a lattice.”
The modal ladder remains the programme's chosen ascent, while every ambient
topos has a partially ordered collection of levels in which that path must be
located. The first finite model already branches. “Next” is a claim to prove,
not a consequence of how the diagram is drawn.

Three source conclusions materially affect the exposition:

- **Lawvere's Hegelian language is primary, explicit, and cautious.** In 1991
  he calls the categorical relation *Aufhebung* while adding “hoping not to do
  too great an injustice to Hegel.” Track H may therefore show the lineage,
  but may not present a categorical definition as a translation theorem about
  Hegel.
- **The Being/Nothing comparison contains a productive mismatch.** Hegel's
  pure being and pure nothing pass into becoming as vanishing moments;
  Lawvere's trivial level presents terminal “pure Being” and initial
  “non Being”; the rung-0 theorem says a nondegenerate topos must keep those
  two objects non-isomorphic. This is not a contradiction once the
  correspondence is graded as a proposed model rather than an identification.
  It is exactly the point at which Track H should make the reader think.
- **The guarded-recursion dictionary can be pinned.** A two-stage tree has a
  restriction `X(2) → X(1)`. Setting the repo's `X₀ = X(2)` and
  `X₁ = X(1)` gives its arrow `X₀ → X₁` exactly. Birkedal et al. explicitly
  say that a future world is a smaller index. Thus the repo's
  now→later reading agrees with the guarded model after this reindexing; it
  does not require reversing the arrow. What remains conjectural is not the
  finite dictionary but the proposed shared explanation of Aufhebung
  obstruction and guarded self-reference.

## 2. The strands, in dependency order

| Movement | Track A — reader's question | Track H — lineage shown | Track B — mathematical carrier | Track C — only where it bites |
|---|---|---|---|---|
| 0·0a: adjunction | What can “best translation” mean exactly? | Lawvere's use of adjoints to model opposition; no claim that every adjunction is Hegelian | hom-set transposition; unit/counit; triangle identities; equivalence iff invertible | floor/ceiling by hand; finite ♭ ⊣ ♯ instance later |
| 0·0b: modality | What does an adjunction feel like from inside one world? | “moment” as a declared reading | idempotent (co)monads, fixed objects, outer/inner shapes | existing idempotence checks |
| 0·0c: topos | What structure lets a world speak about itself? | objective logic as Lawvere's programme | Ω, exponentials, adjoint quantifiers, Mitchell–Bénabou and Kripke–Joyal | Ω_𝒮 classifier already exhaustive |
| 0: existence | What must every topos distinguish before it contains anything particular? | Hegel's Being/Nothing/Becoming beside Lawvere's “pure Being/non Being,” with the mismatch stated | ∅ ⊣ ∗; nondegeneracy; ⊤ and ⊥ | existing level-0 family |
| 0: internal bit | Why can truth exceed a binary alphabet? | Wheeler reading marked conjectural | Ω ≅ 1+1 iff Boolean; Ω_𝒮 = (3→2) | classifier round trips; three-stage prediction |
| hinge: deferral | Can something exist without a point yet? | no Hegelian conclusion required | the representable `(∅→1)`; finite tree dictionary | bounded 2/3/4-stage Ω and ▷ calculation |
| 1: points/figures | How can the same points determine opposite figures? | unity of opposites as Lawvere's proposed model | Disc ⊣ Γ ⊣ coDisc; ♭ ⊣ ♯ | existing hom-count and idempotence checks |
| 1: Aufhebung | Does this higher opposition actually resolve the first? | Hegel's “preserve”/“cause to cease” supplies the gloss; Lawvere supplies the definition | one-clause resolution, co-resolution distinct, minimality in each level poset | Sierpiński diamond and truncated sSet |

The writing order follows the B-column; the first reading follows the
A-column. Track H appears only after the reader can name the formal feature
being compared. Track C is not a coequal fourth textbook: it is an instrument
used when a finite counterexample can change the story.

## 3. Source audit ledger

### 3.1 Hegel: the primary vocabulary

**Source.** G. W. F. Hegel, *Science of Logic*, Book I, “With What Must the
Beginning of Science Be Made?” and “Being,” Chapter 1, especially §134 in the
Miller numbering and the remark “The Expression ‘To Sublate’.” The project
quotes Miller for continuity with the existing draft; the di Giovanni
translation should be consulted when wording matters.

**Direct support.**

- §134 says pure being and pure nothing are the same and also “absolutely
  distinct”; their truth is “becoming,” the movement in which each vanishes
  into the other.
- The sublation remark says *aufheben* has the twofold sense of preserving
  and causing to cease. What is sublated loses immediacy but is not
  annihilated.

**Expository permission.** These passages can motivate the pair
preservation/resolution and the insistence that opposition not collapse into
mere identity.

**Limit.** Hegel does not state D0.4, essential-subtopos minimality, or an
adjunction. The map from his argument to those structures is a later
mathematical proposal and must be graded separately.

### 3.2 Lawvere: the proposed mathematical model

**Source.** F. W. Lawvere, “Some Thoughts on the Future of Category Theory,”
LNM 1488 (1991), §II, pp. 6–9.

**Direct support.**

- Lawvere calls the initial and terminal objects “non Being” and “pure
  Being” in the trivial level.
- He describes the levels inside a category of Being as partially ordered.
- He introduces a stronger relation between lower and higher levels, calls it
  *Aufhebung*, and explicitly treats the name as a proposed philosophical
  guide.
- The higher coskeleton fixing the lower skeleton is the nonautomatic
  condition; its fixing of the lower coskeleton follows from the assumed
  order. This is the source shape behind the spec's one-clause resolution,
  not the separate companion condition now called co-resolution.
- He warns that a smallest resolving level exists in some but not all
  examples. The definite article in “the Aufhebung” therefore requires an
  existence/minimality proof.

**Source.** Lawvere, “Unity and Identity of Opposites in Calculus and
Physics,” *Applied Categorical Structures* 4 (1996), 167–174.

**Direct support.** Its abstract says that a significant fraction of
dialectical philosophy can be *modeled mathematically* by suitable diagrams,
and that in a bicategory oppositeness can be characterized effectively by
adjointness. “Modeled” is the right verb for Track H; “proved equivalent” is
not.

### 3.3 Levels, order, and minimality

**Source.** G. M. Kelly and F. W. Lawvere, “On the Complete Lattice of
Essential Localizations,” *Bull. Soc. Math. Belg.* 41 (1989), Theorems 4.4
and 4.6.

**Direct support.** Theorem 4.4 gives the order-preserving correspondence
between essential inclusions into a presheaf topos and idempotent two-sided
ideals on its site. Theorem 4.6 identifies the ideal induced by a full
subcategory as the maps factoring through it. The spec's classification of
the levels of sSet then adds its own proof that the idempotent ideals of Δ
are exactly the skeletal ideals.

**Source.** M. Menni, “Monic skeleta, Boundaries, Aufhebung, and the meaning
of ‘one-dimensionality’,” *Theory and Applications of Categories* 34
(2019), 714–735, §1.

**Direct support.** Page 715 orders levels as subtoposes, states the
equivalent factorizations of the left and right inclusions, defines “way
above” by the lower skeleton and sheaf inclusions factoring through the
higher sheaf inclusion, and defines the Aufhebung as the least level way
above the given level.

**Remaining discipline.** These source mappings are recorded here for the
authoring pass; P0.7 must re-check them without receiving this rationale.

### 3.4 Internal language: what “secreted” may mean

**Sources.** Mac Lane–Moerdijk, *Sheaves in Geometry and Logic*, Chapter VI;
Johnstone, *Sketches of an Elephant*, D1 and D4.

**Established core.** An elementary topos has a Mitchell–Bénabou internal
language interpreted through its finite limits, exponentials, subobject
classifier, and adjoints; Kripke–Joyal forcing evaluates formulae at stages
and is stable under refinement.

**Reading, not theorem.** “The language is secreted by the world,” “logic is
the world's shadow,” and “observer-participancy becomes semantics” are
project readings of that construction. They are useful precisely when the
underlying theorem is stated nearby and are not synonyms for it.

### 3.5 Guarded deferral: the exact finite dictionary

**Source.** L. Birkedal, R. E. Møgelberg, J. Schwinghammer, and K. Støvring,
“First Steps in Synthetic Guarded Domain Theory: Step-indexing in the Topos
of Trees,” *Logical Methods in Computer Science* 8(4), 2012, §§2.1–2.4.

For the topos of trees `Set^(ω^op)`:

- an object has restrictions `X(n+1) → X(n)`;
- `▷X(1) = 1` and `▷X(n+1) = X(n)`;
- `next : X → ▷X` is given by the restrictions;
- `Ω(m) = {0,…,m}` with restriction `k ↦ min(m-1,k)`;
- the predicate operator maps `k ∈ Ω(m)` to `min(m,k+1)`;
- stage 1 always forces `▷φ`, while stage `n+1` forces it exactly when stage
  `n` forces φ;
- the operator satisfies Löb's rule and is not idempotent.

At two stages, `Ω(2) → Ω(1)` is the repo's
`{now,later,never} → {yes,no}` after the dictionary
`now=2`, `later=1`, `never=0`, `yes=1`, `no=0`.
The guarded operator acts

```
never ↦ later ↦ now ↦ now
no    ↦ yes   ↦ yes
```

so it cannot be any of 𝒮's idempotent level modalities. That disposes the
strongest naive identification. A subtler relation to the open level remains
an OP-13 question.

## 4. Track H: correspondences and frictions

### H0 — Being, nothing, becoming

- **Hegel source fact — established:** pure being and pure nothing are
  vanishing moments whose truth is becoming.
- **Lawvere source fact — established:** the trivial essential level has
  terminal “pure Being” and initial “non Being.”
- **Topos theorem — established:** ∅ ≅ ∗ iff the topos is degenerate.
- **Correspondence — claimed by Lawvere, not proved:** the categorical
  opposition models the dialectical one.
- **Friction — required in the text:** Hegel's “same” is not the isomorphism
  ∅ ≅ ∗. Treating it as such would make becoming equivalent to categorical
  collapse, the opposite of the intended reading.

### H1 — Unity and identity of opposites

- **Formal fact — established:** an adjoint triple with fully faithful
  embeddings yields opposed idempotent moments over one base.
- **Lawvere's modeling proposal — sourced:** adjointness is an effective
  mathematical form of oppositeness.
- **Expository reading — claimed:** unit/counit make identity and difference
  coexist in a disciplined way.
- **Limit:** the triangle identities do not by themselves establish a
  Hegelian interpretation.

### H2 — Aufhebung

- **Hegel source fact — established:** sublation preserves and ends, producing
  a mediated result rather than nothing.
- **Lawvere definition — established as a mathematical definition:** a higher
  level resolves a lower one under the way-above condition; “the” Aufhebung
  is the least such level when it exists.
- **Correspondence — claimed:** the categorical relation models the
  preserve/cease structure.
- **Productive test:** because the least resolving level is model-dependent,
  the correspondence generates a computation rather than decorating its
  answer.

## 5. Analogy atlas

An analogy card records: source structure; formal signature; proposed
correspondence; grade; neighboring cards; cheapest attack; and promotion
condition. Cards are clustered by formal signature, never by shared
vocabulary alone.

### A-01 — Measured failed equivalence

- **Source structure:** adjunction, unit, counit, adjoint equivalence.
- **Signature:** two translations; comparison maps; fixed subcategories.
- **Proposal:** an adjunction is an equivalence that failed with the failure
  measured.
- **Grade:** mathematics established; phrase expository.
- **Neighbors:** A-02, A-05.
- **Attack:** find an A-claim attributed to the phrase that unit/counit do not
  actually prove.
- **Promotion:** already admitted to Track A only with B2/B3 adjacent.
- **Wiki:** W-0001.

### A-02 — Opposition as a common base in two postures

- **Source structure:** outer adjoint triple; discrete/codiscrete embeddings.
- **Signature:** two distinct full images equivalent to one base.
- **Proposal:** identity lies in the common base, opposition in its two
  embeddings.
- **Grade:** established for the categorical structure; Hegelian reading
  claimed.
- **Neighbors:** A-01, A-04.
- **Attack:** confuse equivalent embedded subcategories with equal ones—the
  error repaired by D0.1 erratum E2.
- **Promotion:** keep the distinction explicit in every Track-H use.

### A-03 — World → logic, not logic → world

- **Source structure:** Ω, exponentials, adjoint quantifiers, forcing.
- **Signature:** representability produces an internal language.
- **Proposal:** propositions are a world's shadow rather than its substrate.
- **Grade:** internal-language construction established; reversal
  conjectural as a Wheeler diagnosis.
- **Neighbors:** A-06, A-07.
- **Attack:** identify “canonical up to isomorphism” with metaphysical
  production, or overstate the historical reason Wheeler left pregeometry.
- **Promotion:** source-audit the history separately from the topos theorem.
- **Wiki:** W-0004.

### A-04 — The ladder as a path through a lattice

- **Source structure:** complete lattice of essential localizations; 𝒮
  diamond.
- **Signature:** partial order plus a selected sequence.
- **Proposal:** the named rungs are a research path whose successive
  Aufhebung relations must be proved model by model.
- **Grade:** established in 𝒮; programme-level extrapolation conjectural.
- **Neighbors:** A-05, A-09.
- **Attack:** find a model where a named rung does not exist, is incomparable,
  or fails to be minimal.
- **Promotion:** diagrams must distinguish “named ascent” from “computed
  Aufhebung.”
- **Wiki:** W-0006.

### A-05 — Aufhebung as an invariant of pointlessness

- **Source structure:** Lemma 1.5 and the least resolving level.
- **Signature:** obstruction plus minimal repair.
- **Proposal:** where level 0 is sublated measures whether basic figures may
  lack points.
- **Grade:** theorem for the presheaf level-1 criterion and the two worked
  models; broader slogan only a reading.
- **Neighbors:** A-04, A-06.
- **Attack:** a site presentation can vary, so any “pointlessness invariant”
  language must be phrased in presentation-independent topos terms before
  general promotion.
- **Promotion:** keep the exact site criterion in B and the slogan in A.

### A-06 — Deferral's three faces

- **Source structure:** Ω's middle value; the pointless representable; ▷.
- **Signature:** information available only after restriction to a future
  world.
- **Proposal:** one deferral structure enriches truth, relocates the first
  Aufhebung, and guards self-reference.
- **Grade:** the three components established; the single explanation
  conjectural.
- **Neighbors:** A-03, A-05, A-07.
- **Attack:** the finite calculation shows ▷ is non-idempotent and hence not a
  level modality. A common name is not a common modal operator.
- **Promotion:** formulate a typed relation—distributive law, comparison
  transformation, or preservation theorem—or leave as resonance.
- **Wiki:** W-0002 / OP-13.

### A-07 — Stratification or guarding instead of total self-containment

- **Source structure:** universe hierarchies, Lawvere diagonal, Löb/guarded
  fixed points.
- **Signature:** self-reference recovered by changing level or delaying use.
- **Proposal:** Wheeler's closed loop may need an ascent or a guard rather
  than an untyped fixed point.
- **Grade:** component theorems established; synthesis conjectural.
- **Neighbors:** A-03, A-06, A-08.
- **Attack:** produce a common categorical statement; otherwise “escape”
  names unrelated consistency mechanisms.
- **Promotion:** OP-3/OP-13 only.
- **Wiki:** W-0004.

### A-08 — Room for two

- **Source structure:** Lawvere point-surjection; lattice doubling; double
  copy.
- **Signature:** a structure placed beside a representation of its own
  transformations.
- **Proposal:** doubling possibility-structure enables self-representation.
- **Grade:** conjectural and currently untyped.
- **Neighbors:** A-07, A-09.
- **Attack:** exponentials are not orthogonal sums; d=24 and d=32 are the
  cheapest countermodels.
- **Promotion:** no rung-0→1 text without a typed bridge.
- **Wiki:** W-0003 / OP-16.

### A-09 — Two forced ladders, one summit

- **Source structure:** modal geometry and the proposed codomain sequence
  `[0,1] → ℂ → ℝ/ℂ/ℍ → 𝕆`.
- **Signature:** successive structural restrictions terminating near
  exceptional geometry.
- **Proposal:** the modal and possibility programmes are two faces of one
  forcing theorem.
- **Grade:** component results mixed established/claimed; splice
  conjectural.
- **Neighbors:** A-04, A-08.
- **Attack:** require a functor, universal property, or shared obstruction;
  proximity to exceptional objects is not enough.
- **Promotion:** Thread P only; excluded from the rung-0→1 exposition.

## 6. Promotion and computation rules

1. Nursery intake is broad. Every card states its source, formal signature,
   and weakest grade.
2. Clustering uses common typed structure, not words such as “opposition,”
   “later,” “double,” or “self.”
3. A possible alignment becomes a research question when it can be written
   in common notation.
4. The cheapest countermodel is run before a confirming-example search.
5. A conjecture enters Track A only as a visibly graded reading; it enters
   Track B only after proof or reliable citation.
6. Track C is used when the model is finite, the computation discriminates
   between live claims, and the result changes the text. Otherwise Track B
   carries the mathematics and C becomes a hand calculation or source
   pointer.
7. Failed alignments remain in the wiki as disposed results.

## 7. Stable source links

- Hegel, *Science of Logic*, Book I (Miller transcription):
  <https://www.marxists.org/reference/archive/hegel/works/hl/hlbeing.htm>
- Lawvere 1991:
  <https://lawverearchives.com/wp-content/uploads/2024/12/1991-some-thoughts-on-the-future-of-category-theory.pdf>
- Lawvere 1996:
  <https://lawverearchives.com/wp-content/uploads/2024/12/1996-unity-and-identity-of-opposites-in-calculus-and-physics.pdf>
- Menni 2019:
  <http://www.tac.mta.ca/tac/volumes/34/25/34-25.pdf>
- Birkedal–Møgelberg–Schwinghammer–Støvring 2012:
  <https://arxiv.org/abs/1208.3596>
- Kennett–Riehl–Roy–Zaks 2011:
  <https://doi.org/10.1016/j.jpaa.2010.07.002>
