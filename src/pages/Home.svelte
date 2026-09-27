<script lang="ts">
  import GlassDefs from "../components/GlassDefs.svelte";
  import SkyBackground from "../components/SkyBackground.svelte";
  import Nav from "../components/Nav.svelte";
  import Footer from "../components/Footer.svelte";
  import Marquee from "../components/Marquee.svelte";
  import GlassCard from "../components/GlassCard.svelte";
  import MagneticButton from "../components/MagneticButton.svelte";
  import CissaArt from "../components/CissaArt.svelte";
  import CupboardArt from "../components/CupboardArt.svelte";

  const carried = [
    "your files",
    "your tabs",
    "your clipboard",
    "your ai memory",
    "your models",
    "your agents",
    "your hardware",
    "no middleman",
  ];
</script>

<GlassDefs />
<SkyBackground />
<Nav />

<main>
  <section class="hero">
    <p class="overline mono" data-hero-sub>a technology company</p>
    <h1 class="hero-title liquid" data-split aria-label="accompany">
      {#each "accompany".split("") as ch, i (i)}<span class="wi" aria-hidden="true">{ch}</span>{/each}
    </h1>
    <div class="hero-sub" data-hero-sub>
      <p class="hero-line">
        your files, your tabs, your ai's memory — everything that knows you,
        kept close and carried with you.
      </p>
      <div class="hero-cta">
        <MagneticButton href="/cissa" tone="cissa">meet cissa</MagneticButton>
        <MagneticButton href="/cupboard" tone="cupboard">meet cupboard</MagneticButton>
      </div>
      <p class="hero-note mono dim">open source &middot; self-hosted &middot; yours</p>
    </div>
    <div class="scroll-cue mono" aria-hidden="true">scroll</div>
  </section>

  <Marquee items={carried} />

  <section class="section">
    <div class="wrap">
      <p class="overline mono" data-reveal>two companions</p>
      <h2 class="display" data-reveal>
        one keeps the sky. <span class="grad">one rides it with you.</span>
      </h2>
      <p class="lede" data-reveal>
        cissa is what you wear. cupboard is where it all comes home. together,
        they accompany every device you own.
      </p>
      <div class="duo" data-reveal-group>
        <GlassCard href="/cissa" kicker="01 &mdash; wearable" title="cissa" tone="cissa">
          <p>
            a modular, open-source ai companion. a sensing core that snaps to a
            bigger battery, clips to your shirt with magnets, or wears as a
            pendant or bracelet. built to be rebuilt.
          </p>
          <div class="card-art"><CissaArt compact /></div>
        </GlassCard>
        <GlassCard href="/cupboard" kicker="02 &mdash; home base" title="cupboard" tone="cupboard">
          <p>
            the cloud, but it's yours. a small box that holds the real copy —
            files, tabs, clipboard, and everything your ai remembers — and
            answers locally.
          </p>
          <div class="card-art"><CupboardArt compact /></div>
        </GlassCard>
      </div>
    </div>
  </section>

  <section class="section">
    <div class="wrap">
      <p class="overline mono" data-reveal>the state loop</p>
      <h2 class="display" data-reveal>
        from whatever you're holding,
        <span class="grad">back to everything else you own.</span>
      </h2>
      <div class="steps" data-reveal-group>
        <div class="step glass">
          <span class="step-num mono">01</span>
          <h3>capture</h3>
          <p>
            your stuff leaves whatever you're holding — files, tabs, clipboard,
            ai memory — and lands on the box on your wifi.
          </p>
        </div>
        <div class="step glass">
          <span class="step-num mono">02</span>
          <h3>store</h3>
          <p>the box keeps the real copy. encrypted, logged, yours. no account anywhere gets to be the truth.</p>
        </div>
        <div class="step glass">
          <span class="step-num mono">03</span>
          <h3>continue</h3>
          <p>pick up anything else you own. same tabs, files, clipboard, context — already sitting there.</p>
        </div>
        <div class="step glass">
          <span class="step-num mono">04</span>
          <h3>export</h3>
          <p>leave whenever you like. copy it to a laptop or a second cupboard. it never stops being yours.</p>
        </div>
      </div>
      <div class="term glass" data-reveal>
        <div class="term-bar mono">mono &middot; cupboard.local</div>
        <pre class="mono"><span class="t-prompt">$</span> mono sync --box cupboard.local
<span class="t-dim">&#8627;</span> pair   <span class="t-ok">capability granted</span> &middot; device:macbook
<span class="t-dim">&#8627;</span> sync   1,204 objects &middot; 0 conflicts &middot; memory &#10003;
<span class="t-dim">&#8627;</span> cissa  pendant paired &middot; listening at home</pre>
      </div>
    </div>
  </section>

  <section class="section">
    <div class="wrap">
      <p class="overline mono" data-reveal>new in cupboard</p>
      <h2 class="display" data-reveal>your ai <span class="grad">comes home.</span></h2>
      <p class="lede" data-reveal>
        cupboard isn't just storage anymore. it remembers for your ai, thinks
        on hardware in your house, backs cissa, hosts your sites, and keeps
        agents working while you sleep.
      </p>
      <div class="features" data-reveal-group>
        <div class="feature glass" data-glare>
          <h3>ai memory vault</h3>
          <p>memory is a first-class synced object. every companion reads the same truth, scoped per app.</p>
        </div>
        <div class="feature glass" data-glare>
          <h3>local inference</h3>
          <p>point cupboard at a jetson or any box on your lan. one openai-compatible endpoint for the house.</p>
        </div>
        <div class="feature glass" data-glare>
          <h3>cissa's backend</h3>
          <p>your wearable's brain lives at home — pairing, transcription, and memory sync on your hardware.</p>
        </div>
        <div class="feature glass" data-glare>
          <h3>self-hosting</h3>
          <p>deploy your own sites and services from the box, on the lan or out through your tunnel.</p>
        </div>
        <div class="feature glass" data-glare>
          <h3>ai coworkers</h3>
          <p>long-lived agents that keep working while you sleep — memory-backed, on your side of the router.</p>
        </div>
        <div class="feature glass feature-link" data-glare>
          <a href="/cupboard" class="mono">all the new powers &rarr;</a>
        </div>
      </div>
    </div>
  </section>

  <section class="section closing">
    <div class="wrap">
      <h2 class="display big" data-reveal>the sky is yours.</h2>
      <div class="hero-cta" data-reveal>
        <MagneticButton href="/cissa" tone="cissa">wear the companion</MagneticButton>
        <MagneticButton href="/cupboard" tone="cupboard">keep the cloud</MagneticButton>
      </div>
    </div>
  </section>
</main>

<Footer />
