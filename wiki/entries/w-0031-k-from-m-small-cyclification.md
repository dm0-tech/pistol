# K from M: small-circle reduction of cohomotopy compares to twisted K-theory

- **ID:** W-0031
- **Provenance:** sourced (Golub-Sati-Schreiber preprint; Schreiber overview)
- **Verification:** source-audited (statements, hypotheses and limitations); unverified (independent proof reconstruction)
- **Grade:** claimed
- **Sources:** Nikita Golub, Hisham Sati and Urs Schreiber, [On the Derivation of Twisted K-Theory from M-Theory, October 6 manuscript](https://ncatlab.org/schreiber/files/KfromM_26-10-06.pdf), especially Proposition 2.4, Definition 3.3, Remarks 3.5-3.6, Theorems 3.8, 3.17 and 3.21, Remark 3.19, Corollary 3.23, and Sections 4.2-4.3; [earlier arXiv:2609.36048v1](https://arxiv.org/abs/2609.36048v1), submitted 2026-09-28, manuscript dated 2026-09-30; Schreiber, [K from M](https://ncatlab.org/schreiber/show/K+from+M), revised 2026-10-06.
- **Transcript:** [T-2026-09-23-A](../transcripts/T-2026-09-23-A.md) (historical motivation only; not evidence for the paper's theorem).
- **Cross-refs:** [W-0028](w-0028-s4-born-reading-needs-symmetry-reduction.md); [W-0029](w-0029-flat-u1-circle-holonomy.md); [original discussion](../transcripts/T-2026-09-23-A.md); [roadmap](../../objective-logic-roadmap.md)
- **Status:** draft

## Statement

In the manuscript's cohomotopical charge-quantization setting, circle
reduction subject to a specified topological smallness condition yields
**small-cyclified 4-cohomotopy**, with a comparison operation to rank-zero
twisted complex K-theory. The authors present K-theory as an abelian
approximation that loses specified nonlinear and torsion charge data,
not as an equivalent classification of all the reduced charges
([paper, Theorem 3.17, Remark 3.19 and Section 4.2](https://ncatlab.org/schreiber/files/KfromM_26-10-06.pdf)).

This is a conditional result within the Hypothesis H program, not a
derivation of Hypothesis H itself ([paper, Section 2.2](https://ncatlab.org/schreiber/files/KfromM_26-10-06.pdf)).
The manuscript also expressly
disregards the tangential twisting of 4-cohomotopy that is part of
Hypothesis H proper, leaving that generalization to future work
([paper, Sections 2.2 and 4.3(i)](https://ncatlab.org/schreiber/files/KfromM_26-10-06.pdf)).

## Hypotheses and construction

- **Charge-classifying input:** The chosen 11D charge theory uses
  \(S^4\) as its classifying space; this choice is an input, not selected
  by the dimensional-reduction theorem ([paper, Section 2.2](https://ncatlab.org/schreiber/files/KfromM_26-10-06.pdf)).
  The paper works throughout with
  globally hyperbolic spacetimes and formulates charges on their Cauchy
  surfaces ([paper, Appendix A.2](https://ncatlab.org/schreiber/files/KfromM_26-10-06.pdf)).
  Its K-theory target is complex, degree zero and rank zero, the last
  restriction corresponding to absence of Romans mass
  ([paper, Section 1.2, footnote 3](https://ncatlab.org/schreiber/files/KfromM_26-10-06.pdf)).
- **Ordinary circle reduction:** For a circle principal bundle,
  Proposition 2.4 relates charges on the total space to charges classified
  by \(\operatorname{Cyc}(S^4)=\operatorname{Map}(S^1,S^4)//S^1\)
  on the base, remembering the bundle's Chern class; here \(//\) is the
  homotopy quotient by rigid loop rotations
  ([paper, Proposition 2.4](https://ncatlab.org/schreiber/files/KfromM_26-10-06.pdf)).
- **Additional smallness condition:** With an auxiliary round metric on
  the charge-classifying \(S^4\), let
  \(E(\gamma)=\frac12\int_{S^1}|\dot\gamma(s)|^2\,ds\), and let \(E_1\)
  be the energy of a once-traversed great circle
  ([paper, Definition 3.3](https://ncatlab.org/schreiber/files/KfromM_26-10-06.pdf)).
  The reduced classifying
  map must factor up to homotopy through
  \(\operatorname{Cyc}_1(S^4)=(L_{\le E_1}S^4)//S^1\), the first
  nontrivial bounded-energy stage
  ([paper, Definition 3.3 and equation (45)](https://ncatlab.org/schreiber/files/KfromM_26-10-06.pdf)).
- **Not merely a small physical radius:** The energy is on loops in a
  charge-classifying space, not a physical field's energy on spacetime
  ([paper, Remark 3.6](https://ncatlab.org/schreiber/files/KfromM_26-10-06.pdf)).
  The authors explicitly warn that the suggestive Kaluza-Klein
  interpretation is subtle ([paper, Remark 3.6](https://ncatlab.org/schreiber/files/KfromM_26-10-06.pdf)).
- **Smallness is not automatic:** For a connected oriented Cauchy
  surface \(X^9\) and a given ordinary reduction, Theorem 3.8 identifies
  the obstruction to a small-cyclified lift with the D0 tadpole
  \([H_3\wedge F_6]\in H^9_{\mathrm{dR}}(X^9)\)
  ([paper, Theorem 3.8](https://ncatlab.org/schreiber/files/KfromM_26-10-06.pdf)).
  When it vanishes, homotopy classes of lifts form a torsor over the
  stated twisted stable 8-cohomotopy, reducing to
  \(H^8(X^9;\mathbb Z)\) in the noncompact or boundary case
  ([paper, Theorem 3.8](https://ncatlab.org/schreiber/files/KfromM_26-10-06.pdf)).

## What the comparison does and does not give

- **General comparison:** Theorem 3.17 constructs a twisted cohomology
  operation
  \(\Phi:\operatorname{Cyc}_1(S^4)\to BU//BU(1)\)
  ([paper, Theorem 3.17](https://ncatlab.org/schreiber/files/KfromM_26-10-06.pdf)).
  In the prescribed low-degree normalization, it preserves the NS5
  charge and scales the D6/D4 charges by an integer \(n\); such an
  operation exists precisely when \(n\) is even, with the D4 component
  specified on the restricted domain of equation (76c)
  ([paper, Theorem 3.17](https://ncatlab.org/schreiber/files/KfromM_26-10-06.pdf)).
- **Restricted DMW sector:** The sector has vanishing NS5 and D6 charges,
  with lifts through the corresponding homotopy fibers
  ([paper, Section 3.4, equation (93)](https://ncatlab.org/schreiber/files/KfromM_26-10-06.pdf)).
  There are
  comparison lifts for every \(n\), including a canonical \(n=1\) lift
  from the Bott generator; the normalization of the restricted general
  map is a Bott-generator shift, not division of that map by two
  ([paper, Section 3.4, equation (93) and Theorem 3.21](https://ncatlab.org/schreiber/files/KfromM_26-10-06.pdf)).
- **Forgotten information:** K-theory forgets the nonlinear electric
  NS1 charge and its \(H_7\)-flux
  ([paper, Remark 3.19](https://ncatlab.org/schreiber/files/KfromM_26-10-06.pdf)).
  Corollary 3.23 describes low-degree
  homotopy fibers of the 10-truncated comparisons, with NS1 and torsion
  contributions, plus two extra \(\mathbb Z/2\) contributions in the
  general \(n=2\) case ([paper, Remark 3.19 and Corollary 3.23](https://ncatlab.org/schreiber/files/KfromM_26-10-06.pdf)).
- **Qualified rational agreement:** The corollary states rational
  homotopy isomorphisms in degrees at most 10 away from degree 7, the
  NS1 charge ([paper, Corollary 3.23](https://ncatlab.org/schreiber/files/KfromM_26-10-06.pdf)).
  This is not a full integral equivalence, nor a claim
  confined merely to even cohomological degrees
  ([paper, Corollary 3.23](https://ncatlab.org/schreiber/files/KfromM_26-10-06.pdf)).
- **Tangential twist still deferred:** Section 4.3(i) says the twist
  responsible for the half-integral \(G_4\) shift has been disregarded
  ([paper, Section 4.3(i)](https://ncatlab.org/schreiber/files/KfromM_26-10-06.pdf)).
  Its extension is expected, but remains to be worked out; it must not
  be silently imported from the broader Hypothesis H discussion in
  W-0028 ([paper, Section 4.3(i)](https://ncatlab.org/schreiber/files/KfromM_26-10-06.pdf)).
- **Proof-detail boundary:** The authors provide proof outlines and
  explicitly leave substantial spectral-sequence computations to the
  reader ([paper, Section 4.2](https://ncatlab.org/schreiber/files/KfromM_26-10-06.pdf)).
  This entry audits the stated result and limits, not those omitted
  computations.

## Context

The archived September 23 discussion began from the K-from-M theme.
This entry supplies the missing manuscript-level record; the transcript
remains a history of the project's motivation, not a substitute source.

For Pistol, this is a concrete example of changing a classifying space
under reduction and then comparing a nonabelian theory to an abelian
approximation. It is useful for tracking input assumptions, comparison
maps, obstructions and forgotten data, without treating their existence
as a proof of the modal ladder or the Born reading.

## Evidence, scoped

- **Claim:** The conditional small-circle construction and qualified
  comparison reported by Golub-Sati-Schreiber.
- **Ambient setting and hypotheses:** The manuscript's \(S^4\) model
  with tangential twisting omitted, circle-bundle reduction, bounded-energy
  factorization, and stated Cauchy-surface and sector restrictions.
- **Conclusion:** Record a nonabelian reduced charge theory and its
  comparison to rank-zero twisted K-theory, with the stated losses and
  normalizations; do not replace the comparison by an equivalence.
- **Depends on:** Hypothesis H as a modeling input; cyclification;
  the Morse-Bott filtration; the paper's obstruction and comparison
  arguments.
- **Evidence, with scope:** Source audit against the October 6 manuscript's
  theorem statements, definitions, proof-status disclosure and deferred-work
  section, also checked against the earlier arXiv v1; no independent
  reconstruction or machine verification.
- **Additional bridge or choice:** Physical adequacy of the
  cohomotopical charge law, physical justification of smallness, and the
  deferred tangential-twist extension are not supplied by this intake.
- **What this does not establish:** Uniqueness of the ambient theory,
  unqualified Hypothesis H implies Hypothesis K, full M-theory dynamics,
  the modal ascent, or the entanglement observable sought in W-0028.
- **Best current counterexample attempt:** No new countermodel is
  claimed. The source itself rules out the naive equivalence through
  the NS1/torsion fiber and the odd-\(n\) obstruction in the general
  comparison ([paper, Theorem 3.17 and Corollary 3.23](https://ncatlab.org/schreiber/files/KfromM_26-10-06.pdf)).

## What would change the labels

An upgrade requires independent reconstruction of one load-bearing
hinge, starting with the even-\(n\) obstruction/existence argument in
Theorem 3.17 or the low-degree comparison fiber in Corollary 3.23.
Explicitly check the integral lattice and omitted spectral-sequence
differentials, rather than testing only rational characteristic forms.

Track later versions for a worked tangential-twist extension. A source
revision, a failed reconstruction, or a counterexample under the stated
hypotheses would require re-auditing the corresponding claim; disagreement
with an informal slogan is not a refutation of the typed theorem.

## Log

- 2026-10-27 — created at the owner's request; October 6 manuscript statements, hypotheses, comparison limits and deferred tangential twist source-audited, with the earlier arXiv v1 also checked; independent proof reconstruction pending; initial status draft.
