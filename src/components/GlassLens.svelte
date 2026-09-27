<script lang="ts">
  import { onMount } from "svelte";
  import type { LiquidGlass as LiquidGlassInstance } from "../lib/vendor/vitrio.esm.js";

  let { background } = $props<{ background: string }>();

  let anchor = $state<HTMLDivElement | null>(null);

  onMount(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    let disposed = false;
    let generation = 0;
    let glass: LiquidGlassInstance | null = null;

    const mount = async (): Promise<void> => {
      if (disposed || document.hidden || !anchor) return;
      const request = ++generation;
      const source = document.querySelector(background);
      if (!(source instanceof Element)) return;

      try {
        // Client-only: the vendored module registers a custom element as a side effect.
        const { default: LiquidGlass } = await import("../lib/vendor/vitrio.esm.js");
        if (disposed || document.hidden || !anchor || request !== generation) return;

        const nextGlass = new LiquidGlass({
          background: source,
          attachTo: anchor,
          draggable: false,
          zIndex: 2,
          scale: 24,
          depth: 28,
          curvature: 3.2,
          chroma: 0.08,
          glow: 0.1,
          edge: 0.55,
          tint: 0,
        });
        if (disposed || document.hidden || request !== generation) {
          nextGlass.destroy();
          return;
        }
        glass = nextGlass;
      } catch (err) {
        if (!disposed) console.warn("glass lens unavailable", err);
      }
    };

    const onVisibilityChange = (): void => {
      generation += 1;
      glass?.destroy();
      glass = null;
      if (!document.hidden) void mount();
    };

    document.addEventListener("visibilitychange", onVisibilityChange);
    void mount();

    return () => {
      disposed = true;
      generation += 1;
      document.removeEventListener("visibilitychange", onVisibilityChange);
      glass?.destroy();
      glass = null;
    };
  });
</script>

<div class="glass-lens primary" bind:this={anchor} aria-hidden="true"></div>
