# A1 is the (−1) rung of the ambidexterity ladder; height-n cardinality of BG is |Hom(ℤ_pⁿ,G)|/|G|, the n-torus Dijkgraaf–Witten number for p-groups

- **ID:** W-0018
- **Provenance:** sourced (Hopkins–Lurie; CSY; BMCSY; Dijkgraaf–Witten) + llm-conjecture (A1 as the (−1) rung; Laplace normalization as semiadditive height)
- **Verification:** source-audited (BMCSY Theorem A and Example 1 from arXiv:2310.00275); machine-computed (integral and p-adic counts, loop recursion, |BC_p|ₙ = pⁿ⁻¹, Σ₃ correction); red-legged; CSY height definition and "(−1)-semiadditive = pointed" indexing unaudited
- **Grade:** established (the cardinality theorems) / conjectural (the framing)
- **Sources:** Hopkins–Lurie, *Ambidexterity in K(n)-local stable homotopy theory* (2013); Carmeli–Schlank–Yanovski, *Ambidexterity and height* (Adv. Math. 2021, arXiv:2007.13089) and *Ambidexterity in chromatic homotopy theory* (Invent. 2022, arXiv:1811.02057); Ben-Moshe–Carmeli–Schlank–Yanovski, *Chromatic cardinalities via redshift* (IMRN 2024, arXiv:2310.00275); Dijkgraaf–Witten (1990)
- **Transcript:** T-2026-09-23-A
- **Cross-refs:** `notes/no-nothing-no-thing.md` §6; OP-20; W-0012; W-0013; OP-17 (ambidexterity as the linear turn); `examples/run.mjs` [W-0018]
- **Status:** draft

## Statement

Pointed = (−1)-semiadditive, and stable ⇒ 0-semiadditive. In the
∞-semiadditive worlds (rational; T(n)-local) a π-finite A has cardinality
|A|, and |A|_{E_{n+1}} = |LA|_{E_n} (BMCSY), so at height n it is the
homotopy cardinality of LⁿA. For a p-group G: |BG|ₙ = |Hom(ℤⁿ,G)|/|G|,
which is 1/|G|, 1, and #classes at heights 0, 1, 2, and equals Z_DW(Tⁿ).
For general G the chromatic count is |Hom(ℤ_pⁿ,G)|/|G| (Σ₃: 5/3 at p = 2,
3/2 at p = 3). CSY define semiadditive height by invertibility of |BᵏC_p|,
i.e. generalized Laplace normalization. It matches chromatic height only in
the T(n)-local setting. The mathematics is specialist folklore. Only the
framing "the owner's ontology is the bottom rung" is candidate-new.

## Context

This replaces the foil's original vague "classical / phases / 2-dimensional amplitude" chromatic guess with theorems.

## What would change the labels

Audit the CSY definition and indexing. Next datapoint: twisted Dijkgraaf–Witten (cocycle ω) against twisted cardinalities (OP-20).

## Log

- 2026-09-24 — created by the foil session (T-2026-09-23-A); red-legged by a fresh-context subagent before filing, corrections applied.
