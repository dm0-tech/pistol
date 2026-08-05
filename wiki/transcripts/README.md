# Transcript registry

*Every wiki entry with provenance `llm-derived`, `llm-conjecture`, or
`human-conjecture` must point to the dialogue it came from. Transcripts are
archived here as markdown exports (or, where a transcript cannot be
exported, a dated summary with the run URL). The registry below is the
index.*

| ID | Date | Participants | Subject | Archive |
|---|---|---|---|---|
| T-2026-07-14-A | 2026-07-14 | owner + cloud agent | Criticism of the P0.3 text; adjunction distillate; internal language and OP-3; 𝒮 as two-stage topos of trees; room-for-two conjecture. Distilled in `notes/internal-language-and-room-for-two.md` | [digest](T-2026-07-14-A.md); verbatim pending |
| T-2026-08-05-A | 2026-08-05 | owner + cloud agent | Wiki/knowledge-base design; provenance taxonomy; epic briefs; llm-wiki landscape survey (W-0005); the four-gap wiring | [digest](T-2026-08-05-A.md); verbatim pending |

## Conventions

- IDs: `T-YYYY-MM-DD-X` (X = a, b, … per day).
- Archive files: `T-YYYY-MM-DD-X.md` beside this README.
- Two archive forms: **verbatim export** (preferred; owner-produced) and
  **agent-written digest** (recorded live or reconstructed, labeled as
  such at the top, with user lines quoted verbatim where they are
  provenance for entries). A digest makes a pointer checkable; a verbatim
  export supersedes and replaces it in place.
- An entry citing a transcript with no archived file cannot pass
  `source-audited` verification — the pointer must be checkable, not just
  present. `wiki/lint.mjs` enforces file existence for every cited ID.
