<script lang="ts">
  import { onMount } from "svelte";
  import type { ShaderMaterial } from "three";
  import { ditherClouds } from "../lib/postfx";

  type VantaEffect = {
    destroy: () => void;
    resize?: () => void;
    setOptions?: (options: Record<string, unknown>) => void;
    scene: { children: { material: ShaderMaterial }[] };
  };

  const MAX_VANTA_PIXELS = 300_000;

  let { daylight = false } = $props<{ daylight?: boolean }>();

  let el = $state<HTMLDivElement | null>(null);
  let effect: VantaEffect | null = null;

  function vantaScale(): number {
    const width = Math.max(el?.offsetWidth ?? window.innerWidth, 200);
    const height = Math.max(el?.offsetHeight ?? window.innerHeight, 200);
    const pixels = width * height;
    const dpr = window.devicePixelRatio || 1;
    return Math.max(
      1,
      Math.ceil(dpr * Math.sqrt(pixels / MAX_VANTA_PIXELS) * 100) / 100,
    );
  }

  onMount(() => {
    const motion = window.matchMedia("(prefers-reduced-motion: reduce)");
    let disposed = false;
    let visible = false;
    let CLOUDS: ((options: Record<string, unknown>) => VantaEffect) | null = null;

    const stop = (): void => {
      effect?.destroy();
      effect = null;
      el?.removeAttribute("data-dithered");
    };

    const onResize = (): void => {
      const scale = vantaScale();
      effect?.setOptions?.({ scale, scaleMobile: scale });
      effect?.resize?.();
    };

    const start = async (): Promise<void> => {
      if (disposed || motion.matches || document.hidden || !visible || effect || !el) return;
      try {
        let THREE: typeof import("three");
        if (!CLOUDS) {
          const [vantaMod, three] = await Promise.all([
            import("vanta/dist/vanta.clouds.min"),
            import("three"),
          ]);
          if (disposed || document.hidden || !visible || !el) return;
          const v = vantaMod as Record<string, unknown>;
          const nested = v.default as Record<string, unknown> | undefined;
          const clouds =
            (typeof nested?.default === "function" && nested.default) ||
            (typeof v.default === "function" && v.default) ||
            (nested?._vantaEffect as unknown) ||
            v._vantaEffect ||
            (nested?.CLOUDS as unknown);
          if (typeof clouds !== "function") {
            throw new Error("vanta effect unresolved");
          }
          CLOUDS = clouds as (options: Record<string, unknown>) => VantaEffect;
          THREE = three;
        } else {
          THREE = await import("three");
        }
        if (disposed || motion.matches || document.hidden || !visible || !el || effect) return;
        const target = el;
        const palette = daylight
          ? {
              skyColor: 0x78b5c6,
              cloudColor: 0xc9d8de,
              cloudShadowColor: 0x718e9e,
              sunColor: 0xfff6ca,
              sunGlareColor: 0xfffbe4,
              sunlightColor: 0xffefc0,
              speed: 0.5,
            }
          : {
              skyColor: 0x141b31,
              cloudColor: 0x9aa6c8,
              cloudShadowColor: 0x0d1326,
              sunColor: 0xffb87a,
              sunGlareColor: 0xff8a50,
              sunlightColor: 0xff9455,
              speed: 0.78,
            };
        const scale = vantaScale();
        const nextEffect = CLOUDS({
          el: target,
          THREE,
          mouseControls: true,
          mouseEase: true,
          touchControls: false,
          gyroControls: false,
          minHeight: 200,
          minWidth: 200,
          // Vanta renders at devicePixelRatio / scale. Keep the live cloud pass
          // sharp enough to read while capping its ray-marched pixel budget.
          scale,
          scaleMobile: scale,
          ...palette,
        });
        if (disposed) {
          nextEffect.destroy();
          return;
        }
        effect = nextEffect;
        ditherClouds(nextEffect.scene.children[0].material, daylight);
        target.setAttribute("data-dithered", "");
      } catch (err) {
        if (!disposed) console.warn("sky unavailable", err);
      }
    };

    const sync = (): void => {
      if (disposed || motion.matches || document.hidden || !visible) {
        stop();
        return;
      }
      void start();
    };

    const observer = new IntersectionObserver(([entry]) => {
      visible = entry.isIntersecting;
      sync();
    });
    if (!el) return;
    observer.observe(el);
    const resizeObserver = new ResizeObserver(onResize);
    resizeObserver.observe(el);
    document.addEventListener("visibilitychange", sync);
    motion.addEventListener("change", sync);
    window.addEventListener("resize", onResize, { passive: true });

    return () => {
      disposed = true;
      observer.disconnect();
      resizeObserver.disconnect();
      document.removeEventListener("visibilitychange", sync);
      motion.removeEventListener("change", sync);
      window.removeEventListener("resize", onResize);
      stop();
    };
  });
</script>

<div class="sky" bind:this={el} aria-hidden="true">
  <!-- Vitrio clones this static layer; it deliberately excludes Vanta's live canvas. -->
  <div
    class="sky-static landing-sky-source"
    style={`position:absolute;inset:0;z-index:0;background:${daylight ? "linear-gradient(180deg, #dff7f6 0%, #bfe5ed 52%, #f8f1dc 100%)" : "linear-gradient(180deg, #17203c 0%, #0d1428 55%, #070b18 100%)"}`}
  ></div>
  <div
    class="sky-scrim"
    style={daylight
      ? "background:linear-gradient(180deg,rgba(223,247,246,.08) 0%,rgba(191,229,237,.16) 52%,rgba(248,241,220,.34) 100%)"
      : undefined}
  ></div>
</div>
