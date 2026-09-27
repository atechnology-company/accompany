# accompany

**accompany.tsc.hk** — cissa + cupboard, the cloud that stays with you.

Svelte 5 (runes) on [moonshine](https://github.com/tschk/moonshine)'s signal
kernel, server-rendered in a Cloudflare Worker with an `ASSETS` binding and a
`custom_domain` route — the same shape as moonshine.tsc.hk and
cupboard.tsc.hk. Deployed with the moonshine cloudflare deploy conventions
(`wrangler deploy`, worker-first page routes).

Libraries: [vanta](https://vantajs.com) CLOUDS sky, lenis smooth scroll,
GSAP + ScrollTrigger choreography, liquid-glass SVG refraction (backdrop
filter + feTurbulence), liquid wordmark, and fancy-components-style magnetic
buttons, glare cards, tilt, and marquee.

## Stack notes

- Bun-first build (`build.ts`) with moonshine's `svelte-adopt` compile recipe:
  `svelte/compiler` with `runes: true`, `generate: "server"` for the Worker
  and `"client"` for the hydration bundle.
- SSR via `render` from `svelte/server`; hydration via `hydrate` from `svelte`.
- Client state is moonshine's `createSignal` (`src/lib/store.ts`), subscribed
  from Svelte components in `onMount`.
- Components carry **no `<style>` blocks** — all styling lives in
  `src/app.css` (the Bun svelte plugin drops CSS; keep it that way).
- No investors page, by design.

## Commands

```sh
bun install
bun run build        # client + worker + assets into dist/
bun run dev          # build + wrangler dev on :8787
bun run deploy       # build + wrangler deploy (custom domain accompany.tsc.hk)
bun run typecheck    # tsc --noEmit
```

## Structure

```
src/
  worker.ts          cloudflare worker entry: SSR pages, assets fallback
  client.ts          hydration entry
  app.css            entire design system
  lib/routes.ts      route table + metadata
  lib/store.ts       moonshine signal kernel state
  lib/effects.ts     lenis + gsap + glare/magnetic/tilt behaviors
  components/        nav, footer, glass defs, sky, cards, marquee, art
  pages/             Home, Cissa, Cupboard, NotFound
```
