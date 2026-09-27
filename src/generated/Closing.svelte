<!-- Generated from src/crepus/Closing.crepus by `crepus web build --emit svelte`. -->
<script lang="ts">
  let { scope = {}, handlers = {} }: { scope?: Record<string, any>; handlers?: Record<string, any> } = $props();

  function toArray(v: unknown): any[] {
    return Array.isArray(v) ? v : [];
  }
</script>

<div class="home-closing relative overflow-hidden">
  <span class="field-label block">good company. wherever you go.</span>
  <h2 class="closing-title flex flex-col">
    <span>make yourself</span>
    <span>at home.</span>
  </h2>
  <a href="https://github.com/atechnology-company" target="_blank" rel="noreferrer" class="closing-link inline-flex">
    <span>come build with us</span>
    <span class="material-symbol symbol-outward"></span>
  </a>
</div>
