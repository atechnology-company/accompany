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

  const lenis = new Lenis({ autoRaf: false, lerp: 0.1 });
  lenis.on("scroll", (instance: { scroll: number }) => {
    scrollY.set(Math.round(instance.scroll));
    ScrollTrigger.update();
  });
  gsap.ticker.add((time) => lenis.raf(time * 1000));
  gsap.ticker.lagSmoothing(0);

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
  const heroSub = document.querySelector("[data-hero-sub]");
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
  document.querySelectorAll<HTMLElement>("[data-reveal]").forEach((el) => {
    gsap.from(el, {
      y: 28,
      autoAlpha: 0,
      duration: 0.9,
      ease: "power3.out",
      scrollTrigger: { trigger: el, start: "top 85%" },
    });
  });
  document.querySelectorAll<HTMLElement>("[data-reveal-group]").forEach((group) => {
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
      const target = (e.target as HTMLElement | null)?.closest?.("[data-glare]");
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
