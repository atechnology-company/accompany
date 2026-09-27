<script lang="ts">
  let { items = [] }: { items?: string[] } = $props();
</script>

<div class="marquee" data-reveal>
  <div class="marquee-track">
    {#each [0, 1] as copy (copy)}
      <div class="marquee-seq" aria-hidden={copy === 1}>
        {#each items as item (item)}
          <span class="marquee-item mono">{item}</span>
          <span class="marquee-dot" aria-hidden="true">&middot;</span>
        {/each}
      </div>
    {/each}
  </div>
</div>
