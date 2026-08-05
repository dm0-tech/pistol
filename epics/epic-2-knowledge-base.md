# Epic 2 — The living knowledge base: capture, labeling, and refinement

*Gate-A brief, ready to paste into a GitHub issue labeled `epic`. Status:
awaiting owner approval. Drafted 2026-08-05; the scaffold this epic grows
from lands in the same PR (`wiki/`).*

## Objective

Grow, in tandem with the terse spec and the expository text, a third
stream: the **build-up of mathematical ideas and thinking** produced by the
project's dialogues — human, LLM, and multi-agent — in an llm-wiki
structure whose entries are labeled by provenance (sourced vs conjecture,
with transcript pointers), verification (llm-checked through
formally-verified), and grade, so that confabulation is containable and
good ideas are never lost to context windows.

## What exists at gate A

The scaffold, landed with this PR: `wiki/README.md` (taxonomy: provenance ×
verification × grade, all mandatory), `TEMPLATE.md`, `INDEX.md`,
`transcripts/` registry, and four seed entries spanning the label range —
W-0001 (sourced/established), W-0002 (llm-derived/claimed), W-0003
(human-conjecture/conjectural), W-0004 (mixed-grade). One-way flow rule:
the wiki may cite the spec; the spec never cites the wiki.

## Deliverables

- **D1. Intake pipeline.** Any session or agent that produces a claim
  worth keeping appends an entry via the template and adds an index row;
  narrative documents stay in `notes/`, atomic claims go to the wiki. A
  short instruction block (for `AGENTS.md` or equivalent) so every future
  agent does this unprompted — this is the "continued capture of ideas
  your agent friends come up with" requirement made mechanical.
- **D2. Refinement loop.** A recurring pass (cadence: decision D-B2) that
  dedupes entries, runs the **upgrade queue** (cheapest verifications
  first: source audits, machine computations), runs the **attack queue**
  (cheapest countermodels first), and moves statuses. Refuted entries are
  kept and labeled, never deleted.
- **D3. Confabulation audit.** A fresh-context agent samples N entries per
  cycle and attacks: does the citation exist and say what is claimed? Does
  the derivation hold? Is the grade honest? Findings in red-leg vocabulary,
  recorded in entry logs. Header/index consistency checked mechanically.
- **D4. Promotion path.** Criteria and procedure for wiki → OPEN-PROBLEMS
  → spec, where promotion means re-establishment at the destination's
  standard. Demonstrated at least once (candidate: W-0002 via the OP-13
  computation).
- **D5. Transcript archive.** The two pending exports (T-2026-07-14-A,
  T-2026-08-05-A) landed; the export convention documented; entries citing
  pending transcripts flagged until checkable.
- **D6. Index tooling (optional, smallest possible).** A script that
  regenerates `INDEX.md` from entry headers and fails CI-style on
  header/index drift. Plain node, no infrastructure, or nothing at all if
  manual discipline suffices at current scale.

## Exit criteria

- ≥ 20 entries with honest three-axis labels, including at least one
  `refuted` or `disposed` entry (the taxonomy must be shown to bite, not
  just decorate).
- One full refinement + audit cycle completed, findings dispositioned.
- One promotion or disposal executed end-to-end.
- Every conjecture entry's transcript pointer resolves to an archived
  transcript.

## Decisions to resolve at this gate

- **D-B1. Venue.** In-repo markdown (recommended: matches decision N5 —
  repo-native, diffable, nLab-compatible) vs GitHub's wiki feature vs a
  static site. Recommendation: in-repo now; a site only if the material
  earns it (roadmap §5 precedent).
- **D-B2. Cadence.** Refinement/audit per daily epic closeout (Epic 1
  integration) vs weekly batch. Recommendation: weekly batch until volume
  demands otherwise.
- **D-B3. Source tiers.** Confirm the reliability tiers: nLab / refereed
  papers / primary texts as `sourced`; Wikipedia / blogs / lecture notes as
  `sourced-tier2` pending upgrade. Decide whether dcct and the Lawvere
  archives count as tier 1 (recommendation: yes).
- **D-B4. Entry granularity.** One claim per entry is the rule; decide the
  policy for readings/slogans (recommendation: admitted, but the grade
  vocabulary must mark them and they can never pass `spec-proved`).

## Risks

- **Confabulation amplifier.** A wiki of unaudited LLM output is worse
  than no wiki — it launders speculation into apparent knowledge.
  Mitigation: mandatory labels, D3 audits, and the rule that verification
  upgrades require evidence links (script run, source quote, spec section).
- **Boundary erosion with `notes/`.** Mitigation: notes = narrative
  research documents; wiki = atomic labeled claims; the intake pipeline
  splits accordingly.
- **Index rot.** Mitigation: D6, or the audit's mechanical
  header/index check.
- **Scope creep toward a public educational site.** That is a later phase
  decision (roadmap §5); this epic builds the internal organ, not the
  publication.

## Out of scope

The daily-loop automation (Epic 1); any spec or text changes; publication
infrastructure.
