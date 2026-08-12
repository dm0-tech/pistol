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
| `src/sierpinski.mjs` | 𝒮 = Set^→ exactly: objects, exhaustive hom-set enumeration, iso testing, the four levels' modalities (□₀/◯₀, open, ♭/♯, max), subobjects, Ω = (3 → 2) with classifier and pullback |
| `src/topologies.mjs` | All Grothendieck topologies on the walking arrow {a → b}, enumerated **from the axioms** (maximality, stability, transitivity over honest sieve pullbacks) — not from the spec's derived shortcuts — so the "exactly four" claim is independently confirmed |
| `src/sset.mjs` | Truncated simplicial sets (dims ≤ 2): Δ[0], Δ[1], sub-presheaf enumeration (Ω₀ = 2, Ω₁ = 5), Disc/coDisc constructions, level-wise iso testing |
| `src/guarded.mjs` | Bounded OP-13 experiment: Ω and predicate-level ▷ in 2/3/4-stage truncations of the topos of trees; the exact stage-2/stage-1 dictionary with repo 𝒮; naturality and non-idempotence |
| `run.mjs` | The check battery, one line per ledger item |

Adjunction claims are checked at the level of hom-set cardinalities against
the closed-form counts (e.g. |Hom(♭X, Y)| = |X₀ → Y₀|), exhaustively over an
11-object family covering every shape with |X₀|, |X₁| ≤ 2 — evidence, not a
naturality proof; the naturality proofs live in the spec. The classifier
check for Ω is complete: both round trips of Sub(X) ↔ Hom(X, Ω) are verified
elementwise.

## Scope (approved)

Everything here is finite or truncated. sSet claims are computed in
dimensions ≤ 2 only; the scripts never claim the infinite case
(PHASE-0-PLAN.md, P0.5 scope note). The mathematical core is written to be
shared with the P0.4 explorer.

The guarded-recursion module is deliberately a **bounded kill test**, not a
new verification programme. It reproduces Birkedal et al.'s finite formulas
`Ω(m) = {0,…,m}` and `▷(k) = min(m,k+1)`, pins the variance dictionary, and
shows that ▷ is not idempotent. It therefore rules out identifying ▷ with
any level modality. It does not claim to classify ▷ relative to the open
level or to settle OP-13's broader deferral resonance.

License: MIT (see `LICENSE-MIT`), as with all code in this repo.
