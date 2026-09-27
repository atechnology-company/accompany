<script lang="ts">
  import { onMount } from "svelte";
  import LiquidLogo from "./LiquidLogo.svelte";
  import { scrollY } from "../lib/store";

  let scrolled = $state(false);

  onMount(() => {
    const unsub = scrollY.subscribe(() => {
      scrolled = scrollY() > 32;
    });
    return unsub;
  });
</script>

<header class="nav-wrap">
  <nav class="nav glass" class:scrolled aria-label="Primary">
    <a class="brand" href="/">
      <LiquidLogo size={21} />
      <span class="brand-name">accompany</span>
    </a>
    <div class="nav-links">
      <a href="/cissa">cissa</a>
      <a href="/cupboard">cupboard</a>
    </div>
    <a class="nav-ext mono" href="https://cupboard.tsc.hk" target="_blank" rel="noreferrer">
      cupboard.tsc.hk <span class="material-symbol symbol-outward" aria-hidden="true"></span>
    </a>
  </nav>
</header>
