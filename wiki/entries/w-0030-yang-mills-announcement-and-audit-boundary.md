# Yang-Mills AI announcement: proof claims and public verification are separate

- **ID:** W-0030
- **Provenance:** sourced (primary records); sourced-tier2 (Woit/Baez commentary)
- **Verification:** source-audited (public records only); unverified (announced proof and Lean artifacts)
- **Grade:** claimed
- **Sources:** [OpenAI announcement, 2026-10-26](https://openai.com/index/building-scientific-understanding-with-academic-communities/); [Woit, “Secret Unified Physics Slop,” 2026-10-26, including Baez's 2026-10-27 comment](https://www.math.columbia.edu/~woit/wordpress/?p=15948); [AGMAI, 2026-10-26 recommendation](https://agmai.org/#request-immediate-release); [Jaffe-Witten, official Clay problem](https://www.claymath.org/wp-content/uploads/2022/06/yangmills.pdf); [Alpoge-Sussman experiment README](https://github.com/ethanwsussman/Yang--Mills-LLM-experiment)
- **Transcript:** Not applicable; sourced intake, not a new mathematical derivation.
- **Cross-refs:** [W-0005](w-0005-llm-wiki-landscape.md); [W-0008](w-0008-hopf-problem-load-gauge.md); [W-0029](w-0029-flat-u1-circle-holonomy.md); [AGENTS.md](../../AGENTS.md)
- **Status:** draft

## Statement

As of this source audit on 2026-10-27, OpenAI announces existence proofs
for certain interacting four-dimensional gauge theories, including QCD,
and reports completing a Lean formalization of Yang-Mills existence on
2026-10-16 ([OpenAI](https://openai.com/index/building-scientific-understanding-with-academic-communities/)).
The same announcement says the physics collaboration is
holding off on releasing the AI-produced artifacts ([OpenAI](https://openai.com/index/building-scientific-understanding-with-academic-communities/)).

The announcement and release policy are established as statements in a
primary source; the mathematical results and reported formalization remain
claimed here. No proof artifact was inspected, no Lean kernel check was
run, and this entry does not confer `formally-verified` status.

The official Clay target requires a nontrivial quantum Yang-Mills theory
on \(\mathbb R^4\), for any compact simple gauge group, with a positive
mass gap and the specified axiomatic properties ([Clay problem](https://www.claymath.org/wp-content/uploads/2022/06/yangmills.pdf)).
OpenAI identifies its
Yang-Mills existence claim as part of that problem; its announcement does
not claim the mass-gap component ([Clay problem](https://www.claymath.org/wp-content/uploads/2022/06/yangmills.pdf), [OpenAI](https://openai.com/index/building-scientific-understanding-with-academic-communities/)).

## Context

This is a watch entry about the boundary between an announced result,
a checked formal statement, identification of the intended physical
theory, and public mathematical understanding. It is not evidence for a
new modal rung, rheonomy, or physical selection of a gauge group.

Woit's strongest criticism is the lack of public material with which to
assess the claims; AGMAI independently calls for immediate release ([Woit](https://www.math.columbia.edu/~woit/wordpress/?p=15948), [AGMAI](https://agmai.org/#request-immediate-release)).
His pejorative characterization of unseen output is not a mathematical
refutation, and Baez objects to treating existence as the easy part
([Woit and Baez](https://www.math.columbia.edu/~woit/wordpress/?p=15948), [AGMAI](https://agmai.org/#request-immediate-release)).

Baez also highlights the theory-identification issue: constructing some
axiomatic QFT, even through a gauge-lattice limit, does not by itself
identify the desired interacting Yang-Mills theory ([Baez's comment](https://www.math.columbia.edu/~woit/wordpress/?p=15948)).
The Clay text makes
the target more specific through gauge-invariant local observables,
short-distance behavior, and axiomatic requirements ([Baez's comment](https://www.math.columbia.edu/~woit/wordpress/?p=15948), [Clay problem](https://www.claymath.org/wp-content/uploads/2022/06/yangmills.pdf)).

The linked Alpoge-Sussman project provides a separate, public comparison:
its README explicitly labels the work tentative and reports that
abridgment can omit definitions left to inference from context ([experiment README](https://github.com/ethanwsussman/Yang--Mills-LLM-experiment)).
This is a concrete warning about compression and implicit contracts, not
evidence that either project's mathematics is false ([experiment README](https://github.com/ethanwsussman/Yang--Mills-LLM-experiment)).

## Evidence, scoped

- **Claim:** The announcement, its stated access policy, and its
  distinction from a complete solution of the official Clay target.
- **Ambient setting and hypotheses:** A dated audit of public statements,
  not a reconstruction or mathematical verification of the announced QFT.
- **Conclusion:** Retain the result as claimed and watchable; do not
  substitute an announcement or a reported formalization for an audited
  statement and proof.
- **Depends on:** The primary announcement, the official problem, and
  explicit attribution of commentary rather than treating it as theorem.
- **Evidence, with scope:** OpenAI supports what it announces and its
  withholding policy; Clay defines the target; AGMAI supports the release
  recommendation; Woit/Baez supply criticism; the experiment README
  supports only that project's own disclosures.
- **Additional bridge or choice:** An audit would need the exact theorem,
  definitions, assumptions and proof dependencies, plus a justified
  correspondence to the intended physical theory.
- **What this does not establish:** Correctness or incorrectness of the
  proof, independent verification, a mass gap, a complete Millennium
  solution, or a derivation of Pistol's program.
- **Best current counterexample attempt:** No proof countermodel can be
  claimed from unseen artifacts. The immediate target-mismatch attack is
  whether the proved statement permits finite-volume, trivial/free, or
  insufficient-observable results where the advertised target does not;
  these are questions to test, not findings about the withheld proof.

## What would change the labels

The cheapest useful update is release of the exact theorem and its
definitions, together with the natural-language argument and versioned
formalization. Check which spacetime, gauge groups, observables,
nontriviality conditions, limiting procedures and axioms are actually
covered; do not infer them from the announcement.

A formal-verification upgrade would require a reproducible check of that
artifact and an audit of its assumptions and proof dependencies. Whether
the formal statement captures the intended physical theory remains a
separate question, and mass gap remains a separate claim unless proved.

For Pistol, the practical lesson is to keep definitions explicit,
preserve source-to-summary traceability, and make target mismatch a named
review attack. This adds no proof-assistant requirement and does not
change the project's existing formalization budget.

## Log

- 2026-10-27 — sourced intake prompted by the owner's Woit link; public records audited, mathematical artifacts not inspected; initial status draft.
