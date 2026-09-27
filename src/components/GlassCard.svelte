<script lang="ts">
  import type { Snippet } from "svelte";

  let {
    href,
    title,
    kicker,
    tone = "",
    children,
  }: {
    href: string;
    title: string;
    kicker: string;
    tone?: "cissa" | "cupboard" | "";
    children?: Snippet;
  } = $props();
</script>

<a class="card glass {tone}" {href} data-tilt data-glare>
  <div class="card-kicker mono">{kicker}</div>
  <h3 class="card-title">{title}</h3>
  <div class="card-body">{@render children?.()}</div>
  <span class="card-go mono">explore&nbsp;&rarr;</span>
</a>
