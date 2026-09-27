# AGENTS.md — accompany

Marketing/brand site for **accompany** (cissa + cupboard) at
https://accompany.tsc.hk.

## Stack

- Svelte 5 runes, compiled by `src/lib/svelte-plugin.ts` (mirrors moonshine's
  `examples/svelte-adopt` recipe). SSR = `render` from `svelte/server` in
  `src/worker.ts`; hydration = `hydrate` in `src/client.ts`.
- Client state: `createSignal` from `@tschk/moonshine` in `src/lib/store.ts`.
  Do not add another state library.
- All styles in `src/app.css`. Never put `<style>` blocks in `.svelte` files —
  the build drops them (see `svelte-plugin.ts`).
- Deploy shape: Cloudflare Worker (`wrangler.jsonc`) with `ASSETS` binding,
  `run_worker_first` for page routes, and the `accompany.tsc.hk` custom
  domain. Same conventions as cupboard.tsc.hk and moonshine.tsc.hk.

## Rules

1. There is **no investors page** on this site, by explicit owner decision.
   Don't add one or link to cupboard's.
2. New routes need: an entry in `src/lib/routes.ts`, a page component, and
   `run_worker_first` updated in `wrangler.jsonc`.
3. Client-only libraries (vanta, gsap, lenis) must stay out of the Worker
   bundle — import them from client-only modules (`effects.ts`, `onMount`).
4. `bun run build` then `bun run typecheck` before committing. Visual changes:
   render and look at the page before shipping.
5. Brand voice is lowercase, calm, concrete. No trackers, no cookies, no
   outbound analytics.
