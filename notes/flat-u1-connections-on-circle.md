# Flat U(1) connections on the circle: the first higher-information pilot

*Research pilot, 2026-10-26. This is a change-of-setting diagnostic plus a
sourced example, not a new rung, a fracture theorem, or a claim that the
ordinary finite model approximates differential cohesion. Atomic claim:
W-0029.*

## 1. The elementary calculation

Put \(S^1=\mathbb R/\mathbb Z\), with coordinate \(t\) upstairs. Every
principal \(U(1)\)-bundle on \(S^1\) is topologically trivial because
\(H^2(S^1;\mathbb Z)=0\). In a fixed trivialization write a unitary
connection as
\[
  \nabla=d+2\pi i\,a(t)\,dt .
\]
Its curvature vanishes: there are no nonzero 2-forms on a 1-manifold.
This does **not** make the connection gauge-trivial.

Let
\[
  \alpha=\int_0^1 a(t)\,dt,\qquad
  f(t)=\int_0^t(a(s)-\alpha)\,ds .
\]
Since \(f(1)=f(0)=0\), \(g(t)=\exp(-2\pi i f(t))\) is a well-defined gauge
transformation. With the convention
\[
  \nabla^g=g^{-1}\nabla g
          =d+2\pi i\,a(t)\,dt+g^{-1}dg,
\]
it sends \(\nabla\) to the constant representative
\[
  \nabla_\alpha=d+2\pi i\alpha\,dt .
\]
The large gauge transformation \(g_n(t)=\exp(2\pi i n t)\), \(n\in\mathbb
Z\), shifts \(\alpha\mapsto\alpha+n\). Conversely, the integral of
\((2\pi i)^{-1}g^{-1}dg\) is the winding number of \(g\), so no other
constant representatives are identified.

A parallel section satisfies
\[
  s'(t)+2\pi i\alpha s(t)=0,
\]
and hence the once-around holonomy in this convention is
\[
  \operatorname{hol}(\nabla_\alpha)=\exp(-2\pi i\alpha).
\]
It is unchanged by \(\alpha\mapsto\alpha+n\) and separates the resulting
classes. Therefore
\[
  \{\text{\(U(1)\)-connections on \(S^1\)}\}/\text{gauge}
  \;\cong\;\mathbb R/\mathbb Z
  \;\cong\;U(1).
\]

This is the circle case of the holonomy classification of flat
connections:
\[
  \coprod_{[P]}\mathcal A_{\mathrm{flat}}(P)/\mathcal G(P)
  \;\cong\;\operatorname{Hom}(\pi_1(X),G)/G.
\]
For \(X=S^1\) and abelian \(G=U(1)\), conjugation is trivial and a
homomorphism \(\mathbb Z\to U(1)\) is determined by the image of \(1\).

### Convention ledger

The signs above belong together: gauge acts by
\(\nabla^g=g^{-1}\nabla g\), and parallel transport solves
\(\nabla s=0\). Replacing either convention can change the displayed shift
or exponent sign. It cannot change the quotient \(\mathbb R/\mathbb Z\) or
the statement that holonomy classifies it.

### Groupoid guard

\(\mathbb R/\mathbb Z\) is the **set of gauge-isomorphism classes**. It is
not the full moduli groupoid. Every connection has constant \(U(1)\) gauge
automorphisms; equivalently, the holonomy groupoid is
\(\operatorname{Hom}(\mathbb Z,U(1))//U(1)\), with trivial conjugation
action. Passing to isomorphism classes forgets these stabilizers.

## 2. The differential-cohomology statement

Freed defines \(\check H^2(M)\) as equivalence classes of circle bundles
with connection and records the curvature exact sequence
\[
  0\longrightarrow H^1(M;\mathbb R/\mathbb Z)
   \longrightarrow \check H^2(M)
   \xrightarrow{\;\mathrm{curv}\;} \Omega^2_{\mathbb Z}(M)
   \longrightarrow 0,
\]
where \(\Omega^2_{\mathbb Z}\) denotes closed 2-forms with integral
periods (*Classical Chern-Simons Theory, Part 2*, equations (1.5)–(1.6)
and §2.3). The kernel consists of equivalence classes of flat connections.

For \(M=S^1\), \(\Omega^2_{\mathbb Z}(S^1)=0\), so
\[
  \check H^2(S^1)\cong H^1(S^1;\mathbb R/\mathbb Z)
  \cong \mathbb R/\mathbb Z.
\]
This recovers the elementary answer. The theorem adds a functorial
classification and places curvature, holonomy, and characteristic class in
one differential-cohomology diagram. It does not contribute a new value in
this example, retain the moduli-groupoid stabilizers, or imply the
fracture claims deferred in `spec/02-level-2.md` §5.

The hypotheses are substantive: a smooth manifold, smooth circle bundles
with connection, gauge isomorphisms covering the identity, and ordinary
degree-2 differential cohomology. Schreiber's cohesive
differential-cohomology hexagon gives a later homotopical home for this
diagram. The present ordinary simplicial-set implementation supplies none
of that smooth/cohesive structure.

## 3. What survives this change of setting?

The current executable ambient is the ordinary category of simplicial sets
truncated at dimension 2. Its comparison is levelwise isomorphism, and its
implemented operations are
\[
  \texttt{truncFlat}(X)=\operatorname{Disc}(X_0),\qquad
  \texttt{truncShape}(X)=\operatorname{Disc}(\pi_0X).
\]
They are honest operations in that declared model. Two boundary tests show
why they must not be silently transported to homotopy types.

1. **Point versus interval.** \(\Delta^0\to\Delta^1\) is a weak homotopy
   equivalence (both are contractible), but `truncFlat` returns discrete
   objects with one and two vertices. Thus this `flat` does not descend
   through ordinary weak-equivalence localization.
2. **Point versus circle.** A point and the simplicial circle
   \(\Delta^1/\partial\Delta^1\) have the same \(\pi_0\), so the implemented
   `truncShape` returns the same discrete point. The circle nevertheless
   has a loop, and flat \(U(1)\)-connections detect that loop by holonomy.
   Increasing the represented simplicial dimension while still returning
   only \(\pi_0\) cannot restore the forgotten information.

In a category of spaces, or in a smooth/cohesive \(\infty\)-topos, the
equivalences are weak or local equivalences. A reused symbol such as
\(\flat\) or shape denotes a transported construction or an analogue only
after its ambient adjunction and an invariance theorem are stated. The
ordinary formulas above are not an approximation sequence converging to
those higher operations.

This pilot therefore establishes a **boundary and a discriminating
example**, not ascent: it is neither a D0.2 level nor an Aufhebung, and it
does not prove fracture, differential cohesion, or progress toward
rheonomy.

## 4. Scoped claim ledger

- **Claim:** Flat \(U(1)\)-connections on \(S^1\), up to gauge
  isomorphism, are classified by their holonomy in \(U(1)\cong\mathbb
  R/\mathbb Z\); zero curvature does not imply trivial holonomy.
- **Ambient setting and hypotheses:** Smooth \(S^1\), principal \(U(1)\)
  bundles with smooth connection, all smooth gauge isomorphisms, and
  isomorphism classes rather than the full moduli groupoid.
- **Conclusion:** The class represented by \(\nabla_\alpha\) depends only
  on \(\alpha\bmod\mathbb Z\), and its holonomy separates classes.
- **Depends on:** \(H^2(S^1;\mathbb Z)=0\); winding numbers of maps
  \(S^1\to U(1)\); parallel transport; Freed's degree-2 differential
  characters and curvature exact sequence.
- **Evidence, with scope:** The calculation above reconstructs the circle
  case. Freed's equations (1.5)–(1.6) and §2.3 source the differential
  classification; Duncan's §§1–3 independently derive the general
  flat-holonomy correspondence. The executable checks below witness only
  what the repository's truncated `flat` and \(\pi_0\) forget.
- **Additional bridge or choice:** Moving to a smooth/cohesive
  \(\infty\)-topos and identifying the relevant modalities and
  differential-cohomology object.
- **What this does not establish:** A rung-2 fracture theorem, a physical
  \(U(1)\) field selection, a full moduli-stack equivalence, or any forced
  next rung.
- **Best current counterexample attempt:** The tempting claim “flat
  implies gauge-trivial” is refuted by every
  \(\alpha\notin\mathbb Z\): curvature is zero but
  \(\exp(-2\pi i\alpha)\ne1\).

## Sources

- Daniel S. Freed, “Classical Chern-Simons Theory, Part 2,” *Houston
  Journal of Mathematics* 28(2) (2002), §1.1 equations (1.5)–(1.6) and
  §2.3. Source-audited: these passages state the exact curvature sequence,
  identify its kernel with flat connections, and identify
  \(\check H^2\) with equivalence classes of circle bundles with
  connection.
- David L. Duncan, “Flat connections and holonomy,” §§1–3. Supporting
  lecture note: derives the correspondence between flat connections
  modulo gauge (over all bundle classes) and holonomy representations
  modulo conjugation.
- Arun Debray et al., “Differential cohomology,” arXiv:2312.14338, §1.4
  and §1.5.1. Supporting encyclopedia account: the differential-cohomology
  hexagon and degree-2 line-bundle-with-connection classification.
- Urs Schreiber, *Differential cohomology in a cohesive \(\infty\)-topos*,
  arXiv:1310.7930. Cited only for the later cohesive setting, not as a
  theorem about the repository's ordinary finite model.
- J. F. Jardine, simplicial-set lecture 004a. Supporting source for the
  point/cylinder weak-equivalence boundary test.

## Log

- 2026-10-26 — created as critique increment 3; source audit and red-leg
  disposition recorded in W-0029 and `reviews/flat-u1-circle-red-leg.md`.
