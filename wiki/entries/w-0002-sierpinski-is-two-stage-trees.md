# 𝒮 is the two-stage truncation of the topos of trees

- **ID:** W-0002
- **Provenance:** llm-derived
- **Verification:** machine-computed
- **Grade:** established (finite identification and ▷ formulas); conjectural (the deferral resonance)
- **Sources:** Birkedal–Møgelberg–Schwinghammer–Støvring, *First steps in synthetic guarded domain theory: step-indexing in the topos of trees* (LMCS 2012); Smoryński, *Self-Reference and Modal Logic* (1985) — Wheeler's ref [159]
- **Transcript:** T-2026-07-14-A
- **Cross-refs:** OP-13 (sharpened); `notes/internal-language-and-room-for-two.md` §4; `spec/00-level-0.md` Prop 0.10 (the "later" truth value); `spec/01-level-1.md` §4 (the level diamond); `text/rung-0-1-draft.md` A0′ (flagged remark + three-stage ⊢ Predict)
- **Status:** checked

## Statement

The topos of trees PSh(ω) truncates at stages 2 and 1 to presheaves on the
walking arrow—the project's 𝒮—under the exact dictionary
`X₀ = X(2)`, `X₁ = X(1)`. The repo's arrow `X₀ → X₁` is the tree
restriction, and Birkedal et al. call the smaller index a future world.
At stage 2, Ω's values `2,1,0` are respectively the repo's **now**,
**later**, **never**, restricting to **yes**, **yes**, **no** at stage 1.
The predicate-level later map acts `never → later → now → now`.
`examples/src/guarded.mjs` independently enumerates finite sieves, checks
that predicate map's naturality, and separately gives an object-level
component-cardinality witness that the later endofunctor is not
idempotent. The endofunctor is therefore not one of 𝒮's level modalities.
The *resonance* —
the same deferral that obstructs the expected Aufhebung (the pointless
figure, Props 1.9–1.10) is what makes guarded self-reference consistent —
remains a reading, graded conjectural, awaiting a typed relation.

## Context

Emerged when Wheeler's agenda item Four (self-referential deductive
systems, citing the GL/Löb literature) was read against the spec's rung-0
computation of Ω_𝒮. If it holds up, the repo has been computing in the
nursery of guarded self-reference since its first spec file.

## What would change the labels

The finite identification is now source-backed and machine-computed. It
would be refuted by a mismatch with Birkedal et al.'s restriction,
predicate-operator, or endofunctor formulas; the current checks reproduce
all three at bounded stages.
The resonance upgrades only if a typed comparison—such as a distributive
law, comparison transformation, or preservation/reflection theorem—relates
▷ to the open level. Non-idempotence has already refuted the naive
identification of the two modalities.

## Log

- 2026-08-05 — created from T-2026-07-14-A; identification checked by the authoring LLM only.
- 2026-08-05 — reprocessed under `wiki/lint.mjs`; transcript pointer now resolves to the archived digest.
- 2026-08-05 — surfaced in the text as a flagged "reading under investigation" remark at rung 0–1 A0′, with a ledger row citing OP-13; grade unchanged (entering the text is not promotion).
- 2026-08-12 — finite variance dictionary pinned against Birkedal et al. §§2.1–2.2 and machine-computed in 2/3/4-stage truncations; naive level-modality identification refuted by non-idempotence; broader resonance remains conjectural.
