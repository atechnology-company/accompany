<script lang="ts">
  import GlassDefs from "../components/GlassDefs.svelte";
  import SkyBackground from "../components/SkyBackground.svelte";
  import Nav from "../components/Nav.svelte";
  import Footer from "../components/Footer.svelte";
  import MagneticButton from "../components/MagneticButton.svelte";
  import CissaArt from "../components/CissaArt.svelte";

  const forms = [
    {
      name: "shirt clip",
      note: "two magnets hold it flat against fabric. grab and go — it detaches with a satisfying click.",
    },
    {
      name: "pendant",
      note: "the core hangs close to the sternum, where sensing is steadiest and your voice is clearest.",
    },
    {
      name: "bracelet",
      note: "snap the core into any band. it reads motion and rest from the wrist, all day.",
    },
  ];

  const modules = [
    { name: "sensor pods", note: "swap what cissa senses — focus, calm, motion, sound." },
    { name: "power cells", note: "snap a bigger battery on for days, not hours." },
    { name: "mounts", note: "magnets, clips, bands, pendants — wear it your way." },
    { name: "cases", note: "print your own. the whole enclosure is open hardware." },
    { name: "firmware", note: "profiles you can read, fork, and flash yourself." },
    { name: "everything", note: "no locked bootloader, no walled garden, no fine print." },
  ];
</script>

<GlassDefs />
<SkyBackground />
<Nav />

<main>
  <section class="hero hero-page">
    <p class="overline mono" data-hero-sub>open source &middot; modular &middot; wearable</p>
    <h1 class="hero-title title-cissa liquid" data-split aria-label="cissa">
      {#each "cissa".split("") as ch, i (i)}<span class="wi" aria-hidden="true">{ch}</span>{/each}
    </h1>
    <div class="hero-sub" data-hero-sub>
      <p class="hero-line">
        a tiny ai companion that senses, listens, and remembers with you —
        worn your way, rebuilt your way, running on hardware you own.
      </p>
      <div class="hero-cta">
        <MagneticButton href="/cupboard" tone="cupboard">pair it with cupboard</MagneticButton>
        <MagneticButton href="https://github.com/atechnology-company" tone="ghost">github &nearr;</MagneticButton>
      </div>
    </div>
  </section>

  <section class="section">
    <div class="wrap split-2">
      <div>
        <p class="overline mono" data-reveal>worn your way</p>
        <h2 class="display" data-reveal>one core. <span class="grad-cissa">every form factor.</span></h2>
        <p class="lede" data-reveal>
          the sensing core is the whole computer. everything else — battery,
          mount, band, case — snaps on with magnets. change forms in seconds.
        </p>
        <div class="art-frame glass" data-reveal>
          <CissaArt />
        </div>
      </div>
      <div class="stack" data-reveal-group>
        {#each forms as form (form.name)}
          <div class="feature glass" data-glare>
            <h3>{form.name}</h3>
            <p>{form.note}</p>
          </div>
        {/each}
        <div class="feature glass" data-glare>
          <h3>+ the power cell</h3>
          <p>
            a bigger battery that snaps to the core when you're out long.
            magnets carry power and data — no pins, no fiddling.
          </p>
        </div>
      </div>
    </div>
  </section>

  <section class="section">
    <div class="wrap">
      <p class="overline mono" data-reveal>like a muse you can open</p>
      <h2 class="display" data-reveal>sensing you can <span class="grad-cissa">actually look inside.</span></h2>
      <p class="lede" data-reveal>
        cissa reads your day — focus, calm, motion, voice — the way a
        meditation band would, then hands what it learns to you, not to a
        platform. hardware, firmware, and models are all open source. if you
        want to know why it buzzed, the answer is a git clone away.
      </p>
      <div class="features" data-reveal-group>
        {#each modules as m (m.name)}
          <div class="feature glass" data-glare>
            <h3>{m.name}</h3>
            <p>{m.note}</p>
          </div>
        {/each}
      </div>
    </div>
  </section>

  <section class="section">
    <div class="wrap split-2">
      <div>
        <p class="overline mono" data-reveal>memory lives at home</p>
        <h2 class="display" data-reveal>the brain is a <span class="grad-cissa">box in your hallway.</span></h2>
        <p class="lede" data-reveal>
          cissa is deliberately small — it doesn't need a cloud account,
          because it has cupboard. recordings, notes, and memory sync to your
          box over mono; hard questions get answered by inference on your own
          jetson or lan rig. nothing about you rents space in a stranger's
          datacenter.
        </p>
        <div class="hero-cta" data-reveal>
          <MagneticButton href="/cupboard" tone="cupboard">meet the backend</MagneticButton>
        </div>
      </div>
      <div class="term glass" data-reveal>
        <div class="term-bar mono">cissa &middot; pendant</div>
        <pre class="mono"><span class="t-prompt">$</span> cissa status
<span class="t-dim">&#8627;</span> core    pendant &middot; battery 82%
<span class="t-dim">&#8627;</span> home    cupboard.local <span class="t-ok">paired</span>
<span class="t-dim">&#8627;</span> memory  syncing &middot; 1,204 objects
<span class="t-dim">&#8627;</span> model   local inference &middot; jetson-desk <span class="t-ok">ready</span></pre>
      </div>
    </div>
  </section>

  <section class="section closing">
    <div class="wrap">
      <h2 class="display big" data-reveal>wear the sky.</h2>
      <div class="hero-cta" data-reveal>
        <MagneticButton href="/" tone="ghost">back to accompany</MagneticButton>
        <MagneticButton href="/cupboard" tone="cupboard">pair with cupboard</MagneticButton>
      </div>
    </div>
  </section>
</main>

<Footer />
