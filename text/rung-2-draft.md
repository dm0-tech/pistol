# Rung 2 — Shape and Flatness

*Initial Phase 1 educational slice, 2026-10-05. This is not the full
“It from bit, transformationally” essay. The canonical mathematics is the
draft proposal `spec/02-level-2.md`; sources and exclusions are audited in
`notes/rung-1-to-2-research-dossier.md`. Notation follows the frozen
`spec/NOTATION.md`.*

## How to read this slice

- **Track A — the story** distinguishes a figure's shape from its flat
  points. Every mathematical assertion points to Track B.
- **Track B — the mathematics** states the inner-shape theorem and works
  the two repository models.
- **Track C — the computation** identifies exactly what the finite program
  checks and what it cannot check.

Interpretive claims about time, Wheeler, and gauge fields are sidecars with
their grades shown. They do not prove, motivate, or alter the B-track.

---

## A2. What survives when cohesion is forgotten · *Track A*

Rung 1 began with the points of a figure and extended them in two opposed
ways: discrete `♭X`, where every point remains separate, and codiscrete
`♯X`, where distinctions away from the points are erased.

Rung 2 asks a different question. Do not begin with the points. Begin with
the whole figure X and apply the left adjoint Π₀. What remains is its
**shape**, written `ʃX`: the Π₀-data returned to the world as a discrete
object (B2, Theorem 2.1). In simplicial sets Π₀ is π₀, so that data is
exactly the connected pieces (B2.2).

Flatness and shape now face one another:

```
♭X ─────────► X ─────────► ʃX
points copied    figure       Π₀-data made discrete
```

The left map sends the discrete point-object into the figure without
asserting that it is a subobject. The right map is the unit from the figure
to its discrete Π₀-data. The two ends are fixed by the same
criterion—both are discrete—yet they generally disagree. `♭X` remembers
which points there were; `ʃX` remembers Π₀X. In simplicial sets, the latter
means which points can be joined by edge-zigzags (B2.2).

This is why the opposition is called **inner shape**. Earlier rungs took
two different kinds of completion of common data. Here both ends live in
one discrete world, with X between them. The mathematics proves that
`ʃ ⊣ ♭`: maps *out of shape* and maps *into flatness* carry the same
information (B2).

### The smallest moving picture

In the Sierpiński topos a figure is one transition

```
X₀ ──ξ──► X₁ .
```

Then the two ends are almost embarrassingly literal:

```
♭X = (X₀ = X₀),             ʃX = (X₁ = X₁).
```

Flatness freezes the starting stage. Shape freezes the resulting stage.
The unity is

```
(X₀ = X₀) ──(id,ξ)──► (X₀ ─ξ→ X₁) ──(ξ,id)──► (X₁ = X₁).
```

Calling `X₀` “now” and `X₁` “later” is the established two-stage
dictionary of our model; calling the arrow **physical time** is not. The
safe theorem is that rung 2 compares source-points with colimit-components.
The temporal sentence—“shape is what becoming leaves invariant”—is a
Track A reading, **conjectural as physics**.

### A correction supplied by the model

It is tempting to announce that rung 2 is the next level and therefore the
Aufhebung of rung 1. That sentence is ill-typed under the definitions we
already froze.

A level uses an outer adjoint triple: two embeddings on the outside.
Rung 2 uses the fully faithful `Disc` in the middle. In the Sierpiński
diamond, its shape is the open level's `◯`, while its flatness is the closed
level's `□`; those levels are incomparable. Rung 2 crosses the diamond
instead of adding a vertex (B2, Proposition 2.5).

So the supplied inner-shape data do not establish a new level. In 𝒮 they
definitively cross two distinct vertices. Whether another model or a
separate essential-subtopos triple exhibits the same pair as a level is
not ruled out.

### Unity before fracture

The two arrows `♭X → X → ʃX` are automatic. A pullback square, a fiber
sequence, or a reconstruction theorem is not. Results called *fracture*
in modal HoTT and differential cohesion add real hypotheses: lexness and
strong disjointness, or crisp ∞-group structure, or stable spectrum
objects. The initial rung establishes the unity and stops there (B2, §5).

### Sidecar: “Possibility, incarnate” · *interpretive, non-load-bearing*

Wheeler's dictum asks for a relation between physical actuality and
possibility, not merely a pleasing phrase. “Possibility, incarnate” names
the middle term X well: discrete possibilities appear at one end, and a
figure realizes relations among them before shape records the result.
That is an expository reading of the unity, not a physical consequence.

The repository's sharper test remains OP-7/W-0028. A Born-projection
reading of S⁴ earns its keep only if the twist or additional physical data
selects an entanglement observable and identifies its pullback with a
gauge-invariant quantity of the C-field. Bare geometry does not yet do
this. Rung 2 supplies no missing map, so it adds **no current constraint**
to Hypothesis H. *Grade: conjectural research direction; the supporting
S⁴ audit is external to this slice in W-0028.*

---

## B2. The inner-shape theorem · *Track B*

Assume an adjoint triple

```
Π₀ ⊣ Disc ⊣ Γ
```

with `Disc` fully faithful. Define

```
ʃ = Disc Π₀,                ♭ = Disc Γ.
```

**Theorem 2.1.** There is an adjunction `ʃ ⊣ ♭`; both composites are
idempotent; their fixed objects are exactly the objects in the image of
`Disc`; and there is a natural unity `♭X → X → ʃX`. If Π₀ preserves finite
products, then ʃ does too.

The proof is three lines of adjunction calculus:

```
Hom(ʃX,Y)
  = Hom(Disc Π₀X,Y)
  ≅ Hom(Π₀X,ΓY)
  ≅ Hom(X,Disc ΓY)
  = Hom(X,♭Y).
```

Full faithfulness gives `Π₀Disc ≅ id ≅ ΓDisc`, which gives idempotence and
the common fixed objects. The unity combines the counit
`Disc ΓX → X` with the unit `X → Disc Π₀X`. Full details are in
`spec/02-level-2.md`, Theorem 2.1.

This theorem uses less than Lawvere's complete axioms for cohesion. In
particular, it does not derive the four-adjoint string or the
parameterized-powers condition. Finite-product preservation by Π₀ is an
explicit hypothesis, not a consequence of the three displayed adjoints.

### B2.1 Sierpiński

For `X = (X₀ → X₁)`, the colimit of the arrow is its codomain:

```
Π₀X = X₁,     ΓX = X₀,
ʃX = (X₁ = X₁),     ♭X = (X₀ = X₀).
```

Products are pointwise, so Π₀ preserves them. The adjunction reduces to

```
Hom(ʃX,Y) ≅ Set(X₁,Y₀) ≅ Hom(X,♭Y).
```

This is Proposition 2.3.

### B2.2 Simplicial sets

For a simplicial set X, `π₀X` is its vertices modulo the equivalence
relation generated by edges. Then

```
π₀ ⊣ Disc ⊣ (−)₀,
ʃX = Disc(π₀X),     ♭X = Disc(X₀).
```

The map `π₀(X × Y) → π₀X × π₀Y` is bijective. For the only non-immediate
direction, traverse the X edge-zigzag while holding Y fixed by degenerate
edges, then traverse the Y zigzag while holding X fixed. This handles
oppositely oriented steps without trying to pair them. This is the
mathematical proof; the finite program is only a bounded regression check.
See Proposition 2.4.

### B2.3 Why D0.4 does not apply

D0.3 orders **levels**, and D0.4 defines resolution between **levels**.
The inner triple has the fully faithful functor in the middle and does not
itself exhibit an essential subtopos whose two moments are `ʃ` and `♭`.
Therefore neither `level 1 ≼ rung 2` nor `level 1 ≪ rung 2` is currently a
well-formed spec statement. A future candidate essential subtopos—or a
separate exhibition of the same pair in a particular model—could be
tested; the inner-shape theorem alone does not provide one.

---

## C2. Run the bounded witnesses · *Track C*

Inside the repository's Nix development shell:

```
node examples/run.mjs
```

The `spec/02-level-2.md` block checks:

- all 121 ordered pairs in the 11-object Sierpiński family for
  `|Hom(ʃX,Y)| = |X₁ → Y₀| = |Hom(X,♭Y)|`;
- terminal and binary-product preservation by Π₀ on that family;
- idempotence and equality of the two fixed-object tests on that family;
- the Sierpiński cross-diamond formulas;
- `π₀` on `∅`, `Δ[0]`, `Δ[1]`, and `Disc 2`;
- product preservation and idempotence on four named finite simplicial
  truncations.

The sSet representation stops in dimension 2. It does not enumerate all
simplicial sets, prove naturality, or establish the general product
theorem. Track B's coordinate-at-a-time zigzag argument does that work.

---

## Track-discipline ledger (A → B → spec → script)

| Track A assertion | Track B | Spec | Script |
|---|---|---|---|
| Shape records Π₀-data discretely; in sSet these are connected pieces | Theorem 2.1; B2.2 | 02 §§1,3 | 2.4, bounded |
| Flat records points as a discrete object | Theorem 2.1 | 02 §§1–3 | 2.3, 2.4 |
| `ʃ ⊣ ♭`, with common discrete fixed objects | Theorem 2.1 | 02 §1 | 2.3; 2.4 instances |
| In 𝒮, flat freezes X₀ and shape freezes X₁ | B2.1 | 02 §2 | 2.3 |
| Π₀ preserves products in both models | B2.1–B2.2 | 02 §§2–3 | 2.3; 2.4 bounded |
| The inner data do not thereby exhibit a level or Aufhebung | B2.3 | 02 §4 | 2.5 model witness |
| Unity does not imply fracture | B2 boundary | 02 §5; dossier §4 | — |
| “Shape is what becoming leaves invariant” | Explicitly an interpretation | no theorem claimed | — |
| Rung 2 currently adds no C-field/Born constraint | OP-7/W-0028 boundary | W-0028 (external to this slice) | — |

**Status.** Initial slice only. The typed theorem, two models, computation
boundary, and A→B ledger are present. The full Phase 1 essay, a genuine
fracture theorem, and any physical identification of shape with time or
C-field observables remain open.
