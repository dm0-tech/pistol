# Notation and Conventions Register

*Status: **proposed** — freezes on Phase 0 plan approval. After the freeze,
changes require an erratum entry here, never a silent edit. Sources for every
choice are in §5; the July 2026 audit that informed them is summarized in §4.*

## 1. The ladder

Symbols, adjunction orderings, and names. Left of each ⊣ is the left adjoint.

| Level | Opposition | Names | Codepoints |
|---|---|---|---|
| 0 | ∅ ⊣ ∗ | initial ⊣ terminal (pure opposition) | U+2205, U+2217 |
| 1 | ♭ ⊣ ♯ | flat ⊣ sharp (discrete ⊣ codiscrete) | U+266D, U+266F |
| 2 | ʃ ⊣ ♭ | shape ⊣ flat (cohesion) | U+0283, U+266D |
| 3 | ℜ ⊣ ℑ ⊣ & | reduction ⊣ infinitesimal shape ⊣ infinitesimal flat (elasticity) | U+211C, U+2111, U+0026 |
| 4 | ⇉ ⊣ ⇝ ⊣ Rh | fermionic ⊣ bosonic ⊣ rheonomic (solidity) | U+21C9, U+21DD, "Rh" roman |

The full ladder, drawn as on the nLab (∨ = inclusion of modal subcategories,
⊥ = adjunction between adjacent pairs; each rung shares its repeated middle
operator between two adjoint pairs):

```
        id ⊣ id
        ∨     ∨
        ⇉  ⊣  ⇝        fermionic ⊣ bosonic
        ⊥     ⊥
        ⇝  ⊣  Rh       bosonic ⊣ rheonomic
        ∨     ∨
        ℜ  ⊣  ℑ        reduced ⊣ infinitesimal shape
        ⊥     ⊥
        ℑ  ⊣  &        infinitesimal shape ⊣ infinitesimal flat
        ∨     ∨
        ʃ  ⊣  ♭        shape ⊣ flat
        ⊥     ⊥
        ♭  ⊣  ♯        flat ⊣ sharp
        ∨     ∨
        ∅  ⊣  ∗
```

## 2. Aufhebung and oppositions

- A generic adjoint modality (unity of opposites): **□ ⊣ ◯** between
  idempotent (co)monads; the unity is the transform **□X → X → ◯X**
  (e.g. points-to-pieces ♭X → X → ʃX).
- Levels are written i, j with order **i ≺ j**.
- "j **resolves** the opposite of i": **i ≪ j**, defined by ◯ⱼ□ᵢ = □ᵢ.
- The **Aufhebung** of level i is the minimal resolving level, written **ī**.
  Example: the Aufhebung of ∅ ⊣ ∗ is ♭ ⊣ ♯ iff ♯∅ ≃ ∅.

## 3. Auxiliary conventions

- **Crisp judgment:** x :: A (Shulman). Agda realization: `@♭ x : A`.
  If multiple cohesions ever coexist, extend to Myers–Riley focus notation
  (♭♥ ⊣ ♯♥, ♥-crisp) rather than inventing new letters.
- **Derived super notation:** the bosonic body may be written X^⇝ with counit
  η^⇝ : X^⇝ → X (Giotopoulos–Sati–Schreiber decorator style) when working in
  concrete supergeometry; ⇝ as prefix operator remains the primitive.
- **Claim grades:** every nontrivial assertion in the spec carries exactly one
  of **established** (proof in the cited literature or in this repo),
  **claimed** (asserted in the literature, not verified here),
  **conjectural** (original to this project or folklore).
- **Collision warnings** (stated here once, then assumed):
  - ʃ is U+0283 LATIN SMALL LETTER ESH, *not* an integral sign.
  - ℜ, ℑ here are reduction and infinitesimal shape, *not* real/imaginary
    parts.
  - ♭_dR and ʃ_dR are the de Rham fracture operators — distinct from & and
    never a synonym for it.

## 4. Synonym table (for reading the literature; never used in this repo)

| Ours | Elsewhere | Where |
|---|---|---|
| ʃ | Π | dcct arXiv v1; older nLab pages ("cohesive (∞,1)-topos") |
| ʃ | ∫ | expanded dcct pdf; some nLab pages |
| ℑ | "crystalline modality", "étale modality" | Myers (orbifolds); nLab | 
| ⇝ (prefix) | X^⇝ (decorator) | Giotopoulos–Sati–Schreiber 2024 |
| x :: A | `@♭ x : A` | Agda `--cohesion`; agda-unimath `crisp-types` |

The only genuinely contested cell in the field is shape; ʃ is what Shulman,
Myers, Myers–Riley, and the maintained nLab pages use, and it wins on
typeability (one codepoint, valid in Agda identifiers).

## 5. Sources

nLab: *shape modality*, *adjoint modality*, *Aufhebung*, *infinitesimal shape
modality*, *reduction modality*, *rheonomy modality*, *bosonic modality*,
*cohesive topos*, *cohesive (∞,1)-topos*. — Schreiber, *dcct*. — Shulman,
*Brouwer's fixed-point theorem in real-cohesive HoTT* (arXiv:1509.07584). —
Myers, *Good fibrations through the modal prism* (arXiv:1908.08034). —
Myers–Riley, *Commuting Cohesions* (arXiv:2301.13780). —
Giotopoulos–Sati–Schreiber, *Flux quantization on 11d superspace* (JHEP
2024/082). — agda-unimath, `modal-type-theory` namespace.
