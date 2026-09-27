<script lang="ts">
  import SkyBackground from "../components/SkyBackground.svelte";
  import FancyLabel from "../components/FancyLabel.svelte";

  const features = [
    ["01", "one cissa, two forms", "a slim all-oled wearable without a cover, or a compact square module with a screen. the square form is an alternate cissa, not a battery."],
    ["02", "what matters, at a glance", "keep the next event, a useful reminder, and a little context close without making your phone the center of every moment."],
    ["03", "worn your way", "the magnetic core is designed for a shirt clip, pendant, or bracelet. mounts and optional power accessories are separate from the two screened forms."],
    ["04", "open by nature", "open hardware and software: sensor pods, printable cases, and firmware you can read and adapt. built to be understood, and kept in your hands."],
  ];
</script>

<div class="product-page product-page-cissa">
  <a class="product-skip" href="#cissa-story">skip to Cissa details</a>

  <header class="product-nav flex items-center justify-between">
    <a href="/" class="home-brand" aria-label="accompany home">accompany<span class="material-symbol symbol-asterisk" aria-hidden="true"></span></a>
    <nav aria-label="Primary">
      <a href="/cissa" aria-current="page"><FancyLabel text="cissa" variant="swap" /></a>
      <a href="/cupboard"><FancyLabel text="cupboard" variant="swap" /></a>
    </nav>
    <a class="product-nav-back" href="/">back to home <span class="material-symbol symbol-outward" aria-hidden="true"></span></a>
  </header>

  <main>
    <section class="product-hero" aria-labelledby="cissa-title">
      <div class="product-sky" aria-hidden="true"><SkyBackground daylight /></div>
      <div class="product-hero-meta field-label">
        <span>atechnology company</span>
        <span>01 / on you</span>
      </div>
      <div class="product-hero-copy">
        <p class="product-kicker field-label">open-source ai wearable / concept</p>
        <h1 id="cissa-title">cissa<span aria-hidden="true">.</span></h1>
        <p class="product-deck">a small companion for the things you want to carry forward.</p>
      </div>
      <figure class="product-hero-object cissa-object">
        <img src="/cissa-concept.webp" width="800" height="670" alt="Cissa concept showing a slim all-OLED wearable and a compact square screened alternate form" />
        <figcaption class="field-label">cissa forms / concept imagery</figcaption>
      </figure>
      <a class="product-scroll-link" href="#cissa-story">read the field notes <span class="material-symbol symbol-downward" aria-hidden="true"></span></a>
    </section>

    <section id="cissa-story" class="product-intro" aria-labelledby="cissa-intro-title">
      <div class="product-rule field-label flex justify-between"><span>01 / the companion</span><span>small enough to stay close.</span></div>
      <div class="product-intro-grid">
        <h2 id="cissa-intro-title">your world,<br />a little closer.</h2>
        <div>
          <p class="product-lede">cissa is a modular, open-source ai wearable that senses, listens, and remembers with you. made for useful glances, not another feed. an open hardware project, still taking shape.</p>
          <a class="product-text-link" href="https://github.com/atechnology-company" target="_blank" rel="noreferrer">explore the work in public <span class="material-symbol symbol-outward" aria-hidden="true"></span></a>
        </div>
      </div>
    </section>

    <section class="product-editorial product-editorial-cissa" aria-labelledby="cissa-forms-title">
      <figure class="product-editorial-image">
        <img src="/cissa-field.webp" width="1536" height="1024" alt="Cissa wearable concept in an everyday outdoor setting" loading="lazy" />
        <figcaption class="field-label">cissa in the field / concept imagery</figcaption>
      </figure>
      <div class="product-editorial-copy">
        <p class="field-label">02 / two ways to keep close</p>
        <h2 id="cissa-forms-title">a full front.<br />or a small square.</h2>
        <p>the slim cissa keeps a full oled face out in the open. prefer something smaller? the square, screened form is the same companion in another shape — deliberately compact, and not a power pack.</p>
      </div>
    </section>

    <section class="product-features" aria-labelledby="cissa-features-title">
      <div class="product-feature-heading">
        <p class="field-label">03 / field notes</p>
        <h2 id="cissa-features-title">made to move<br />at your pace.</h2>
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

    <figure class="product-study">
      <img src="/cissa-mountain.webp" width="1536" height="1024" alt="Two cissa design concepts on a mountain ledge: an all-OLED pendant and a square screened module with at-a-glance reminders" loading="lazy" />
      <figcaption class="field-label">a little context, out in the world / concept imagery</figcaption>
    </figure>

    <section class="product-pairing" aria-labelledby="cissa-pairing-title">
      <p class="field-label">04 / a home for memory</p>
      <h2 id="cissa-pairing-title">memory belongs<br />somewhere you know.</h2>
      <p>cissa’s context belongs alongside your files, tabs, clipboard, and ai memory on cupboard — hardware you own, at home. local inference on your network, rather than a stranger’s datacenter.</p>
      <a class="product-callout-link" href="/cupboard"><FancyLabel text="meet cupboard" variant="swap" /><span class="material-symbol symbol-outward" aria-hidden="true"></span></a>
    </section>
  </main>

  <footer class="product-footer">
    <a href="/" class="home-brand">accompany<span class="material-symbol symbol-asterisk" aria-hidden="true"></span></a>
    <div><a href="/cissa">cissa <span class="material-symbol symbol-outward" aria-hidden="true"></span></a><a href="/cupboard">cupboard <span class="material-symbol symbol-outward" aria-hidden="true"></span></a></div>
    <div><a href="https://atechnology.company" target="_blank" rel="noreferrer">atechnology company <span class="material-symbol symbol-outward" aria-hidden="true"></span></a><a href="https://tsc.hk" target="_blank" rel="noreferrer">the software company of hong kong <span class="material-symbol symbol-outward" aria-hidden="true"></span></a><a href="/">accompany <span class="material-symbol symbol-outward" aria-hidden="true"></span></a></div>
    <p class="field-label">© {new Date().getFullYear()} atechnology company<br />no cookies. no trackers. just us.</p>
  </footer>
</div>
