# Level 0 — The Opposition ∅ ⊣ ∗

*Spec section (P0.2). Notation per `NOTATION.md` (frozen). Every claim
carries a grade: **established** / **claimed** / **conjectural**. Claims
whose content is a finite computation are marked ⚙ and must be reproduced by
a script in `examples/` (P0.5). The claim ledger is §8.*

Throughout, ℰ is an elementary topos and **1** denotes the terminal category
(one object •, one morphism). "Nondegenerate" means ℰ ≄ **1**.

## 1. General definitions

These definitions serve the whole ladder; they are stated once, here.

**D0.1 (idempotent (co)monad, adjoint modality).** A monad ◯ on ℰ is
*idempotent* if its multiplication ◯◯ → ◯ is an isomorphism; dually for a
comonad □ and its comultiplication. An **adjoint modality** on ℰ is an
adjoint pair between an idempotent comonad □ and an idempotent monad ◯, in
either orientation, induced by an adjoint triple F ⊣ G ⊣ H in one of two
shapes:

- **Outer shape, □ ⊣ ◯.** F, H : ℱ → ℰ are fully faithful and G : ℰ → ℱ;
  set □ = F∘G and ◯ = H∘G. (In a triple the two outer functors are fully
  faithful together, so requiring both is no extra condition.) The □-modal
  objects — those X with □X → X invertible — form the essential image of F,
  and the ◯-modal objects the essential image of H: *two* subcategories of
  ℰ, each equivalent to the common base ℱ, but in general **distinct as
  subcategories** (in 𝒮: discrete vs codiscrete, `01-level-1.md` §2).
  Rungs 0 and 1 have this shape; so does every level (D0.2).
- **Inner shape, ◯ ⊣ □.** F, H : ℰ → ℱ and G : ℱ → ℰ is fully faithful;
  set ◯ = G∘F and □ = G∘H. Here the ◯-modal and □-modal objects
  **coincide** — both are the essential image of G. Rung 2 has this shape:
  ʃ ⊣ ♭ arises from Π₀ ⊣ Disc ⊣ Γ with Disc the fully faithful middle, and
  both moments are fixed on the discrete objects. Inner-shape modalities
  arise on the ladder not from a single level but from a triple *straddling*
  one.

In both shapes the **unity of opposites** is the composite transform
□X → X → ◯X (counit of the comonad followed by unit of the monad).
*Grade: established (Lawvere 1991; nLab "adjoint modality").*
*Erratum note (July 10, 2026):* an earlier draft of this definition required
□ and ◯ to have "the same fixed subcategory," which is the inner shape's
property only and contradicted the rung-1 construction; see `NOTATION.md`
errata E2.

**D0.2 (level).** A **level** of ℰ is an essential subtopos: a geometric
embedding i₊ : ℱ ↪ ℰ (direct image fully faithful, inverse image i* left
exact) whose inverse image has a further left adjoint i₋, giving
i₋ ⊣ i* ⊣ i₊ and hence, by D0.1, an outer-shape adjoint modality
□ = i₋ i* ⊣ ◯ = i₊ i* on ℰ. *Grade: established (Lawvere 1991; nLab "level of a topos").*
*Remark on numbering:* this project numbers ladder rungs 0, 1, 2, … per the
roadmap; Lawvere's own examples index levels by "dimension" (in sSet, level
n = n-skeletal objects). The two schemes are not identified; rung numbers
are project-internal.

**D0.3 (ordering of levels).** For levels i, j write **i ≼ j** if every
i-□-modal object is j-□-modal *and* every i-◯-modal object is j-◯-modal.
Write **i ≺ j** when i ≼ j and j ⋠ i. This containment-of-both-moments
order is the only order used in this spec. The literature orders levels by
subtopos inclusion and states the equivalence with the two-moment
containment: for levels, factoring of l₊ through j₊ is equivalent to
factoring of l₋ through j₋ (Menni, TAC 34 (2019) no. 25, p. 715; Lawvere
1991's parenthetical "included on the left and equivalently on the right").
So the orders coincide. *Grade of the definition: established. Grade of the
equivalence with subtopos inclusion: claimed (cited: Menni 2019; not
reproved here — this spec never relies on it).*
*Erratum note (July 10, 2026):* an earlier draft offered subcategory
containment "compatibly with both adjoints" as the definition with the
two-moment condition as an unproven "equivalently." The two-moment condition
is what every proof in this spec actually uses, so it is now the definition.

**D0.4 (resolution and Aufhebung).** Level j **resolves** the opposition of
level i, written **i ≪ j**, if i ≼ j and ◯ⱼ□ᵢ ≅ □ᵢ (naturally). The
order condition is part of the literature's “way above” relation; the
displayed isomorphism is its one additional, nonautomatic clause. The
**Aufhebung** of level i, written **ī**, is the least level (if it exists)
with i ≪ ī. It need not be strictly higher: a level may resolve itself
(notably, the maximal identity level does) and then may be its own
Aufhebung. *Grade: established (nLab "Aufhebung"; Menni 2019, Def. 1.1).*
*Source note (OP-15, resolved July 11, 2026; order correction P0.7):* the
order-plus-one-additional-clause definition above is the literature's,
unanimously — Lawvere 1991 (Como) / 1992 / 2009,
Kennett–Riehl–Roy–Zaks 2011, Marmolejo–Menni and Menni 2019 ("way above":
both lower inclusions factor through the higher *sheaf* inclusion, i.e.
◯ⱼ□ᵢ ≅ □ᵢ with ◯ⱼ◯ᵢ ≅ ◯ᵢ automatic from i ≼ j), and nLab "Aufhebung". The
companion condition □ⱼ◯ᵢ ≅ ◯ᵢ is a *different* notion, named
**co-resolution** on the nLab (**bi-resolution** when both hold), and never
enters the Aufhebung. This spec still verifies the companion clause
explicitly wherever it holds (for level 0: ♭∗ ≅ ∗, `01-level-1.md` §7) —
as information about the model, not as part of the definition. The two
notions genuinely diverge: see the 𝒮 computation in `01-level-1.md` §5.4.

## 2. Level 0 exists in every topos

**Proposition 0.1 (the trivial adjoint triple).** For any topos ℰ there is
an adjoint triple

    i₋ ⊣ i* ⊣ i₊ : 1 → ℰ,   i₋(•) = ∅,   i₊(•) = ∗,

where i* : ℰ → 1 is the unique functor, and this exhibits **1** as an
essential subtopos — a level, called **level 0**. *Grade: established.* ⚙
(model instances)

*Proof.* Adjointness i₋ ⊣ i*: for X ∈ ℰ, Hom_ℰ(∅, X) is a singleton by
initiality of ∅, and Hom₁(•, i*X) = Hom₁(•, •) is a singleton; the bijection
is trivially natural. Adjointness i* ⊣ i₊: Hom₁(i*X, •) is a singleton, and
Hom_ℰ(X, ∗) is a singleton by terminality of ∗. Geometric embedding: i₊ is
fully faithful since Hom₁(•, •) = {id} ≅ {id_∗} = Hom_ℰ(∗, ∗); i* preserves
finite limits since every diagram in **1** commutes and every cone is a
limit cone. Essentialness is the exhibited left adjoint i₋. ∎

**Corollary 0.2 (the level-0 modality).** The induced adjoint modality on ℰ
is the pair of constant functors

    □₀X = ∅,   ◯₀X = ∗,

with □₀ ⊣ ◯₀ given by the singleton bijection
Hom(∅, Y) ≅ Hom(X, ∗). Both are idempotent (□₀□₀X = ∅ = □₀X on the nose;
dually for ◯₀). The unity of opposites is the unique composite ∅ → X → ∗:
every object is suspended between nothing and unity. *Grade: established.*
⚙ (model instances)

**Proposition 0.3 (level 0 is minimal).** For every level j of ℰ,
0 ≼ j. *Grade: established.*

*Proof.* Let j₋ ⊣ j* ⊣ j₊ : ℱ ↪ ℰ present level j. The □-modal objects of
level 0 are the initial objects of ℰ; those of level j are the essential
image of j₋. Since j₋ is a left adjoint it preserves colimits, so
j₋(∅_ℱ) ≅ ∅_ℰ, hence ∅_ℰ is j-□-modal. Dually j₊ is a right adjoint, so
j₊(∗_ℱ) ≅ ∗_ℰ and ∗_ℰ is j-◯-modal. ∎

## 3. Nondegeneracy is existence

The zeroth opposition is *genuine* exactly when there is something rather
than nothing.

**Lemma 0.4 (strict initiality).** In any cartesian closed category with
initial object ∅ (in particular any topos), any map f : A → ∅ is an
isomorphism. *Grade: established.*

*Proof.* First, ∅ × A is initial: Hom(∅ × A, X) ≅ Hom(∅, X^A), a singleton
by initiality. Now given f : A → ∅, form ⟨f, id_A⟩ : A → ∅ × A. The
composite A → ∅ × A → A with the projection π₂ is id_A. The composite
∅ × A → A → ∅ × A (projection then ⟨f, id⟩) is an endomorphism of an initial
object, hence id. So A ≅ ∅ × A ≅ ∅. ∎

**Proposition 0.5 (degeneracy).** For a topos ℰ the following are
equivalent: (i) ∅ ≅ ∗; (ii) ∅ has a global point ∗ → ∅; (iii) ℰ ≃ **1**.
Hence the level-0 opposition is nondegenerate — its two moments are
non-isomorphic — precisely when ℰ is nondegenerate. *Grade: established.* ⚙
(model instances)

*Proof.* (i)⇒(ii): the isomorphism ∗ → ∅ is a point. (ii)⇒(iii): a point
p : ∗ → ∅ makes ∗ ≅ ∅ by Lemma 0.4; then for every X the unique map
X → ∗ ≅ ∅ makes X ≅ ∅ by Lemma 0.4 again, so all objects are isomorphic and
all hom-sets are singletons: ℰ ≃ **1**. (iii)⇒(i): in **1** all objects are
isomorphic. ∎

## 4. The bit: Ω and the level-0 opposition

The subobject classifier is the topos's intrinsic yes/no object (roadmap
§1.1). Level 0 furnishes its two distinguished points, and the distinction
between Ω and the naive bit 1+1 is a theorem.

**D0.5 (recalled).** A subobject classifier is a mono ⊤ : ∗ ↪ Ω such that
every mono S ↪ X is the pullback of ⊤ along a unique χ_S : X → Ω. Every
topos has one. *Grade: established (cite: Mac Lane–Moerdijk I.3–I.4).*

**D0.6 (the two canonical points).** ∗ has two canonical subobjects
supplied by level 0: id_∗ (the ◯₀-moment) and ∅ → ∗ (the □₀-moment). The
latter is monic: for parallel a, b : A → ∅, Lemma 0.4 makes a an
isomorphism, so A is initial and Hom(A, ∅) is a singleton, forcing a = b.
Define **⊤** = χ_{id_∗} and **⊥** = χ_{∅→∗} : ∗ → Ω.
*Grade: established.*

**Proposition 0.7 (the bit is nondegenerate iff the topos is).** ⊤ ≠ ⊥ if
and only if ℰ is nondegenerate. *Grade: established.* ⚙ (model instances)

*Proof.* If ℰ is degenerate all parallel maps are equal, so ⊤ = ⊥. If
⊤ = ⊥ then by uniqueness of classifying maps id_∗ and ∅ ↪ ∗ are the same
subobject, so ∅ ≅ ∗ and Proposition 0.5 applies. ∎

**Proposition 0.8 (when the bit is the naive bit).** The canonical map
[⊤, ⊥] : ∗ + ∗ → Ω is an isomorphism if and only if ℰ is Boolean (every
subobject has a complement). *Grade: established (cite: Mac Lane–Moerdijk
VI.1, Johnstone, Sketches of an Elephant A1.4/D; proof not reproduced
here).* ⚙ (model instances via §5)

**Remark 0.9 (the §1.1 reading, graded).** The mathematics above says: the
intrinsic yes/no object Ω always carries the two level-0 points ⊤, ⊥, but
coincides with the *token* bit 1+1 only in Boolean toposes; the Sierpiński
topos already refuses the identification (§5.2). The *interpretive* claim of
roadmap §1.1 — that Wheeler's "bit" is rightly read as the opposition
∅ ⊣ ∗ rather than as a two-element set — is **conjectural** (project
reading), and this section is its formal peg, not its proof.

## 5. Worked models

### 5.1 Set

∅ = the empty set, ∗ = a singleton. Nondegeneracy: ∅ ≄ ∗ since they have
different cardinality. Ω = {⊥, ⊤} = 1+1, and Set is Boolean, consistent
with Proposition 0.8. □₀X = ∅, ◯₀X = ∗ for every X. *Grade: established.*
⚙

### 5.2 The Sierpiński topos 𝒮 = Set^→

Objects: set maps X = (ξ_X : X₀ → X₁); morphisms X → Y: pairs
(f₀ : X₀ → Y₀, f₁ : X₁ → Y₁) with ξ_Y ∘ f₀ = f₁ ∘ ξ_X. This is the functor
category Set^𝟚 on the interval 𝟚 = {0 → 1}, a presheaf topos (𝒮 ≅ sheaves
on Sierpiński space). *Grade: established.*

**Level-0 data.** ∅_𝒮 = (∅ → ∅), ∗_𝒮 = (1 → 1) (both computed pointwise, as
(co)limits in functor categories are pointwise). Nondegenerate: the
components have different cardinalities. □₀X = (∅ → ∅), ◯₀X = (1 → 1).
*Grade: established.* ⚙

**Subobjects.** A subobject of X is a pair (S₀ ⊆ X₀, S₁ ⊆ X₁) with
ξ_X(S₀) ⊆ S₁ (mono = pointwise injection, and naturality forces the
containment). *Grade: established.*

**Proposition 0.10 (Ω in 𝒮, computed).** Ω_𝒮 = (ω : Ω₀ → Ω₁) with

    Ω₀ = {now, later, never},   Ω₁ = {yes, no},
    ω(now) = ω(later) = yes,    ω(never) = no,

and ⊤ = (now, yes) : ∗ → Ω. For a subobject (S₀, S₁) ⊆ X the classifying
map is

    χ₀(x) = now   if x ∈ S₀
          = later if x ∉ S₀ and ξ_X(x) ∈ S₁
          = never if ξ_X(x) ∉ S₁
    χ₁(y) = yes if y ∈ S₁, else no.

*Grade: established.* ⚙

*Proof.* χ is a morphism: ω(χ₀(x)) = yes ⇔ χ₀(x) ∈ {now, later}
⇔ ξ_X(x) ∈ S₁ (for x ∈ S₀ this holds by the containment ξ(S₀) ⊆ S₁)
⇔ χ₁(ξ_X(x)) = yes. Pullback of ⊤ along χ: at stage 0, χ₀(x) = now iff
x ∈ S₀; at stage 1, χ₁(y) = yes iff y ∈ S₁; so the pullback is exactly
(S₀, S₁). Uniqueness: suppose χ′ also classifies (S₀, S₁). At stage 1, χ′₁
must send S₁ to yes and its complement to no (pullback condition at
stage 1), forcing χ′₁ = χ₁. At stage 0, the pullback condition forces
χ′₀(x) = now exactly on S₀; for x ∉ S₀, naturality forces
ω(χ′₀(x)) = χ₁(ξ_X(x)), which by the two-element structure of Ω₁
distinguishes later (if ξ_X(x) ∈ S₁) from never (if not), forcing
χ′₀ = χ₀. ∎

**Corollary 0.11 (𝒮 is not Boolean; the bit refuses the naive bit).**
∗ + ∗ = (2 → 2) pointwise, but Ω₀ has three elements, so [⊤, ⊥] is not an
isomorphism and 𝒮 is not Boolean (Proposition 0.8). The middle truth value
*later* — "no at stage 0, yes at stage 1" — is exactly what the token bit
cannot see. *Grade: established.* ⚙

### 5.3 Simplicial sets (truncated per P0.5 scope)

sSet = presheaves on the simplex category Δ. ∅ = the empty simplicial set,
∗ = Δ[0]. Nondegenerate: their sets of 0-simplices differ. □₀X = ∅,
◯₀X = Δ[0]. *Grade: established.* ⚙ (truncated instances)

**Ω in low dimensions.** Ω_n = {sieves on [n]} ≅ {subcomplexes of Δ[n]}
(general form: established; cite Mac Lane–Moerdijk I.4 for presheaf
classifiers). Computed fragments:

- Ω₀ ≅ {∅, Δ[0]} — two elements. *Proof:* any nonempty sieve on [0]
  contains some [m] → [0]; every [k] → [0] factors through it (pick any map
  [k] → [m], e.g. constant; composition with [m] → [0] is the unique
  [k] → [0]), so the sieve is maximal. ∎ ⚙
- Ω₁ ≅ {∅, {v₀}, {v₁}, ∂Δ[1], Δ[1]} — five elements, the subcomplexes of
  Δ[1]. *Proof:* a subcomplex is determined by which of the two vertices
  and the nondegenerate edge it contains, subject to closure under faces:
  containing the edge forces both vertices; all four vertex-subsets are
  otherwise realized. ∎ ⚙

**Non-Booleanness.** (∗ + ∗)₁ has two elements (the two degenerate edges)
while Ω₁ has five, so [⊤, ⊥] is not an isomorphism: sSet is not Boolean.
*Grade: established.* ⚙

*(The full simplicial story — Ω_n for all n, and the level-1 structure —
is deferred to `01-level-1.md`; examples compute only finite truncations,
per the approved P0.5 scope.)*

## 6. The degenerate opposition id ⊣ id

The identity functor on ℰ is trivially an idempotent monad and comonad, and
id ⊣ id (hom-set identity). The corresponding level is ℰ itself (the
identity subtopos), the **maximal** level: j ≼ max for every level j, dually
to Proposition 0.3. Its opposition has coincident moments — nothing is
opposed — which is why the ladder's ascent happens strictly between level 0
and the maximal level. *Grade: established.*

Since max ≼ max and ◯_max□_max = id, max resolves itself. With the
reflexive way-above definition D0.4, its Aufhebung therefore exists and is
max itself. *Grade: established.*

## 7. Forward: what level 1 must resolve

By D0.4, a level j with 0 ≼ j resolves level 0 iff ◯ⱼ∅ ≅ ∅ — "the
◯ⱼ-reflection of nothing is nothing." In a nondegenerate topos level 0 does
not resolve itself, since ◯₀∅ = ∗ ≇ ∅, so any resolver is then strictly
above it. For the cohesive rung this reads
**♯∅ ≅ ∅**, and `01-level-1.md` must: (a) verify it in 𝒮 and in sSet-like
models where it holds; (b) verify the companion clause □ⱼ∗ ≅ ∗ (♭∗ ≅ ∗) per
the honesty remark in D0.4; (c) establish whether ♭ ⊣ ♯ is the *minimal*
resolving level in the worked models, i.e. whether it is the Aufhebung 0̄
there and not merely a resolution. *Grade of (a)–(c) statements: to be
established in `01-level-1.md`; nothing is claimed here.*

## 8. Claim ledger

| # | Claim | Grade | Script (P0.5) |
|---|---|---|---|
| 0.1 | Trivial adjoint triple 1 → ℰ; level 0 exists | established (proved here) | model instances ⚙ |
| 0.2 | □₀ = ∅, ◯₀ = ∗ form an adjoint modality | established (proved here) | model instances ⚙ |
| 0.3 | Level 0 is ≼-minimal | established (proved here) | — |
| 0.4 | Strict initiality in a CCC | established (proved here) | — |
| 0.5 | ∅ ≅ ∗ ⇔ ∅ has a point ⇔ ℰ ≃ 1 | established (proved here) | model instances ⚙ |
| 0.7 | ⊤ ≠ ⊥ ⇔ nondegenerate | established (proved here) | model instances ⚙ |
| 0.8 | Ω ≅ 1+1 ⇔ Boolean | established (cited: MM VI.1) | model instances ⚙ |
| 0.9 | Wheeler bit-as-opposition reading | conjectural (project) | — |
| 0.10 | Ω_𝒮 = (3 → 2), classifier verified | established (proved here) | full check ⚙ |
| 0.11 | 𝒮 non-Boolean | established (proved here) | full check ⚙ |
| 5.3 | Ω₀, Ω₁ in sSet; sSet non-Boolean | established (proved here, truncated; general form cited) | truncated check ⚙ |
| 6 | id ⊣ id is the maximal level | established (proved here) | — |

## References for this section

Lawvere, *Some thoughts on the future of category theory* (1991) — levels,
unity of opposites. — Mac Lane–Moerdijk, *Sheaves in Geometry and Logic*
(1992) — I.3–I.4 (Ω, presheaf classifiers), VI.1 (Boolean toposes). —
Johnstone, *Sketches of an Elephant* (2002) — A1.4 (Booleanness), A4.5
(essential subtoposes). — nLab: *adjoint modality*, *level of a topos*,
*Aufhebung*.
