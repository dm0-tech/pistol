# Wiki log

*Append-only, chronological. Entries start `## [YYYY-MM-DD] <op> | <subject>`
so `grep "^## \[" wiki/log.md | tail -5` gives the recent history. Ops:
seed, ingest, file, survey, audit, reprocess, promote, dispose, wire.*

## [2026-07-14] seed | Session T-2026-07-14-A distilled into notes/internal-language-and-room-for-two.md

The dialectic session: P0.3 criticism → Track H proposal; adjunction
distillate; internal language graded against OP-3; 𝒮 as two-stage topos of
trees (OP-13 sharpened); room-for-two conjecture (OP-16, S17). Wiki did not
yet exist; the note carried the capture.

## [2026-08-05] seed | Wiki scaffold created with four entries (W-0001–W-0004)

Taxonomy (provenance × verification × grade), TEMPLATE, INDEX, transcript
registry. Entries seeded from the July 14 session note. Epic briefs for the
daily gated-epic loop (Epic 1) and the knowledge base (Epic 2) landed
alongside.

## [2026-08-05] survey | llm-wiki landscape surveyed; pistol wiki measured against it

Karpathy gist (April 2026) read in full; ecosystem (microsoft/llmwiki,
Labhund, MemoryWiki, SwarmVault, synthadoc, wikilint, ai-memex-cli)
surveyed; Equational Theories Project taken as the mathematical gold
standard. Verdict and gaps filed as W-0005.

## [2026-08-05] wire | Four gaps closed: AGENTS.md schema, this log, transcript digests, deterministic lint

Per the W-0005 survey: `AGENTS.md` wires the wiki discipline into agent
startup (Epic 2 D1); `wiki/log.md` added; agent-written digests archived
for T-2026-07-14-A and T-2026-08-05-A (verbatim export remains with the
owner); `wiki/lint.mjs` enforces structure deterministically (Epic 2 D6
re-scoped from optional to mandatory-but-tiny).

## [2026-08-05] reprocess | Existing entries W-0001–W-0004 brought under lint

Header/index agreement verified mechanically; transcript pointers now
resolve to archived digests; log lines appended to each entry.

## [2026-08-05] file | text/rung-0-0-draft.md — the self-contained on-ramp

Owner-commissioned (T-2026-08-05-A): rung 0·0 covering adjunctions (the
W-0001 distillate, expository form, including the ∞-categorical lift),
modalities as ways of being (adjunction's internal presentation), and
topoi as accumulated adjoints with forced logical elements, handedness
preservation (RAPL/LAPC), and internal language (W-0004's theorem-halves).
Track B cites literature rather than spec; source ledger ties A-claims to
citations and to `examples/run.mjs` items where instances are computed.
W-0001 and W-0004 cross-refs updated.

## [2026-08-05] reprocess | text/rung-0-1-draft.md — precision pass, ⊢ Predict prompts, Hegel peek, OP-13 remark

Post-rung-0·0 revision (owner-commissioned, T-2026-08-05-A): "universe"
retained only in the most expository sentences, topos / adjoint triple /
moment used precisely elsewhere (ledger rows updated to match); the
generative discipline enters as three ⊢ Predict prompts, including the
trap at A2 that the project's own roadmap fell into; the Aufhebung
passage now shows Hegel's "twofold meaning" line (shown, not leaned on);
W-0002's topos-of-trees identification surfaces as a flagged A0′ remark,
ledgered under OP-13; the stale explorer "(pending)" corrected.

## [2026-08-12] file | Rung 0→1 source dossier and analogy atlas

Primary Hegel, Lawvere, Menni, Kelly–Lawvere, internal-language, and guarded
recursion joints mapped against the existing spec and text. The resulting
`notes/rung-0-to-1-research-dossier.md` separates source fact, mathematical
theorem, modeling correspondence, and conjectural resonance; defines
analogy-card promotion rules; and records the exact two-stage guarded
dictionary. W-0006 files the ladder/lattice distinction; W-0007 files the
graded Hegel–Lawvere correspondence.

## [2026-08-12] audit | W-0002 finite guarded dictionary computed

Birkedal et al.'s stage, restriction, Ω, and predicate-level ▷ formulas
reproduced in 2/3/4-stage truncations. The dictionary
`X₀ = X(2)`, `X₁ = X(1)` matches repo 𝒮 exactly; non-idempotence refutes
the naive identification of ▷ with a level modality. W-0002 upgraded to
machine-computed for the finite claim; the deferral/Aufhebung resonance
remains conjectural and moves to the typed-relation attack queue.
