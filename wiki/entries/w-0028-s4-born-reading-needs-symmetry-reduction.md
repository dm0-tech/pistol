# The Born reading of S⁴ constrains Hypothesis H only if its twist selects an entanglement observable

- **ID:** W-0028
- **Provenance:** sourced (Mosseri–Dandoloff; Sati–Schreiber) + human-conjecture (the owner's physical-quantity test) + llm-derived (the symmetry-reduction criterion)
- **Verification:** source-audited (Mosseri–Dandoloff equations (10), (14), (22), (23); Sati–Schreiber statement of Hypothesis H); red-legged
- **Grade:** established (the two uses of S⁴ and their current mismatch) / conjectural (a C-field entanglement observable)
- **Sources:** Mosseri and Dandoloff, *Geometry of entangled states, Bloch spheres and Hopf fibrations*, J. Phys. A 34 (2001) 10243–10252, quant-ph/0108137; Sati and Schreiber, *Introduction to Hypothesis H* (2025); Fiorenza, Sati, Schreiber, *Twistorial Cohomotopy implies Green–Schwarz anomaly cancellation* (2022)
- **Transcript:** T-2026-10-05-A
- **Cross-refs:** OP-7; OP-21; OP-22; W-0015; W-0021; `notes/shadow-of-the-octonions.md` §6
- **Status:** draft

## Statement

Mosseri–Dandoloff and Hypothesis H use the same quaternionic Hopf geometry,
but presently impose different structures on it.

For a normalized two-qubit state

|ψ⟩ = α|00⟩ + β|01⟩ + γ|10⟩ + δ|11⟩ ∈ S⁷,

an oriented quaternionic Hopf map S⁷ → S⁴ has coordinates

- (x₀,x₁,x₂) = (⟨σz⊗I⟩, ⟨σx⊗I⟩, ⟨σy⊗I⟩);
- x₃ + ix₄ = 2(αδ−βγ), up to the paper's stated convention;
- concurrence c satisfies c² = x₃²+x₄².

The separable locus maps to the distinguished S² cut out by x₃=x₄=0.
This uses more than the bare Hopf fibration: it uses a complex structure, a
chosen two-qubit tensor-product splitting, a grouping of amplitudes into
quaternions, and an orientation of the fibres. Mosseri–Dandoloff explicitly
note that regrouping the amplitudes exchanges the qubits and gives a
differently oriented fibration. The Hopf map does not derive the Born rule;
its first three coordinates are Born expectation values supplied by the
Hilbert-space interpretation.

Hypothesis H instead assigns the C-field a tangentially J-twisted unstable
4-cohomotopy cocycle: globally, a homotopy class of sections of an
associated S⁴-bundle. An ordinary map χ:X→S⁴ requires a trivialization of
the twist (as on the standard contractible flat-spacetime example);
flatness alone does not suffice. Its character map recovers the dual flux
pair (G₄,G₇) and their Bianchi relation. This data does not, by itself,
select Mosseri–Dandoloff's separable S², two-qubit splitting, or
concurrence function. Therefore the “Born-projection” reading currently
constrains nothing in Hypothesis H beyond the geometry already present.

If the existing target-bundle data alone is to carry the reading, the
twist or equivariance must canonically reduce the transitive
PSp(2)≅SO(5) target symmetry to a subgroup preserving the distinguished
3+2 coordinate splitting, hence the separable S² and concurrence
foliation. The resulting fibrewise function (or differential refinement)
would then need to be gauge invariant and equal an independently defined
physical quantity of the C-field. Extra physical fields could instead
supply such a reduction. These are falsifiable routes, not current
results.

## Context

The owner proposed “Possibility, incarnate” as Wheeler's phrase and set the
test: does the Born-projection reading of S⁴ say anything that bare
geometry does not? The first candidate is Mosseri–Dandoloff's pair of
entanglement directions. This audit finds a precise obstruction: those
directions are not intrinsic to an unadorned S⁴, while Hypothesis H has not
yet been shown to provide the adornment.

The nearest potentially relevant extra structure is the equivariant
Hopf/twistor refinement used in Hypothesis H. It does produce physical
constraints such as anomaly cancellation, but no audited source identifies
its reductions with the Mosseri–Dandoloff bipartition or concurrence.

## What would change the labels

Upgrade the conjectural part by exhibiting:
1. a canonical reduction of the twisted S⁴-bundle to the subgroup
   preserving the 3+2 splitting, separable S² and concurrence foliation,
   whether supplied by the Hypothesis-H twist or additional physical data;
2. a globally defined gauge-invariant scalar or differential cocycle
   refining the fibrewise concurrence function;
3. an independent C-field interpretation or prediction for that object.

Refute the reading by proving that the Hypothesis-H structure group acts
transitively across the proposed concurrence levels, or that every such
reduction is noncanonical/gauge-dependent.

## Log

- 2026-10-05 — created from the owner's Wheeler test; both source strands audited and the missing symmetry reduction isolated.
- 2026-10-05 — fresh-context red leg required global twisted-bundle language and weakened “exactly if” to allow extra physical fields; fixes applied.
- 2026-10-05 — final fresh-context red leg corrected “untwisted/flat”: a global map requires a trivialized twist, since flatness alone permits holonomy.
