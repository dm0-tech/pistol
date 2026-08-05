# 𝒮 is the two-stage truncation of the topos of trees

- **ID:** W-0002
- **Provenance:** llm-derived
- **Verification:** llm-checked
- **Grade:** claimed (the identification); conjectural (the deferral resonance)
- **Sources:** Birkedal–Møgelberg–Schwinghammer–Støvring, *First steps in synthetic guarded domain theory: step-indexing in the topos of trees* (LMCS 2012); Smoryński, *Self-Reference and Modal Logic* (1985) — Wheeler's ref [159]
- **Transcript:** T-2026-07-14-A
- **Cross-refs:** OP-13 (sharpened); `notes/internal-language-and-room-for-two.md` §4; `spec/00-level-0.md` Prop 0.10 (the "later" truth value); `spec/01-level-1.md` §4 (the level diamond); `text/rung-0-1-draft.md` A0′ (flagged remark + three-stage ⊢ Predict)
- **Status:** draft

## Statement

The topos of trees PSh(ω) truncates at two stages to presheaves on the
walking arrow — the project's 𝒮 — modulo a variance dictionary (trees'
restriction maps run later→earlier; the repo's ξ runs now→later) that has
not yet been pinned. Truth-value counts match (trees: n+1 values at stage
n; 𝒮: three over two), and Ω_𝒮's third value **later** is the two-stage
shadow of ▷'s "when does this become true?". Consequence pursued in OP-13:
▷ and its internal Ω-operator are finitely computable in the 2-/3-/4-stage
truncations and can be located against 𝒮's level diamond. The *resonance* —
the same deferral that obstructs the expected Aufhebung (the pointless
figure, Props 1.9–1.10) is what makes guarded self-reference consistent —
is a reading, graded conjectural, awaiting the computation.

## Context

Emerged when Wheeler's agenda item Four (self-referential deductive
systems, citing the GL/Löb literature) was read against the spec's rung-0
computation of Ω_𝒮. If it holds up, the repo has been computing in the
nursery of guarded self-reference since its first spec file.

## What would change the labels

Upgrade to `machine-computed`: implement ▷ in `examples/src/sierpinski.mjs`
and the truncations, verify the Ω-operator against the trees literature,
pin the variance dictionary. Cheap — this is the OP-13 weekend program.
Refutation risk sits in the dictionary: if the time-readings cannot be
aligned functorially, the "shadow of ▷" clause dies even though the bare
equivalence PSh(2-chain) ≃ Set^→ survives.

## Log

- 2026-08-05 — created from T-2026-07-14-A; identification checked by the authoring LLM only.
- 2026-08-05 — reprocessed under `wiki/lint.mjs`; transcript pointer now resolves to the archived digest.
- 2026-08-05 — surfaced in the text as a flagged "reading under investigation" remark at rung 0–1 A0′, with a ledger row citing OP-13; grade unchanged (entering the text is not promotion).
