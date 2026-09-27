<script lang="ts">
  import GlassDefs from "../components/GlassDefs.svelte";
  import SkyBackground from "../components/SkyBackground.svelte";
  import Nav from "../components/Nav.svelte";
  import Footer from "../components/Footer.svelte";
  import MagneticButton from "../components/MagneticButton.svelte";
  import CupboardArt from "../components/CupboardArt.svelte";

  const powers = [
    {
      name: "ai memory vault",
      note: "memory is a first-class synced object — durable, encrypted, per-app scoped. every companion and agent reads the same truth about you, from your shelf.",
    },
    {
      name: "local inference bridge",
      note: "connect a jetson, a gaming rig, or any box running ollama or llama.cpp. cupboard fuses them into one openai-compatible endpoint for the whole house — private by default.",
    },
    {
      name: "cissa's backend",
      note: "your wearable's home port: pairing, transcription, sensor streams, and memory sync — served from the hallway, not a cloud ten time zones away.",
    },
    {
      name: "self-hosting",
      note: "deploy your own sites and services straight from the box. lan-first, out through your tunnel when you want the world to see. your rack, your rules.",
    },
    {
      name: "long-lived ai coworkers",
      note: "run agents that persist — scheduled tasks, standing instructions, memory that survives restarts. they keep working while you sleep, on your side of the router.",
    },
  ];
</script>

<GlassDefs />
<SkyBackground />
<Nav />

<main>
  <section class="hero hero-page">
    <p class="overline mono" data-hero-sub>the cloud, but it's yours</p>
    <h1 class="hero-title title-cupboard liquid" data-split aria-label="cupboard">
      {#each "cupboard".split("") as ch, i (i)}<span class="wi" aria-hidden="true">{ch}</span>{/each}
    </h1>
    <div class="hero-sub" data-hero-sub>
      <p class="hero-line">
        a small box in your house that holds the real copy of your stuff — and
        everything your ai remembers. it shows up on every device you own.
        nobody else gets a copy.
      </p>
      <div class="hero-cta">
        <MagneticButton href="https://cupboard.tsc.hk" tone="cupboard">visit cupboard.tsc.hk &nearr;</MagneticButton>
        <MagneticButton href="/cissa" tone="cissa">its wearable, cissa</MagneticButton>
      </div>
    </div>
  </section>

  <section class="section">
    <div class="wrap split-2">
      <div>
        <p class="overline mono" data-reveal>the original promise</p>
        <h2 class="display" data-reveal>one sync. <span class="grad-cupboard">your hardware.</span> nobody in the middle.</h2>
        <p class="lede" data-reveal>
          files, browser tabs, clipboard, and now ai memory — captured,
          stored, continued, and exportable through the open mono protocol.
          plug it in, join your wifi, own your state.
        </p>
        <div class="art-frame glass" data-reveal>
          <CupboardArt />
        </div>
      </div>
      <div class="term glass tall" data-reveal>
        <div class="term-bar mono">mono &middot; cupboard.local</div>
        <pre class="mono"><span class="t-prompt">$</span> mono status
<span class="t-dim">&#8627;</span> box      cupboard.local <span class="t-ok">healthy</span>
<span class="t-dim">&#8627;</span> objects  12,041 &middot; 0 conflicts
<span class="t-dim">&#8627;</span> devices  macbook &middot; phone &middot; cissa/pendant
<span class="t-dim">&#8627;</span> memory   1,204 objects &middot; scoped to 3 apps

<span class="t-prompt">$</span> cupboard infer --local
<span class="t-dim">&#8627;</span> jetson-desk   <span class="t-ok">ready</span> &middot; 27 tok/s
<span class="t-dim">&#8627;</span> rig-basement  <span class="t-ok">ready</span> &middot; 84 tok/s
<span class="t-dim">&#8627;</span> endpoint      http://cupboard.local/v1

<span class="t-prompt">$</span> cupboard agents ls
<span class="t-dim">&#8627;</span> archivist   memory curation &middot; cron &middot; <span class="t-ok">running 41d</span>
<span class="t-dim">&#8627;</span> watchtower  site health    &middot; cron &middot; <span class="t-ok">running 12d</span></pre>
      </div>
    </div>
  </section>

  <section class="section">
    <div class="wrap">
      <p class="overline mono" data-reveal>the new powers</p>
      <h2 class="display" data-reveal>not just storage <span class="grad-cupboard">anymore.</span></h2>
      <p class="lede" data-reveal>
        cupboard started as the place your stuff lives. now it's the place
        your ai lives too — memory, models, wearables, services, and the
        agents that tend them.
      </p>
      <div class="features" data-reveal-group>
        {#each powers as p (p.name)}
          <div class="feature glass" data-glare>
            <h3>{p.name}</h3>
            <p>{p.note}</p>
          </div>
        {/each}
      </div>
    </div>
  </section>

  <section class="section">
    <div class="wrap strip glass" data-reveal>
      <div>
        <h3 class="strip-title">a small plug-in box. alpenglow inside.</h3>
        <p class="strip-note">
          hardware first — it isn't shipping yet. follow the build, join the
          list, or run the software on your own machine today.
        </p>
      </div>
      <div class="hero-cta">
        <MagneticButton href="https://cupboard.tsc.hk" tone="cupboard">follow at cupboard.tsc.hk &nearr;</MagneticButton>
      </div>
    </div>
  </section>

  <section class="section closing">
    <div class="wrap">
      <h2 class="display big" data-reveal>keep the cloud.</h2>
      <div class="hero-cta" data-reveal>
        <MagneticButton href="/" tone="ghost">back to accompany</MagneticButton>
        <MagneticButton href="/cissa" tone="cissa">wear the companion</MagneticButton>
      </div>
    </div>
  </section>
</main>

<Footer />
