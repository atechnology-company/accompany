import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Lenis from "lenis";
import { scrollY } from "./store";

/**
 * Lenis smooth scroll + GSAP scroll choreography, wired to moonshine's
 * signal kernel. Everything here runs client-only, after hydration.
 * With prefers-reduced-motion, the page stays fully readable and static.
 */
export function initEffects(): void {
  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

  gsap.registerPlugin(ScrollTrigger);

  const lenis = new Lenis({ autoRaf: false, lerp: 0.1, anchors: true });
  lenis.on("scroll", (instance: { scroll: number }) => {
    scrollY.set(Math.round(instance.scroll));
    ScrollTrigger.update();
  });
  gsap.ticker.add((time) => lenis.raf(time * 1000));
  gsap.ticker.lagSmoothing(0);

  const hero = document.querySelector<HTMLElement>(".home-hero");
  if (hero) {
    // Pause compositor-only light and shadow movement outside the viewport.
    let visible = true;
    const syncLight = () => hero.style.setProperty("--ambient-play", document.hidden || !visible ? "paused" : "running");
    ScrollTrigger.create({
      trigger: hero,
      start: "top bottom",
      end: "bottom top",
      onToggle: (self) => { visible = self.isActive; syncLight(); },
    });
    document.addEventListener("visibilitychange", syncLight);
    syncLight();
  }
  document.querySelectorAll<HTMLElement>(".product-hero-object").forEach((el) => {
    gsap.to(el, {
      y: -16,
      duration: 4.5,
      repeat: -1,
      yoyo: true,
      ease: "sine.inOut",
    });
  });
  document.querySelectorAll<HTMLElement>(".journal-photo, .product-editorial-image").forEach((frame) => {
    gsap.fromTo(frame.querySelector("img"), { yPercent: -5, scale: 1.12 }, {
      yPercent: 5,
      ease: "none",
      scrollTrigger: { trigger: frame, start: "top bottom", end: "bottom top", scrub: 1 },
    });
  });

  // Native summary click also covers Enter/Space. Keep details open until its
  // closing animation finishes so content can animate in both directions.
  document.querySelectorAll<HTMLDetailsElement>("details").forEach((details) => {
    const summary = details.querySelector("summary");
    if (!summary) return;
    let expanded = details.open;
    summary.addEventListener("click", (event) => {
      event.preventDefault();
      expanded = !expanded;
      const start = details.getBoundingClientRect().height;
      gsap.killTweensOf(details);
      details.open = true;
      details.style.height = "auto";
      const end = expanded ? details.offsetHeight : summary.offsetHeight;
      gsap.fromTo(details, { height: start, overflow: "hidden" }, {
        height: end,
        duration: 0.42,
        ease: "power3.inOut",
        onComplete: () => {
          details.open = expanded;
          gsap.set(details, { clearProps: "height,overflow" });
          ScrollTrigger.refresh();
        },
      });
    });
  });

  const emblem = document.querySelector("[data-home-object]");
  if (emblem) {
    gsap.fromTo(
      "[data-home-landscape]",
      { scale: 1.1, yPercent: -3 },
      {
        yPercent: 3,
        ease: "none",
        scrollTrigger: {
          trigger: ".home-hero",
          start: "top top",
          end: "bottom top",
          scrub: 1,
        },
      },
    );
    // The phone hero is in normal flow; keep its emblem clear of the next row.
    gsap.matchMedia().add("(min-width: 601px)", () => {
      gsap.to(emblem, {
        y: 100,
        rotation: 24,
        ease: "none",
        scrollTrigger: {
          trigger: ".home-hero",
          start: "top top",
          end: "bottom top",
          scrub: 1,
        },
      });
    });
  }

  // Hero headline: masked rise, character stagger.
  const split = document.querySelector("[data-split]");
  if (split) {
    gsap.from(split.querySelectorAll(".wi"), {
      yPercent: 130,
      duration: 1.2,
      ease: "power4.out",
      stagger: 0.05,
      delay: 0.2,
    });
  }
  const heroSub = document.querySelector("[data-hero-sub], .product-hero-copy");
  if (heroSub && heroSub.children.length > 0) {
    gsap.from(Array.from(heroSub.children), {
      y: 24,
      autoAlpha: 0,
      duration: 0.9,
      ease: "power3.out",
      stagger: 0.12,
      delay: 0.9,
    });
  }

  // Section reveals on scroll.
  document.querySelectorAll<HTMLElement>("[data-reveal], .product-intro-grid, .product-feature-heading, .product-editorial-copy, .product-pairing h2").forEach((el) => {
    gsap.from(el, {
      y: 28,
      autoAlpha: 0,
      duration: 0.9,
      ease: "power3.out",
      scrollTrigger: { trigger: el, start: "top 85%" },
    });
  });
  document
    .querySelectorAll<HTMLElement>("[data-reveal-group]")
    .forEach((group) => {
      const kids = Array.from(group.children);
      if (kids.length === 0) return;
      gsap.from(kids, {
        y: 24,
        autoAlpha: 0,
        duration: 0.7,
        ease: "power3.out",
        stagger: 0.09,
        scrollTrigger: { trigger: group, start: "top 82%" },
      });
    });

  // Pointer-tracked glare on glass surfaces.
  window.addEventListener(
    "pointermove",
    (e: PointerEvent) => {
      const target = (e.target as HTMLElement | null)?.closest?.(
        "[data-glare]",
      );
      if (!(target instanceof HTMLElement)) return;
      const r = target.getBoundingClientRect();
      target.style.setProperty("--mx", `${e.clientX - r.left}px`);
      target.style.setProperty("--my", `${e.clientY - r.top}px`);
    },
    { passive: true },
  );

  // Fancy-components style magnetic pull.
  document.querySelectorAll<HTMLElement>("[data-magnetic]").forEach((el) => {
    const xTo = gsap.quickTo(el, "x", { duration: 0.4, ease: "power3" });
    const yTo = gsap.quickTo(el, "y", { duration: 0.4, ease: "power3" });
    el.addEventListener("pointermove", (e: PointerEvent) => {
      const r = el.getBoundingClientRect();
      xTo((e.clientX - r.left - r.width / 2) * 0.3);
      yTo((e.clientY - r.top - r.height / 2) * 0.3);
    });
    el.addEventListener("pointerleave", () => {
      xTo(0);
      yTo(0);
    });
  });

  // Subtle 3D tilt on product cards.
  document.querySelectorAll<HTMLElement>("[data-tilt]").forEach((el) => {
    const rx = gsap.quickTo(el, "rotationX", { duration: 0.5, ease: "power3" });
    const ry = gsap.quickTo(el, "rotationY", { duration: 0.5, ease: "power3" });
    gsap.set(el, { transformPerspective: 900 });
    el.addEventListener("pointermove", (e: PointerEvent) => {
      const r = el.getBoundingClientRect();
      ry(((e.clientX - r.left) / r.width - 0.5) * 6);
      rx(-((e.clientY - r.top) / r.height - 0.5) * 6);
    });
    el.addEventListener("pointerleave", () => {
      rx(0);
      ry(0);
    });
  });
}
