# The pistol wiki against the llm-wiki landscape: ahead on labels, behind on four mechanics (now closed)

- **ID:** W-0005
- **Provenance:** sourced (the landscape facts) + llm-derived (the measure-up judgments)
- **Verification:** source-audited (Karpathy gist and ETP paper read in full; ecosystem feature claims are sourced-tier2 — READMEs and blog write-ups, not independently exercised)
- **Grade:** established (the facts); conjectural (the judgments)
- **Sources:** Karpathy, *llm-wiki.md* (gist, April 4, 2026); *The Equational Theories Project* (arXiv:2512.07087; teorth.github.io/equational_theories); Tao, project-tour blog post (Oct 2024); microsoft/llmwiki; Labhund/llm-wiki; MemoryWiki/MemoryWiki; SwarmVault; synthadoc, robust-llm-wiki, olegiv/llm-wiki-go (`wikilint`), ai-memex-cli (gist comment thread, tier-2)
- **Transcript:** T-2026-08-05-A
- **Cross-refs:** `wiki/README.md`; `epics/epic-2-knowledge-base.md`; `AGENTS.md`; `wiki/lint.mjs`; `wiki/log.md`
- **Status:** checked

## Statement

**The pattern (established).** Karpathy's llm-wiki (April 2026): an agent
maintains a persistent, interlinked markdown wiki between the user and
immutable raw sources — three layers (sources / wiki / schema file), three
operations (ingest / query / lint), navigation via `index.md` (content
catalog, read first) and `log.md` (append-only, grep-parseable timeline);
validated at ~100 sources / hundreds of pages without retrieval
infrastructure. The thread's sharpest criticism: querying one's own
summaries compounds hallucinations; the accepted mitigations are
derivative-never-ground-truth and gated writes.

**The mathematical standard (established).** The Equational Theories
Project (2024–25): 22,028,942 claims, each carrying exactly one of two
statuses — proven (Lean-verified) or conjectured (everything else,
regardless of origin) — with dashboard, most-wanted lists, and ground
truth extracted from proof files by script. LLMs contributed only modest
secondary help; ATPs and humans did the core resolution.

**The measure-up (judgment, conjectural).** Pistol's wiki is an instance
of the Karpathy pattern with an epistemic-integrity layer the surveyed
ecosystem lacks: no surveyed system separates provenance from verification
from grade as independent mandatory axes (nearest approximations:
Labhund's sourced-pages/talk-pages split; synthadoc's confidence scalar;
SwarmVault's promotion gates); none archives transcript pointers for
conjectures; none keeps refuted entries as labeled results (ETP does — its
anti-implications are first-class). Four operational gaps identified
against the pattern, all closed 2026-08-05: no schema file wired into
agent startup (→ `AGENTS.md`), no chronological log (→ `wiki/log.md`),
unarchived transcripts violating our own resolvability rule (→ digests in
`wiki/transcripts/`), no deterministic lint (→ `wiki/lint.mjs`, per the
ecosystem's clearest empirical finding: check structure with code, spend
model judgment on semantics only).

## Context

Commissioned by the owner ("see how our one measures up") after the wiki
scaffold landed. The survey also validates the project's N6 descope and
conjecture-engine discipline: ETP's experience is that machine-checkable
ledgers scale and LLM proposals need cheap disposal paths.

## What would change the labels

Ecosystem feature claims upgrade to `source-audited` by exercising the
tools (low value; skip unless a feature is to be adopted). The judgments
harden or die as the wiki grows: the taxonomy either bites at ≥ 20 entries
(Epic 2 exit criterion: at least one refuted/disposed entry) or proves
decorative — that outcome is the real test.

## Log

- 2026-08-05 — created from the T-2026-08-05-A survey; gist and ETP paper read in full, ecosystem via READMEs and thread only.
- 2026-08-05 — the four gaps it identified were closed in the same branch (`AGENTS.md`, `log.md`, transcript digests, `lint.mjs`).
