# The linear bridge: a copy beside a co-copy, and the ⊕-shadow via hyperbolicization

- **ID:** W-0006
- **Provenance:** llm-conjecture (the bridge and its ⊕-shadow) + sourced (the compact-closure and lattice facts)
- **Verification:** llm-checked (component facts are standard literature); unverified (the bridge itself)
- **Grade:** conjectural
- **Sources:** Kelly–Laplaza, *Coherence for compact closed categories* (JPAA 1980) — [A, B] ≅ A* ⊗ B for dualizable A; Lawvere, *Diagonal arguments and cartesian closed categories* (1969) — the cartesian diagonal; Witt 1941 and Milnor–Husemoller, *Symmetric Bilinear Forms* (1973) — hyperbolic forms, even unimodular classification in d = 16; Sati–Schreiber, *The Quantum Monadology* (2023–25) — ambidexterity/Frobenius structure at the ladder's linear turn; Gross–Harvey–Martinec–Rohm 1985 — both heterotic lattices
- **Transcript:** T-2026-08-20-A
- **Cross-refs:** OP-16; W-0003; S17; S1; OP-11, OP-12; `notes/direction-review-2026-08-20.md` §4; roadmap §1.3 (Thread P)
- **Status:** draft

## Statement

OP-16's honest obstruction is that its analogy is untyped: Lawvere's
diagonal precondition is about exponentials (A beside Yᴬ, point-surjective
A → Yᴬ), while the d = 16 doubling is an orthogonal direct sum (E8 ⊕ E8).
The bridge conjecture, in three steps of decreasing establishment:

1. **(Established, cited.)** In a compact closed category — more generally
   for any dualizable object — the internal hom collapses to a tensor:
   [A, B] ≅ A* ⊗ B, so the object of self-transformations is
   **[A, A] ≅ A* ⊗ A: a copy beside a co-copy.** The cartesian world holds
   exponentials and sums apart; the linear world identifies
   self-transformation-space with "a copy of A alongside its dual."
2. **(Conjectural — the ⊕-shadow.)** The tensor A* ⊗ A has the wrong rank
   for the lattice instance (rank 64, not 16, for A = E8). The candidate
   repair: the ⊕-form of "a copy beside a co-copy with the evaluation
   between" is **hyperbolicization** — A ⊕ A* with its canonical split
   bilinear pairing (evaluation as the form; A as a Lagrangian). When A is
   **self-dual** (A ≅ A*; for lattices: unimodular, exactly E8's property
   in d = 8), the co-copy collapses to a copy and A ⊕ A* becomes A ⊕ A —
   the literal double. So the typed shape proposed for OP-16: *linear
   self-representation requires the pairing of a copy with a co-copy;
   orthogonal doubling is its shadow at a self-dual object.*
3. **(Conjectural — the regime claim.)** The room-for-two statement is
   well-posed only after the ladder's **linear/quantum turn** — in the
   setting where Thread P's quantum face already lives (LHoTT; ambidextrous
   adjunctions and Frobenius monads, Sati–Schreiber). This would explain
   structurally why the doubling appears in the string-theoretic
   (linear-phase) regime and not before, and why the owner's original
   cartesian/computational framing of the Wheeler push felt wrong (owner's
   own report, T-2026-08-20-A): the cartesian diagonal is the wrong
   ambient for the summit's self-reference.

## Context

Proposed by the originating agent during the 2026-08-20 direction review,
in answer to W-0003's flagged "exponentials vs orthogonal sums" gap — the
first task OP-16 sets is typing that analogy or disposing of it. Accepted
by the owner into the record ("I like your copy-beside-a-co-copy") in the
same session that produced the ternary sharpening (W-0007): the two entries
should be attacked together, since triality (if it enters) acts on triples
of reps while this entry's mechanism is binary (copy/co-copy) plus a
pairing — the pairing may be the seam where the two meet.

## What would change the labels

- **Cheapest upgrade:** state step 2 precisely in the category of lattices
  with bilinear forms (or quadratic modules): define "self-representing
  object," prove or refute that hyperbolicization is forced by it, and
  check E8 ⊕ E8 against the definition. Machine-checkable in small rank.
- **Cheapest attacks:** (a) **D16⁺ / Spin(32)/ℤ₂:** the other even
  unimodular lattice in d = 16 is *not* of the form A ⊕ A, yet its
  heterotic string is equally consistent — if the double is a
  *precondition* of self-representation, why does the twisted single
  exist? Any typed statement must distinguish the two or the necessity
  claim dies (survivable as sufficiency). (b) The d = 32 genericity
  (King 2003) still applies: the statement must produce the rank-16
  specialness (physics answer: central charge 16 / modular invariance)
  from the mathematics or fail. (c) The step-1 collapse needs *dualizable*
  A; identifying which ladder rung first provides duals (the linear turn)
  is itself unfinished — if no rung does, step 3 is empty.

## Log

- 2026-08-20 — created (llm-conjecture + sourced, originating agent,
  T-2026-08-20-A); component facts llm-checked against standard
  references; bridge and ⊕-shadow unverified; filed alongside W-0007 and
  OP-16's sharpening.
