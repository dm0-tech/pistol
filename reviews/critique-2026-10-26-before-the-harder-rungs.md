# External critique before the harder rungs

Received 2026-10-26. The review targets commit
`a4deb2a3904928ba3564f511f9357b5bc9db4306`. This is an external repository
critique with targeted mathematical and executable checks, not an
authorship-blind red leg. The review text below is archived verbatim.

## Disposition

### Accepted in increment 1

- Repaired the collapsed-codomain argument in
  `notes/no-nothing-no-thing.md` and W-0012, retaining the constant-zero
  functor counterexample and stating the missing generation hypothesis.
- Repaired W-0013 and its summaries: stability and presentability make Sp
  universally available as the free construction; they do not uniquely
  select it.
- Added scoped evidence for the two load-bearing claims and clarified in
  the wiki schema that different evidence kinds answer different questions.
- Strengthened red-leg attack records and lightened per-edit owner gates in
  `AGENTS.md`.

### Deferred to increment 2

- Compare INDEX labels against entry headers in `wiki/lint.mjs`.
- Add a finite simplicial-model validator and a malformed-model rejection
  check.
- Separate core and exploratory example summaries or entry points.
- Add a small CI job for core checks and wiki lint.
- Convert the accompanying probes into permanent checks, then remove the
  temporary reproduction script.
- Pin the explorer's esbuild invocation if the explorer is edited.

### Deferred to increment 3

- Build the flat U(1)-connections-on-S¹ pilot.
- State the ordinary-to-homotopical boundary and what survives it.
- Add the point/interval and a loop-bearing example as boundary tests.

### Proposals for owner review

- Keep “rung” organizational unless a transition earns a stronger theorem.
- Classify each transition as a theorem in one setting, a change of setting,
  or an interpretation, and require one concrete gain.
- Treat rheonomy as a research hypothesis with permission to branch or stop.

---

# Pistol: critique before the harder rungs

The project should keep its lightweight, example-led approach. The main risk is not a lack of formal verification: it is that valid mathematics, suggestive interpretation, and successful computation can reinforce one another without establishing the particular bridge the project needs. My recommendation is to spend the next increment of effort on those bridges, not on more infrastructure or more parallel research branches.

## Scope and overall judgment

I reviewed the repository at commit [`a4deb2a3904928ba3564f511f9357b5bc9db4306`](https://github.com/dm0-tech/pistol/commit/a4deb2a3904928ba3564f511f9357b5bc9db4306), including the three spec slices, roadmap, agent instructions, executable models, review records, wiki machinery, and selected research branches. This is a repository critique with targeted mathematical and executable checks, not a line-by-line certification of all its mathematics or an authorship-blind red-leg review.

Locally, all 60 checks in `node examples/run.mjs` passed, and `node wiki/lint.mjs` passed with zero warnings. These are execution results from this review; their scope is the repository's [finite/bounded check runner](https://github.com/dm0-tech/pistol/blob/main/examples/run.mjs) and [structural linter](https://github.com/dm0-tech/pistol/blob/main/wiki/lint.mjs), not the truth of the whole program.

**Bottom line:** continue, but make the next advancement narrower and more discriminating. Before expanding toward differential cohesion or rheonomy, correct two overstatements in the exploratory branch, make the ordinary-to-homotopical transition explicit, and replace broad evidence labels with scoped evidence for the few claims on the active path.

## What is already working

- **The spec/exposition boundary:** Keeping the mathematical spec separate from the A/B/C exposition is appropriate for this mission, as is prohibiting wiki authority from flowing directly into the spec. The existing instructions explicitly require re-establishing promoted material at the destination's standard; retain that rule rather than adding a proof assistant ([AGENTS.md](https://github.com/dm0-tech/pistol/blob/main/AGENTS.md)).
- **The adversarial review has produced real corrections:** The rung-2 review caught a broken zigzag argument, a cardinality-only test, a wrong attribution of units/counits, and claims stronger than the model justified. These are exactly the failure modes that deserve the review budget, and they show the process is doing more than polishing prose ([rung-2 review](https://github.com/dm0-tech/pistol/blob/main/reviews/rung-2-red-leg.md)).
- **Counterexamples are retained rather than buried:** W-0023 preserves the compact/split obstruction and explicitly leaves the plausibility-to-positivity bridge conjectural. That distinction is valuable: established facts surrounding a bridge should not establish the bridge itself ([W-0023](https://github.com/dm0-tech/pistol/blob/main/wiki/entries/w-0023-objectivity-and-the-two-orbits.md)).
- **The project has already noticed its complexity problem:** The handoff proposes coherent review gates, one dossier per transition, restrained visualization, and delaying automation. These are proposals rather than adopted obligations; I would adopt the direction without turning the entire list into mandatory ceremony ([complexity handoff](https://github.com/dm0-tech/pistol/blob/main/notes/project-complexity-handoff.md)).

## Three substantive issues to address first

### A collapsed functor image is not a collapsed codomain

The exploratory “no nothing no thing” note argues that a colimit-preserving \(F:\mathcal S\to D\) sending the point to zero sends every space to zero, then concludes that \(D\) is forced to be the zero category. The first conclusion concerns the image of \(F\); the second does not follow without an additional generation condition ([the argument in the note](https://github.com/dm0-tech/pistol/blob/main/notes/no-nothing-no-thing.md)).

Here is a counterexample to the statement as written. Take \(D=\mathrm{Sp}\) and let \(F\) be the constant zero functor. This functor preserves colimits and sends the point, and indeed every space, to zero. Its codomain nevertheless contains nonzero objects.

The minimal repair is precise:

> \(F(*)=0\) forces \(F\) to be the zero functor. It forces \(D=0\) only with a further condition, such as the essential image of \(F\) generating \(D\) under colimits.

This does not invalidate a universal construction that supplies the missing generation property. It does show that the property must be stated rather than imported by the word “universal.”

**Practical consequence:** require every “forces the world to be…” argument to distinguish a property of an object, a functor's image, and the entire ambient category. Keep this counterexample next to the repaired claim; no new verification technology is needed.

### Universal availability is not unique selection

W-0013 correctly invokes the special universal role of spectra, but compresses the conclusion to “A1 (pointed) + A2 (\(\Sigma\) invertible) + presentability ⇒ \(\mathbb S\).” Its title similarly says these conditions land on \(\mathrm{Sp}\) and the sphere unit ([W-0013](https://github.com/dm0-tech/pistol/blob/main/wiki/entries/w-0013-reversible-becoming-forces-spectra.md)).

That inference needs an additional universal/free-construction qualification. Lurie's actual statement is that, for each presentable stable \(\infty\)-category \(D\), evaluation on the sphere gives
\[
\operatorname{Fun}^{L}(\mathrm{Sp},D)\simeq D;
\]
it does not say \(D\simeq\mathrm{Sp}\) ([Higher Algebra, Corollary 1.4.4.6](https://www.math.ias.edu/~lurie/papers/HA.pdf)).

For example, derived categories of modules provide other presentable stable worlds; the correspondence \(D(R)\simeq\operatorname{Mod}_{HR}\) is a standard example ([stable homotopy notes, Example 1.10](https://www.math.columbia.edu/~calebji/stable-notes.pdf)). Adding compatible presentable symmetric monoidal structure does not make every such world the initial one.

The safe formulation is:

> If the chosen construction is the free presentable stable category on one generator, it gives \(\mathrm{Sp}\), with the generator corresponding to \(\mathbb S\). Pointedness, stability, and presentability alone do not select that construction.

For this project's mission, that difference is central rather than pedantic. “There is a canonical universal source for these structures” and “these conditions uniquely determine reality's next rung” are different claims.

**Practical consequence:** whenever “forced,” “canonical,” “initial,” or “unique” does important work, record the category in which the universal property lives, the allowed morphisms, the chosen inputs, and the exact freedom it removes. A standard theorem may establish the construction while leaving its philosophical selection entirely open.

### The homotopical transition needs an explicit semantic boundary

Rung 2 is appropriately scoped to the existing adjoint triple and its ordinary models; the roadmap does not claim the later differential phase is already complete. Nevertheless, its planned progression makes the transition from ordinary simplicial sets to homotopy-sensitive geometry a critical future boundary ([rung-2 spec](https://github.com/dm0-tech/pistol/blob/main/spec/02-level-2.md), [roadmap](https://github.com/dm0-tech/pistol/blob/main/objective-logic-roadmap.md)).

The current implementation has
\[
\flat X=\mathrm{Disc}(X_0),\qquad
\mathrm{shape}(X)=\mathrm{Disc}(\pi_0X).
\]
These are explicit operations on the ordinary simplicial-set model ([implementation](https://github.com/dm0-tech/pistol/blob/main/examples/src/sset.mjs)).

A diagnostic example makes the limitation concrete. The point and interval \(\Delta^1\) have equivalent homotopy types, but the repository's `flat` sends them to discrete objects with respectively one and two vertices. The weak equivalence between a point and its simplicial cylinder is standard ([Jardine's simplicial-set lecture](https://math.sci.uwo.ca/~jardine/HomTh/lecture004a.pdf)); the distinct outputs follow directly from the [implemented vertex-set definition](https://github.com/dm0-tech/pistol/blob/main/examples/src/sset.mjs).

Therefore this `flat` does not simply descend through the usual weak-equivalence localization to an operation on homotopy types. This is not an error in the present ordinary model. It is a reason not to treat that model as an increasingly accurate finite approximation of the eventual higher-cohesive setting.

Likewise, \(\pi_0\) is not the full homotopy type. Increasing the truncation dimension of a computation that still returns only \(\pi_0\) will not recover the missing loop information.

**Practical consequence:** before that transition, add a short “what survives this change of setting?” note. Name the new ambient category and equivalence notion, say whether each reused symbol denotes the same construction or an analogue, and identify the theorem that transports any claimed structure. Use the point/interval example and a loop-bearing example as boundary tests.

## Do not let the ladder supply its own proof of progress

The rung-2 spec explicitly distinguishes its inner triple from a level in the frozen D0.2 sense. That is good mathematical hygiene, but it means the chapter sequence is not automatically an ordered sequence of levels or an iterated Aufhebung theorem ([rung-2 distinction](https://github.com/dm0-tech/pistol/blob/main/spec/02-level-2.md)).

Keep “rung” as an organizational term unless a particular transition earns something stronger. For each new transition, say whether it is a theorem in the same setting, a change of setting, or a proposed interpretation. Require one concrete gain: a previously indistinguishable pair becomes distinguishable, an obstruction is removed under explicit new hypotheses, or a new invariant becomes available.

The roadmap's intended summit is rheonomy, but a planned destination is not evidence that preceding steps force it ([roadmap](https://github.com/dm0-tech/pistol/blob/main/objective-logic-roadmap.md)). Treat that destination as a research hypothesis with permission to branch or stop. Otherwise the project can preserve an appearance of ascent by changing what “higher” means at each difficult step.

## Preventing self-reinforcement without building a bureaucracy

### Scope the evidence to the actual hinge

The wiki currently describes `Verification` as the “strongest check actually applied,” while allowing entries with mixed grades and several kinds of evidence. The atomic-entry rule helps, but a single headline label can still hide which subclaim was checked ([wiki policy](https://github.com/dm0-tech/pistol/blob/main/wiki/README.md)).

Do not rank a source audit, a finite computation, and a fresh-context review as interchangeable steps on one ladder. They answer different questions:

- **Source audit:** Does the cited passage establish this exact statement under these hypotheses?
- **Executable check:** Does this implementation satisfy this property on these inputs?
- **Mathematical argument:** Does the conclusion follow in the declared setting?
- **Adversarial review:** Did someone try the relevant ways this claim could fail?
- **Interpretive bridge:** Why does this mathematics apply to the philosophical or physical role assigned to it?

For each claim actively supporting the next rung, add a small block to the existing ledger rather than inventing another register:

```text
Claim:
Ambient setting and hypotheses:
Conclusion:
Depends on:
Evidence, with scope:
Additional bridge or choice:
What this does not establish:
Best current counterexample attempt:
```

Only load-bearing claims need this treatment. Historical observations and speculative associations do not all need individually managed lifecycles.

The two corrections above illustrate the payoff: the missing conditions become visible as “generation of the codomain” and “selection of the free/initial construction.” Both can otherwise disappear inside a paragraph of correct background mathematics.

### Distinguish independent attempts from repeated agreement

The authorship-blind review rule is good, and the recorded rung-2 review demonstrably found problems. The record, however, gives little reviewer provenance beyond fresh-context passes and their supplied artifacts ([review record](https://github.com/dm0-tech/pistol/blob/main/reviews/rung-2-red-leg.md)).

Keep fresh context, but assign one or two specific attacks at each gate: search for a countermodel; check the most expensive source import against its exact hypotheses; rederive one hinge without reusing the author's proof; or identify an unacknowledged extra choice. Record the reviewed commit, reviewer/tool identity, attempted attacks, and unresolved assumptions.

Different model families can be useful, but agreement between them is not the objective. The objective is a different route to being wrong. A changed argument should reopen the affected attack, not inherit a blanket “reviewed” status from its predecessor.

### Permit bridges to fail without moving the target

W-0023 already proposes a strong attack: can the same positive plausibility structure map naturally to both compact and split forms? That is much more informative about the intended selection bridge than collecting more facts about either orbit ([W-0023's upgrade and refutation tests](https://github.com/dm0-tech/pistol/blob/main/wiki/entries/w-0023-objectivity-and-the-two-orbits.md)).

Adopt that pattern for each active transition. Before exploring, state what it is supposed to select, what extra assumptions are allowed, and what result would mean “this bridge fails.” Changing those assumptions may be a worthwhile new conjecture, but it should be recorded as a new version rather than a rescue of the original prediction.

Keep the rhetoric asymmetric: conjectures may be ambitious; declarations of inevitability must be narrow. The research program becomes more credible, not less, when one attractive route terminates cleanly.

## Make the cheap checks earn their scope

### Repair the actual index/lint gap

The wiki documentation advertises index/entry agreement, but the implementation only checks entry links and their targets. It does not compare the index's provenance, verification, grade, or status values with the corresponding header values ([documented guarantee](https://github.com/dm0-tech/pistol/blob/main/wiki/README.md), [implementation](https://github.com/dm0-tech/pistol/blob/main/wiki/lint.mjs)).

I confirmed this by changing all four labels in W-0001's index row in a temporary copy; lint still passed with zero warnings. No original repository files were modified.

Use entry headers as canonical and generate the index table from them, or compare parsed values if retaining a manually maintained table. Test the generator/comparison with an intentionally stale row. This is a concrete reliability improvement, not a semantic-verification project.

### Add a model-validity check before expanding the examples

The simplicial implementation explicitly omits an identity-validation engine because it currently uses small hand-built models. That is a reasonable initial economy, but it should not silently remain the rule as constructors and higher-dimensional examples expand ([implementation comments](https://github.com/dm0-tech/pistol/blob/main/examples/src/sset.mjs)).

A modest validator should check face/degeneracy domains and codomains and every applicable simplicial identity within the represented dimensions. It should reject a deliberately malformed model before any theorem-oriented check runs. This is validation of finite input data, not an attempt to prove arbitrary simplicial mathematics.

I also checked test sensitivity in two ways:

- **Broken face identity:** Corrupting a 2-simplex's face leaves `pi0` unchanged while violating \(d_0d_0=d_0d_1\). This is expected, but shows why a component computation cannot validate the model containing it.
- **Over-collapsing components:** A deliberately wrong component function that collapses every nonempty input passes all 16 named product comparisons. The separate `Disc(2)` component-count assertion does reject it, so this mutation does not survive the full suite. Preserve that complementary test; do not describe the product-property test alone as validating the component implementation.

As new examples arrive, add an independent reference calculation where it matters, relabeling invariance, and one known bad implementation/input that the relevant checks must reject. Prefer a few targeted mutations over a large testing framework.

### Separate core checks from exploratory research

The single runner currently executes spec checks, bounded guarded-recursion checks, arithmetic supporting stable-stem readings, and octonion/\(G_2\) experiments in one successful run. Its later orbit test includes random sampling rather than exhaustive classification ([runner](https://github.com/dm0-tech/pistol/blob/main/examples/run.mjs)).

Give these groups separate summaries or entry points. Keep exploratory computations available, but make it impossible to read “all checks passed” as evidence for a conceptual bridge those computations never exercise. Run the core group and wiki lint in a small CI job; retain a deliberately tiny dependency footprint.

## Control the complexity budget

The handoff already recommends one dossier per transition, reviews at coherent gates, avoiding unnecessary file splitting, and keeping the explorer frozen unless a new pedagogical obstruction justifies it. Adopt those recommendations before adding a claim database, generalized agent pipeline, or daily automation ([handoff proposals](https://github.com/dm0-tech/pistol/blob/main/notes/project-complexity-handoff.md)).

My concrete rule would be: a new artifact must either replace an existing explanation, expose a different failure mode, or be necessary to reconstruct a source-dependent claim. Otherwise put the material in the existing dossier. Keep historical assessments historical rather than updating every past document whenever current status changes.

For the active path, a small `Depends on:` list is enough. If an upstream claim changes, mark its direct active dependents for recheck. Do not build an inference engine or try to propagate “truth scores” through the archive.

The proposed daily epic explicitly awaits approval and requires three manual trials before automation. Keep that brake; a mandatory daily multi-artifact loop could optimize for orderly production of plausible claims rather than difficult discrimination between them ([epic proposal](https://github.com/dm0-tech/pistol/blob/main/epics/epic-1-daily-gated-epics.md)).

A minor engineering issue can wait: the explorer mirrors the mathematical core and uses an unpinned `npx esbuild` command. If it is edited again, share the pure core and pin the build tool; do not refactor a frozen teaching artifact merely to satisfy architectural taste ([explorer build](https://github.com/dm0-tech/pistol/blob/main/explorer/build.mjs)).

## A practical next increment

I would make three small, separately reviewable changes rather than redesign the repository.

- **Correct the two quantifier/selection overstatements:** Repair the collapsed-codomain argument and W-0013's inference. Preserve the counterexamples beside the claims and update any summaries repeating the stronger wording.
- **Tighten the existing tools:** Generate or validate index values, add finite model-validity checks, separate core/exploratory results, and run the cheap checks in CI. Do not add a proof assistant, graph database, or multi-agent service.
- **Build one end-to-end higher-information example:** Before attempting a general differential-cohesion development, work through flat \(U(1)\) connections on the circle. Make the ordinary/homotopical boundary explicit and give one claim ledger with scoped evidence and an attempted counterexample.

A useful target for the last item is the following elementary calculation. Put \(S^1=\mathbb R/\mathbb Z\) and
\[
\nabla_\alpha=d+2\pi i\alpha\,dt .
\]
Its curvature is zero, but its holonomy is \(\exp(-2\pi i\alpha)\) under this convention. Gauge transformations of winding number \(n\) shift \(\alpha\) by an integer, so the gauge classes are parametrized by \(\mathbb R/\mathbb Z\).

That gives a compact, genuinely discriminating lesson: zero curvature does not imply trivial holonomy, and \(\pi_0\) cannot carry the loop data needed for the calculation. Flat connections, bundles over the circle, holonomy, and their classification are standard differential geometry, so this can be checked through an independent elementary source before importing more machinery ([Taubes, “Flat connections and holonomy”](https://academic.oup.com/book/12200/chapter-abstract/161658290?redirectedFrom=fulltext)).

Use this as a pilot, not as a substitute for the roadmap's differential-cohesive theorem. Once the concrete calculation is clear, specialize one sourced differential-cohomology or fracture result to it, list the extra hypotheses, and identify exactly what the abstract theorem adds.

The exit criterion should be understanding and discrimination: can someone reconstruct the example, see which data each operation forgets, and identify the added choices without following the author’s philosophical narrative? That would be a stronger foundation for the harder rungs than a larger archive of mutually sympathetic explanations.

## Reproduction notes

The accompanying `pistol-review-probes.mjs` runs the component-test mutation, point/interval comparison, malformed-model probe, and temporary index-drift mutation. It reads the checkout and modifies only a disposable temporary copy for the last probe.

```sh
node examples/run.mjs
node wiki/lint.mjs
node /path/to/pistol-review-probes.mjs /path/to/pistol
```

The probes target the reviewed commit and are not a proposed replacement test suite. In particular, the intentionally wrong component implementation is caught by another existing assertion; its purpose is to establish the narrow scope of the product comparison, not to claim the full suite accepts that error.
