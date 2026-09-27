<script lang="ts">
  import { onMount } from "svelte";

  let { class: className = "", onready }: { class?: string; onready?: () => void } = $props();

  let host: HTMLDivElement;
  let fallback: SVGSVGElement;

  onMount(() => {
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
    let cancelled = false;
    let visible = true;
    let generation = 0;
    let shader: { dispose: () => void; canvasElement: HTMLCanvasElement } | undefined;

    const stop = () => {
      generation += 1;
      shader?.dispose();
      shader = undefined;
      fallback.removeAttribute("hidden");
      host.removeAttribute("data-paper-emblem-ready");
    };

    const loadImage = async (url: string) => {
      const image = new Image();
      image.decoding = "async";
      image.src = url;
      await image.decode();
      return image;
    };

    const start = async () => {
      if (cancelled || !visible || reducedMotion.matches || shader) return;
      const currentGeneration = ++generation;

      try {
        const paper = await import("@paper-design/shaders");
        // Preprocessed once from accompany-mark.svg with Paper's own processor,
        // then downsampled to 768px. Never repeat its 4096px CPU pass on visitors.
        const image = await loadImage("/accompany-metal-map.png");

        if (cancelled || reducedMotion.matches || generation !== currentGeneration) {
          return;
        }

        shader = new paper.ShaderMount(
          host,
          paper.liquidMetalFragmentShader,
          {
            u_colorBack: [0, 0, 0, 0],
            u_colorTint: [0.96, 0.97, 0.97, 1],
            u_image: image,
            u_repetition: 2,
            u_shiftRed: 0.025,
            u_shiftBlue: 0.025,
            u_contour: 0.4,
            u_softness: 0.1,
            u_distortion: 0.07,
            u_angle: 70,
            u_shape: paper.LiquidMetalShapes.none,
            u_isImage: true,
            u_fit: paper.ShaderFitOptions.contain,
            u_scale: 0.82,
            u_rotation: 0,
            u_offsetX: 0,
            u_offsetY: 0,
            u_originX: 0.5,
            u_originY: 0.5,
            u_worldWidth: 0,
            u_worldHeight: 0,
          },
          { alpha: true, premultipliedAlpha: false },
          0.22,
          0,
          1,
          160_000,
          ["u_image"],
        );
        shader.canvasElement.style.zIndex = "0";
        fallback.setAttribute("hidden", "");
        host.setAttribute("data-paper-emblem-ready", "");
        // Allow the shader's first frame to paint before revealing its host.
        requestAnimationFrame(() => requestAnimationFrame(() => {
          if (!cancelled) onready?.();
        }));
      } catch {
        // WebGL and image-loading failures retain the server-rendered SVG.
        fallback.removeAttribute("hidden");
      }
    };

    const onMotionChange = (event: MediaQueryListEvent) => {
      if (event.matches) stop();
      else void start();
    };

    reducedMotion.addEventListener("change", onMotionChange);
    const observer = new IntersectionObserver(([entry]) => {
      visible = entry.isIntersecting;
      if (visible) void start();
      else stop();
    });
    observer.observe(host);

    return () => {
      cancelled = true;
      observer.disconnect();
      reducedMotion.removeEventListener("change", onMotionChange);
      stop();
    };
  });
</script>

<div bind:this={host} class="paper-emblem {className}" aria-hidden="true">
  <svg bind:this={fallback} width="100%" height="100%" viewBox="0 0 512 512" fill="none" focusable="false">
    <g stroke="#E7EDF2" stroke-width="82" stroke-linecap="round">
      <path d="M256 256V78" />
      <path d="M256 256 410 167" />
      <path d="M256 256 410 345" />
      <path d="M256 256V434" />
      <path d="M256 256 102 345" />
      <path d="M256 256 102 167" />
    </g>
  </svg>
</div>
