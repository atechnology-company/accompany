<script lang="ts">
  import { onMount } from "svelte";

  let { text, variant = "scramble" }: { text: string; variant?: "scramble" | "swap" } = $props();

  let host: HTMLSpanElement;
  let fallback: HTMLSpanElement;

  onMount(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    let cancelled = false;
    let app: { unmount: () => void } | undefined;

    void import("../lib/fancy-island")
      .then(({ mountFancyLabel }) => {
        if (cancelled) return;
        app = mountFancyLabel(host, { text, variant });
        fallback.hidden = true;
      })
      .catch(() => {
        // Keep the SSR text if the optional client island cannot start.
        fallback.hidden = false;
      });

    return () => {
      cancelled = true;
      app?.unmount();
    };
  });
</script>

<span class="fancy-label">
  <span bind:this={fallback}>{text}</span>
  <span bind:this={host}></span>
</span>
