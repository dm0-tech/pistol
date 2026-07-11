# Notation and Conventions Register

*Status: **frozen** (plan approved July 9, 2026). Changes require an erratum
entry here, never a silent edit; the erratum log is §5. Sources for every
choice are in §6; the July 2026 audit that informed them is summarized in §4.*

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

- A generic adjoint modality (unity of opposites) is an adjoint pair of an
  idempotent comonad □ and an idempotent monad ◯, in either orientation:
  **□ ⊣ ◯** (outer shape, e.g. ♭ ⊣ ♯) or **◯ ⊣ □** (inner shape, e.g.
  ʃ ⊣ ♭); see spec D0.1 for the two shapes of inducing triple. In both, the
  unity is the transform **□X → X → ◯X** (e.g. points-to-pieces ♭X → X → ʃX).
- Levels are written i, j with order **i ≼ j** (strict: i ≺ j), defined by
  containment of both modal images (spec D0.3).
- "j **resolves** the opposite of i": **i ≪ j**, defined by the natural
  isomorphism ◯ⱼ□ᵢ ≅ □ᵢ (one-clause — the literature's definition,
  unanimously; OP-15 resolved July 11, 2026). The companion condition
  □ⱼ◯ᵢ ≅ ◯ᵢ is the distinct notion **co-resolution** (both together:
  **bi-resolution**), per the nLab; it never enters the Aufhebung.
- The **Aufhebung** of level i is the minimal resolving level, written **ī**.
  Level j resolves ∅ ⊣ ∗ iff ◯ⱼ∅ ≅ ∅; for the cohesive rung this reads
  ♯∅ ≅ ∅. Which resolving level is *minimal* — hence the Aufhebung — is
  model-dependent (`spec/01-level-1.md` §5).

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

## 5. Errata

Per the freeze policy, changes are logged here — never made silently.

| # | Date | Change | Reason |
|---|---|---|---|
| E1 | 2026-07-10 | §2: resolution condition corrected from the equality ◯ⱼ□ᵢ = □ᵢ to the natural isomorphism ◯ⱼ□ᵢ ≅ □ᵢ | Register had drifted from spec D0.4; strict functor equality was never meant |
| E2 | 2026-07-10 | §2: the generic opposition now records both orientations — □ ⊣ ◯ (outer, ♭ ⊣ ♯) and ◯ ⊣ □ (inner, ʃ ⊣ ♭) — with the unity □X → X → ◯X in both | The frozen ladder alternates orientation from rung to rung (rung 2 is monad-left); the old text covered only the outer shape and made D0.1 incoherent at rung 2. See repaired spec D0.1 |
| E3 | 2026-07-10 | §2: the Aufhebung example no longer asserts that rung 1 is the Aufhebung of level 0 whenever ♯∅ ≅ ∅ | Minimality is model-dependent: in 𝒮 the open level resolves level 0 strictly below rung 1 (`spec/01-level-1.md` §5); the clause-count fork is OP-15 |
| E4 | 2026-07-11 | §2: resolution confirmed one-clause; companion clause named co-resolution (nLab), recorded as a distinct notion | OP-15 resolved from primary sources — Lawvere 1991/1992/2009, KRRZ 2011, Marmolejo–Menni, Menni 2019, nLab all define way-above/Aufhebung by the single clause ◯ⱼ□ᵢ ≅ □ᵢ |

## 6. Sources

nLab: *shape modality*, *adjoint modality*, *Aufhebung*, *infinitesimal shape
modality*, *reduction modality*, *rheonomy modality*, *bosonic modality*,
*cohesive topos*, *cohesive (∞,1)-topos*. — Schreiber, *dcct*. — Shulman,
*Brouwer's fixed-point theorem in real-cohesive HoTT* (arXiv:1509.07584). —
Myers, *Good fibrations through the modal prism* (arXiv:1908.08034). —
Myers–Riley, *Commuting Cohesions* (arXiv:2301.13780). —
Giotopoulos–Sati–Schreiber, *Flux quantization on 11d superspace* (JHEP
2024/082). — agda-unimath, `modal-type-theory` namespace.
