# Initial rung-2 red leg — 2026-10-05

*Authorship-blind artifact review. The reviewers received only the new
spec, text, dossier, and executable artifacts, with no plan, transcript,
git history, or author rationale. Findings use Break / Underpriced /
Preference.*

## First fresh-context pass

### Break

1. **The sSet product proof paired edge-zigzags without handling opposite
   orientations.** Equalizing their lengths with degenerate edges does not
   make two oppositely oriented steps the boundary of a product edge.

   **Disposition:** repaired in the spec, text, and dossier. The proof now
   traverses the X-zigzag while holding Y fixed by degeneracies, then
   traverses Y while holding X fixed. This avoids orientation alignment.

### Underpriced

1. **Some prose promoted “not exhibited as a level” to categorical
   nonexistence.**

   **Disposition:** all general claims now say the inner triple does not
   itself exhibit a D0.2 level and does not rule out another exhibition.
   The stronger nonexistence claim is retained only for the fully
   enumerated Sierpiński diamond.

2. **The sSet script checked only component cardinalities, not the canonical
   product comparison.**

   **Disposition:** `truncPi0ProductComparisonIsBijective` now checks that
   each product component has a well-defined pair of component labels and
   that the induced map is bijective on all named pairs.

3. **“Places the point-set back inside” suggested that the flat counit is
   monic.**

   **Disposition:** replaced by non-inclusion language; in 𝒮 the component
   ξ need not be injective.

4. **The C-field ledger pointed to a dossier section that did not support
   the claim.**

   **Disposition:** the ledger now identifies W-0028 as external to this
   slice; the rung-2 artifacts claim no new C-field constraint.

### Preference

1. **The executable header omitted spec 02.**

   **Disposition:** corrected.

## Second fresh-context pass

### Break

1. **The dossier attributed the unity to the unit/counit of `ʃ ⊣ ♭`.**
   Those maps have different types.

   **Disposition:** it now correctly names the counit of `Disc ⊣ Γ` and
   unit of `Π₀ ⊣ Disc`.

### Underpriced

1. **Track A treated “connected pieces” as a consequence of the abstract
   triple.**

   **Disposition:** the general story now says Π₀-data; connected pieces
   are asserted only in the sSet model where Π₀ = π₀.

### Preference

None.

## Verdict

All Break and Underpriced findings from both passes were repaired. The
review confirmed the adjunction and monad/comonad directions, the
full-faithfulness and fixed-object argument, the corrected π₀ product
proof, the canonical bounded comparison test, the general/model-specific
level boundary, and the refusal to infer fracture from unity.

Post-repair validation:

- `node examples/run.mjs`: all checks passed;
- wiki lint, IDE lint, and `git diff --check`: recorded at landing.
