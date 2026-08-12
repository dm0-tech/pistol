# Level 1 — The Opposition ♭ ⊣ ♯

*Spec section (P0.2). Notation per `NOTATION.md` (frozen); general
definitions D0.1–D0.4 and results 0.x per `00-level-0.md`. Grades:
**established** / **claimed** / **conjectural**; ⚙ marks finite computations
owed to `examples/` (P0.5). Claim ledger in §8.*

**Summary of findings.** Level 1 (♭ ⊣ ♯) exists in both worked models via
one general theorem (§1). The resolution of level 0, however, is
*model-dependent*: it holds in sSet (§5.3) and **fails in the Sierpiński
topos** (§5.2), where the obstruction is exactly the site's pointless
representable. 𝒮 also exposed a definitional fork in D0.4: adding the
companion co-resolution clause gives a different Aufhebung answer in 𝒮.
That fork was registered as OP-15 and **resolved from the primary sources**
(§5.4): the
literature uses the reflexive level order plus one additional resolution
clause (not the companion co-resolution clause), and the Aufhebung of level
0 in 𝒮 is the open level (Prop 1.13), not ♭ ⊣ ♯.

## 1. The general theorem: presheaf toposes over a site with a point-like terminal object

Throughout this section C is a small category **with a terminal object t**,
and ℰ = PSh(C) = Set^(C^op). Write y for the Yoneda embedding, so the
terminal presheaf is ∗ = y t (each (y t)(c) = Hom_C(c, t) is a singleton).

**Theorem 1.1 (the level-1 triple).** There is an adjoint triple

    Disc ⊣ Γ ⊣ coDisc : Set → ℰ

where:

- Γ = ev_t (evaluation at t), equivalently Γ = Hom_ℰ(∗, −) (Yoneda, since
  ∗ = y t);
- Disc S = the constant presheaf at S, with (Disc S)(c) = S and all
  restriction maps id_S;
- (coDisc S)(c) = S^(Hom_C(t, c)), with restriction along f : c′ → c given
  by precomposition with Hom_C(t, f).

Disc and coDisc are fully faithful, so this exhibits Set as an essential
subtopos of ℰ: a level, called **level 1**. *Grade: established.*

*Proof.* **Disc ⊣ Γ.** A morphism φ : Disc S → X is a family
φ_c : S → X(c) with X(f) ∘ φ_c = φ_{c′} for every f : c′ → c. Taking
f = !_c : c → t (the unique map), naturality reads φ_c = X(!_c) ∘ φ_t: the
family is determined by φ_t : S → X(t). Conversely any g : S → X(t) defines
φ_c := X(!_c) ∘ g, which is natural: for f : c′ → c,
X(f) ∘ φ_c = X(f) X(!_c) g = X(!_c ∘ f) g = X(!_{c′}) g = φ_{c′}, using
!_c ∘ f = !_{c′} (terminality of t). The two constructions are mutually
inverse, giving Hom(Disc S, X) ≅ Hom(S, Γ X) naturally.

**Γ ⊣ coDisc.** A morphism ψ : X → coDisc S is a family
ψ_c : X(c) → S^(Hom(t,c)), natural in c. For each p : t → c, naturality of
ψ along p : t → c (a map in C, inducing restriction X(c) → X(t) and
evaluation-at-composition on the codomain) gives
ψ_c(x)(p) = ψ_t(X(p)(x))(id_t): the whole family is determined by
g := ψ_t(−)(id_t) : X(t) → S. Conversely any g : X(t) → S defines
ψ_c(x)(p) := g(X(p)(x)); naturality: for f : c′ → c and p′ : t → c′,
ψ_{c′}(X(f)x)(p′) = g(X(p′)X(f)x) = g(X(f ∘ p′)x) = ψ_c(x)(f ∘ p′), which
is exactly the restriction of ψ_c(x) along Hom(t, f). Mutually inverse,
giving Hom(X, coDisc S) ≅ Hom(Γ X, S) naturally.

**Full faithfulness.** Γ Disc S = (Disc S)(t) = S and
Γ coDisc S = S^(Hom(t,t)) = S^(id) ≅ S, both naturally; a left or right
adjoint is fully faithful iff the corresponding (co)unit is an isomorphism,
which these identities exhibit. Geometric embedding: coDisc is fully
faithful with left-exact left adjoint Γ (Γ = ev_t preserves all limits as
they are computed pointwise); essentialness is the further left adjoint
Disc. ∎

**Corollary 1.2 (the level-1 modality).** □₁ = **♭** := Disc ∘ Γ and
◯₁ = **♯** := coDisc ∘ Γ form an adjoint modality with

    ♭X = constant presheaf at X(t),   (♯X)(c) = X(t)^(Hom(t,c)).

The □-modal (**discrete**) objects are those with all restriction maps
X(!_c) : X(t) → X(c) — equivalently the counit ♭X → X — invertible; the
◯-modal (**codiscrete**) objects are those with the unit X → ♯X invertible.
The unity of opposites ♭X → X → ♯X is, at stage t, the identity of X(t):
level 1 opposes two ways of extending the same *points* to a figure — freely
(discretely) and cofreely (codiscretely). *Grade: established.* ⚙ (model
instances)

*Proof.* ♭ ⊣ ♯ by pasting: Hom(♭X, Y) = Hom(Disc Γ X, Y) ≅ Hom(Γ X, Γ Y)
≅ Hom(X, coDisc Γ Y) = Hom(X, ♯Y). Idempotence: ♭♭ = Disc (Γ Disc) Γ ≅
Disc Γ = ♭ and dually, by Γ Disc ≅ id ≅ Γ coDisc from Theorem 1.1. The
stage-t component of both counit and unit is the identity by the same
identities. ∎

**Proposition 1.3 (level 0 ≺ level 1).** In ℰ = PSh(C) as above with Set
nondegenerate: every initial object is discrete, every terminal object is
codiscrete, and the containment of levels is strict. *Grade: established.*

*Proof.* ∅ = Disc ∅ (the constant-∅ presheaf is initial, as colimits are
pointwise) and ∗ = coDisc 1 (1^(Hom(t,c)) = 1 = (y t)(c)), so the level-0
moments are level-1 modal (D0.3). Strictness: Disc 2 is discrete but
neither initial nor terminal (its stage-t value 2 is neither ∅ nor 1). ∎

**Proposition 1.4 (companion clause, discharged).** ♭∗ ≅ ∗ in every ℰ as
above. Hence the companion condition □₁◯₀ ≅ ◯₀ of the D0.4 honesty remark
holds generally at level 1. *Grade: established.*

*Proof.* Γ∗ = ∗(t) = Hom(t, t) = 1 and Disc 1 is the constant presheaf at
1, which is the terminal presheaf. ∎

**Lemma 1.5 (resolution criterion).** ♯∅ ≅ ∅ if and only if every object
of C admits a map from t ("every basic figure has a point").
*Grade: established.*

*Proof.* (♯∅)(c) = ∅^(Hom(t,c)), which is ∅ when Hom(t, c) ≠ ∅ and a
singleton when Hom(t, c) = ∅. So ♯∅ agrees with the constant-∅ presheaf iff
no Hom(t, c) is empty. ∎

## 2. Level 1 in the Sierpiński topos

Dictionary. 𝒮 = Set^(0→1) of `00-level-0.md` §5.2 is PSh(C) for
C = {a → b} (one non-identity arrow u), via X₀ := X(b), X₁ := X(a),
ξ_X := X(u); the terminal object of C is t = b. Representables: y b = ∗ =
(1 → 1) and y a = (∅ → 1). *Grade: established (finite check).* ⚙

Instantiating §1 (all *established*, ⚙ model instances):

- Γ X = X(b) = X₀ (global points);
- Disc S = (S = S), coDisc S = (S → 1) (since Hom(b, b) = {id},
  Hom(b, a) = ∅ gives S^1 = S at stage 0 and S^∅ = 1 at stage 1);
- **♭X = (X₀ = X₀)**, **♯X = (X₀ → 1)**;
- discrete objects: ξ_X invertible; codiscrete objects: X₁ ≅ 1;
- unity ♭X → X → ♯X = (id, ξ_X) followed by (id, !).

## 3. Level 1 in simplicial sets

sSet = PSh(Δ); t = [0] is terminal in Δ (the unique order map [n] → [0]).
Instantiating §1 (all *established*; ⚙ truncated instances per approved
scope):

- Γ X = X₀ (0-simplices = global points, since ∗ = Δ[0]);
- Disc S = the constant simplicial set; (coDisc S)_n = S^(Hom([0],[n])) =
  S^(n+1) (a codiscrete n-simplex is any (n+1)-tuple of points);
- **♭X = constant at X₀**, **(♯X)_n = X₀^(n+1)**;
- discrete objects: all structure maps to/from degeneracies of X₀
  invertible (X ≅ constant); codiscrete: X ≅ coDisc X₀.

## 4. The level lattice of 𝒮, completely

Subtoposes of PSh(C) correspond to Grothendieck topologies on C
(*established*, cited: Mac Lane–Moerdijk Ch. V; not reproved here). For
C = {a → b} this is a finite enumeration.

**Proposition 1.6 (topologies on C).** C has exactly four Grothendieck
topologies. Sieves: on a: ∅_a and the maximal M_a; on b: ∅_b, U = {u}, and
the maximal M_b. The topologies are:

1. **J_triv** = (M_a; M_b) — subtopos 𝒮 itself;
2. **J_open** = (M_a; M_b, U) — sheaves: X with ξ_X invertible (the
   discrete objects);
3. **J_closed** = (M_a, ∅_a; M_b) — sheaves: X with X₁ ≅ 1 (the codiscrete
   objects);
4. **J_all** = (M_a, ∅_a; M_b, U, ∅_b) — subtopos ≃ 1.

*Grade: established.* ⚙ (finite enumeration)

*Proof.* A topology assigns J(a) ⊆ {M_a, ∅_a} ∋ M_a and
J(b) ⊆ {M_b, U, ∅_b} ∋ M_b, subject to stability and transitivity.
Stability along u: u*M_b = M_a, u*U = {f : x → a | u∘f ∈ U} = {id_a} = M_a
(the only morphisms into a are id_a), u*∅_b = ∅_a — so the only constraint
is: ∅_b ∈ J(b) ⇒ ∅_a ∈ J(a). Transitivity gives two forcings. (i) If
S = ∅_c ∈ J(c) then for *any* sieve R on c the hypothesis "h*R ∈ J for all
h ∈ S" is vacuous, so all sieves on c lie in J(c); in particular
∅_b ∈ J(b) ⇒ U ∈ J(b). (ii) If U ∈ J(b) and ∅_a ∈ J(a): take S = U,
R = ∅_b; the only h ∈ U is u (precomposites of u equal u), and
u*∅_b = ∅_a ∈ J(a), so ∅_b ∈ J(b) is forced. Enumerating the eight a
priori candidates against these three constraints leaves exactly the four
listed. Sheaves for J_open: the single nontrivial cover U of b demands
X(b) ≅ {matching families for U} ≅ X(a), i.e. ξ_X = X(u) invertible.
Sheaves for J_closed: the empty cover of a demands X(a) ≅ {empty matching
family} = 1, i.e. X₁ ≅ 1. Sheaves for J_all: both, leaving X ≅ (1 → 1)
only. ∎

**Proposition 1.7 (all four are levels; the lattice is a diamond).** Each
of the four subtoposes is essential, hence a level of 𝒮:

| Level | i₋ ⊣ i* ⊣ i₊ | □ | ◯ |
|---|---|---|---|
| 0 (trivial) | ∅ ⊣ (X ↦ •) ⊣ ∗ | ∅ | ∗ |
| **open** | S ↦ (∅ → S) ⊣ (X ↦ X₁) ⊣ Disc | (∅ → X₁) | (X₁ = X₁) |
| **closed** (= level 1, §2) | Disc ⊣ Γ ⊣ coDisc | ♭X = (X₀ = X₀) | ♯X = (X₀ → 1) |
| max | id ⊣ id ⊣ id | X | X |

with 0 ≺ open ≺ max, 0 ≺ closed ≺ max, and open, closed incomparable: the
complete level lattice of 𝒮 is the four-element diamond.
*Grade: established.* ⚙

*Proof.* Trivial and max: `00-level-0.md` Prop 0.1 and §6. Closed:
Theorem 1.1 with the §2 dictionary (its ◯-fixed objects {X₁ ≅ 1} are the
J_closed-sheaves). Open: the triple is verified by hom-set computation:
Hom((∅ → S), X) ≅ Hom(S, X₁) (a morphism has trivial stage-0 component and
free stage-1 component) and Hom(X, Disc S) ≅ Hom(X₁, S) (a morphism
(f₀, f₁) into (S = S) must satisfy f₀ = f₁ ∘ ξ, so f₁ is free and f₀
determined); both outer functors are fully faithful (direct check:
(j₋S)₁ = S and (Disc S)₁ = S recover S). Its ◯-fixed objects {ξ invertible}
are the J_open-sheaves. Orderings: initial objects satisfy both X₀ = ∅ and
ξ invertible; terminal objects satisfy both X₁ = 1 and ξ invertible — this
gives 0 ≺ open and 0 ≺ closed (D0.3); strictness and ≺ max as in Prop 1.3.
Incomparability: (∅ → 1) is open-□-modal but not discrete (ξ : ∅ → 1 not
invertible), so open ⋠ closed on □-moments; (2 = 2) is discrete but not
open-□-modal (X₀ = 2 ≠ ∅), so closed ⋠ open. There are no further levels
because there are no further subtoposes (Prop 1.6). ∎

**Remark 1.8 (one base, two gluings).** The discrete objects {ξ invertible}
are simultaneously the □-fixed subcategory of the *closed* level (image of
Disc = i₋) and the ◯-fixed subcategory of the *open* level (image of
Disc = i₊). Both middle levels present the same base Set, embedded with
opposite orientations. *Grade: established.*

## 5. Resolution of level 0: where the Aufhebung lives

Recall D0.4: level j resolves level 0 (0 ≪ j) iff 0 ≼ j and
◯ⱼ∅ ≅ ∅; Proposition 0.3 makes the order condition automatic for every
level j here. The honesty remark's companion clause is □ⱼ∗ ≅ ∗.

### 5.1 General criterion

By Lemma 1.5, level 1 resolves level 0 in PSh(C) iff every object of the
site admits a map from the terminal object. The companion clause holds
always (Prop 1.4). *Grade: established.*

### 5.2 In 𝒮: level 1 does NOT resolve level 0

**Proposition 1.9.** In 𝒮: ♯∅ = (∅ → 1) ≇ (∅ → ∅) = ∅. Level 1 fails the
primary clause (and satisfies the companion clause, Prop 1.4). Dually, the
open level satisfies the primary clause and fails the companion:
◯_open ∅ = Disc(∅) = ∅ but □_open ∗ = (∅ → 1) ≇ ∗.
*Grade: established.* ⚙

*Proof.* ♯∅ = coDisc(Γ∅) = coDisc ∅ = (∅ → 1) by the §2 formulas; its
stage-1 component is nonempty, ∅'s is empty. ◯_open ∅ = Disc((∅)₁) =
Disc ∅ = ∅. □_open ∗ = (∅ → ∗₁) = (∅ → 1) ≇ (1 → 1). ∎

**Remark 1.10 (the obstruction is the pointless figure).** Both failures
are *the same object*: ♯∅ = (∅ → 1) = □_open ∗ = y a — the representable at
the non-terminal site object, which by Lemma 1.5's criterion is precisely
the site object with no point (Hom(b, a) = ∅). 𝒮 contains a basic figure
that exists at stage 1 with no stage-0 point, and codiscretely, nothing
cannot remain nothing across it. *Grade: established (the identification);
the dialectical gloss is Track-A material, not a claim.*

### 5.3 In sSet: level 1 resolves level 0

**Proposition 1.11.** In sSet: ♯∅ ≅ ∅ and ♭∗ ≅ ∗ — both clauses hold.
*Grade: established.* ⚙ (truncated instances)

*Proof.* Every [n] admits a map from [0] (any vertex v_i : [0] → [n]), so
Lemma 1.5 applies: (♯∅)_n = ∅^(n+1) = ∅. Companion: Prop 1.4. ∎

**Lemma 1.12a (Kelly–Lawvere criterion).** For a small category C, the
levels of PSh(C) are in order-preserving bijection with the **idempotent
two-sided ideals** of C: classes I of morphisms closed under composition
with arbitrary morphisms on both sides, such that every f ∈ I factors as
f = g∘h with g, h ∈ I. Moreover the level induced by a full subcategory
B ⊆ C has ideal {morphisms of C factoring through an object of B}.
*Grade: established (cited: Kelly–Lawvere 1989, Theorems 4.4 and 4.6;
statement verified July 10, 2026 against the original paper — the scan on
the Lawvere Archives — and against three independent paraphrases
(Lucyshyn-Wright arXiv:1108.4032 Rem. 1.5.6; Marmolejo–Menni "Level ε"
Def. 2.6; nLab "level of a topos"). Proof not reproduced here.)*

**Lemma 1.12b (ideals of Δ).** The two-sided ideals of Δ are exactly ∅,
I_n = {f : f factors through some [k] with k ≤ n} for n ≥ 0, and mor Δ —
and every one is idempotent. *Grade: established (proved here; the
argument follows Kennett–Riehl–Roy–Zaks, arXiv:1003.5944, where the
classification is asserted with a proof idea but not as a numbered
theorem).*

*Proof.* In Δ every epi and every mono is split: an order-preserving
surjection (resp. injection) of nonempty finite linear orders admits an
order-preserving section (resp. retraction). Let I be an ideal and f ∈ I
with image factorization f = m∘e through [j]. Picking a section s of e and
a retraction r of m gives id_{[j]} = r∘f∘s ∈ I (two-sidedness). So
S := {j : id_{[j]} ∈ I} determines I: two-sidedness gives
I ⊇ {f factoring through [j], j ∈ S}, and the argument just given proves
the reverse containment. Since [i] is a retract of [j] for i ≤ j, S is
down-closed in ℕ, so S ∈ {∅, {0,…,n}, ℕ} and I ∈ {∅, I_n, mor Δ}.
Idempotence: ∅ trivially; any f ∈ I_n has epi–mono factorization f = m∘e
through its image [j], j ≤ n, with both factors in I_n; mor Δ contains
identities. ∎

**Proposition 1.12 (minimality in sSet).** The levels of sSet are the
trivial level, the n-skeletal levels for n ≥ 0, and the maximal level
(Lemmas 1.12a–b: ∅ ↔ trivial, I_n ↔ PSh(Δ_{≤n}) = n-skeletal, mor Δ ↔
sSet); in particular no exotic level sits between the trivial and
0-skeletal levels. The 0-skeletal level is level 1 of §3 (its triple is
left Kan extension ⊣ restriction ⊣ right Kan extension along Δ_{≤0} ↪ Δ,
which is Disc ⊣ Γ ⊣ coDisc). Hence level 1 is the minimal nontrivial
level, and since it resolves level 0 while level 0 does not resolve itself
(although 0 ≼ 0, ◯₀∅ = ∗ ≇ ∅), the Aufhebung is 0̄ = level 1 in sSet.
*Grade: established (classification from Lemmas 1.12a–b; identification
0-skeletal = level 1 by the Kan extensions along Δ_{≤0} ≅ {[0]} ↪ Δ being
computed by the §3 formulas). Both former OP-15 caveats — the citation and
the resolution-clause question — are now discharged (§5.4).*

### 5.4 The definitional fork, resolved (OP-15)

Under D0.4 (order plus one nonautomatic resolution clause), the resolving
levels of 𝒮 are exactly
{open, max} (Prop 1.9; ◯_max = id fixes ∅), so **0̄_𝒮 = the open level** —
and it is *not* ♭ ⊣ ♯. Under the two-clause variant (adding □ⱼ∗ ≅ ∗),
neither middle level of 𝒮 would qualify and the answer would jump to the
maximal level. In sSet both variants agree (0̄ = level 1, §5.3), so 𝒮 is the
minimal discriminating model.

**The source question is settled (July 11, 2026; reflexive order restored
by erratum E5 during P0.7): the literature uses order plus one additional
resolution clause, unanimously** — see the source note at D0.4. The
companion clause is nLab's separate notion of *co-resolution*; the nLab
"Aufhebung" page uses this very 𝒮 example to warn that resolution does not
imply co-resolution, and states the general result that in a ⊥-scattered
topos (𝒮 is one) the Aufhebung of ∅ ⊣ ∗ is the ¬¬-subtopos — which in 𝒮 is
precisely the open level. So:

**Proposition 1.13 (Aufhebung of level 0 in 𝒮).** 0̄_𝒮 = the open level.
*Grade: established (proved here — Prop 1.9 plus minimality in the Prop 1.7
diamond; consistent with nLab "Aufhebung", ⊥-scattered case).* ⚙

The dialectical reading is sharpened rather than spoiled: in 𝒮 the
opposition between nothing and unity is sublated not by the cohesive rung
but by the *smaller* open level, and ♭ ⊣ ♯ first resolves level 0 in models
(like sSet) where every basic figure has a point (Lemma 1.5). *Both horns
of the former fork remain computed in `examples/` as facts about 𝒮; only
the definitional question is closed.*

## 6. Discharge of level-0 §7 obligations

| Obligation (from `00-level-0.md` §7) | Status |
|---|---|
| (a) verify ♯∅ ≅ ∅ in 𝒮 and sSet-like models where it holds | Done: holds in sSet (Prop 1.11); **fails in 𝒮** (Prop 1.9), with the general criterion (Lemma 1.5) locating the failure |
| (b) verify companion ♭∗ ≅ ∗ | Done generally (Prop 1.4) |
| (c) minimality: is ♭ ⊣ ♯ the Aufhebung 0̄? | sSet: yes (Prop 1.12, classification proved via Lemmas 1.12a–b). 𝒮: no — 0̄_𝒮 = the open level (Prop 1.13, under the literature's order-plus-one-clause definition; OP-15 resolved, §5.4) |

## 7. Forward: toward rung 2

Both models carry a further left adjoint Π₀ ⊣ Disc (𝒮: Π₀X = X₁, sSet:
π₀ = connected components), extending the triple to the cohesive quadruple
and furnishing ʃ = Disc ∘ Π₀ — rung 2's opposition ʃ ⊣ ♭, an *inner-shape*
modality per D0.1: both moments are fixed on the discrete objects, unlike
rungs 0–1 whose moments are fixed on distinct subcategories. The level-2 file
must: (a) verify cohesion (Π₀ preserving finite products) in both models;
(b) state and check the Aufhebung relations of level 1 by level 2 under the
D0.4 definition *as resolved by OP-15*; (c) work the fracture/unity
structure. Nothing is claimed here.

## 8. Claim ledger

| # | Claim | Grade | Script (P0.5) |
|---|---|---|---|
| 1.1 | Level-1 triple in PSh(C), t terminal; formulas; ff | established (proved here) | model instances ⚙ |
| 1.2 | ♭ ⊣ ♯ adjoint modality; discrete/codiscrete characterization | established (proved here) | model instances ⚙ |
| 1.3 | 0 ≺ 1 strictly | established (proved here) | — |
| 1.4 | Companion clause ♭∗ ≅ ∗, general | established (proved here) | model instances ⚙ |
| 1.5 | ♯∅ ≅ ∅ ⇔ every site object has a point | established (proved here) | — |
| §2 | 𝒮 dictionary and level-1 formulas | established (proved here) | bounded formula regression ⚙ |
| §3 | sSet level-1 formulas | established (proved here) | truncated check ⚙ |
| 1.6 | Exactly four topologies on {a → b} | established (proved here) | full enumeration ⚙ |
| 1.7 | Level lattice of 𝒮 = diamond | established (proved here) | bounded modal checks + explicit incomparability witnesses ⚙ |
| 1.9 | ♯∅ ≇ ∅ in 𝒮; open level dual failure | established (proved here) | direct finite witnesses ⚙ |
| 1.10 | Both obstructions = y a (the pointless figure) | established (proved here) | direct finite witness ⚙ |
| 1.11 | Both clauses hold in sSet | established (proved here) | truncated check ⚙ |
| 1.12a | Kelly–Lawvere: levels ↔ idempotent ideals | established (cited; statement verified against the original) | — |
| 1.12b | Ideals of Δ = {∅, I_n, mor Δ}, all idempotent | established (proved here) | — |
| 1.12 | 0̄ = level 1 in sSet | established (proved here via 1.12a–b) | — |
| §5.4 | The two notions diverge in 𝒮 (resolution ≠ co-resolution) | established (both horns proved) | direct finite witnesses ⚙ |
| 1.13 | 0̄_𝒮 = the open level | established (proved here; order-plus-one-clause definition confirmed by sources — OP-15 resolved) | full topology enumeration + direct finite witnesses ⚙ |

## References for this section

Kelly–Lawvere, *On the complete lattice of essential localizations* (Bull.
Soc. Math. Belg. Sér. A 41, 1989, 289–319) — Thms 4.4/4.6: levels ↔
idempotent ideals; scan at lawverearchives.com. — Kennett–Riehl–Roy–Zaks,
*Levels in the toposes of simplicial sets and cubical sets* (JPAA 215,
2011; arXiv:1003.5944) — sSet levels = skeleta. — Mac Lane–Moerdijk,
*Sheaves in Geometry and Logic* (1992) — Ch. III (Grothendieck topologies),
Ch. V (subtoposes ↔ topologies). — Lawvere, *Axiomatic cohesion* (TAC
2007). — Lawvere, *Some thoughts on the future of category theory* (Como,
LNM 1488, 1991) and *Categories of Space and of Quantity* (1992) — the
"way above" relation, order plus one additional clause. — Marmolejo–Menni, *Level ε*
(arXiv:1909.12757) — way-above, Def. §2. — Menni, *Monic skeleta,
boundaries, Aufhebung* (TAC 34 (2019) no. 25) — way-above and the
order-equivalence, p. 715. — nLab: *level of a topos*, *Aufhebung*
(resolution vs co-resolution; ⊥-scattered case), *flat modality*, *sharp
modality*.
