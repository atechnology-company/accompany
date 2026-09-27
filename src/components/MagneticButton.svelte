<script lang="ts">
  import type { Snippet } from "svelte";

  let {
    href,
    tone = "ghost",
    children,
  }: {
    href: string;
    tone?: "cissa" | "cupboard" | "ghost";
    children?: Snippet;
  } = $props();
</script>

<a class="btn btn-{tone} glass" {href} data-magnetic>
  <span class="btn-inner">{@render children?.()}</span>
</a>
