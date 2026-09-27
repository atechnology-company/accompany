<script lang="ts">
  import GlassDefs from "../components/GlassDefs.svelte";
  import SkyBackground from "../components/SkyBackground.svelte";
  import Nav from "../components/Nav.svelte";
  import Footer from "../components/Footer.svelte";
  import MagneticButton from "../components/MagneticButton.svelte";
</script>

<GlassDefs />
<SkyBackground />
<Nav />

<main>
  <section class="hero">
    <p class="overline mono" data-hero-sub>404</p>
    <h1 class="hero-title small liquid" data-split aria-label="nothing here but sky">nothing here but sky</h1>
    <div class="hero-sub" data-hero-sub>
      <p class="hero-line">this page drifted away. the rest of accompany is still up there.</p>
      <div class="hero-cta">
        <MagneticButton href="/" tone="ghost">head back home</MagneticButton>
      </div>
    </div>
  </section>
</main>

<Footer />
