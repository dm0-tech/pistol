# Flat U(1) connections on S¹ are classified by holonomy, not curvature

- **ID:** W-0029
- **Provenance:** sourced
- **Verification:** source-audited; red-legged
- **Grade:** established
- **Sources:** Freed, “Classical Chern-Simons Theory, Part 2,” HJM 28(2) (2002), equations (1.5)–(1.6) and §2.3; Duncan, “Flat connections and holonomy,” §§1–3 (supporting lecture note)
- **Transcript:** —
- **Cross-refs:** `notes/flat-u1-connections-on-circle.md`; `spec/02-level-2.md` §5; `reviews/critique-2026-10-26-before-the-harder-rungs.md`
- **Status:** checked

## Statement

For smooth principal U(1)-bundles with connection on \(S^1\), holonomy
induces a bijection from gauge-isomorphism classes of flat connections to
\[
  \operatorname{Hom}(\pi_1(S^1),U(1))/U(1)
  \cong U(1)\cong\mathbb R/\mathbb Z.
\]
Every such bundle is topologically trivial and every connection is flat,
but a flat connection is gauge-trivial only when its holonomy is \(1\).
Equivalently, the curvature exact sequence specializes to
\(\check H^2(S^1)\cong H^1(S^1;\mathbb R/\mathbb Z)\cong\mathbb R/\mathbb
Z\).

This classifies isomorphism classes, not the full moduli groupoid: constant
U(1) gauge automorphisms remain as stabilizers.

## Context

This is the critique's end-to-end higher-information pilot. It exhibits
loop data that the repository's ordinary `Disc(π₀X)` shape operation
forgets, while keeping the smooth/differential theorem separate from the
present 2-truncated simplicial calculations.

## Evidence, scoped

- **Claim:** The Statement above.
- **Ambient setting and hypotheses:** Smooth \(S^1\), principal U(1)
  bundles with smooth connection, all smooth gauge isomorphisms, and
  isomorphism classes.
- **Conclusion:** Gauge classes are \(\mathbb R/\mathbb Z\), separated by
  holonomy; curvature zero does not imply trivial holonomy.
- **Depends on:** Winding number, parallel transport,
  \(H^2(S^1;\mathbb Z)=0\), and the degree-2 differential-character
  curvature sequence.
- **Evidence, with scope:** The note derives constant representatives and
  their gauge identifications. Freed's equations (1.5)–(1.6) state the
  curvature sequence and identify its kernel with flat classes; §2.3
  identifies degree 2 with equivalence classes of circle bundles with
  connection. Duncan independently gives the general holonomy
  correspondence. The executable boundary checks test only the repository
  operations' information loss.
- **Additional bridge or choice:** A smooth/cohesive ∞-topos and explicit
  modal adjunctions are required to place this in the later ladder.
- **What this does not establish:** A full moduli-stack equivalence, a
  fracture theorem, differential cohesion, physical selection of U(1), or
  progress toward rheonomy.
- **Best current counterexample attempt:** For any
  \(\alpha\notin\mathbb Z\), \(d+2\pi i\alpha\,dt\) has zero curvature but
  nontrivial holonomy \(\exp(-2\pi i\alpha)\), refuting “flat implies
  gauge-trivial.”

## What would change the labels

Refutation: exhibit two non-gauge-equivalent circle connections with the
same holonomy under the declared conventions, or a gap in the specialized
curvature exact sequence. Upgrade is unnecessary at the set-of-classes
level; a separate claim would be needed for an equivalence of moduli
stacks.

## Log

- 2026-10-26 — filed from source-audited critique increment 3; initial status draft pending the convention/groupoid red leg.
- 2026-10-26 — authorship-blind red leg reconstructed the conventions,
  groupoid guard, exact-sequence specialization, and boundary checks; no
  Breaks. Its one Underpriced finding added the connected/basepoint or
  fundamental-groupoid qualification to the note's general holonomy formula.
