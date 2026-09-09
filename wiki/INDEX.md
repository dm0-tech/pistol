# Wiki index

*The register of all entries. Regenerate whenever entries change; each row
mirrors its entry's header exactly (the audit checks this). See
[`README.md`](README.md) for the label taxonomy.*

| ID | Title | Provenance | Verification | Grade | Status | Key cross-refs |
|---|---|---|---|---|---|---|
| [W-0001](entries/w-0001-adjunction-as-measured-failure.md) | An adjunction is an equivalence that failed, with the failure measured | sourced | source-audited | established | checked | Track H; Phase 1 essay |
| [W-0002](entries/w-0002-sierpinski-is-two-stage-trees.md) | 𝒮 is the two-stage truncation of the topos of trees | llm-derived | machine-computed | established / conjectural | checked | OP-13 |
| [W-0003](entries/w-0003-room-for-two.md) | The room for two: doubling as a precondition of self-representation | human-conjecture + llm-derived | source-audited (stones); unverified (splice) | conjectural | checked | OP-16; S17 |
| [W-0004](entries/w-0004-leaping-language.md) | The leaping language: two theorems and one open problem | llm-derived / sourced | source-audited | established / open / conjectural | checked | OP-3; OP-7 |
| [W-0005](entries/w-0005-llm-wiki-landscape.md) | The pistol wiki against the llm-wiki landscape | sourced + llm-derived | source-audited | established / conjectural | checked | Epic 2; AGENTS.md |
| [W-0006](entries/w-0006-linear-bridge.md) | The linear bridge: a copy beside a co-copy, and the ⊕-shadow via hyperbolicization | llm-conjecture (the bridge and its ⊕-shadow) + sourced (the compact-closure and lattice facts) | llm-checked (component facts are standard literature); unverified (the bridge itself) | conjectural | draft | OP-16; W-0003 |
| [W-0007](entries/w-0007-the-triple.md) | The triple: self-reference as the becoming between two referents, and the triality hope | human-conjecture (the ternary form and the triality hope) + llm-derived (the three candidate typings) | machine-computed (the rung-0 shadow, `examples/run.mjs` [0.10]); unverified (the summit typing) | conjectural | draft | OP-17; OP-14; S7 |
| [W-0008](entries/w-0008-hopf-problem-load-gauge.md) | The Hopf problem as a load gauge: does the imaginary-sphere pattern flower at 𝕆? | sourced (the substrate and the claims' status) + human-conjecture (the triality-datapoint reading) + llm-derived (the load-protocol framing) | source-audited (substrate); unverified (the reading); the resolution claims themselves are community-unadjudicated in both directions | established (substrate) / open (the Hopf problem) / conjectural (the reading) | draft | W-0007; OP-17; S7, S9 |
| [W-0009](entries/w-0009-the-twelve.md) | The twelve: the S⁶ claim's collapse map, π₆(S³) = ℤ/12, and the e-invariant | human-conjecture (the factorization observation and the generator guess) + llm-derived (the e-invariant sharpening, the p mod 12 refinement, the units consistency check, the Hilton nullity of f) | machine-computed (the Seifert/Orlik/Euler-number arithmetic and Hilton coefficient); llm-checked (the Toda/Adams substrate against standard references); unverified (C1 and C2 below) | established (substrate) / conjectural (C1, C2, and the refinement) | draft | W-0008; W-0007; OP-17 |
| [W-0010](entries/w-0010-ladder-through-lattice.md) | The modal ladder is a chosen path through a model-dependent lattice | spec | spec-proved | established / conjectural | checked | D0.3–D0.4; Props 1.6–1.13 |
| [W-0011](entries/w-0011-hegel-lawvere-correspondence.md) | Hegel supplies the preserve/cease problem; Lawvere proposes a categorical model | sourced | source-audited | established / claimed | checked | Track H; W-0001; W-0010 |

## Standing queues

- **Upgrade queue** (cheapest first): W-0008 → the two afternoon-sized items (the
  associator/Nijenhuis formula audited against arXiv:1708.01068; the
  ℍ-rung worked example). W-0002 and W-0004 no longer need mechanical
  label upgrades; they now require typed research questions rather than
  stronger labels.
- **Watch queue:** W-0008 (Hopf-problem adjudication, either direction:
  Etesi revisions, responses to Clemente, the generalized-complex
  program; the alpo.ge claim and its CP³-rigidity falsification
  surface); W-0009 (rides on W-0008's adjudication; C1 is attackable
  now — the collapse map in the paper's own coordinates).
- **Attack queue:** W-0003 (d = 24 rootless, d = 32 generic-doubling
  countermodels; the exponential/orthogonal-sum bridge — now candidate-typed
  in W-0006); W-0006 (the D16⁺/Spin(32)/ℤ₂ necessity attack; the
  dualizability question); W-0007 (state typing 3 at the d = 3 real rung —
  cheapest full statement; the E8-no-outer-automorphisms location
  question); W-0002 (a typed relation between non-idempotent ▷ and the
  open level, if one exists — also step (c) of W-0007's attacks).
- **Intake:** new entries from any session or agent go to `entries/` via
  `TEMPLATE.md`, get a row here, and start at `draft`.
