# Executable examples (P0.5)

Plain-code computations of every finite-model claim marked ⚙ in the spec's
claim ledgers (`spec/00-level-0.md` §8, `spec/01-level-1.md` §8). No proof
assistant, no dependencies — Node ≥ 18 only.

```
node examples/run.mjs
```

Each check prints its ledger item; the run exits nonzero on any failure. Per
the honesty mechanism (PHASE-0-PLAN.md), a mismatch between a script and the
spec is a spec bug to be filed, never silently patched around.

## What is computed, and how honestly

| Module | Contents |
|---|---|
| `src/sierpinski.mjs` | Finite 𝒮 = Set^→ implementation: hom-set enumeration and iso testing for supplied finite objects, the four levels' modalities (□₀/◯₀, open, ♭/♯, max), subobjects, Ω = (3 → 2) with classifier and pullback |
| `src/topologies.mjs` | All Grothendieck topologies on the walking arrow {a → b}, enumerated **from the axioms** (maximality, stability, transitivity over honest sieve pullbacks) — not from the spec's derived shortcuts — so the "exactly four" claim is independently confirmed |
| `src/sset.mjs` | Truncated simplicial sets (dims ≤ 2): Δ[0], Δ[1], sub-presheaf enumeration (Ω₀ = 2, Ω₁ = 5), Disc/coDisc constructions, level-wise iso testing |
| `src/guarded.mjs` | Bounded OP-13 experiment: independently enumerated finite-chain sieves; Ω and predicate-level later in 2/3/4-stage truncations; the exact stage-2/stage-1 dictionary with repo 𝒮; an object-level witness that the later endofunctor is non-idempotent |
| `run.mjs` | The check battery, one line per ledger item |

Adjunction claims are checked at the level of hom-set cardinalities against
the closed-form counts (e.g. |Hom(♭X, Y)| = |X₀ → Y₀|) over all 121 pairs
from an 11-object bounded family. Equal cardinalities are evidence, not a
constructed transposition or naturality proof; those live in the spec. The
family contains every map between the chosen canonical sets of cardinality
0, 1, or 2 and is not quotiented by isomorphism, so it includes duplicate
arrow shapes. The classifier check verifies both round trips of
Sub(X) ↔ Hom(X, Ω) elementwise **for those 11 objects**, not for all finite
arrows.

The topology enumeration and guarded finite-chain sieve enumeration derive
their candidates from closure axioms and are independent of the claimed
counts. By contrast, modality constructors and several sSet checks are
bounded formula-regression tests: agreement with the spec catches code/spec
drift but is not independent derivation.

## Scope (approved)

Everything here is finite or truncated. sSet claims are computed in
dimensions ≤ 2 only; the scripts never claim the infinite case
(PHASE-0-PLAN.md, P0.5 scope note). The mathematical core is written to be
shared with the P0.4 explorer.

The guarded-recursion module is deliberately a **bounded kill test**, not a
new verification programme. It independently enumerates the finite sieves,
reproduces Birkedal et al.'s predicate formula
`later(k) = min(m,k+1)`, pins the variance dictionary, and separately gives
a component-cardinality witness that the later **endofunctor** is not
idempotent. It therefore rules out identifying that endofunctor with any
idempotent level modality. The script does not test Löb's rule, a guarded
fixed-point theorem, or a classification relative to the open level; those
remain source-backed or open.

License: MIT (see `LICENSE-MIT`), as with all code in this repo.
