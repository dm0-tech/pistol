# The Sierpiński Explorer (P0.4)

**Open `sierpinski.html` in any browser. That's it** — the file is fully
self-contained (React 18 UMD inlined, no network, no build tools needed to
*use* it). It walks the rung 0–1 story interactively: build a two-stage
object, apply the four levels' modalities, watch the discrete/codiscrete
badges, and click through the diamond to the Aufhebung.

Deep links: `sierpinski.html#step=N` opens story step N (1–8); step 8 is
the Aufhebung finale.

## Editing

`sierpinski.html` is **generated** — edit the readable sources and rebuild:

```
explorer/
├── sierpinski.jsx     # the app (edit this)
├── style.css
├── vendor/            # React 18 UMD, vendored (license headers preserved)
├── build.mjs          # node explorer/build.mjs  → regenerates the html
└── sierpinski.html    # the artifact (do not edit by hand)
```

The build step is a one-shot JSX transpile (esbuild via npx); it exists only
for editing. The *artifact* remains a single zero-infrastructure file, per
plan N7. (The first cut used CDN React + in-browser Babel — genuinely
buildless — but failed offline and in headless rendering; self-containment
won.)

## Honesty note

The math core in `sierpinski.jsx` (objects of Set^→, hom enumeration,
isomorphism checking, the four levels' modalities) mirrors
`examples/src/sierpinski.mjs`, and every fact the explorer displays is
reproduced headlessly by `node examples/run.mjs`. The spec
(`spec/00-level-0.md`, `spec/01-level-1.md`) is canonical; if the explorer
ever disagrees with it, that is an explorer bug.

License: MIT (see `LICENSE-MIT`). React is © Meta, MIT-licensed; its
license headers are preserved in the inlined bundles.
