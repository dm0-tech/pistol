# Rung 0·0 — The Ground Beneath the Ladder: Adjunctions, Modalities, Universes

*P0.3 companion draft, commissioned July–August 2026 (transcript
T-2026-08-05-A). This rung precedes `text/rung-0-1-draft.md` and exists so
that the ladder's opening never has to ask the reader to imagine an
undefined concept: everything rung 0 uses — adjunction, modality, topos —
is introduced here from nothing. One honest difference from the other
rungs: nothing in this file is original, so Track B statements are cited
to the standard literature rather than proved in `spec/`. The source
ledger at the end ties every Track A assertion to its citation, and to a
machine check where our examples already compute an instance. Notation per
`spec/NOTATION.md`.*

## How to read this

Same three tracks as the rest of the text:

- **Track A — the story.** Prose and pictures, nothing assumed. If you
  read only the A sections you get the whole arc.
- **Track B — the mathematics.** Precise statements with references to
  where full proofs live (Mac Lane, Riehl, Mac Lane–Moerdijk). Nothing
  here asks for trust, but the proofs are a library visit away rather
  than three lines below.
- **Track C — the computations.** Where an instance of a claim is already
  machine-computed in `examples/`, we say so. Much of this rung is
  arithmetic you can check on your fingers; we say that too.
- **Track H — the lineage.** Short primary-source sidecars place Hegel and
  Lawvere beside the formal structure. Each sidecar grades the
  correspondence separately. H is allowed to generate a question; it is
  never evidence for a B-statement.

**Suggested first pass:** all the A sections straight through. This rung
is deliberately slower than the ones above it — it is the ground floor
below the ground floor, and the right pace for foundations is the pace of
chewing.

At **⊢ Predict**, stop and write before continuing. A prediction need not be
right. It must only be definite enough that the mathematics can change it.

---

# Part I — Adjunction, or: the mathematics of the word "best"

## A. Worlds and translations · *Track A*

Two ideas, and then we can build everything.

A **world** (the mathematics says *category*, B1) is a collection of
things together with the ways things lead to one another. The universe of
sets is a world: things are sets, ways are functions. A more austere
example, and our running companion: the real number line ℝ, seen as a
world whose things are numbers and where there is a way from x to y
exactly when x ≤ y. Nothing else is needed: ways compose (x ≤ y and
y ≤ z give x ≤ z), and every thing has an identity way to itself
(x ≤ x). Those two requirements — composition and identity — are the
whole definition. A world is anything with things, ways, and sensible
plumbing.

A **translation** between worlds (*functor*, B1) carries things to things
and ways to ways, respecting the plumbing. The inclusion ι of the
integers ℤ into the reals ℝ is a translation between the two number
worlds: it carries each integer to itself and preserves order.

Notice what a translation is not required to do: it is not required to be
reversible, and it is not required to hit everything. ι misses almost all
of ℝ. The interesting question is never "is the translation perfect?" —
it almost never is. The interesting question is: **given an imperfect
translation, what is the *best possible* answer to the question it cannot
answer?**

## A′. The word "best", made exact · *Track A*

A real number is not an integer. But ask: what is the best integer
approximation to x *from above*? You know the answer — the ceiling ⌈x⌉.
From below? The floor ⌊x⌋. Now watch the word "best" stop being a manner
of speaking and become an exact, checkable condition:

```
⌈x⌉ ≤ n   exactly when   x ≤ n        (ceiling: the least integer not below x)
n ≤ ⌊x⌋   exactly when   n ≤ x        (floor: the greatest integer not above x)
```

Read the first line slowly. It says: an integer n is at-or-above the
ceiling of x *precisely when* it is at-or-above x itself. The ceiling is
not "a pretty good integer near x"; it is the unique integer that
**answers every ≤-question about x from the integer side, exactly**.
That biconditional — the *exactly when* — is the entire content of the
concept this Part introduces:

> **An adjunction is a translation problem with a best solution, where
> "best" is certified by an exactly-when.** (B2)

We write ⌈−⌉ ⊣ ι ("ceiling is left adjoint to the inclusion") and
ι ⊣ ⌊−⌋ ("floor is right adjoint to it"). One inclusion, two opposite
perfections — already the shape the whole ladder will climb. Three
features of this small example deserve to be felt now, because they are
the general theorems of the next section:

**First: no choices.** Once you say what you want — the least integer not
below x — the answer is forced. There is nothing to tune, no convention
to pick. If someone else derives a "ceiling" from the same exactly-when,
they get your ceiling. *Best things are unique.* This is why adjunctions
deserve the word **objective**: the answers are supplied by the situation,
not chosen by the mathematician.

**Second: the difference is real and is measured, not erased.** Ceiling
and floor do not make x an integer; ⌈x⌉ − x and x − ⌊x⌋ are exactly the
gaps, and they vanish precisely on the integers. An adjunction never
pretends the two worlds are the same; it *quantifies* how they differ.

**Third: the exchange settles immediately.** Round x up; round the result
up again: nothing happens. ⌈⌈x⌉⌉ = ⌈x⌉. The correction, corrected, is no
further correction. The back-and-forth between the worlds does not
oscillate or spiral — it locks after one step. Hold this; it becomes the
*triangle identities* in general and *idempotence* in Part II.

## A″. The same shape, everywhere · *Track A*

Now that you have seen one adjunction, you will not be able to stop
seeing them. Four sightings, in increasing order of consequence:

1. **Freedom and forgetting.** Take a set of letters; forget nothing. Ask:
   what is the best group made from these letters? Answer: the *free*
   group — the one that adds no relations you didn't ask for. "Free" is a
   left adjoint to "forget the group structure", certified by an
   exactly-when: maps of sets from the letters into any group G
   correspond exactly to group homomorphisms from the free group into G.
   Every "free such-and-such" in mathematics is this one pattern. (B2,
   examples.)

2. **The deduction theorem.** In logic: "from A and B together, C
   follows" *exactly when* "from A alone, B ⇒ C follows". That is an
   adjunction — conjunction with B on the left, implication B ⇒ − on the
   right. The oldest move in logic is an exactly-when. (B4.)

3. **The quantifiers.** "Every x satisfies P(x) ⇒ Q" *exactly when* "the
   x's satisfying P are among those satisfying Q" — and the mirror
   statement for *some*. Lawvere's observation (1969): the quantifiers ∃
   and ∀ are the left and right adjoints of substitution. Logic is not
   *described by* adjunctions; its operations *are* adjunctions. (B4.)

4. **Galois.** The correspondence that founded modern algebra — subgroups
   of the Galois group against intermediate fields, each determining the
   other, order reversed — is an adjunction between two poset-worlds.
   Two utterly different kinds of structure, suspended in an exact
   opposition: the pattern's birthplace, avant la lettre. (B2, remark.)

Kan isolated the general concept in 1958, and named it after the adjoint
of a Hilbert-space operator, because the certifying condition

```
Hom(F x, y)  ≅  Hom(x, G y)          ⟨F x, y⟩ = ⟨x, G y⟩
```

is visibly the inner-product formula with hom-sets in place of inner
products. The name began as a pun and turned out to be load-bearing — a
recurring event in this subject.

**⊢ Predict.** We have now met free/forgetful, conjunction/implication,
quantification/substitution, and a Galois connection. Before reading the
interpretation below, write down what all four preserve from an equivalence
and what they permit to fail. If the answer is only “they go both ways,” try
again: arbitrary pairs of translations do that too.

## A‴. What an adjunction really is · *Track A*

Here is the reading this project stands on, and it needs one more notion.
Two worlds are **equivalent** when translations run both ways and the
round trips change nothing (up to relabeling). Equivalence is sameness.
And the theorem (B3) is: *an equivalence is exactly an adjunction whose
comparison maps are invertible.* Therefore:

> **An adjunction is an equivalence that failed — with the failure
> measured, structured, and located.**

The two comparison maps — the **unit** x → GFx (what the round trip
added) and the **counit** FGy → y (what it forgot) — localize the
failure at every single thing; on the things where they invert, the two
worlds genuinely agree; and elsewhere the *shape* of the disagreement is
itself a structure (Part II's modality). An adjunction holds identity and
difference in one package, which is why Lawvere could read Hegel's
**unity of opposites** into it without forcing (the lineage is real; as
always in this text it is shown, not leaned on — the theorems stand
whatever one thinks of the *Science of Logic*).

And now the question this rung exists to answer — *why is adjunction the
last word in suspending abstractions in opposition?* — has a three-clause
answer, one clause per feature felt in A′:

- **Objectivity** (uniqueness): the poles determine one another; nothing
  is chosen; an opposition by decree is thereby excluded. (B2.)
- **Genuine difference** (non-invertibility permitted): sameness is not
  smuggled in; equivalence is the degenerate case, not the target. (B3.)
- **Exactness** (triangle identities): each side's correction of its own
  correction is the identity — the tension is a truce with terms, not an
  infinite regress. (B2.)

Weaken any clause and the opposition goes arbitrary; strengthen any and
it collapses into sameness. Adjunction sits at the boundary point, and
that is what "last word" means.

One more fact belongs in the story, because it certifies "bedrock". The
definition of an adjunction uses nothing but arrows and two equations —
it can be written in any setting that has arrows-between-arrows at all
(B5: the *walking adjunction*). And when mathematics rebuilt itself
homotopically — when "equal" was everywhere replaced by "equivalent up to
coherent higher data" in the ∞-categorical revolution — the notion of
adjunction passed through **unchanged**: an adjunction of ∞-categories is
literally an adjunction in the classical sense, computed in an ordinary
2-category extracted from the situation (B5, Riehl–Verity). The notion of
"universe" had to be rebuilt from the ground up to survive that
transition (∞-topos; Part III); the notion of adjunction did not.
Earthquake; bedrock.

## H. Why Lawvere heard opposition here · *Track H*

**Source fact — established.** Lawvere opens “Some Thoughts on the Future
of Category Theory” (1991) by describing an “incessant contradiction” in
mathematical practice: an object must be held precisely in order to reason
about it and continually transformed in order to do mathematics. He then
proposes adjointly related inclusions as a mathematical form of
unity-and-identity-of-opposites. In “Unity and Identity of Opposites in
Calculus and Physics” (1996) his abstract says that a significant fraction
of dialectical philosophy can be *modeled mathematically* and that
oppositeness in a bicategory can be characterized effectively by
adjointness.

**Correspondence — claimed, not proved.** Track A's phrase “equivalence
that failed” is our explanation of why the proposal has bite: unit and
counit keep both identity and difference visible. It is not a theorem that
every adjunction formalizes a passage in Hegel. The source verb is
*modeled*, not *translated without remainder*.

**Question generated.** If an opposition is to be objective rather than
declared, which part of the adjunction prevents choice, which part prevents
collapse into sameness, and which part prevents an endless correction of
correction? Close the text and recover the three clauses in A‴ before
moving on. This is Track H doing work: it sends the reader back to the
definition, not around it.

## B. The mathematics of Part I · *Track B*

**B1 (categories, functors).** A category: objects, morphisms, unital
associative composition. A functor: object- and morphism-assignment
preserving both. A preorder (e.g. (ℝ, ≤)) is a category with at most one
morphism between any two objects; a monotone map is a functor. [Mac Lane,
*CWM* I; Riehl, *Category Theory in Context* (CTC) ch. 1; gentlest entry:
Lawvere–Schanuel, *Conceptual Mathematics*.]

**B2 (adjunction).** F ⊣ G between F : 𝒞 → 𝒟, G : 𝒟 → 𝒞: a natural
bijection Hom_𝒟(FX, Y) ≅ Hom_𝒞(X, GY); equivalently unit η : 1 ⇒ GF and
counit ε : FG ⇒ 1 with the triangle identities εF ∘ Fη = 1_F,
Gε ∘ ηG = 1_G. Adjoints, when they exist, are unique up to unique natural
isomorphism. Poset case = Galois connection; ⌈−⌉ ⊣ ι ⊣ ⌊−⌋ is a direct
check of the displayed biconditionals. Free ⊣ forgetful: [CTC §4.1; CWM
IV]. Origin: Kan, *Adjoint functors*, TAMS 87 (1958). "Adjoint functors
arise everywhere" is CWM's preface.

**B3 (equivalence = invertible adjunction).** Any equivalence of
categories can be promoted to an adjoint equivalence (unit and counit
invertible), and an adjunction is an equivalence iff η and ε are
invertible; F and G restrict to an equivalence between the full
subcategories where they are. [CWM IV.4; CTC §4.4.]

**B4 (logic is adjoint).** For pullback f* : Sub(B) → Sub(A) along
f : A → B in a topos (or already in Set): ∃_f ⊣ f* ⊣ ∀_f. Conjunction ⊣
implication: Hom(P ∧ B, C) ≅ Hom(P, B ⇒ C) in any Heyting algebra — the
deduction theorem. [Lawvere, *Adjointness in Foundations*, Dialectica 23
(1969), reprinted TAC; Mac Lane–Moerdijk (MM) I.9, IV.]

**B5 (portability and the ∞-lift).** Adjunctions are definable by
generators and equations in any 2-category; there is a free-standing
2-category Adj — the walking adjunction — such that adjunctions in 𝒦
correspond to 2-functors Adj → 𝒦 [Schanuel–Street, *The free adjunction*,
Cahiers 27 (1986)]. For ∞-categories: an adjunction of quasi-categories
is precisely an adjunction in the homotopy 2-category, and any such
extends to a homotopy coherent adjunction [Riehl–Verity, *Homotopy
coherent adjunctions…*, Adv. Math. 286 (2016); *Elements of ∞-Category
Theory*, CUP 2022, ch. 2]. Contrast: the passage topos → ∞-topos required
re-axiomatization via descent [Lurie, *Higher Topos Theory*].

## C. Run or check it · *Track C*

The floor/ceiling triple is finger-arithmetic; check the biconditionals
on x = 2.4, n = 2, 3 and be done. A categorical adjunction *is*
machine-checked in this repo: `node examples/run.mjs` items `1.1/1.2`
verify the ♭ ⊣ ♯ hom-set bijections of rung 1 as hom-count identities
over 121 object pairs of the two-stage universe, plus idempotence — the
exactly-when of B2, computed exhaustively in a world small enough to
enumerate.

---

# Part II — Modality, or: an adjunction's way of being

## A. From a bridge to an operator · *Track A*

An adjunction as described so far is a *bridge*: two worlds, two
translations, an exactly-when. But you can also stand inside **one** world
and feel the bridge as a pair of operators: go over and come back.

Do it with the number line. Go from ℝ to ℤ by ceiling, come back by
inclusion: the composite is *rounding up*, an operator on ℝ alone. Its
three properties: it moves you (x ≤ ⌈x⌉, one direction only); it settles
immediately (⌈⌈x⌉⌉ = ⌈x⌉ — idempotence, promised in A′); and its
*fixed points* — the numbers that already are their own rounding — are
exactly the integers. Same with floor, downward.

An idempotent, one-directional operator like this is called a
**modality** (B6). The name is deliberate: think of grammatical mood.
"x, rounded up" is like "x, necessarily" or "x, eventually" — the thing
again, *in a specific way of being*. And the mathematics cashes out that
phrase precisely:

> **A modality is a way of being; its fixed points are the things that
> are that way.** The comonad kind, written □ ("flat" moods: purely-,
> already-), carves the core out of a thing: □X → X. The monad kind,
> written ◯ ("sharp" moods: completed-, at-best-), completes a thing:
> X → ◯X. (B6)

**⊢ Predict.** Round a real number up and down, then list the things left
unchanged by each operation. From that one example, predict what data inside
a category should determine a modality: the arrows into its fixed objects,
the arrows out of them, or both? B6 gives the answer after you have made the
question your own.

Being an integer-from-above, being rounded, being discrete, being frozen,
being a pure shape, being bosonic — every rung of the ladder above this
page is a pair of such ways of being. The reader who wants the lineage:
this is what Lawvere (and, following him, this project) means by a
**moment** of a universe, the word borrowed from Hegel's *Momente* — the
determinations a thing has within a larger unity. Shown, not leaned on.

Two turns close the loop between Parts I and II, and they are the reason
this Part exists:

**Every adjunction, felt from inside one world, is a modality** — the
round trip GF (a monad) or FG (a comonad), with the unit/counit as the
"you may have moved" maps. When the adjunction is of the well-behaved
kind the ladder uses, the round trips are idempotent and the previous
paragraph applies verbatim. (B6.)

**Every modality, unfolded, is an adjunction.** The fixed points of ◯
form a sub-world; "complete X" is the best translation into it; the
exactly-when certifies it. A way of being *is* a translation problem with
a best solution, in disguise. Modality and adjunction are one phenomenon
seen from inside and from outside — the internal and external
presentations of the same opposition. (B6.)

## A′. Oppositions of moments, and the ladder's shape · *Track A*

The line ℝ did one more thing for us: it produced its two modalities
**as a pair**, ceiling against floor, from a single inclusion — an
*adjoint triple* ⌈−⌉ ⊣ ι ⊣ ⌊−⌋. Both ways of being have the same fixed
points (the integers), reached from opposite sides: one base, two
opposed postures. This is the precise, miniature form of what the ladder
calls a **unity of opposites** (B7): a pair □ ⊣ ◯ of opposed moments
arising from one adjoint triple, with every thing suspended between its
two determinations:

```
□X ──────► X ──────► ◯X
purely so          at best so
```

That suspension diagram is the ladder's recurring figure. Rung 0 will
read it with □ = ∅ (nothing) and ◯ = ∗ (unity); rung 1 with □ = ♭
(frozen) and ◯ = ♯ (merged); cohesion, elasticity, and solidity are
richer instances of the very same shape. And the ladder's engine —
*Aufhebung*, the question of which higher opposition resolves a lower one
while preserving it — is a relation *between* such pairs; it is defined,
computed, and (in one universe) surprisingly located in
`text/rung-0-1-draft.md`, which begins where this sentence ends.

## B. The mathematics of Part II · *Track B*

**B6 (idempotent (co)monads, fixed points, resolution).** A monad
(◯, η, μ) is idempotent iff μ is invertible; equivalently ◯ arises from a
reflective subcategory — the adjunction between the fixed points
(◯-algebras, here a full subcategory) and the ambient world, with ◯ the
round trip. Dually for comonads and coreflective subcategories. Round
trips of any adjunction are a monad GF and comonad FG; every (co)monad
arises from at least one adjunction (Kleisli initial, Eilenberg–Moore
terminal among resolutions). [CWM VI; CTC ch. 5; Borceux vol. 2 §4.2 for
idempotent monads; nLab "idempotent monad", "modality".] The
modal-logic reading of monads/comonads as moods is standard in the
modal-type-theory literature [Corfield, *Modal HoTT* (OUP 2020), ch. 4;
nLab "modal type theory"].

**B7 (adjoint modalities, unity of opposites).** An adjoint triple
L ⊣ M ⊣ R with M fully faithful induces an idempotent comonad □ = LM (or
ML, per shape) and idempotent monad ◯ = RM with □ ⊣ ◯ and the unity
transform □X → X → ◯X; the project's precise conventions and the two
shapes are D0.1 of `spec/00-level-0.md` — from here on the spec takes
over from the literature. [Lawvere, *Some thoughts on the future of
category theory* (Como 1991); nLab "adjoint modality", "unity of
opposites"; spec D0.1–D0.4.]

## C. Run or check it · *Track C*

Idempotence and fixed points, machine-computed: `run.mjs` items `1.1/1.2`
include ♭♭ ≅ ♭ and ♯♯ ≅ ♯ with their fixed subcategories exhibited; item
`1.4` (♭∗ ≅ ∗) is a one-object instance of "the moments agree on the
base". The rounding modality needs only your fingers, as before.

---

# Part III — Universes, or: where adjoints accumulate until there is an inside

## A. What deserves the name "universe" · *Track A*

Parts I and II never said what a *universe of things* is — deliberately.
Now we can say it without imagining anything, because the answer is:
**a world where enough best-solutions exist.** Each demand on the list
below is an instance of Part I's one concept — some canonical translation
is demanded to have an adjoint:

- **Pairs and a point.** You can form X × Y, and there is a unity ∗
  (products; terminal object). Demanding this is demanding a right
  adjoint to the translation "duplicate". Dually a nothing ∅.
- **Function-things.** For any two things, a thing Yˣ of ways from X to
  Y, *inside* the world. Demanding this is demanding a right adjoint to
  "pair with X". (The deduction theorem of A″ is this demand's logical
  face.)
- **A truth-value thing.** An object Ω that classifies parts: parts of X
  correspond exactly to ways X → Ω. An exactly-when again — the local,
  pointwise form of adjointness.

A world meeting these demands is an (elementary) **topos** (B8) — this
text's *universe*. Sets form one; rung 0–1's two-stage world 𝒮 forms one;
so do worlds of shapes, of smooth spaces, of super-spaces: the ladder
lives in these.

Now the point this Part exists to stress, the one that earns the word
*objective*. In a universe, the logical apparatus is not installed; it
**precipitates**. ∅ and ∗ exist with no choices (they are adjoints); Ω
exists with no choices (an exactly-when); the quantifiers and implication
exist with no choices (A″'s items 2–3, now internal to the universe).
Nothing was imported, nothing configured. To be a universe is already to
contain the whole logical instrumentarium, secreted by the structure
itself. That is why rung 0's opposition ∅ ⊣ ∗ — the ladder's ground
floor, one page from here — is available in *every* universe whatsoever:
it costs nothing beyond universehood itself.

## A′. Preservation: why the objective elements travel · *Track A*

Objectivity would be worth little if it were parochial — if each
universe's ∅, ∗, Ω were private conventions that translations scramble.
They are not, and the reason is the single most useful theorem in this
whole file (B9):

> **Left adjoints preserve everything colimit-shaped; right adjoints
> preserve everything limit-shaped.**

Being an adjoint is not just a certificate of bestness — it is a
*preservation warranty*. A translation that is a left adjoint cannot help
but carry nothing to nothing (∅ is colimit-shaped); one that is a right
adjoint cannot help but carry unity to unity (∗ is limit-shaped). No case
analysis, no checking: the handedness alone forces it. When rung 0–1's
spec proves that level 0 sits at the bottom of every ladder (Prop 0.3),
the entire proof is this warranty invoked twice.

Between universes, the standard notion of translation — a *geometric
morphism* — is by definition an adjoint pair with a left-exactness
condition, so the warranty applies in both directions at once: the
inverse-image half preserves ∅, ∗, finite pairs, and the whole *geometric*
fragment of logic (B9). The objective elements are preserved *in the
cases the handedness covers* — exactly those, and the discipline of
knowing which fragment travels with which handedness is topos theory's
daily craft. So the logical skeleton is not just forced within each
universe; it is respected by the maps between them. Objectivity is
load-bearing across the whole landscape, not decoration within one world.

## A″. The inside: internal language · *Track A*

Everything so far could be checked from outside: an observer comparing
worlds and translations. The final gift of the accumulated adjoints is
that a universe has an **inside**.

Because a universe has function-things and a truth-value thing, it can
express *statements about its own things*: "this part of X", "for every
point of Y", "there exists a way such that…". Assembled systematically,
this is the universe's **internal language** (B10) — a full logic whose
connectives are Part I's adjunctions and whose truth values are points
and parts of Ω. Three facts, in ascending order of consequence for this
project:

1. **The language is secreted, not imported.** It is derived from the
   universe's structure with zero choices — the same objectivity as
   everything above.
2. **It fingerprints the universe.** In the universe of sets the secreted
   logic is the classical one, with Ω a plain yes/no. In the two-stage
   universe 𝒮 the logic grows a third truth value — **later** — before
   the universe has geometry or even a second dimension. The logic of a
   world is a *measurement* of that world's way of becoming. (This is
   proved concretely two pages from here: rung 0–1, Prop 0.10.)
3. **Every assertion is made from somewhere.** The internal language's
   semantics evaluates truth *at stages* — truth for the now-stage, truth
   for the later-stage — with no stage called nowhere. A universe's logic
   is constitutively a logic of standpoints. Readers with Wheeler on the
   shelf: this is where *observer-participancy* stops being a slogan and
   becomes a semantics; the project's notes pursue exactly that thread
   (`notes/internal-language-and-room-for-two.md`, OP-3, OP-7).

**⊢ Predict.** Sets secrete a two-valued Ω. A world whose objects unfold
across two stages has one additional structural possibility: false here,
true after restriction. Before opening the next text, draw the smallest Ω
that can classify that possibility. Rung 0 will calculate whether your
drawing was forced.

And with that, the ground is fully laid. A universe is a world where
best-solutions abound; its logical elements are forced, portable, and
speakable from inside; the simplest opposition its structure secretes is
∅ ⊣ ∗ — nothing against unity, the first way of being against the last.
What that opposition is, what it costs for it to be genuine, and what it
means for a higher one to *sublate* it: that is rung 0, and the text you
are ready to read.

## B. The mathematics of Part III · *Track B*

**B8 (elementary topos).** A category with finite limits, exponentials
(− × B ⊣ (−)^B), and a subobject classifier true : ∗ → Ω with
Sub(X) ≅ Hom(X, Ω) naturally. Finite (co)limits as (left) right adjoints
to diagonal functors. [MM I, IV; Johnstone, *Elephant* A1–A2; Lawvere's
axioms: Lawvere–Tierney, exposited in MM Prologue.]

**B9 (preservation).** RAPL/LAPC: right adjoints preserve all limits,
left adjoints all colimits [CWM V.5; CTC §4.5]. Geometric morphism
f = (f* ⊣ f_*) with f* left exact; f* preserves finite limits and all
colimits, hence ∅, ∗, and geometric logic (finite ∧, arbitrary ⋁, ∃);
the full internal language is preserved by logical functors, a stricter
class — the "in cases" of the A′ discussion made precise. [MM VII;
Elephant A4, D1.]

**B10 (internal language).** The Mitchell–Bénabou language of a topos and
its Kripke–Joyal semantics (forcing at stages/generalized elements);
soundness and completeness for the topos's own logic, intuitionistic in
general, Boolean iff the topos is. [MM VI; Elephant D1, D4; the
𝒮-instance with Ω = (now, later, never) is `spec/00-level-0.md` §5.2 and
Prop 0.10.]

## C. Run or check it · *Track C*

The truth-value object of 𝒮 with its three-valued now-stage — the
fingerprint claim of A″(2) — is computed exhaustively by `run.mjs` items
`0.10/0.11` (the full classification bijection, both round trips), and
the preservation warranty's rung-0 instance (left/right adjoints forcing
□₀ = ∅, ◯₀ = ∗ to be minimal) is items `0.1/0.2`. Nothing in this Part
rests on prose alone that the finite universe can check.

---

## Source ledger (A-claims → B-statements → sources → machine checks)

| Track A assertion | Track B | Source | Machine check |
|---|---|---|---|
| Worlds/translations; posets are worlds | B1 | CWM I; CTC ch. 1 | — |
| ⌈−⌉ ⊣ ι ⊣ ⌊−⌋; "best" as exactly-when | B2 | CTC §4.1 (Galois connections) | finger arithmetic |
| Adjoints unique; objectivity | B2 | CWM IV.1; CTC §4.4 | — |
| Free ⊣ forgetful; deduction theorem; ∃ ⊣ subst ⊣ ∀ | B2, B4 | CWM IV; Lawvere 1969; MM I.9 | — |
| Hilbert-space naming; Kan 1958 | B2 | Kan, TAMS 87 (1958) | — |
| Equivalence = invertible adjunction; failure measured by η, ε | B3 | CWM IV.4; CTC §4.4 | — |
| Triangle identities as settled exchange | B2 | CWM IV.1 | `1.1/1.2` (instance) |
| Walking adjunction; definable anywhere | B5 | Schanuel–Street 1986 | — |
| ∞-lift unchanged; topos rebuilt | B5 | Riehl–Verity 2016/2022; Lurie HTT | — |
| Modality = idempotent (co)monad; fixed points = the way of being | B6 | CWM VI; Borceux §4.2; nLab | `1.1/1.2` (idempotence) |
| Modality ↔ adjunction (two presentations, one phenomenon) | B6 | CTC ch. 5 (resolutions); CWM VI.2 | — |
| Adjoint triple → □ ⊣ ◯ with unity □X → X → ◯X | B7 | spec D0.1; Lawvere 1991 | `1.4` |
| Topos = accumulated adjoint demands | B8 | MM I, IV | — |
| Logical elements precipitate, zero choices | B8 | MM IV; Elephant A2 | `0.1/0.2` |
| LAPC/RAPL; preservation warranty; Prop 0.3's engine | B9 | CWM V.5 | `0.1/0.2` |
| Geometric morphisms preserve the geometric fragment | B9 | MM VII; Elephant D1 | — |
| Internal language secreted; stages; 𝒮 grows "later" | B10 | MM VI; spec §5.2 | `0.10/0.11` |
| Lawvere proposes adjoint opposition as a model of dialectical structure | —, source fact + graded correspondence | Lawvere 1991 §II; Lawvere 1996 abstract/§1; W-0007 | — |
| Hegel lineage (unity of opposites, moments) | — | shown, never load-bearing: Hegel, *Science of Logic*; Lawvere 1991/1996; W-0007 | — |

*Draft status: commissioned by the owner (T-2026-08-05-A) as the
self-contained on-ramp; awaiting red-leg review alongside the P0.3
material. The "ways of being" reading of modalities and the Hegel
vocabulary are expository devices graded as readings; every mathematical
claim above is standard literature, cited, with project-specific
instances deferred to the spec. The August 12 pass added Track H as a
source-bearing but non-evidentiary strand and prediction/re-derivation
beats; its source dossier is `notes/rung-0-to-1-research-dossier.md`.*
