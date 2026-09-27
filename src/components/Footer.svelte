<script lang="ts">
  import LiquidLogo from "./LiquidLogo.svelte";

  const year = new Date().getFullYear();
</script>

<footer class="footer">
  <div class="wrap footer-grid">
    <div class="footer-brand">
      <a class="brand" href="/">
        <LiquidLogo size={20} />
        <span class="brand-name">accompany</span>
      </a>
      <p class="footer-line">
        two companions for the part of your life that lives online — kept on
        hardware you own, in sky you can read.
      </p>
      <p class="footer-line mono dim">built with moonshine &middot; served from cloudflare workers</p>
    </div>

    <nav class="footer-col" aria-label="Products">
      <h4 class="mono">products</h4>
      <a href="/cissa">cissa</a>
      <a href="/cupboard">cupboard</a>
      <a href="https://cupboard.tsc.hk" target="_blank" rel="noreferrer">cupboard.tsc.hk <span class="material-symbol symbol-outward" aria-hidden="true"></span></a>
    </nav>

    <nav class="footer-col" aria-label="Family">
      <h4 class="mono">family</h4>
      <a href="https://moonshine.tsc.hk" target="_blank" rel="noreferrer">moonshine.tsc.hk <span class="material-symbol symbol-outward" aria-hidden="true"></span></a>
      <a href="https://crepuscularity.tsc.hk" target="_blank" rel="noreferrer">crepuscularity.tsc.hk <span class="material-symbol symbol-outward" aria-hidden="true"></span></a>
      <a href="https://tsc.hk" target="_blank" rel="noreferrer">tsc.hk <span class="material-symbol symbol-outward" aria-hidden="true"></span></a>
    </nav>

    <nav class="footer-col" aria-label="Open source">
      <h4 class="mono">open source</h4>
      <a href="https://github.com/atechnology-company" target="_blank" rel="noreferrer">atechnology-company <span class="material-symbol symbol-outward" aria-hidden="true"></span></a>
      <a href="https://github.com/atechnology-company/monoprotocol" target="_blank" rel="noreferrer">monoprotocol <span class="material-symbol symbol-outward" aria-hidden="true"></span></a>
    </nav>
  </div>

  <div class="wrap footer-base mono dim">
    <span>&copy; {year} atechnology company</span>
    <span>no cookies &middot; no trackers &middot; no investors page</span>
  </div>
</footer>
