# Wiki index

*The register of all entries. Regenerate whenever entries change; each row
mirrors its entry's header exactly (the audit checks this). See
[`README.md`](README.md) for the label taxonomy.*

| ID | Title | Provenance | Verification | Grade | Status | Key cross-refs |
|---|---|---|---|---|---|---|
| [W-0001](entries/w-0001-adjunction-as-measured-failure.md) | An adjunction is an equivalence that failed, with the failure measured | sourced | source-audited | established | checked | Track H; Phase 1 essay |
| [W-0002](entries/w-0002-sierpinski-is-two-stage-trees.md) | 𝒮 is the two-stage truncation of the topos of trees | llm-derived | llm-checked | claimed / conjectural | draft | OP-13 |
| [W-0003](entries/w-0003-room-for-two.md) | The room for two: doubling as a precondition of self-representation | human-conjecture + llm-derived | source-audited (stones); unverified (splice) | conjectural | checked | OP-16; S17 |
| [W-0004](entries/w-0004-leaping-language.md) | The leaping language: two theorems and one open problem | llm-derived / sourced | llm-checked | established / open / conjectural | draft | OP-3; OP-7 |
| [W-0005](entries/w-0005-llm-wiki-landscape.md) | The pistol wiki against the llm-wiki landscape | sourced + llm-derived | source-audited | established / conjectural | checked | Epic 2; AGENTS.md |
| [W-0006](entries/w-0006-linear-bridge.md) | The linear bridge: a copy beside a co-copy, and the ⊕-shadow via hyperbolicization | llm-conjecture (the bridge and its ⊕-shadow) + sourced (the compact-closure and lattice facts) | llm-checked (component facts are standard literature); unverified (the bridge itself) | conjectural | draft | OP-16; W-0003 |
| [W-0007](entries/w-0007-the-triple.md) | The triple: self-reference as the becoming between two referents, and the triality hope | human-conjecture (the ternary form and the triality hope) + llm-derived (the three candidate typings) | machine-computed (the rung-0 shadow, `examples/run.mjs` [0.10]); unverified (the summit typing) | conjectural | draft | OP-17; OP-14; S7 |

## Standing queues

- **Upgrade queue** (cheapest first): W-0004 → source-audited (check
  Mac Lane–Moerdijk); W-0002 → machine-computed (the OP-13 weekend
  program: ▷ in `examples/`).
- **Attack queue:** W-0003 (d = 24 rootless, d = 32 generic-doubling
  countermodels; the exponential/orthogonal-sum bridge — now candidate-typed
  in W-0006); W-0006 (the D16⁺/Spin(32)/ℤ₂ necessity attack; the
  dualizability question); W-0007 (state typing 3 at the d = 3 real rung —
  cheapest full statement; the E8-no-outer-automorphisms location
  question); W-0002 (the variance dictionary — now also step (c) of
  W-0007's attacks).
- **Intake:** new entries from any session or agent go to `entries/` via
  `TEMPLATE.md`, get a row here, and start at `draft`.
