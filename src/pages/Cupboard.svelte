<script lang="ts">
  import CupboardGradient from "../components/CupboardGradient.svelte";
  import FancyLabel from "../components/FancyLabel.svelte";

  const states = [
    ["files", "your work, wherever you pick it up.", "documents, photos, and the things you make. a main copy at home, instead of scattered across accounts."],
    ["tabs", "a thought doesn’t end at one screen.", "keep browser state alongside your files, so moving from a laptop to another device feels like continuing."],
    ["clipboard", "copy here. carry it with you.", "the little things you move between devices belong with the rest of your digital life."],
    ["ai memory", "context that stays on your side.", "facts, preferences, and conversations in one place, with access scoped to each app."],
  ];
  const steps = [
    ["01", "capture", "files, tabs, clipboard, and ai memory enter your cupboard through mono protocol."],
    ["02", "keep", "your hardware holds the main copy. apps get the access you grant them."],
    ["03", "continue", "pick up a paired device and carry your context forward."],
    ["04", "take it with you", "open foundations keep your state portable, beyond any one app."],
  ];
  const foundations = [
    ["operating system", "alpenglow", "the open appliance operating system underneath cupboard.", "https://github.com/tschk/alpenglow"],
    ["owned state", "mono protocol", "a shared protocol for your files, browser state, clipboard, and memory.", "https://github.com/atechnology-company/monoprotocol"],
    ["shared interfaces", "crepuscularity", "one interface foundation across the devices you use.", "https://github.com/tschk/crepuscularity"],
    ["browser research", "rv8", "a future browser foundation. today’s desktop clients use webkit.", "https://github.com/tschk/rv8"],
  ];
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
    <section class="product-hero cupboard-hero" aria-labelledby="cupboard-title">
      <div class="product-hero-copy">
        <p class="product-kicker field-label">cupboard / your personal cloud</p>
        <h1 id="cupboard-title">your digital life.<br /><span>at home.</span></h1>
        <p class="product-deck">a small box for your files, tabs, clipboard, and ai memory.<br class="cupboard-desktop-break" /> the main copy stays on hardware you own.</p>
        <div class="cupboard-actions">
          <a class="cupboard-button" href="#cupboard-story">explore cupboard <span aria-hidden="true">↓</span></a>
          <a class="cupboard-link" href="https://github.com/atechnology-company/cupboard" target="_blank" rel="noreferrer">follow the build <span aria-hidden="true">↗</span></a>
        </div>
      </div>
      <figure class="product-hero-object cupboard-object">
        <img src="/cupboard-concept.webp" width="736" height="570" alt="Low, rounded metal Cupboard personal server concept" fetchpriority="high" />
        <figcaption class="field-label">cupboard / hardware design study</figcaption>
      </figure>
      <div class="cupboard-facts" aria-label="At a glance">
        <div><strong>your hardware</strong><span>your main copy, at home</span></div>
        <div><strong>lan-first</strong><span>no cloud in the core path</span></div>
        <div><strong>$400 target</strong><span>one-time appliance price</span></div>
        <div><strong>prelaunch</strong><span>hardware in development</span></div>
      </div>
    </section>

    <section id="cupboard-story" class="product-intro cupboard-intro" aria-labelledby="cupboard-intro-title">
      <p class="field-label">01 / a home base for everything you keep</p>
      <h2 id="cupboard-intro-title">one place to keep it.<br /><span>everywhere to continue.</span></h2>
      <p class="product-lede">cupboard is a personal cloud on your own network. it brings the state of your digital life together — not just files, but the tabs you left open, what you copied, and what your ai remembers.</p>
      <div class="cupboard-continuity" role="img" aria-label="Mac, Windows, phone, and browser connect to Cupboard, which holds files, tabs, clipboard, and AI memory on your own network.">
        <div class="cupboard-device-row" aria-hidden="true">
          <span><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.4" aria-hidden="true"><rect x="3" y="4" width="18" height="13" rx="2"/><path d="M8 21h8m-4-4v4"/></svg>mac</span>
          <span><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.4" aria-hidden="true"><rect x="3" y="4" width="18" height="13" rx="2"/><path d="M8 21h8m-4-4v4"/></svg>windows</span>
          <span><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.4" aria-hidden="true"><rect x="6" y="2" width="12" height="20" rx="3"/><path d="M10 18h4"/></svg>phone</span>
          <span><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.4" aria-hidden="true"><rect x="2" y="4" width="20" height="16" rx="2"/><path d="M2 9h20m-16-3h1m2 0h1"/></svg>browser</span>
        </div>
        <div class="cupboard-network-lines" aria-hidden="true"></div>
        <div class="cupboard-hub" aria-hidden="true"><span class="field-label">on your network</span><strong>cupboard</strong><div><span>files</span><span>tabs</span><span>clipboard</span><span>ai memory</span></div><span class="cupboard-hub-light"></span></div>
        <p class="field-label" aria-hidden="true">your devices. your context. your ground rules.</p>
      </div>
      <div class="cupboard-state-grid">
        {#each states as [label, title, body] (label)}
          <article><p class="field-label">{label}</p><h3>{title}</h3><p>{body}</p></article>
        {/each}
      </div>
    </section>

    <section class="cupboard-flow" aria-labelledby="cupboard-flow-title">
      <CupboardGradient />
      <div class="cupboard-flow-content">
        <p class="field-label">02 / powered by mono protocol</p>
        <h2 id="cupboard-flow-title">pick up where<br />you left off.</h2>
        <p class="cupboard-flow-deck">the cloud is a place you own. your devices are ways to reach it.</p>
        <div class="cupboard-steps">
          {#each steps as [number, title, body] (number)}
            <article><span class="field-label">{number}</span><h3>{title}</h3><p>{body}</p></article>
          {/each}
        </div>
        <div class="cupboard-session" aria-label="Illustration of a continuity session">
          <div class="cupboard-session-bar"><span aria-hidden="true">● ● ●</span><span class="field-label">cupboard.local / an illustrated session</span></div>
          <div><span>pair</span><p>a device you trust. access you choose.</p></div>
          <div><span>capture</span><p>files · tabs · clipboard · ai memory</p></div>
          <div><span>continue</span><p>another screen. the same thread.</p></div>
          <div><span>keep</span><p>the main copy stays yours.</p></div>
        </div>
      </div>
    </section>

    <section class="product-editorial product-editorial-cupboard" aria-labelledby="cupboard-form-title">
      <figure class="product-editorial-image">
        <img src="/cupboard-home.webp" width="1536" height="1024" alt="Cupboard personal server concept in a home setting" loading="lazy" />
        <figcaption class="field-label">cupboard at home / concept imagery</figcaption>
      </figure>
      <div class="product-editorial-copy">
        <p class="field-label">03 / a little hardware, nearby</p>
        <h2 id="cupboard-form-title">quiet metal.<br />close at hand.</h2>
        <p>a compact, rounded-square metal box. designed to sit quietly at home while the things that matter to you have somewhere familiar to return to.</p>
      </div>
    </section>

    <section class="product-features" aria-labelledby="cupboard-features-title">
      <div class="product-feature-heading">
        <p class="field-label">04 / beyond storage</p>
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

    <section class="cupboard-foundations" aria-labelledby="cupboard-foundations-title">
      <p class="field-label">05 / open all the way down</p>
      <h2 id="cupboard-foundations-title">a stack you can<br />look inside.</h2>
      <p class="product-lede">from the operating system to the interfaces, cupboard is built on open foundations. understand what holds your data, and follow how it is made.</p>
      <div class="cupboard-foundation-grid">
        {#each foundations as [label, name, body, href] (name)}
          <a {href} target="_blank" rel="noreferrer"><span class="field-label">{label}<span aria-hidden="true">↗</span></span><h3>{name}</h3><p>{body}</p></a>
        {/each}
      </div>
    </section>

    <section id="cupboard-status" class="cupboard-status" aria-label="Development status">
      <p class="field-label">build notes / prelaunch</p>
      <h2>built in the open.<br />still taking shape.</h2>
      <p>the planned appliance price is $400, with no subscription for core sync. the hardware is prelaunch; final specifications and shipping are still ahead. the hub already has scoped memory, local inference routing, owner-hosted sites, and scheduled agent definitions. the appliance and its setup experience are still being developed. these are design studies, not photos of shipping hardware.</p>
      <p>the goal is simple: connect power, pair a device, and continue. files, browser state, clipboard, and ai context should follow you without becoming another company’s property.</p>
      <a class="product-text-link" href="https://github.com/atechnology-company/cupboard" target="_blank" rel="noreferrer">follow development <span class="material-symbol symbol-outward" aria-hidden="true"></span></a>
      <a class="product-text-link" href="https://tsc.hk" target="_blank" rel="noreferrer">the software company of hong kong <span class="material-symbol symbol-outward" aria-hidden="true"></span></a>
    </section>

    <section class="product-pairing" aria-labelledby="cupboard-pairing-title">
      <p class="field-label">06 / the companion, carried</p>
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
