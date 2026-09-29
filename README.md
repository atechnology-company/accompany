# accompany

**accompany.tsc.hk** — cissa + cupboard, the cloud that stays with you.

Svelte 5 (runes) on [moonshine](https://github.com/tschk/moonshine)'s signal
kernel, with Crepuscularity-authored Svelte sections and UnoCSS utilities,
server-rendered in a Cloudflare Worker with an `ASSETS` binding and a
`custom_domain` route — the same shape as moonshine.tsc.hk and
cupboard.tsc.hk. Deployed with the moonshine cloudflare deploy conventions
(`wrangler deploy`, worker-first page routes).

Libraries: [vanta](https://vantajs.com) CLOUDS, Lenis smooth scrolling,
GSAP + ScrollTrigger, Paper Shaders Liquid Metal, and Fancy Components Letter Swap Forward
through Moonshine's React adapter. Vitrio and ScrambleIn remain available but are not mounted on the homepage.
The sky applies Bayer dither directly in Vanta's shader, without canvas readback or datamosh. Product imagery is
labelled concept visualization, not photography of shipping hardware.
The homepage waits for the liquid mark before revealing its content, with
static/reduced-motion fallbacks. The footer mark has drag-and-release gravity;
accordion heights animate on both pointer and keyboard activation.

`public/accompany-metal-map.png` is Paper's `toProcessedLiquidMetal` output for
`public/accompany-mark.svg`, resized from 4096px to 768px with `sips -Z 768`.
Regenerate it with Paper's browser API if the source mark changes; visitors load
this prepared texture instead of running the image-processing pass themselves.

## Stack notes

- Bun-first build (`build.ts`) with moonshine's `svelte-adopt` compile recipe:
  `svelte/compiler` with `runes: true`, `generate: "server"` for the Worker
  and `"client"` for the hydration bundle.
- SSR via `render` from `svelte/server`; hydration via `hydrate` from `svelte`.
- Moonshine's `createRequestHandler` owns route matching, response handling,
  and HEAD semantics through its public `Renderer` interface, implemented
  with Svelte SSR in `src/worker.ts`.
- Client state is moonshine's `createSignal` (`src/lib/store.ts`), subscribed
  from Svelte components in `onMount`.
- `src/lib/fancy-island.tsx` mounts the Fancy `ScrambleIn` React component
  through Moonshine's real `createApp` React adapter; it is a client-only
  island, not part of Svelte SSR.
- `src/crepus/Closing.crepus` is emitted to `src/generated/Closing.svelte` by
  Crepuscularity. The generated component keeps the emitter's Svelte 5
  `{ scope, handlers }` `$props()` API (the static section needs neither).
- `src/crepus/FieldNotes.crepus` is parsed and rendered by the official
  `@tschk/crepus-moonshine` adapter at build time. Its trusted static markup
  is included in Svelte SSR, without shipping the Rust/WASM parser to browsers.
- UnoCSS scans `src/**/*.{svelte,ts,tsx,crepus}` and writes
  `dist/public/assets/uno.css`, including utility output and custom preflight
  CSS from `src/lib/uno-preflight.ts`.
- Components carry **no `<style>` blocks** — custom styling stays in UnoCSS
  config/preflights.
- No investors page, by design.

## Commands

```sh
bun install
# Requires Crepuscularity CLI 0.16+ with the real Svelte emitter. Set
# CREPUS_BIN to that executable if `crepus` on PATH is older.
bun run build        # client + worker + assets into dist/
bun run dev          # build + wrangler dev on :8787
bun run deploy       # build + wrangler deploy (custom domain accompany.tsc.hk)
bun run typecheck    # tsc --noEmit
bun test            # request/SSR checks against the built Worker
```

## Structure

```
src/
  worker.ts          cloudflare worker entry: SSR pages, assets fallback
  client.ts          hydration entry
  lib/uno-preflight.ts custom global CSS injected into UnoCSS output
  lib/routes.ts      route table + metadata
  lib/store.ts       moonshine signal kernel state
  lib/effects.ts     lenis + gsap + glare/magnetic/tilt behaviors
  components/        nav, footer, glass defs, sky, cards, marquee, art
  pages/             Home, Cissa, Cupboard, NotFound
  crepus/            Crepuscularity source templates
  generated/         Svelte emitted from Crepus templates
```

## Crepus integration

The local `crepus` 0.11 binary is too old for this integration. Build/use the
known Crepuscularity 0.16 CLI, then point the build at it, for example:

```sh
cargo build --manifest-path /Users/undivisible/projects/crepuscularity/Cargo.toml \
  -p crepuscularity-cli --no-default-features
CREPUS_BIN=/Users/undivisible/projects/crepuscularity/target/debug/crepus bun run build
```

`build.ts` invokes:

```sh
crepus web build --emit svelte --site src/crepus --entry Closing.crepus --out-dir dist/crepus
```

Crepus 0.16's View IR emitter currently lowers headings to generic layout
nodes. The build changes only the generated `closing-title` div to an `h2`;
all text, attributes, and structure come from the `.crepus` source. Remove
that tag restoration once the upstream emitter preserves heading semantics.

The packaged Moonshine Cloudflare handler currently selects its React renderer.
This host uses Moonshine's public request-handler/renderer extension point
for Svelte SSR on Cloudflare, alongside the official Crepus and React adapters.
