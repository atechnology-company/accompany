<script lang="ts">
  import { onMount } from "svelte";
  import { fly, fade } from "svelte/transition";
  import SkyBackground from "../components/SkyBackground.svelte";
  import PaperEmblem from "../components/PaperEmblem.svelte";
  import FancyLabel from "../components/FancyLabel.svelte";
  import GravityMark from "../components/GravityMark.svelte";
  import Closing from "../generated/Closing.svelte";
  import fieldNotes from "../generated/field-notes.json";

  let companion = $state<"cissa" | "cupboard">("cissa");
  let intro = $state<"loading" | "logo" | "ready">("loading");
  let introManaged = $state(false);
  let landscapeReady = $state(false);
  let reducedMotion = $state(false);
  let landscape: HTMLImageElement;
  let revealTimer: ReturnType<typeof setTimeout>;
  function revealLogo() {
    if (intro !== "loading") return;
    intro = "logo";
    revealTimer = setTimeout(() => { intro = "ready"; }, 850);
  }
  onMount(() => {
    introManaged = true;
    const motion = window.matchMedia("(prefers-reduced-motion: reduce)");
    const updateMotion = () => {
      reducedMotion = motion.matches;
      if (reducedMotion) intro = "ready";
    };
    updateMotion();
    motion.addEventListener("change", updateMotion);
    void landscape.decode().then(() => { landscapeReady = true; }).catch(() => {});
    for (const src of ["/cissa-concept.webp", "/cupboard-concept.webp"]) {
      const image = new Image();
      image.src = src;
      void image.decode().catch(() => {});
    }
    const fallbackTimer = setTimeout(revealLogo, 2400);
    return () => {
      clearTimeout(fallbackTimer);
      clearTimeout(revealTimer);
      motion.removeEventListener("change", updateMotion);
    };
  });
  const possibilities = [
    ["01", "your data is not the business model", "your files and memories should live on hardware you control. cupboard is being built lan-first, with per-app access to memory. you choose what an app can read, rather than handing every app your whole life."],
    ["02", "open enough to understand", "open code and an open protocol mean you can inspect how things work, build your own client, and change the parts that do not fit. ownership should include the ability to repair, adapt, and keep going without us."],
    ["03", "free to leave. welcome to stay.", "portable state matters as much as a beautiful interface. mono is designed to keep your context useful across devices, not trapped in an account. local inference connects to a computer on your network; your memory does not have to become someone else’s asset."],
  ];
</script>

<div class="home" data-intro={intro} data-intro-managed={introManaged}>
  <a class="home-skip" href="#companions">skip to our companions</a>
  <header class="home-nav flex items-center justify-between">
    <a href="/" class="home-brand" aria-label="accompany home">accompany<span class="material-symbol symbol-asterisk" aria-hidden="true"></span></a>
    <nav aria-label="Primary">
      <a href="#companions"><FancyLabel text="our companions" variant="swap" /></a>
      <a href="#outlook"><FancyLabel text="our outlook" variant="swap" /></a>
    </nav>
    <a class="home-source" href="https://github.com/atechnology-company" target="_blank" rel="noreferrer"><i></i> open by nature <span class="material-symbol symbol-outward" aria-hidden="true"></span></a>
  </header>

  <main>
    <section class="home-hero" aria-labelledby="home-title">
      <div class="home-atmosphere overflow-hidden"><img bind:this={landscape} class="hero-landscape absolute inset-0" class:landscape-ready={landscapeReady} data-home-landscape src="/open-sky.webp" alt="" width="1536" height="1024" fetchpriority="high" />{#if intro === "ready"}<SkyBackground daylight />{/if}</div>
      <div class="hero-topline">
        <p class="field-label">atechnology company<br />for a more personal world.</p>
        <p class="hero-thought">technology,<br />on your side.</p>
      </div>
      <div class="hero-object" data-home-object><PaperEmblem onready={revealLogo} /></div>
      <div class="hero-bottomline">
        <!-- Trusted build output from our .crepus source, never user input. -->
        <div class="field-label">{@html fieldNotes.html}</div>
        <a href="#companions" class="explore-link"><FancyLabel text="meet your companions" variant="swap" /><span class="material-symbol symbol-downward" aria-hidden="true"></span></a>
      </div>
      <h1 id="home-title" class="home-wordmark" aria-label="accompany" data-split>{#each "accompany".split("") as letter, i (i)}<span class="wi" aria-hidden="true">{letter}</span>{/each}<sup class="material-symbol symbol-asterisk" aria-hidden="true"></sup></h1>
    </section>

    <section id="companions" class="companions-section">
      <div class="section-index field-label flex justify-between"><span>01 / the companions</span><span>small things. closer connections.</span></div>
      <div class="companions-heading" data-reveal>
        <h2>small devices.<br />a bigger tomorrow.</h2>
        <p>one goes with you. one brings it all together.<br />meet cissa and cupboard — a more personal<br class="desktop-break" /> kind of technology, built around you.</p>
      </div>
      <figure class="product-still" data-reveal>
        <img src="/companions.webp" width="1536" height="1024" alt="Design exploration: two alternative cissa modules, a slim all-OLED pendant and a square screened form, beside a low metal cupboard server" loading="lazy" />
        <figcaption class="field-label">form studies / concept visualization</figcaption>
      </figure>
      <div class="product-captions grid grid-cols-2">
        <a href="/cissa" class="product-caption"><span class="field-label">01 — on you</span><h3>cissa <span class="material-symbol symbol-outward" aria-hidden="true"></span></h3><p>an open-source ai wearable.<br />your world, a little closer.</p></a>
        <a href="/cupboard" class="product-caption"><span class="field-label">02 — with you</span><h3>cupboard <span class="material-symbol symbol-outward" aria-hidden="true"></span></h3><p>your own corner of the cloud.<br />everything you keep, kept yours.</p></a>
      </div>
    </section>

    <section class="companion-story" aria-labelledby="story-title">
      <div class="story-copy">
        <p class="field-label">02 / made to fit your life</p>
        <div class="companion-switch" class:keep-selected={companion === "cupboard"} aria-label="Choose a companion">
          <button type="button" aria-pressed={companion === "cissa"} onclick={() => companion = "cissa"}>wear it <span>01</span></button>
          <button type="button" aria-pressed={companion === "cupboard"} onclick={() => companion = "cupboard"}>keep it <span>02</span></button>
        </div>
        <div class="story-panels" aria-live="polite">
        {#key companion}
        <div class="story-panel" in:fly={{ y: 18, duration: reducedMotion ? 0 : 420, delay: reducedMotion ? 0 : 100 }} out:fade={{ duration: reducedMotion ? 0 : 150 }}>
          <h2 id="story-title">{companion === "cissa" ? "a companion.\nnot a constraint." : "your cloud.\nyour ground rules."}</h2>
          <p>{companion === "cissa" ? "a slim, all-oled pendant or a compact square module. two forms of cissa, with what matters at a glance: your next event, a timely reminder, a little context. clip it, wear it, make it yours." : "files, tabs, clipboard, ai memory. cupboard keeps your digital life on hardware you own, and connects your devices to the same place. your home base, with room to grow."}</p>
          <a class="story-link" href={companion === "cissa" ? "/cissa" : "/cupboard"}>explore {companion}<span class="material-symbol symbol-outward" aria-hidden="true"></span></a>
        </div>
        {/key}
        </div>
        <p class="field-label story-footnote">{companion === "cissa" ? "magnetic / modular / infinitely yours" : "self-hosted / connected / under your roof"}</p>
      </div>
      <div class="story-image">
        {#key companion}
        <img in:fly={{ x: companion === "cissa" ? -35 : 35, duration: reducedMotion ? 0 : 650 }} out:fade={{ duration: reducedMotion ? 0 : 280 }} src={companion === "cissa" ? "/cissa-concept.webp" : "/cupboard-concept.webp"} alt={companion === "cissa" ? "Two alternative Cissa forms: an all-OLED rectangular pendant and square module, both showing useful at-a-glance information" : "Low rounded-square metal Cupboard personal server concept"} width={companion === "cissa" ? 800 : 736} height={companion === "cissa" ? 670 : 570} loading="lazy" />
        {/key}
        <span class="field-label story-image-label">{companion} / design exploration</span>
      </div>
    </section>

    <section class="field-journal" aria-labelledby="journal-title">
      <div class="section-index field-label flex justify-between"><span>out in the world</span><span>design studies / 001–002</span></div>
      <h2 id="journal-title" data-reveal>less screen time.<br />more <em>outside</em> time.</h2>
      <div class="field-journal-grid">
        <a href="/cissa" class="journal-entry">
          <figure class="journal-photo"><img src="/cissa-mountain.webp" alt="Concept: all-OLED cissa pendant and square screened module on a mountain ledge, showing a reminder and next event" width="1536" height="1024" loading="lazy" /></figure>
          <div class="journal-caption"><span class="field-label">01 / take the long way home</span><span class="material-symbol symbol-outward" aria-hidden="true"></span></div>
          <h3><FancyLabel text="a little context. a lot of freedom." variant="swap" /></h3>
          <p class="field-label">cissa in the field / concept imagery</p>
        </a>
        <a href="/cupboard" class="journal-entry">
          <figure class="journal-photo"><img src="/cupboard-home.webp" alt="Concept: a rounded metal cupboard server on a sunlit oak shelf" width="1536" height="1024" loading="lazy" /></figure>
          <div class="journal-caption"><span class="field-label">02 / somewhere to come back to</span><span class="material-symbol symbol-outward" aria-hidden="true"></span></div>
          <h3><FancyLabel text="the cloud has a home address." variant="swap" /></h3>
          <p class="field-label">cupboard at home / concept imagery</p>
        </a>
      </div>
    </section>

    <section id="outlook" class="outlook-section">
      <div class="section-index field-label flex justify-between"><span>03 / a different relationship</span><span>the future is personal.</span></div>
      <h2 data-reveal>technology should<br />be on <em>your</em> side.</h2>
      <div class="outlook-body">
        <p class="outlook-intro">not another walled garden.<br />a door you can leave open.</p>
        <div class="possibilities">
          {#each possibilities as [number, title, description] (number)}
            <details>
              <summary><span class="field-label">{number}</span><span>{title}</span><span class="detail-plus" aria-hidden="true">+</span></summary>
              <p>{description}</p>
            </details>
          {/each}
          <p class="development-note field-label">an open system, growing in public. explore the product pages for what’s here and what’s next.</p>
        </div>
      </div>
    </section>

    <section class="closing-playground" aria-label="build with accompany"><Closing /><GravityMark /></section>
  </main>

  <footer class="home-footer">
    <a href="/" class="home-brand">accompany<span class="material-symbol symbol-asterisk" aria-hidden="true"></span></a>
    <div><a href="/cissa">cissa <span class="material-symbol symbol-outward" aria-hidden="true"></span></a><a href="/cupboard">cupboard <span class="material-symbol symbol-outward" aria-hidden="true"></span></a></div>
    <div class="company-family"><a href="https://atechnology.company" target="_blank" rel="noreferrer">atechnology company <span class="material-symbol symbol-outward" aria-hidden="true"></span></a><a href="https://tsc.hk" target="_blank" rel="noreferrer">the software company of hong kong <span class="material-symbol symbol-outward" aria-hidden="true"></span></a><a href="/">accompany <span class="material-symbol symbol-outward" aria-hidden="true"></span></a><a href="https://moonshine.tsc.hk" target="_blank" rel="noreferrer">moonshine <span class="material-symbol symbol-outward" aria-hidden="true"></span></a><a href="https://crepuscularity.tsc.hk" target="_blank" rel="noreferrer">crepuscularity <span class="material-symbol symbol-outward" aria-hidden="true"></span></a></div>
    <p class="field-label">© {new Date().getFullYear()} atechnology company<br />no cookies. no trackers. just us.</p>
  </footer>
</div>
