<script lang="ts">
  import { onMount } from "svelte";
  import { scrollY } from "../lib/store";
  import { PostFX } from "../lib/postfx";

  let el = $state<HTMLDivElement | null>(null);
  let effect: { destroy: () => void } | null = null;
  let post: PostFX | null = null;

  onMount(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    let unsub: (() => void) | undefined;

    (async () => {
      try {
        const [vantaMod, THREE] = await Promise.all([
          import("vanta/dist/vanta.clouds.min"),
          import("three"),
        ]);
        const v = vantaMod as Record<string, unknown>;
        const nested = v.default as Record<string, unknown> | undefined;
        const CLOUDS =
          (typeof nested?.default === "function" && nested.default) ||
          (typeof v.default === "function" && v.default) ||
          (nested?._vantaEffect as unknown) ||
          v._vantaEffect ||
          (nested?.CLOUDS as unknown);
        if (typeof CLOUDS !== "function") throw new Error("vanta effect unresolved");
        if (el) {
          effect = (CLOUDS as (o: Record<string, unknown>) => { destroy: () => void })({
            el,
            THREE,
            mouseControls: true,
            touchControls: false,
            gyroControls: false,
            minHeight: 200,
            minWidth: 200,
            skyColor: 0x141b31,
            cloudColor: 0x9aa6c8,
            cloudShadowColor: 0x0d1326,
            sunColor: 0xffb87a,
            sunGlareColor: 0xff8a50,
            sunlightColor: 0xff9455,
            speed: 0.65,
            zoom: 0.85,
          });
          const vantaCanvas = el.querySelector("canvas");
          if (vantaCanvas) {
            // dither + datamosh post-process over the sky (moonshine shaders
            // runtime, ported to svelte) — mosh driven by moonshine's scrollY
            post = new PostFX(el, vantaCanvas);
            post.start();
            unsub = scrollY.subscribe(() => post?.nudge(scrollY()));
          }
        }
      } catch (err) {
        console.warn("sky unavailable", err);
      }
    })();

    return () => {
      unsub?.();
      post?.destroy();
      effect?.destroy();
    };
  });
</script>

<div class="sky" bind:this={el} aria-hidden="true">
  <div class="sky-scrim"></div>
</div>
