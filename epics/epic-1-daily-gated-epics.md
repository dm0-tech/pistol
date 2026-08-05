# Epic 1 — The daily gated epic: automation of the fly-and-cow loop

*Gate-A brief, ready to paste into a GitHub issue labeled `epic`. Status:
awaiting owner approval (`approved-A` or edits). Drafted 2026-08-05 from
the July 14 session protocol (`notes/internal-language-and-room-for-two.md`
§1, transcript T-2026-07-14-A).*

## Objective

Stand up a repeatable daily loop that advances pistol one **atom** at a
time — one proposition, definitional fork, primary-source passage, or OP
item per day — through a two-key gate: an **agent pass** on rigor (which
the human cannot certify) and a **human pass** on the education (which the
agent cannot feel). The loop exists to close the gap the P0.3 criticism
named: the project must produce a generator, not just a verifier.

## The loop (one epic per day)

1. **Brief.** Pick the atom from the queue. Write and *commit* the
   prediction before touching sources — what do you expect the
   theorem/passage/computation to say, and why? (The commit hash makes the
   prediction un-fudgeable.)
2. **Fly leg (verification).** Attack, don't reread: reproduce the proof
   with the spec closed; extend an executable check to an object the
   ledger doesn't cover; pull the primary source. Output: a short memo in
   red-leg vocabulary (Break / Underpriced / Preference).
3. **Cow leg (generation).** One of: re-derive with the book closed and
   diff against the spec; write the day's Track-H paragraph (Hegel passage
   beside formal statement, correspondence graded); pose the next question
   before looking at where the spec goes.
4. **Gate.** A fresh-context agent — receiving only the committed
   prediction, the fly memo, and the cow output, never the authoring
   session — grades: did the verification bite; did the prediction land
   (and if not, does the post-mortem locate why); is the Track-H paragraph
   faithful to both sides? Then the human key: a written paragraph (not a
   checkbox) on whether the education happened. Both keys or no close.
5. **Closeout.** Artifacts land in the repo with wiki provenance labels;
   new claims become wiki entries; the queue is updated; residue carries.

## Deliverables

- **D1.** Epic issue template (brief / prediction / fly / cow / gate /
  closeout sections) and the two-key gate checklist — agent criteria
  mechanical, human key free-text.
- **D2.** Red-leg dispatch protocol at daily scale: how the fresh-context
  grader is invoked, what it receives (artifacts only — authorship
  blindness per PHASE-0-PLAN §Honesty mechanism), memo format.
- **D3.** Automation scripts/agents for the mechanical steps: open the
  day's epic from the queue; run `node examples/run.mjs` plus
  epic-specific checks; archive the session transcript to
  `wiki/transcripts/`; dispatch the grader; assemble the closeout comment.
- **D4.** The seeded atom queue (first ~15 days): OP-15 red-leg residue
  (two agent-sourced citations, pure fly warm-up); D0.1 two-shapes repair
  re-derived from scratch; Lemma 1.5 + the one-clause fork (predict the
  literature's definition before reading §5.4); Track-H paragraphs for
  rung 0 (being/nothing/becoming) and rung 1 (Aufhebung); Lawvere 1991 on
  levels read against D0.4; the ⊥-scattered/¬¬-subtopos result the spec
  cites but doesn't prove; the OP-13 ▷ computation (W-0002); the OP-16
  typing attempt and its two countermodels (W-0003); the rung-2 approach.

## Exit criteria

- Three consecutive daily epics run end-to-end with both keys recorded and
  all artifacts labeled in the wiki.
- The queue holds ≥ 2 weeks of atoms at all times.
- P0.7 (the Phase 0 red leg) is either discharged through this loop or
  explicitly scheduled outside it — the epic must not silently absorb it.

## Decisions to resolve at this gate

- **D-A1. Where epics live.** GitHub issues (greengage-style) vs in-repo
  `epics/` files. Constraint: the current cloud tooling cannot create
  GitHub issues (read-only `gh`); issues require the owner to paste briefs
  or grant an issue-writing path. Recommendation: in-repo files as the
  canonical record, mirrored to issues by the owner when useful.
- **D-A2. Branching.** Push-to-main (current Phase 0 process) vs
  branch-per-epic with PR (better for prediction pre-commit and gate
  evidence). Recommendation: branch-per-epic; the PR *is* the gate record.
- **D-A3. Scheduling.** Owner-triggered vs cron-launched cloud agent.
  Recommendation: owner-triggered until the loop has run manually three
  times; automate only what has bored you.
- **D-A4. Transcript handling.** Export format, and whether transcripts
  are public in the repo (licensing: CC BY 4.0 applies) or referenced by
  URL only.

## Risks

- **Gate theater.** Checklists filled while no education happens.
  Mitigation: the human key is prose; the prediction is pre-committed; the
  grader is authorship-blind.
- **Automation scope creep** — the roadmap §7 project-killer in new
  clothes. Mitigation: D3 automates only mechanical steps; the fly and cow
  legs are never automated (the whole point is who performs them).
- **Red-leg context leakage.** A grader that shares the authoring context
  grades its own homework. Mitigation: artifacts-only dispatch, per
  PHASE-0-PLAN.

## Out of scope

Rung-2 spec content (it enters as atoms, not as this epic); the knowledge
base itself (Epic 2); any change to frozen notation or the plan's exit
criteria.
