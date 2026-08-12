# pistol

Formalizing and elucidating the Lawvere–Schreiber program: the modal ladder from
the trivial opposites (∅ ⊣ ∗) up through cohesion, elasticity, and solidity to
the rheonomy principle of D'Auria–Fré supergravity.

The project name is from the roadmap's §1.3 epigraph: *"First God invented
Bayes' rule; then He drew His pistol."*

## Canonical documents

- [`objective-logic-roadmap.md`](objective-logic-roadmap.md) — the roadmap and
  manifesto (deliverable D1): thesis, audience strategy, formalization
  strategy, phase plan, and working bibliography.
- [`modal-ladder-figure.svg`](modal-ladder-figure.svg) — visual companion to
  roadmap §§1.1–1.2: the ladder as a generative ascent.

- [`PHASE-0-PLAN.md`](PHASE-0-PLAN.md) — the Phase 0 ("Spec and seed") work
  breakdown, decision register, and toolchain findings.
- [`OPEN-PROBLEMS.md`](OPEN-PROBLEMS.md) — the maintained open-problems list
  (roadmap §4.3, graded).
- [`spec/NOTATION.md`](spec/NOTATION.md) — the notation and conventions
  register (frozen July 9, 2026).
- [`spec/00-level-0.md`](spec/00-level-0.md) — Level 0: the opposition
  ∅ ⊣ ∗, with the Sierpiński and truncated-sSet models worked in full and a
  claim ledger for the examples scripts.
- [`spec/01-level-1.md`](spec/01-level-1.md) — Level 1: ♭ ⊣ ♯ via one
  general theorem for presheaf sites with a terminal object; the complete
  level lattice of the Sierpiński topos (a diamond); and the finding that
  where the Aufhebung of level 0 lands is model-dependent — in sSet it is
  level 1 (proved via the Kelly–Lawvere classification), while in 𝒮 rung 1
  is obstructed by the site's pointless representable and the Aufhebung is
  the smaller open level (OP-15, resolved from primary sources).
- [`text/rung-0-0-draft.md`](text/rung-0-0-draft.md) — rung 0·0, the
  self-contained on-ramp preceding the ladder: adjunctions ("best" as an
  exactly-when, and why adjunction is the last word in suspended
  opposition, surviving the ∞-categorical transition unchanged),
  modalities as ways of being (the adjunction's internal presentation),
  and topoi as worlds where adjoints accumulate — objective logical
  elements forced, preserved by handedness, and speakable from inside
  (the internal language). Track B cites the standard literature; the
  source ledger ties every A-claim to citation and machine check.
- [`text/rung-0-1-draft.md`](text/rung-0-1-draft.md) — the three-track
  expository text for rungs 0–1 (P0.3): the dialectical narrative (Track A),
  the mathematics with spec pointers (Track B), and the executable checks
  (Track C), ending in a track-discipline ledger tying every A-claim to a
  proved B-statement.
- [`examples/`](examples/README.md) — the executable examples (P0.5):
  every finite-model claim in the spec's ledgers, machine-computed
  (`node examples/run.mjs`).
- [`notes/bootstrap-stones.md`](notes/bootstrap-stones.md) — Wheeler's
  self-reference exhortation (primary-sourced) and the catalogue of
  self-referential/bootstrap structures to cross-reference against the
  Aufhebung/rheonomy and Thread P threads.
- [`notes/internal-language-and-room-for-two.md`](notes/internal-language-and-room-for-two.md) —
  session distillate (July 14, 2026): the missing lineage track (Track H)
  and the generative discipline; the adjunction essay for the Phase 1
  essay; the internal-language claim graded against OP-3; 𝒮 as the
  two-stage topos of trees (OP-13 sharpened); and the room-for-two
  doubling conjecture (OP-16, stone S17).
- [`notes/rung-0-to-1-research-dossier.md`](notes/rung-0-to-1-research-dossier.md) —
  the source-audited strand map and analogy atlas for the textual ascent:
  primary Hegel/Lawvere lineage, level/Aufhebung source joints, the exact
  finite guarded-recursion dictionary, graded analogy cards, and promotion
  rules.
- [`notes/project-complexity-handoff.md`](notes/project-complexity-handoff.md) —
  artifact/dependency map for the post-push complexity review: which
  mechanisms are mathematically necessary, epistemically protective,
  pedagogically valuable, or merely procedural.
- [`AGENTS.md`](AGENTS.md) — the schema layer: standing instructions that
  make any agent a disciplined maintainer of the layers below (read first,
  every session).
- [`wiki/`](wiki/README.md) — the labeled knowledge base: atomic claims
  from the project's dialogues, each carrying provenance (sourced vs
  LLM/human conjecture, with transcript pointers), verification
  (llm-checked through formally-verified), and grade; with
  [index](wiki/INDEX.md), [log](wiki/log.md), transcript registry, and a
  deterministic lint (`node wiki/lint.mjs`). The spec never cites the
  wiki.
- [`epics/`](epics/) — gate-A briefs for the standing epics: the daily
  gated-epic loop ([Epic 1](epics/epic-1-daily-gated-epics.md)) and the
  knowledge base ([Epic 2](epics/epic-2-knowledge-base.md)); ready to
  mirror into GitHub issues on owner approval.

## License

Text, specs, and notes (everything except code) are licensed under
[CC BY 4.0](LICENSE). Code — the explorer and the executable examples — is
licensed under [MIT](LICENSE-MIT).

## Where things stand

Phase 0 is approved (July 9, 2026) and at its final draft/review leg. The
notation register, rung-0/1 specs, three-track text, Sierpiński explorer,
finite-model checks, and open-problems register exist. The spec's central
early finding is that the named ladder sits inside a model-dependent level
lattice: rung 1 is the first Aufhebung in sSet, but the open arm of the
Sierpiński diamond resolves first. The remaining exit gate is P0.7, the
authorship-blind red-leg review of spec and text.

Proof-assistant work is descoped (roadmap draft 1.2, decision N6): the July
2026 toolchain survey showed Agda's `--cohesion` is a bolt-on (no native ♯,
no ʃ, infective flags), so proofs stay pen-and-paper—kept honest by being
written self-evidently clearly, by computing every finite-model claim, and
by adversarial review. Formalization frameworks stay on a watch list for the
Phase 2 gate; examples above the finite rungs are added only when they remain
cheaper than the mathematics they illuminate.
