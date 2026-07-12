# Rungs 0 and 1 — Nothing, Unity, and the Two Completions of a Point

*P0.3 draft. The D2 expository treatment of the ladder's first two rungs, in
the three-track format of roadmap §3. The canonical mathematics lives in
`spec/00-level-0.md` and `spec/01-level-1.md`; this text teaches it. Every
Track A assertion is backed by a numbered Track B statement, which is proved
in the spec — the ledger at the end makes that checkable. Notation per
`spec/NOTATION.md`.*

## How to read this

The text is written in three interleaved tracks, marked at each section:

- **Track A — the story.** Prose and pictures only. No category theory
  assumed. Readable on its own, start to finish: if you read only the A
  sections, you get the whole arc.
- **Track B — the mathematics.** Precise definitions and theorem
  statements, with proofs given where they teach and cited to the spec
  where they don't. Assumes comfort with categories, functors, adjoints.
- **Track C — the computations.** Where to *run* each claim. Everything
  concrete in rungs 0–1 happens in finite models, so nothing here asks for
  trust: `node examples/run.mjs` reproduces every computation in this text.

The discipline (roadmap §3): Track A never asserts anything Track B cannot
prove; where Track A offers a *reading* rather than a theorem, it says so
in the sentence itself.

**Suggested first pass:** read all the A sections straight through,
ignoring B and C. Second pass: A and B together, with the spec open.
Third pass: run the examples and break things.

---

# Rung 0 — the opposition of nothing and unity (∅ ⊣ ∗)

## A0. The first distinction · *Track A*

Start with as little as possible. Not with space, not with time, not with
sets of particles — just with the idea of a *universe of things*: some
collection of possible objects, and the ways they map into one another.
(Track B will call this a *topos*; for now, "universe" will do, and you may
safely picture the universe of ordinary sets.)

Here is the first fact, and it costs nothing: **every universe contains a
nothing and a unity.** There is an object ∅ with no stuff in it — *nothing*
— characterized by the property that it maps into everything in exactly one
way (there is nothing to send, so no choices to make). And there is an
object ∗ with exactly one featureless point in it — *unity* — characterized
dually: everything maps into it in exactly one way (there is nowhere to
choose to go). Every object X of the universe is therefore suspended on a
thread between the two:

```
∅ ──────► X ──────► ∗
nothing              unity
```

This pair is the ladder's ground floor. It is not two arbitrary objects; it
is an *opposition* — two extremes produced by one and the same act (Track B:
both come from a single adjoint triple, D0.1/Prop 0.1), pulling in opposite
directions. Lawvere's name for this shape, borrowed deliberately from
Hegel, is a **unity of opposites**. The lineage is real but never
load-bearing: everything we say about ∅ ⊣ ∗ is a theorem, whatever one
thinks of the *Science of Logic*.

Two things about this opposition deserve to be felt before they are proved.

**First: the opposition is genuine exactly when the universe is.** Suppose
nothing and unity were secretly the same — suppose ∅ ≅ ∗. Then unity's one
point would live inside nothing; every object, being stretched on the
thread above, would be crushed between them; and the whole universe would
collapse to a single degenerate object (B0, Prop 0.5). *To be a nontrivial
universe at all is to keep nothing and unity apart.* The first distinction
is not one structure among many; it is the precondition of there being
structure.

**Second: the opposition is a bit — but the bit is subtler than two
symbols.** Every universe has an intrinsic yes/no object, written Ω: the
object whose points are the possible *truth values*, the possible answers
to "is this thing in that part?" Unity ∗ maps into Ω twice, canonically:
once saying **⊤** ("yes, all of it") and once saying **⊥** ("no, none of
it") — and these two answers are the rung-0 opposition wearing logical
clothes: ⊤ classifies the part *all of ∗*, ⊥ classifies the part *nothing*
(B0, D0.6). These two points are distinct exactly when the universe is
nondegenerate (B0, Prop 0.7). So far this sounds like a binary digit.

But here is the subtlety: in most universes, ⊤ and ⊥ do **not exhaust Ω**.
The naive bit — the two-symbol alphabet {⊤, ⊥} — coincides with the true
truth-value object only in the special universes logicians call *Boolean*
(B0, Prop 0.8). Our first nontrivial universe below is not Boolean, and its
third truth value has a name you already understand: **later**.

When Wheeler said *it from bit*, the reading this project explores — and
grades openly as a conjecture, not a theorem (B0, Remark 0.9) — is that the
"bit" is not the two-symbol alphabet but this *opposition*: the ∅ ⊣ ∗ pair
whose refusal to collapse is what having a universe means, and whose
logical shadow Ω is richer than binary the moment the universe has any
internal structure worth speaking of.

## A0′. A universe with two stages · *Track A*

To see all of this concretely we need the smallest universe that is richer
than plain sets. Here it is: the universe of **two-stage things** — things
seen *now* and *later*.

An object of this universe is: a set X₀ of things existing now, a set X₁ of
things existing later, and an arrow ξ : X₀ → X₁ saying what each present
thing becomes.

```
   now:    a   b   c        X₀ = {a, b, c}
           │   │  ╱
           ▼   ▼ ▼          ξ : what each becomes
   later:  p    q           X₁ = {p, q}
```

(Two present things may merge into one future thing, as b and c do here;
and a future thing may have no present ancestor at all — hold that thought,
it becomes the villain of rung 1.) This universe is called the
**Sierpiński topos**, written 𝒮 (B0, §5.2). Its nothing is (∅ → ∅): nothing
now, nothing later. Its unity is (1 → 1): one thing now, staying one thing.

Now watch the bit grow a third value. A *part* of a two-stage thing is a
choice of some present things and some future things, consistent with
becoming (if a present thing is in the part, what it becomes must be too).
Ask of each present thing: "are you in the part?" There are three honest
answers:

- **now** — yes, already;
- **later** — not yet, but what I become will be in it;
- **never** — no, and never will be.

And of each future thing, two: **yes** or **no**. That is exactly the
truth-value object of 𝒮: three point-truth-values collapsing onto two
future-truth-values (B0, Prop 0.10):

```
   now:    now   later   never
            │      │       │
            ▼      ▼       ▼
   later:   yes   yes     no
```

The naive bit ∗ + ∗ has only two values at each stage — it cannot say
*later*. So 𝒮 is not Boolean (B0, Cor 0.11), and the extra truth value is
precisely the universe's internal sense of *time deferred*. A bit, in a
universe with becoming, is bigger inside than outside.

## B0. The mathematics of rung 0 · *Track B*

All statements are proved in `spec/00-level-0.md`; numbering matches.
Throughout, ℰ is an elementary topos.

**Definitions (D0.1–D0.4).** An *adjoint modality* is an adjoint pair of an
idempotent comonad □ and idempotent monad ◯, induced by an adjoint triple in
one of two shapes — *outer* (□ ⊣ ◯, fully faithful outer legs; the two
moments' fixed subcategories are distinct embeddings of one base) or
*inner* (◯ ⊣ □, fully faithful middle; the fixed subcategories coincide) —
with unity of opposites □X → X → ◯X in both. A *level* is an essential
subtopos i₋ ⊣ i* ⊣ i₊ : ℱ ↪ ℰ, giving an outer-shape modality
□ = i₋i* ⊣ ◯ = i₊i*. Levels are ordered by containment of both modal
images (i ≼ j). Level j *resolves* level i (i ≪ j) when ◯ⱼ□ᵢ ≅ □ᵢ; the
*Aufhebung* ī is the least resolving level strictly above i. (One clause —
the literature's definition; the companion □ⱼ◯ᵢ ≅ ◯ᵢ is the separate notion
of *co-resolution*. See the D0.4 source note.)

**Proposition 0.1 + Corollary 0.2.** Every topos has the *trivial adjoint
triple* 1 → ℰ with i₋(•) = ∅, i₊(•) = ∗, exhibiting **level 0** with
constant modalities □₀X = ∅, ◯₀X = ∗ and unity ∅ → X → ∗. *Proof:*
initiality and terminality make all four required hom-sets singletons;
full faithfulness of i₊ is Hom(∗, ∗) = {id}. (Spec §2 for the details —
they are three lines each.)

**Proposition 0.3 / §6.** Level 0 is ≼-minimal (left adjoints preserve ∅,
right adjoints preserve ∗) and the identity subtopos is ≼-maximal.

**Lemma 0.4 + Proposition 0.5 (nondegeneracy).** In any topos, maps into ∅
are isomorphisms (strict initiality; the proof is a pleasant exercise with
∅ × A). Consequently ∅ ≅ ∗ ⟺ ∅ has a point ⟺ ℰ ≃ 1. This is Track A's
"to be a universe is to keep them apart."

**D0.6 + Propositions 0.7, 0.8 (the bit).** ∗ has the two canonical
subobjects id_∗ and ∅ ↪ ∗, classified by ⊤, ⊥ : ∗ → Ω. Then ⊤ ≠ ⊥ ⟺ ℰ
nondegenerate; and [⊤,⊥] : ∗+∗ → Ω is an isomorphism ⟺ ℰ is Boolean
(cited to Mac Lane–Moerdijk VI.1).

**Proposition 0.10 + Corollary 0.11 (the bit in 𝒮).** Ω_𝒮 is the picture in
A0′: Ω₀ = {now, later, never} over Ω₁ = {yes, no}, with the classification
bijection Sub(X) ≅ Hom(X, Ω) proved by direct construction. Since
|Ω₀| = 3 ≠ 2, 𝒮 is not Boolean. In sSet the same phenomenon: Ω₀ = 2 but
Ω₁ = 5 (the five subcomplexes of an edge), against 2 for the naive bit.

**Remark 0.9 (grade: conjectural).** The Wheeler reading — "bit" as the
opposition ∅ ⊣ ∗ rather than the set 1+1 — is a project *reading*. The
mathematics above is its formal peg, not its proof.

## C0. Run it · *Track C*

```
node examples/run.mjs
```

Rung-0 checks (ledger numbers from `spec/00-level-0.md` §8): `0.1/0.2`
(the trivial modalities, computed on an 11-object family of 𝒮), `0.5`
(nondegeneracy), `0.7` (⊤ ≠ ⊥), `0.10` (the full classifier bijection
Sub(X) ≅ Hom(X, Ω), both round trips, exhaustively), `0.11` (𝒮 not
Boolean), `5.3` (sSet truncated: Ω₀ = 2, Ω₁ = 5, not Boolean). The
`examples/README.md` explains what "exhaustively" means for each. The
interactive version — click a two-stage object, watch its parts and their
three-valued answers — is the P0.4 explorer (pending).

## Payoff 0 · *Track A, with grades*

What does rung 0 buy? Three things. (1) A *criterion of existence*: a
universe is nontrivial exactly when its first opposition is (theorem).
(2) The *intrinsic bit*: logic is not imported into a universe, it is
secreted by it, and it is binary only in Boolean universes (theorem).
(3) The Wheeler peg: a precise place to hang "it from bit" — on the
opposition, not the alphabet (conjecture, so marked). Rung 0 also sets the
pattern every higher rung repeats: *an opposition, its failure to collapse,
and the question of what resolves it* — which is rung 1's business.

---

# Rung 1 — the two completions of a point (♭ ⊣ ♯)

## A1. Discrete and codiscrete · *Track A*

Stay in the two-stage universe 𝒮. Among all two-stage things, one kind is
special: the **points** — the things you can see *now*. Formally, a point
of X is a way of picking one present element (and hence, following ξ, its
future). Write Γ X for the set of points of X. In the picture from A0′,
Γ X = X₀: the now-stage.

Rung 1 is the observation that a set of bare points can be *completed*
into a two-stage thing in two opposite ways, and that these two ways are
the next opposition up the ladder.

Given a plain set S of points:

- **The discrete completion ♭:** decree that *nothing happens*. Later is a
  frozen copy of now: ♭S = (S = S). Every element persists, nothing
  merges, nothing appears. Pure being, no becoming.
- **The codiscrete completion ♯:** decree that *everything merges*. Later
  is a single undifferentiated lump: ♯S = (S → 1). All distinctions
  present now are erased in the future. Pure becoming-one.

Every two-stage thing X is suspended between the two completions of its
own points:

```
♭(points of X) ──────► X ──────► ♯(points of X)
frozen                             merged
```

— read it as: X receives its points rigidly, and gives them up to the
lump (B1, Cor 1.2). This is the same shape as rung 0's ∅ → X → ∗, one
level up: there the extremes were *no object at all* and *the one object*;
here the extremes are *two ways of being nothing but your points*. The
opposition is no longer about existence; it is about **how much a thing
outruns its points**. A thing equal to its discrete completion is called
discrete (in 𝒮: ξ invertible — the future is just the present, relabeled).
A thing equal to its codiscrete completion is codiscrete (in 𝒮: the future
is a single lump).

And here is the first structural surprise, small but telling: the discrete
things and the codiscrete things are *both* just copies of the universe of
plain sets, embedded in 𝒮 in two different postures (B1, Thm 1.1 — one
base, two gluings). Rung 1 does not add new *stuff*; it adds a new
*opposition on the same stuff*. That is what "unity of opposites" means in
practice: one thing (here: the plain sets, sitting inside the two-stage
universe), two opposed moments.

The same construction runs in a very different universe: **simplicial
sets** (sSet), the universe of shapes built from points, edges, triangles,
and their higher cousins — the combinatorial skeleton of space, with no
time reading at all. There, ♭S is the shape that is just dots, and ♯S is
the shape where *any* list of points spans a simplex — everything connected
to everything, as codiscretely as combinatorics allows (B1, §3). Discrete
= scattered dots; codiscrete = total blob. Same opposition, different
universe. That portability is the point of doing this abstractly.

## A2. The pointless figure, and where sublation happens · *Track A*

Now the drama. Rung 0 left us with an opposition (nothing vs unity) and
rung 1 has produced a new one (frozen vs merged). Hegel's word for what a
higher stage does to a lower opposition is *Aufhebung* — usually rendered
**sublation**: the lower opposition is simultaneously *preserved* (it
still exists) and *resolved* (the higher stage no longer feels it). Lawvere
made this a definition, and — this matters — a definition with **one
clause**, taken from the literature and confirmed against it (B1, §5.4):

> Level j **resolves** level 0 when, from level j's standpoint, *nothing
> stays nothing*: completing ∅ codiscretely at level j gives back ∅.
> The **Aufhebung** of level 0 is the *smallest* level that resolves it.

There is a mirror condition — *unity stays unity* — but it is a different
notion (called co-resolution), and it is deliberately **not** part of the
definition. Rung 1's own companion fact, that the discrete completion of
unity is unity (♭∗ ≅ ∗), holds always (B1, Prop 1.4); the asymmetry is
real and we will see it bite.

So: **is rung 1 the sublation of rung 0?** The honest answer — and this is
a genuine finding of the spec, not a textbook fact we are retelling — is:
*it depends on the universe*, and the dependence is itself illuminating.

**In sSet: yes.** In the universe of shapes, every basic figure — every
edge, every triangle — has at least one point (a vertex). And that is
exactly the criterion (B1, Lemma 1.5): the codiscrete completion of
nothing is nothing precisely when *every basic figure has a point*. In
sSet it does, so ♯∅ = ∅, rung 1 resolves rung 0 — and since one can
classify *all* the levels of sSet (they are exactly the skeleta: the
sub-universes of things built from simplices up to dimension n; B1,
Prop 1.12), rung 1 is the *smallest* resolving level. **In the universe of
shapes, the sublation of nothing-vs-unity is exactly points-vs-blobs.**
The ladder's first two rungs sit flush.

**In 𝒮: no — and the culprit has a name.** The two-stage universe contains
one basic figure the universe of shapes has no analogue of: the thing that
exists later but not now —

```
   now:    (nobody)
   later:    p          the pointless figure, (∅ → 1)
```

— a future with no present ancestor. It has no points at all (nothing to
see now), yet it is not nothing (something is there later). Now run the
criterion: complete *nothing* codiscretely in 𝒮. Codiscretely, the future
is always a single lump — even the future of nothing. So ♯∅ = (∅ → 1):
**the codiscrete completion of nothing is precisely the pointless figure,
not nothing** (B1, Prop 1.9–1.10). Rung 1 fails to resolve rung 0 in 𝒮.
In a universe where the future can outrun the present, "nothing stays
nothing" fails at rung 1 — *becoming leaks*.

Then what *is* the sublation in 𝒮? Here the two-stage universe shows its
whole hand, because one can write down **all** of its levels — there are
exactly four, in a diamond (B1, Prop 1.6–1.7):

```
                  everything (𝒮)
                  ╱           ╲
     the open level           the closed level  (= rung 1)
   "pure-future things"        "frozen things"
    □: (∅ → X₁)                 □ = ♭: (X₀ = X₀)
    ◯: (X₁ = X₁)                ◯ = ♯: (X₀ → 1)
                  ╲           ╱
                   level 0 (trivial)
                    □ = ∅, ◯ = ∗
```

The right-hand node is rung 1, the frozen/merged opposition we have been
discussing (in sheaf-theoretic terms it is the *closed* point of the
Sierpiński space). The left-hand node — the *open* level — is its mirror:
its two moments strip a thing down to its pure future, (∅ → X₁), or
project it onto its future, (X₁ = X₁). And the open level *does* resolve
level 0: projecting nothing onto its future gives nothing. Being an atom
of the diamond, it is minimal. **The Aufhebung of rung 0 in 𝒮 is the open
level** (B1, Prop 1.13) — smaller than rung 1, and made possible by
exactly the same object that obstructed rung 1: the pointless figure is
the open level's □-completion of unity. One object, two roles: obstruction
on the right, resolution on the left.

(The asymmetry promised above: the open level resolves but does not
co-resolve — from its standpoint nothing stays nothing but unity does
*not* stay unity — while rung 1 co-resolves but does not resolve. No
middle level of 𝒮 does both. The one-clause definition is not a pedantic
choice; it decides where the Aufhebung lands. B1, §5.4.)

Step back and say it dialectically, with the theorem numbers holding the
net: the first opposition (nothing ⊣ unity) is sublated at the first level
from whose standpoint nothing remains nothing. In a universe where every
figure is anchored in a point, that standpoint is the frozen/merged
opposition of rung 1 — being and its points suffice. In a universe with
genuine deferral — where something can exist *later* without existing
*now* — a thinner standpoint sublates first: the one that sees only the
future. **Where sublation happens is a property of the universe, and it
measures exactly whether the universe lets the future outrun the
present.** That sentence is the cash value of rungs 0–1, and every clause
of it is a theorem above.

## B1. The mathematics of rung 1 · *Track B*

All statements proved in `spec/01-level-1.md`; numbering matches.

**Theorem 1.1 (the general construction).** For any small category C with
terminal object t and ℰ = PSh(C), there is an adjoint triple
Disc ⊣ Γ ⊣ coDisc : Set → ℰ with Γ = ev_t, Disc = constant presheaf,
(coDisc S)(c) = S^{Hom(t,c)}, and Disc, coDisc fully faithful. This
exhibits Set as a level of ℰ — **level 1**. The proof is a direct
computation of both transpositions (spec §1); the key mechanism is that
naturality along the unique maps !_c : c → t propagates a single component
to the whole family.

**Corollary 1.2.** ♭ = Disc∘Γ, ♯ = coDisc∘Γ form the outer-shape modality
with unity ♭X → X → ♯X restricting to id at stage t. In 𝒮 (site {a → b},
t = b): ♭X = (X₀ = X₀), ♯X = (X₀ → 1). In sSet (t = [0]): ♭X constant at
X₀ and (♯X)_n = X₀^{n+1}.

**Propositions 1.3, 1.4.** Level 0 ≺ level 1 strictly; and ♭∗ ≅ ∗ always
(the companion/co-resolution fact for level 0).

**Lemma 1.5 (the criterion).** ♯∅ ≅ ∅ ⟺ every object of the site admits
a map from t. *Proof:* (♯∅)(c) = ∅^{Hom(t,c)}, which is a singleton when
Hom(t,c) = ∅ and empty otherwise. — This one-line computation is the
engine of the whole A2 story.

**Propositions 1.6, 1.7 (the diamond).** The walking arrow carries exactly
four Grothendieck topologies (enumerated from the axioms), so 𝒮 has
exactly four subtoposes; all four are essential, hence levels; ordering
by modal-image containment gives the diamond with the open and closed
levels incomparable. The closed level *is* level 1.

**Propositions 1.9, 1.10 (failure in 𝒮).** ♯∅ = (∅ → 1) ≇ ∅, and dually
◯_open∅ = ∅ but □_open∗ = (∅ → 1) ≇ ∗. Both the obstruction to rung 1
resolving and the open level's companion-failure are *the same object*:
the representable y a at the pointless site object.

**Propositions 1.11, 1.12 (sSet).** Every [n] has a vertex, so both
clauses hold in sSet. The levels of sSet are exactly the skeleta
(Kelly–Lawvere's levels ↔ idempotent ideals, Lemma 1.12a, plus the
classification of the ideals of Δ by a split-epi/mono argument,
Lemma 1.12b), the 0-skeletal level is level 1, hence 0̄ = level 1 in sSet.

**Proposition 1.13 (Aufhebung in 𝒮).** The resolving levels of 𝒮 are
{open, max}; minimality in the diamond gives 0̄_𝒮 = the open level.
Consistent with the nLab's general ⊥-scattered result (the Aufhebung of
∅ ⊣ ∗ is the ¬¬-subtopos). §5.4 records the source verdict: resolution is
one-clause unanimously in Lawvere 1991/1992/2009, KRRZ 2011,
Marmolejo–Menni, Menni 2019, nLab; the companion clause is co-resolution,
a distinct notion.

## C1. Run it · *Track C*

Same battery, rung-1 items: `§2` (the site dictionary), `1.1/1.2`
(♭/♯ formulas and the adjunction, checked as hom-count identities over
121 object pairs, plus idempotence), `1.4` (♭∗ ≅ ∗), `1.6` (the four
topologies, re-derived from the Grothendieck axioms independently of the
spec's shortcuts), `1.7` (the diamond: triple adjunctions for the open
level, order containments, both incomparability witnesses), `1.9/1.10`
(♯∅ = □_open∗ = y a, all three isomorphisms), `1.13/§5.4` (the resolving
set {open, max}, hence 0̄_𝒮 = open) and the co-resolution divergence,
`1.11/§3` (sSet truncated: both clauses hold; coDisc sizes 2, 4, 8).
The pointless figure is a two-line object — build it yourself in
`examples/src/sierpinski.mjs` and apply the modalities to it.

## Payoff 1 · *Track A, with grades*

(1) **The point/figure split** (theorem): rung 1 is where a universe first
distinguishes "the points of X" from "X itself", and offers the two
canonical repairs — freeze or merge. Every geometry to come lives in the
gap between a space and its set of points; rung 1 is that gap's first
appearance. (2) **Sublation as a computable invariant** (theorem): where
the Aufhebung of ∅ ⊣ ∗ lands is a property of the universe — rung 1 in
sSet, strictly below it in 𝒮 — detected by one question: *can the future
outrun the present?* (3) **A calibration for the ladder** (reading, so
marked): rung 2 (cohesion, ʃ ⊣ ♭) is where shape enters and where the
next Aufhebung question — what resolves *rung 1's* opposition — gets
asked. The machinery you have just watched work on a diamond is the same
machinery that will run there; nothing about it was special to toy
universes except the ability to draw every level on one screen.

---

## Track-discipline ledger (A → B → spec → script)

Per roadmap §3: Track A asserts nothing Track B doesn't prove. Every
substantive A-claim, its B-statement, its spec home, and its script check:

| Track A assertion | Track B | Spec | Script (`examples/run.mjs`) |
|---|---|---|---|
| Every universe contains ∅ and ∗, one opposition | Prop 0.1, Cor 0.2 | 00 §2 | 0.1/0.2 |
| Collapse of ∅ ≅ ∗ collapses the universe | Prop 0.5 | 00 §3 | 0.5 |
| ⊤, ⊥ canonical; distinct iff nondegenerate | D0.6, Prop 0.7 | 00 §4 | 0.7 |
| Naive bit = Ω only in Boolean universes | Prop 0.8 | 00 §4 | 0.8/5.1 |
| 𝒮's third truth value "later"; 𝒮 not Boolean | Prop 0.10, Cor 0.11 | 00 §5.2 | 0.10, 0.11 |
| sSet not Boolean either | §5.3 | 00 §5.3 | 5.3 |
| Wheeler bit-as-opposition | Remark 0.9 — **conjectural** | 00 §4 | — |
| ♭/♯ complete points oppositely; X suspended between | Thm 1.1, Cor 1.2 | 01 §1–2 | 1.1/1.2 |
| Discrete and codiscrete things are both "plain sets, reposed" | Thm 1.1 (ff), Rem 1.8 | 01 §1, §4 | 1.1 |
| ♭∗ ≅ ∗ always (co-resolution at level 0) | Prop 1.4 | 01 §1 | 1.4 |
| "Nothing stays nothing" ⟺ every basic figure has a point | Lemma 1.5 | 01 §1 | — (general lemma) |
| sSet: rung 1 resolves rung 0, minimally | Props 1.11, 1.12 | 01 §5.3 | 1.11/§3 |
| 𝒮: the pointless figure blocks rung 1 | Props 1.9, 1.10 | 01 §5.2 | 1.9, 1.10 |
| 𝒮 has exactly four levels, a diamond | Props 1.6, 1.7 | 01 §4 | 1.6, 1.7 |
| Aufhebung of rung 0 in 𝒮 = the open level | Prop 1.13 | 01 §5.4 | 1.13/§5.4 |
| One-clause definition is the literature's | §5.4 source verdict; D0.4 note | 01 §5.4, 00 §1 | — (source question) |
| Sublation location measures future-outrunning-present | Lemma 1.5 + Props 1.11–1.13 | 01 §5 | (composite) |

*Draft status: awaiting P0.7 red-leg review alongside the spec sections.
The A-track metaphor "universe" for topos, and the time reading of 𝒮, are
expository devices; the B-track and spec carry the definitions.*
