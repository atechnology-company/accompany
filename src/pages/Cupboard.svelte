<script lang="ts">
  import SkyBackground from "../components/SkyBackground.svelte";
  import FancyLabel from "../components/FancyLabel.svelte";

  const features = [
    ["01", "one place to pick up", "files, tabs, clipboard, and ai memory: synced through the open mono protocol, across the devices you use. memory is a first-class object, with per-app access."],
    ["02", "a local intelligence bridge", "connect a jetson or another computer running ollama or llama.cpp. cupboard provides an openai-compatible endpoint to inference on your network; it does not run the models itself in v1."],
    ["03", "a home for things you make", "serve a static site on your lan or proxy a service running on another computer. persisted agent definitions and interval schedules give ongoing tasks somewhere to live. process hosting and public dns are later work."],
    ["04", "memory with boundaries", "each app has its own memory namespace. cross-app reads need an owner grant. facts, episodes, preferences, and summaries live on your box, with full-text search rather than a separate cloud memory account."],
    ["05", "nearby, even when you are not", "paired devices can reach the hub api through a remote tunnel. this is access to your cupboard, not a general-purpose vpn. local-first remains the starting point."],
    ["06", "a stack you can understand", "alpenglow provides the appliance operating system. mono handles user-owned state. crepuscularity powers shared interfaces. these open foundations are developed with the software company of hong kong."],
  ];
</script>

<div class="product-page product-page-cupboard">
  <a class="product-skip" href="#cupboard-story">skip to Cupboard details</a>

  <header class="product-nav flex items-center justify-between">
    <a href="/" class="home-brand" aria-label="accompany home">accompany<span class="material-symbol symbol-asterisk" aria-hidden="true"></span></a>
    <nav aria-label="Primary">
      <a href="/cissa"><FancyLabel text="cissa" variant="swap" /></a>
      <a href="/cupboard" aria-current="page"><FancyLabel text="cupboard" variant="swap" /></a>
    </nav>
    <a class="product-nav-back" href="/">back to home <span class="material-symbol symbol-outward" aria-hidden="true"></span></a>
  </header>

  <main>
    <section class="product-hero" aria-labelledby="cupboard-title">
      <div class="product-sky" aria-hidden="true"><SkyBackground daylight /></div>
      <div class="product-hero-meta field-label">
        <span>atechnology company</span>
        <span>02 / with you</span>
      </div>
      <div class="product-hero-copy">
        <p class="product-kicker field-label">your own corner of the cloud / concept</p>
        <h1 id="cupboard-title">cupboard<span aria-hidden="true">.</span></h1>
        <p class="product-deck">everything you keep, kept yours.</p>
      </div>
      <figure class="product-hero-object cupboard-object">
        <img src="/cupboard-concept.webp" width="736" height="570" alt="Low, rounded metal Cupboard personal server concept" />
        <figcaption class="field-label">cupboard form / concept imagery</figcaption>
      </figure>
      <a class="product-scroll-link" href="#cupboard-story">read the field notes <span class="material-symbol symbol-downward" aria-hidden="true"></span></a>
    </section>

    <section id="cupboard-story" class="product-intro" aria-labelledby="cupboard-intro-title">
      <div class="product-rule field-label flex justify-between"><span>01 / the home base</span><span>the cloud, under your roof.</span></div>
      <div class="product-intro-grid">
        <h2 id="cupboard-intro-title">your cloud.<br />your ground rules.</h2>
        <div>
          <p class="product-lede">cupboard is a low, quiet box at home for the digital life you want to keep: files, tabs, clipboard, and the memory your ai carries with it. the hardware is still in development; follow the build in public.</p>
          <a class="product-text-link" href="#cupboard-status">where the project stands <span class="material-symbol symbol-downward" aria-hidden="true"></span></a>
        </div>
      </div>
    </section>

    <section class="product-editorial product-editorial-cupboard" aria-labelledby="cupboard-form-title">
      <figure class="product-editorial-image">
        <img src="/cupboard-home.webp" width="1536" height="1024" alt="Cupboard personal server concept in a home setting" loading="lazy" />
        <figcaption class="field-label">cupboard at home / concept imagery</figcaption>
      </figure>
      <div class="product-editorial-copy">
        <p class="field-label">02 / a little hardware, nearby</p>
        <h2 id="cupboard-form-title">quiet metal.<br />close at hand.</h2>
        <p>a compact, rounded-square metal box. designed to sit quietly at home while the things that matter to you have somewhere familiar to return to.</p>
      </div>
    </section>

    <section class="product-features" aria-labelledby="cupboard-features-title">
      <div class="product-feature-heading">
        <p class="field-label">03 / what it makes possible</p>
        <h2 id="cupboard-features-title">more room<br />to make it yours.</h2>
      </div>
      <div class="product-accordion">
        {#each features as [number, title, body] (number)}
          <details>
            <summary><span class="field-label">{number}</span><span>{title}</span><span class="product-plus" aria-hidden="true">+</span></summary>
            <p>{body}</p>
          </details>
        {/each}
      </div>
    </section>

    <section id="cupboard-status" class="cupboard-status" aria-label="Development status">
      <p class="field-label">build notes / software now, hardware in development</p>
      <p>the hub already has scoped memory, local inference routing, owner-hosted sites, and scheduled agent definitions. the appliance and its setup experience are still being developed. these are design studies, not photos of shipping hardware.</p>
      <p>the goal is simple: connect power, pair a device, and continue. files, browser state, clipboard, and ai context should follow you without becoming another company’s property.</p>
      <a class="product-text-link" href="https://tsc.hk" target="_blank" rel="noreferrer">the software company of hong kong <span class="material-symbol symbol-outward" aria-hidden="true"></span></a>
    </section>

    <section class="product-pairing" aria-labelledby="cupboard-pairing-title">
      <p class="field-label">04 / the companion, carried</p>
      <h2 id="cupboard-pairing-title">a little more local<br />intelligence.</h2>
      <p>pair cupboard with cissa to keep a companion’s context close to the rest of your digital life.</p>
      <a class="product-callout-link" href="/cissa"><FancyLabel text="meet cissa" variant="swap" /><span class="material-symbol symbol-outward" aria-hidden="true"></span></a>
    </section>
  </main>

  <footer class="product-footer">
    <a href="/" class="home-brand">accompany<span class="material-symbol symbol-asterisk" aria-hidden="true"></span></a>
    <div><a href="/cissa">cissa <span class="material-symbol symbol-outward" aria-hidden="true"></span></a><a href="/cupboard">cupboard <span class="material-symbol symbol-outward" aria-hidden="true"></span></a></div>
    <div><a href="https://atechnology.company" target="_blank" rel="noreferrer">atechnology company <span class="material-symbol symbol-outward" aria-hidden="true"></span></a><a href="https://tsc.hk" target="_blank" rel="noreferrer">the software company of hong kong <span class="material-symbol symbol-outward" aria-hidden="true"></span></a><a href="/">accompany <span class="material-symbol symbol-outward" aria-hidden="true"></span></a></div>
    <p class="field-label">© {new Date().getFullYear()} atechnology company<br />no cookies. no trackers. just us.</p>
  </footer>
</div>
