import { symbols, type CSSEntriesInput } from "unocss";

// Internal Uno layers keep semantic rules interleaved with structural CSS.
// Repeated class declarations remain separate to preserve the cascade.
export const unoClassRules: Record<string, CSSEntriesInput[]> = {
  "material-symbol": [
    [
      [symbols.layer, "app-001"],
      [symbols.sort, 7],
      ["display", "inline-block"],
      ["flex", "0 0 auto"],
      ["width", "1em"],
      ["height", "1em"],
      ["vertical-align", "-0.15em"],
      ["background", "currentColor"],
      ["-webkit-mask", "var(--symbol) center / contain no-repeat"],
      ["mask", "var(--symbol) center / contain no-repeat"],
    ],
  ],
  "symbol-outward": [
    [
      [symbols.layer, "app-001"],
      [symbols.sort, 8],
      [
        "--symbol",
        'url("/icons/material-symbols-rounded/arrow_outward_24px.svg")',
      ],
    ],
  ],
  "symbol-downward": [
    [
      [symbols.layer, "app-001"],
      [symbols.sort, 9],
      [
        "--symbol",
        'url("/icons/material-symbols-rounded/arrow_downward_24px.svg")',
      ],
    ],
  ],
  "symbol-asterisk": [
    [
      [symbols.layer, "app-001"],
      [symbols.sort, 10],
      ["--symbol", 'url("/icons/material-symbols-rounded/asterisk_24px.svg")'],
    ],
  ],
  mono: [
    [
      [symbols.layer, "app-003"],
      [symbols.sort, 13],
      ["font-family", '"Geist Mono", ui-monospace, "SF Mono", monospace'],
    ],
  ],
  dim: [
    [
      [symbols.layer, "app-003"],
      [symbols.sort, 14],
      ["color", "var(--dim)"],
    ],
  ],
  "svg-defs": [
    [
      [symbols.layer, "app-003"],
      [symbols.sort, 15],
      ["position", "absolute"],
      ["width", "0"],
      ["height", "0"],
      ["overflow", "hidden"],
    ],
  ],
  sky: [
    [
      [symbols.layer, "app-005"],
      [symbols.sort, 17],
      ["position", "fixed"],
      ["inset", "0"],
      ["z-index", "0"],
      [
        "background",
        "linear-gradient(180deg, #17203c 0%, #0d1428 55%, #070b18 100%)",
      ],
    ],
  ],
  "sky-scrim": [
    [
      [symbols.layer, "app-007"],
      [symbols.sort, 20],
      ["position", "absolute"],
      ["inset", "0"],
      ["z-index", "3"],
      [
        "background",
        "linear-gradient(\n    180deg,\n    rgba(7, 11, 24, 0.3) 0%,\n    rgba(7, 11, 24, 0.52) 52%,\n    rgba(7, 11, 24, 0.94) 100%\n  )",
      ],
    ],
  ],
  wrap: [
    [
      [symbols.layer, "app-009"],
      [symbols.sort, 23],
      ["max-width", "1140px"],
      ["margin-inline", "auto"],
      ["padding-inline", "clamp(20px, 5vw, 44px)"],
    ],
  ],
  section: [
    [
      [symbols.layer, "app-009"],
      [symbols.sort, 24],
      ["position", "relative"],
      ["padding-block", "clamp(4rem, 9vw, 7.5rem)"],
    ],
  ],
  overline: [
    [
      [symbols.layer, "app-009"],
      [symbols.sort, 25],
      ["font-size", "12px"],
      ["letter-spacing", "0.22em"],
      ["color", "#97a3c9"],
    ],
  ],
  display: [
    [
      [symbols.layer, "app-009"],
      [symbols.sort, 26],
      ["font-size", "clamp(2.2rem, 4.6vw, 3.6rem)"],
      ["font-weight", "680"],
      ["letter-spacing", "-0.03em"],
      ["line-height", "1.04"],
      ["margin", "16px 0 18px"],
      ["text-wrap", "balance"],
    ],
  ],
  grad: [
    [
      [symbols.layer, "app-011"],
      [symbols.sort, 29],
      ["background-image", "linear-gradient(92deg, #ffb987, #8ef0d2)"],
    ],
  ],
  "grad-cissa": [
    [
      [symbols.layer, "app-011"],
      [symbols.sort, 30],
      ["background-image", "linear-gradient(92deg, #ffb987, #ffd9a0)"],
    ],
  ],
  "grad-cupboard": [
    [
      [symbols.layer, "app-011"],
      [symbols.sort, 31],
      ["background-image", "linear-gradient(92deg, #6ee7c8, #8ea2ff)"],
    ],
  ],
  lede: [
    [
      [symbols.layer, "app-011"],
      [symbols.sort, 32],
      ["color", "var(--muted)"],
      ["max-width", "62ch"],
      ["font-size", "1.13rem"],
      ["line-height", "1.68"],
      ["margin-bottom", "36px"],
      ["text-wrap", "pretty"],
    ],
  ],
  glass: [
    [
      [symbols.layer, "app-011"],
      [symbols.sort, 33],
      ["position", "relative"],
      ["background", "var(--glass-bg)"],
      ["border", "1px solid var(--glass-border)"],
      ["border-radius", "var(--radius)"],
      ["backdrop-filter", "blur(18px) saturate(150%)"],
      ["-webkit-backdrop-filter", "blur(18px) saturate(150%)"],
      [
        "box-shadow",
        "0 24px 70px rgba(3, 7, 18, 0.38),\n    inset 0 1px 0 rgba(255, 255, 255, 0.12)",
      ],
    ],
  ],
  "nav-wrap": [
    [
      [symbols.layer, "app-013"],
      [symbols.sort, 40],
      ["position", "fixed"],
      ["inset-inline", "0"],
      ["top", "18px"],
      ["z-index", "50"],
      ["display", "flex"],
      ["justify-content", "center"],
      ["padding-inline", "16px"],
      ["pointer-events", "none"],
    ],
  ],
  nav: [
    [
      [symbols.layer, "app-013"],
      [symbols.sort, 41],
      ["pointer-events", "auto"],
      ["display", "flex"],
      ["align-items", "center"],
      ["justify-content", "space-between"],
      ["gap", "1.6rem"],
      ["width", "min(660px, 100%)"],
      ["padding", "9px 14px 9px 18px"],
      ["border-radius", "999px"],
      ["transition", "box-shadow 0.35s ease,\n    background 0.35s ease"],
    ],
  ],
  brand: [
    [
      [symbols.layer, "app-015"],
      [symbols.sort, 43],
      ["display", "inline-flex"],
      ["align-items", "center"],
      ["gap", "10px"],
      ["font-weight", "660"],
      ["letter-spacing", "-0.02em"],
    ],
  ],
  "brand-name": [
    [
      [symbols.layer, "app-015"],
      [symbols.sort, 44],
      ["font-size", "1.02rem"],
    ],
  ],
  "nav-links": [
    [
      [symbols.layer, "app-015"],
      [symbols.sort, 45],
      ["display", "flex"],
      ["gap", "4px"],
    ],
  ],
  "nav-ext": [
    [
      [symbols.layer, "app-017"],
      [symbols.sort, 48],
      ["font-size", "12.5px"],
      ["color", "var(--dim)"],
      ["padding", "8px 12px"],
      ["border-radius", "999px"],
      ["border", "1px solid transparent"],
      ["transition", "color 0.25s ease,\n    border-color 0.25s ease"],
    ],
  ],
  hero: [
    [
      [symbols.layer, "app-019"],
      [symbols.sort, 51],
      ["position", "relative"],
      ["min-height", "100svh"],
      ["display", "flex"],
      ["flex-direction", "column"],
      ["align-items", "center"],
      ["justify-content", "center"],
      ["text-align", "center"],
      ["padding", "120px 20px 90px"],
      ["gap", "8px"],
    ],
  ],
  "hero-page": [
    [
      [symbols.layer, "app-019"],
      [symbols.sort, 52],
      ["min-height", "74svh"],
    ],
  ],
  "hero-title": [
    [
      [symbols.layer, "app-019"],
      [symbols.sort, 53],
      ["overflow", "hidden"],
      ["font-size", "clamp(3.4rem, 13.5vw, 11.5rem)"],
      ["font-weight", "700"],
      ["letter-spacing", "-0.048em"],
      ["line-height", "1"],
      ["padding", "0.06em 0.06em 0.14em"],
      ["text-shadow", "0 4px 60px rgba(255, 214, 170, 0.22)"],
    ],
  ],
  liquid: [
    [
      [symbols.layer, "app-021"],
      [symbols.sort, 55],
      ["filter", "url(#liquid-wobble)"],
    ],
  ],
  wi: [
    [
      [symbols.layer, "app-021"],
      [symbols.sort, 56],
      ["display", "inline-block"],
      ["will-change", "transform"],
    ],
  ],
  "hero-sub": [
    [
      [symbols.layer, "app-021"],
      [symbols.sort, 57],
      ["display", "flex"],
      ["flex-direction", "column"],
      ["align-items", "center"],
      ["gap", "26px"],
    ],
  ],
  "hero-line": [
    [
      [symbols.layer, "app-021"],
      [symbols.sort, 58],
      ["max-width", "54ch"],
      ["color", "#ccd3ea"],
      ["font-size", "clamp(1.05rem, 1.9vw, 1.3rem)"],
      ["line-height", "1.6"],
      ["text-wrap", "balance"],
      ["text-shadow", "0 1px 26px rgba(7, 11, 24, 0.9)"],
    ],
  ],
  "hero-cta": [
    [
      [symbols.layer, "app-021"],
      [symbols.sort, 59],
      ["display", "flex"],
      ["flex-wrap", "wrap"],
      ["justify-content", "center"],
      ["gap", "16px"],
    ],
  ],
  "hero-note": [
    [
      [symbols.layer, "app-021"],
      [symbols.sort, 60],
      ["font-size", "12px"],
      ["letter-spacing", "0.18em"],
    ],
  ],
  "scroll-cue": [
    [
      [symbols.layer, "app-021"],
      [symbols.sort, 61],
      ["position", "absolute"],
      ["bottom", "30px"],
      ["font-size", "11px"],
      ["letter-spacing", "0.3em"],
      ["color", "var(--dim)"],
      ["animation", "bob 2.6s ease-in-out infinite"],
    ],
  ],
  btn: [
    [
      [symbols.layer, "app-023"],
      [symbols.sort, 64],
      ["display", "inline-flex"],
      ["align-items", "center"],
      ["justify-content", "center"],
      ["padding", "14px 26px"],
      ["border-radius", "999px"],
      ["font-weight", "620"],
      ["letter-spacing", "-0.01em"],
      ["will-change", "transform"],
      ["transition", "background 0.25s ease,\n    border-color 0.25s ease"],
    ],
  ],
  "btn-cissa": [
    [
      [symbols.layer, "app-025"],
      [symbols.sort, 66],
      ["color", "#ffd9c2"],
      ["border-color", "rgba(255, 154, 98, 0.42)"],
    ],
  ],
  "btn-cupboard": [
    [
      [symbols.layer, "app-025"],
      [symbols.sort, 67],
      ["color", "#c4f5e7"],
      ["border-color", "rgba(110, 231, 200, 0.4)"],
    ],
  ],
  "btn-ghost": [
    [
      [symbols.layer, "app-025"],
      [symbols.sort, 68],
      ["color", "#e3e8f8"],
    ],
  ],
  marquee: [
    [
      [symbols.layer, "app-027"],
      [symbols.sort, 70],
      ["position", "relative"],
      ["overflow", "hidden"],
      ["border-block", "1px solid var(--line)"],
      ["padding-block", "15px"],
      ["background", "rgba(7, 11, 24, 0.4)"],
      [
        "mask-image",
        "linear-gradient(\n    90deg,\n    transparent,\n    #000 8%,\n    #000 92%,\n    transparent\n  )",
      ],
      [
        "-webkit-mask-image",
        "linear-gradient(\n    90deg,\n    transparent,\n    #000 8%,\n    #000 92%,\n    transparent\n  )",
      ],
    ],
  ],
  "marquee-track": [
    [
      [symbols.layer, "app-027"],
      [symbols.sort, 71],
      ["display", "flex"],
      ["width", "max-content"],
      ["animation", "marquee 30s linear infinite"],
    ],
  ],
  "marquee-seq": [
    [
      [symbols.layer, "app-029"],
      [symbols.sort, 73],
      ["display", "flex"],
      ["align-items", "center"],
      ["gap", "2.6rem"],
      ["padding-right", "2.6rem"],
    ],
  ],
  "marquee-item": [
    [
      [symbols.layer, "app-029"],
      [symbols.sort, 74],
      ["font-size", "13px"],
      ["letter-spacing", "0.14em"],
      ["color", "var(--muted)"],
      ["white-space", "nowrap"],
    ],
  ],
  "marquee-dot": [
    [
      [symbols.layer, "app-029"],
      [symbols.sort, 75],
      ["color", "var(--cissa-soft)"],
    ],
  ],
  duo: [
    [
      [symbols.layer, "app-031"],
      [symbols.sort, 78],
      ["display", "grid"],
      ["grid-template-columns", "1fr 1fr"],
      ["gap", "22px"],
    ],
  ],
  card: [
    [
      [symbols.layer, "app-031"],
      [symbols.sort, 79],
      ["display", "flex"],
      ["flex-direction", "column"],
      ["gap", "12px"],
      ["padding", "26px"],
      ["min-height", "320px"],
      ["transition", "border-color 0.3s ease,\n    transform 0.3s ease"],
    ],
  ],
  "card-kicker": [
    [
      [symbols.layer, "app-033"],
      [symbols.sort, 83],
      ["font-size", "11.5px"],
      ["letter-spacing", "0.2em"],
      ["color", "var(--dim)"],
    ],
  ],
  "card-title": [
    [
      [symbols.layer, "app-033"],
      [symbols.sort, 84],
      ["font-size", "2.1rem"],
      ["font-weight", "680"],
      ["letter-spacing", "-0.03em"],
    ],
  ],
  "card-art": [
    [
      [symbols.layer, "app-035"],
      [symbols.sort, 86],
      ["margin-top", "auto"],
      ["display", "flex"],
      ["justify-content", "center"],
    ],
  ],
  "card-go": [
    [
      [symbols.layer, "app-035"],
      [symbols.sort, 87],
      ["font-size", "12.5px"],
      ["letter-spacing", "0.12em"],
      ["color", "var(--dim)"],
      ["transition", "color 0.25s ease"],
    ],
  ],
  steps: [
    [
      [symbols.layer, "app-037"],
      [symbols.sort, 90],
      ["display", "grid"],
      ["grid-template-columns", "repeat(4, 1fr)"],
      ["gap", "18px"],
    ],
  ],
  step: [
    [
      [symbols.layer, "app-037"],
      [symbols.sort, 91],
      ["padding", "22px"],
    ],
  ],
  "step-num": [
    [
      [symbols.layer, "app-037"],
      [symbols.sort, 92],
      ["font-size", "12px"],
      ["letter-spacing", "0.2em"],
      ["color", "var(--cissa-soft)"],
    ],
  ],
  term: [
    [
      [symbols.layer, "app-039"],
      [symbols.sort, 96],
      ["margin-top", "36px"],
      ["border-radius", "16px"],
      ["overflow", "hidden"],
    ],
  ],
  "term-bar": [
    [
      [symbols.layer, "app-039"],
      [symbols.sort, 97],
      ["padding", "10px 18px"],
      ["border-bottom", "1px solid var(--line)"],
      ["font-size", "11.5px"],
      ["letter-spacing", "0.14em"],
      ["color", "var(--dim)"],
    ],
  ],
  "t-prompt": [
    [
      [symbols.layer, "app-041"],
      [symbols.sort, 99],
      ["color", "var(--cupboard-soft)"],
    ],
  ],
  "t-dim": [
    [
      [symbols.layer, "app-041"],
      [symbols.sort, 100],
      ["color", "#697392"],
    ],
  ],
  "t-ok": [
    [
      [symbols.layer, "app-041"],
      [symbols.sort, 101],
      ["color", "#8ef0d2"],
    ],
  ],
  features: [
    [
      [symbols.layer, "app-043"],
      [symbols.sort, 103],
      ["display", "grid"],
      ["grid-template-columns", "repeat(3, 1fr)"],
      ["gap", "18px"],
    ],
  ],
  feature: [
    [
      [symbols.layer, "app-043"],
      [symbols.sort, 104],
      ["padding", "22px"],
    ],
  ],
  "feature-link": [
    [
      [symbols.layer, "app-045"],
      [symbols.sort, 107],
      ["display", "flex"],
      ["align-items", "center"],
    ],
  ],
  "split-2": [
    [
      [symbols.layer, "app-047"],
      [symbols.sort, 111],
      ["display", "grid"],
      ["grid-template-columns", "1.08fr 0.92fr"],
      ["gap", "clamp(2rem, 5vw, 4rem)"],
      ["align-items", "start"],
    ],
  ],
  stack: [
    [
      [symbols.layer, "app-047"],
      [symbols.sort, 112],
      ["display", "flex"],
      ["flex-direction", "column"],
      ["gap", "16px"],
    ],
  ],
  "art-frame": [
    [
      [symbols.layer, "app-047"],
      [symbols.sort, 113],
      ["display", "flex"],
      ["justify-content", "center"],
      ["padding", "28px"],
      ["margin-top", "28px"],
    ],
  ],
  strip: [
    [
      [symbols.layer, "app-047"],
      [symbols.sort, 114],
      ["display", "flex"],
      ["flex-wrap", "wrap"],
      ["align-items", "center"],
      ["justify-content", "space-between"],
      ["gap", "24px"],
      ["padding", "32px 34px"],
    ],
  ],
  "strip-title": [
    [
      [symbols.layer, "app-047"],
      [symbols.sort, 115],
      ["font-size", "1.4rem"],
      ["font-weight", "660"],
      ["letter-spacing", "-0.02em"],
      ["margin-bottom", "6px"],
    ],
  ],
  "strip-note": [
    [
      [symbols.layer, "app-047"],
      [symbols.sort, 116],
      ["color", "var(--muted)"],
      ["max-width", "52ch"],
    ],
  ],
  closing: [
    [
      [symbols.layer, "app-047"],
      [symbols.sort, 117],
      ["text-align", "center"],
      ["padding-bottom", "9rem"],
    ],
  ],
  footer: [
    [
      [symbols.layer, "app-049"],
      [symbols.sort, 120],
      ["border-top", "1px solid var(--line)"],
      ["background", "rgba(7, 11, 24, 0.6)"],
      ["backdrop-filter", "blur(12px)"],
      ["-webkit-backdrop-filter", "blur(12px)"],
    ],
  ],
  "footer-grid": [
    [
      [symbols.layer, "app-049"],
      [symbols.sort, 121],
      ["display", "grid"],
      ["grid-template-columns", "2fr 1fr 1fr 1fr"],
      ["gap", "36px"],
      ["padding-block", "56px"],
    ],
  ],
  "footer-line": [
    [
      [symbols.layer, "app-051"],
      [symbols.sort, 123],
      ["color", "var(--muted)"],
      ["font-size", "0.95rem"],
      ["max-width", "40ch"],
      ["margin-bottom", "10px"],
    ],
  ],
  "footer-col": [
    [
      [symbols.layer, "app-051"],
      [symbols.sort, 124],
      ["display", "flex"],
      ["flex-direction", "column"],
      ["gap", "10px"],
    ],
  ],
  "footer-base": [
    [
      [symbols.layer, "app-053"],
      [symbols.sort, 128],
      ["display", "flex"],
      ["flex-wrap", "wrap"],
      ["justify-content", "space-between"],
      ["gap", "10px"],
      ["padding-block", "20px"],
      ["border-top", "1px solid var(--line)"],
      ["font-size", "12px"],
    ],
  ],
  home: [
    [
      [symbols.layer, "app-055"],
      [symbols.sort, 135],
      ["--paper", "#eeece4"],
      ["--home-ink", "#252922"],
      ["background", "var(--paper)"],
      ["color", "var(--home-ink)"],
      ["font-family", '"DM Sans", sans-serif'],
      ["line-height", "1.45"],
      ["color-scheme", "light"],
    ],
  ],
  "lqg-glass": [
    [
      [symbols.layer, "app-057"],
      [symbols.sort, 139],
      [
        "box-shadow",
        "inset 0 1px 2px #fff9,\n    inset 0 -1px 2px #ffffff70,\n    0 6px 20px #36474b18 !important",
      ],
      ["opacity", "0.6"],
    ],
  ],
  "lqg-lens": [
    [
      [symbols.layer, "app-057"],
      [symbols.sort, 140],
      ["opacity", "0.45"],
    ],
  ],
  "home-skip": [
    [
      [symbols.layer, "app-059"],
      [symbols.sort, 143],
      ["position", "fixed"],
      ["left", "20px"],
      ["top", "-60px"],
      ["padding", "12px"],
      ["background", "var(--paper)"],
      ["z-index", "100"],
    ],
  ],
  "home-nav": [
    [
      [symbols.layer, "app-061"],
      [symbols.sort, 145],
      ["position", "absolute"],
      ["top", "0"],
      ["inset-inline", "0"],
      ["z-index", "10"],
      ["padding", "26px 3.2vw"],
      ["font-size", "12px"],
    ],
  ],
  "home-brand": [
    [
      [symbols.layer, "app-061"],
      [symbols.sort, 146],
      ["display", "inline-flex"],
      ["gap", "8px"],
      ["align-items", "center"],
      ["font-size", "23px"],
      ["font-weight", "750"],
      ["letter-spacing", "-0.065em"],
    ],
  ],
  "home-source": [
    [
      [symbols.layer, "app-063"],
      [symbols.sort, 151],
      ["display", "flex"],
      ["gap", "9px"],
      ["align-items", "center"],
    ],
  ],
  "home-hero": [
    [
      [symbols.layer, "app-065"],
      [symbols.sort, 154],
      ["position", "relative"],
      ["min-height", "860px"],
      ["height", "100svh"],
      ["max-height", "1200px"],
      ["isolation", "isolate"],
      ["overflow", "hidden"],
    ],
  ],
  "home-atmosphere": [
    [
      [symbols.layer, "app-065"],
      [symbols.sort, 155],
      ["position", "absolute"],
      ["inset", "0 0 27%"],
      ["z-index", "-1"],
    ],
    [
      [symbols.layer, "app-067"],
      [symbols.sort, 159],
      ["background", "#d9e3df"],
    ],
  ],
  "hero-landscape": [
    [
      [symbols.layer, "app-065"],
      [symbols.sort, 156],
      ["width", "100%"],
      ["height", "100%"],
      ["object-fit", "cover"],
      ["object-position", "center bottom"],
      ["opacity", "0"],
      ["transition", "opacity 1.8s ease"],
    ],
  ],
  "hero-topline": [
    [
      [symbols.layer, "app-069"],
      [symbols.sort, 169],
      ["top", "18%"],
    ],
  ],
  "hero-thought": [
    [
      [symbols.layer, "app-069"],
      [symbols.sort, 170],
      ["font", 'clamp(20px, 2.1vw, 31px)/1.3 "IBM Plex Mono",\n    monospace'],
      ["line-height", "1.13"],
      ["letter-spacing", "-0.045em"],
      ["width", "29%"],
    ],
  ],
  "hero-object": [
    [
      [symbols.layer, "app-069"],
      [symbols.sort, 171],
      ["position", "absolute"],
      ["left", "50%"],
      ["top", "38%"],
      ["transform", "translate(-50%, -50%)"],
    ],
  ],
  "paper-emblem": [
    [
      [symbols.layer, "app-069"],
      [symbols.sort, 172],
      ["position", "relative"],
      ["width", "clamp(290px, 36vw, 540px)"],
      ["height", "clamp(290px, 36vw, 540px)"],
    ],
  ],
  "hero-bottomline": [
    [
      [symbols.layer, "app-071"],
      [symbols.sort, 179],
      ["bottom", "32%"],
      ["align-items", "end"],
    ],
  ],
  "explore-link": [
    [
      [symbols.layer, "app-073"],
      [symbols.sort, 181],
      ["display", "flex"],
      ["align-items", "center"],
      ["gap", "40px"],
      ["font-size", "13px"],
      ["border-bottom", "1px solid #25292260"],
      ["padding-bottom", "12px"],
    ],
  ],
  "hero-lens": [
    [
      [symbols.layer, "app-075"],
      [symbols.sort, 184],
      ["position", "absolute"],
      ["left", "65%"],
      ["top", "49%"],
      ["transform", "rotate(-18deg)"],
      ["pointer-events", "none"],
    ],
  ],
  "glass-lens": [
    [
      [symbols.layer, "app-075"],
      [symbols.sort, 185],
      ["width", "120px"],
      ["height", "66px"],
      ["border-radius", "50%"],
      ["pointer-events", "none"],
    ],
  ],
  "home-wordmark": [
    [
      [symbols.layer, "app-075"],
      [symbols.sort, 186],
      ["position", "absolute"],
      ["left", "2.3%"],
      ["right", "2.3%"],
      ["bottom", "1.5%"],
      ["pointer-events", "none"],
      ["font-size", "17.45vw"],
      ["font-weight", "750"],
      ["line-height", "1.15"],
      ["letter-spacing", "-0.078em"],
      ["white-space", "nowrap"],
    ],
  ],
  "section-index": [
    [
      [symbols.layer, "app-077"],
      [symbols.sort, 189],
      ["border-top", "1px solid #25292255"],
      ["padding-top", "17px"],
    ],
  ],
  "companions-heading": [
    [
      [symbols.layer, "app-077"],
      [symbols.sort, 190],
      ["display", "flex"],
      ["align-items", "end"],
      ["justify-content", "space-between"],
      ["gap", "30px"],
      ["margin-block", "70px 25px"],
    ],
  ],
  "product-still": [
    [
      [symbols.layer, "app-079"],
      [symbols.sort, 193],
      ["position", "relative"],
    ],
  ],
  "product-captions": [
    [
      [symbols.layer, "app-081"],
      [symbols.sort, 196],
      ["gap", "6vw"],
      ["margin-top", "28px"],
    ],
  ],
  "product-caption": [
    [
      [symbols.layer, "app-081"],
      [symbols.sort, 197],
      ["border-top", "1px solid #25292255"],
      ["padding-top", "20px"],
    ],
  ],
  "companion-story": [
    [
      [symbols.layer, "app-083"],
      [symbols.sort, 202],
      ["display", "grid"],
      ["grid-template-columns", "1fr 1fr"],
      ["background", "#e2e3d9"],
      ["min-height", "700px"],
    ],
  ],
  "story-copy": [
    [
      [symbols.layer, "app-083"],
      [symbols.sort, 203],
      ["padding", "50px 5vw"],
      ["display", "flex"],
      ["flex-direction", "column"],
      ["align-items", "start"],
    ],
  ],
  "companion-switch": [
    [
      [symbols.layer, "app-083"],
      [symbols.sort, 204],
      ["position", "relative"],
      ["display", "grid"],
      ["grid-template-columns", "1fr 1fr"],
      ["border-bottom", "1px solid #25292250"],
      ["margin-block", "60px 42px"],
      ["gap", "28px"],
    ],
  ],
  "story-panels": [
    [
      [symbols.layer, "app-085"],
      [symbols.sort, 210],
      ["display", "grid"],
    ],
  ],
  "story-panel": [
    [
      [symbols.layer, "app-085"],
      [symbols.sort, 211],
      ["grid-area", "1 / 1"],
    ],
  ],
  "story-link": [
    [
      [symbols.layer, "app-087"],
      [symbols.sort, 214],
      ["display", "inline-flex"],
      ["gap", "65px"],
      ["border-bottom", "1px solid"],
      ["padding-block", "10px"],
      ["font-size", "14px"],
    ],
  ],
  "story-footnote": [
    [
      [symbols.layer, "app-087"],
      [symbols.sort, 215],
      ["margin-top", "auto"],
      ["padding-top", "45px"],
    ],
  ],
  "story-image": [
    [
      [symbols.layer, "app-087"],
      [symbols.sort, 216],
      ["overflow", "hidden"],
      ["position", "relative"],
      ["background", "#efebe2"],
      ["min-height", "520px"],
    ],
  ],
  "story-image-label": [
    [
      [symbols.layer, "app-089"],
      [symbols.sort, 218],
      ["position", "absolute"],
      ["bottom", "30px"],
      ["left", "30px"],
    ],
  ],
  "outlook-section": [
    [
      [symbols.layer, "app-089"],
      [symbols.sort, 219],
      ["padding-block", "80px 110px"],
    ],
  ],
  "outlook-body": [
    [
      [symbols.layer, "app-091"],
      [symbols.sort, 222],
      ["display", "grid"],
      ["grid-template-columns", "1fr 1.2fr"],
      ["gap", "7vw"],
    ],
  ],
  "outlook-intro": [
    [
      [symbols.layer, "app-091"],
      [symbols.sort, 223],
      ["font-size", "20px"],
      ["line-height", "1.4"],
      ["letter-spacing", "-0.025em"],
    ],
  ],
  "detail-plus": [
    [
      [symbols.layer, "app-093"],
      [symbols.sort, 227],
      ["font-size", "24px"],
      ["transition", "transform 0.25s"],
    ],
  ],
  "development-note": [
    [
      [symbols.layer, "app-095"],
      [symbols.sort, 230],
      ["max-width", "58ch"],
      ["margin-top", "20px"],
      ["color", "#555b50"],
    ],
  ],
  "home-closing": [
    [
      [symbols.layer, "app-095"],
      [symbols.sort, 231],
      ["position", "relative"],
      ["background", "#d9edb1"],
      ["padding", "55px 5vw 65px"],
      ["overflow", "hidden"],
    ],
  ],
  "closing-link": [
    [
      [symbols.layer, "app-097"],
      [symbols.sort, 233],
      ["display", "inline-flex"],
      ["gap", "90px"],
      ["border-bottom", "1px solid"],
      ["padding-bottom", "10px"],
    ],
  ],
  "closing-mark": [
    [
      [symbols.layer, "app-097"],
      [symbols.sort, 234],
      ["position", "absolute"],
      ["right", "9vw"],
      ["top", "50%"],
      ["width", "19vw"],
      ["height", "19vw"],
      ["transform", "translateY(-40%) rotate(15deg)"],
    ],
  ],
  "home-footer": [
    [
      [symbols.layer, "app-097"],
      [symbols.sort, 235],
      ["padding", "50px 5vw"],
      ["display", "grid"],
      ["grid-template-columns", "1.5fr 1fr 1fr 1.4fr"],
      ["align-items", "start"],
      ["gap", "30px"],
    ],
  ],
  "product-concept": [
    [
      [symbols.layer, "app-099"],
      [symbols.sort, 242],
      ["width", "min(100%, 460px)"],
    ],
  ],
  "field-journal": [
    [
      [symbols.layer, "app-101"],
      [symbols.sort, 247],
      ["padding", "80px 5vw 100px"],
    ],
  ],
  "field-journal-grid": [
    [
      [symbols.layer, "app-103"],
      [symbols.sort, 249],
      ["display", "grid"],
      ["grid-template-columns", "minmax(0, 1.1fr) minmax(0, 0.85fr)"],
      ["align-items", "start"],
      ["gap", "7vw"],
    ],
  ],
  "journal-photo": [
    [
      [symbols.layer, "app-105"],
      [symbols.sort, 251],
      ["overflow", "hidden"],
      ["aspect-ratio", "1.12"],
    ],
  ],
  "journal-caption": [
    [
      [symbols.layer, "app-107"],
      [symbols.sort, 254],
      ["display", "flex"],
      ["align-items", "center"],
      ["justify-content", "space-between"],
      ["border-top", "1px solid #25292255"],
      ["margin-top", "22px"],
      ["padding-top", "14px"],
    ],
  ],
  "product-page": [
    [
      [symbols.layer, "app-109"],
      [symbols.sort, 260],
      ["--product-paper", "#eeece4"],
      ["--product-ink", "#252922"],
      ["--product-muted", "#52584f"],
      ["--product-line", "#2529224d"],
      ["--product-wash", "#e2e3d9"],
      ["background", "var(--product-paper)"],
      ["color", "var(--product-ink)"],
      ["font-family", '"DM Sans", sans-serif'],
      ["line-height", "1.45"],
      ["min-width", "0"],
      ["color-scheme", "light"],
    ],
  ],
  "product-page-cissa": [
    [
      [symbols.layer, "app-109"],
      [symbols.sort, 261],
      ["--product-wash", "#e9e0d1"],
      ["--product-accent", "#ad420f"],
    ],
  ],
  "product-page-cupboard": [
    [
      [symbols.layer, "app-109"],
      [symbols.sort, 262],
      ["--product-wash", "#dce5df"],
      ["--product-accent", "#356b62"],
    ],
    [
      [symbols.layer, "app-153"],
      [symbols.sort, 353],
      ["--product-paper", "#f5f5f7"],
      ["--product-ink", "#1d1d1f"],
      ["--product-muted", "#626267"],
      ["--product-line", "#1d1d1f20"],
      ["--product-wash", "#ededf0"],
      ["--product-accent", "#72747a"],
      [
        "font-family",
        '-apple-system, BlinkMacSystemFont, "DM Sans", sans-serif',
      ],
    ],
  ],
  "product-skip": [
    [
      [symbols.layer, "app-111"],
      [symbols.sort, 266],
      ["position", "fixed"],
      ["top", "-60px"],
      ["left", "20px"],
      ["z-index", "100"],
      ["padding", "12px"],
      ["background", "var(--product-paper)"],
    ],
  ],
  "product-nav": [
    [
      [symbols.layer, "app-113"],
      [symbols.sort, 268],
      ["position", "absolute"],
      ["z-index", "10"],
      ["top", "0"],
      ["inset-inline", "0"],
      ["padding", "26px 3.2vw"],
      ["font-size", "12px"],
    ],
  ],
  "product-nav-back": [
    [
      [symbols.layer, "app-115"],
      [symbols.sort, 273],
      ["display", "flex"],
      ["gap", "12px"],
      ["align-items", "center"],
    ],
  ],
  "product-hero": [
    [
      [symbols.layer, "app-115"],
      [symbols.sort, 274],
      ["position", "relative"],
      ["display", "grid"],
      ["grid-template-columns", "minmax(0, 1fr)"],
      ["min-height", "max(760px, 100svh)"],
      ["overflow", "hidden"],
      ["isolation", "isolate"],
      ["padding", "142px 5vw 42px"],
    ],
  ],
  "product-sky": [
    [
      [symbols.layer, "app-117"],
      [symbols.sort, 276],
      ["z-index", "-2"],
      ["background", "#c4e2e2"],
    ],
  ],
  "product-hero-meta": [
    [
      [symbols.layer, "app-119"],
      [symbols.sort, 279],
      ["position", "absolute"],
      ["z-index", "2"],
      ["top", "18%"],
      ["inset-inline", "5vw"],
      ["display", "flex"],
      ["justify-content", "space-between"],
      ["align-items", "flex-start"],
    ],
  ],
  "product-hero-copy": [
    [
      [symbols.layer, "app-119"],
      [symbols.sort, 280],
      ["position", "relative"],
      ["z-index", "2"],
      ["align-self", "end"],
      ["max-width", "min(75rem, 100%)"],
    ],
  ],
  "product-kicker": [
    [
      [symbols.layer, "app-119"],
      [symbols.sort, 281],
      ["margin-bottom", "18px"],
    ],
  ],
  "product-deck": [
    [
      [symbols.layer, "app-121"],
      [symbols.sort, 284],
      ["max-width", "27ch"],
      ["margin-top", "35px"],
      ["font-size", "clamp(18px, 1.7vw, 26px)"],
      ["line-height", "1.27"],
      ["letter-spacing", "-0.035em"],
    ],
  ],
  "product-hero-object": [
    [
      [symbols.layer, "app-121"],
      [symbols.sort, 285],
      ["position", "absolute"],
      ["z-index", "1"],
      ["right", "clamp(2vw, 8vw, 12vw)"],
      ["bottom", "clamp(12%, 17vw, 24%)"],
      ["width", "min(44vw, 590px)"],
      ["margin", "0"],
    ],
  ],
  "cissa-object": [
    [
      [symbols.layer, "app-123"],
      [symbols.sort, 287],
      ["transform", "rotate(-4deg)"],
    ],
  ],
  "cupboard-object": [
    [
      [symbols.layer, "app-123"],
      [symbols.sort, 288],
      ["width", "min(42vw, 530px)"],
      ["transform", "rotate(3deg)"],
    ],
  ],
  "product-scroll-link": [
    [
      [symbols.layer, "app-125"],
      [symbols.sort, 290],
      ["position", "absolute"],
      ["z-index", "2"],
      ["right", "5vw"],
      ["bottom", "42px"],
      ["display", "flex"],
      ["align-items", "center"],
      ["gap", "30px"],
      ["padding-bottom", "9px"],
      ["border-bottom", "1px solid var(--product-ink)"],
      ["font-size", "12px"],
    ],
  ],
  "product-rule": [
    [
      [symbols.layer, "app-127"],
      [symbols.sort, 293],
      ["padding-top", "17px"],
      ["border-top", "1px solid var(--product-line)"],
    ],
  ],
  "product-intro-grid": [
    [
      [symbols.layer, "app-127"],
      [symbols.sort, 294],
      ["display", "grid"],
      ["grid-template-columns", "minmax(0, 1.05fr) minmax(280px, 0.72fr)"],
      ["align-items", "end"],
      ["gap", "8vw"],
      ["max-width", "1320px"],
      ["margin-top", "clamp(54px, 8vw, 128px)"],
    ],
  ],
  "product-editorial": [
    [
      [symbols.layer, "app-129"],
      [symbols.sort, 300],
      ["display", "grid"],
      ["grid-template-columns", "minmax(0, 1.45fr) minmax(300px, 0.7fr)"],
      ["min-height", "min(760px, 75vw)"],
      ["background", "var(--product-wash)"],
    ],
  ],
  "product-editorial-image": [
    [
      [symbols.layer, "app-129"],
      [symbols.sort, 301],
      ["position", "relative"],
      ["min-height", "500px"],
      ["margin", "0"],
      ["overflow", "hidden"],
    ],
  ],
  "product-editorial-copy": [
    [
      [symbols.layer, "app-131"],
      [symbols.sort, 304],
      ["display", "flex"],
      ["flex-direction", "column"],
      ["justify-content", "center"],
      ["align-items", "flex-start"],
      ["padding", "clamp(45px, 6vw, 104px)"],
    ],
  ],
  "product-feature-heading": [
    [
      [symbols.layer, "app-133"],
      [symbols.sort, 306],
      ["display", "grid"],
      ["grid-template-columns", "minmax(0, 1.05fr) minmax(280px, 0.72fr)"],
      ["gap", "8vw"],
      ["align-items", "start"],
      ["max-width", "1320px"],
      ["margin-bottom", "clamp(48px, 8vw, 100px)"],
    ],
  ],
  "product-accordion": [
    [
      [symbols.layer, "app-135"],
      [symbols.sort, 308],
      ["max-width", "1320px"],
      ["margin-left", "auto"],
      ["border-bottom", "1px solid var(--product-line)"],
    ],
  ],
  "product-plus": [
    [
      [symbols.layer, "app-137"],
      [symbols.sort, 312],
      ["justify-self", "end"],
      ["font-size", "29px"],
      ["font-weight", "300"],
      ["transition", "transform 0.25s ease"],
    ],
  ],
  "product-pairing": [
    [
      [symbols.layer, "app-139"],
      [symbols.sort, 315],
      ["padding", "clamp(65px, 9vw, 140px) 5vw"],
      ["background", "#d9edb1"],
    ],
  ],
  "product-callout-link": [
    [
      [symbols.layer, "app-141"],
      [symbols.sort, 318],
      ["gap", "90px"],
    ],
  ],
  "product-footer": [
    [
      [symbols.layer, "app-141"],
      [symbols.sort, 319],
      ["display", "grid"],
      ["grid-template-columns", "1.5fr 1fr 1fr 1.4fr"],
      ["align-items", "start"],
      ["gap", "30px"],
      ["padding", "50px 5vw"],
    ],
  ],
  "closing-playground": [
    [
      [symbols.layer, "app-143"],
      [symbols.sort, 333],
      ["position", "relative"],
      ["display", "grid"],
      ["grid-template-columns", "minmax(0, 1.7fr) minmax(0, 1fr)"],
      ["background", "#d9edb1"],
      ["padding-right", "3vw"],
    ],
  ],
  "gravity-stage": [
    [
      [symbols.layer, "app-145"],
      [symbols.sort, 336],
      ["position", "relative"],
      ["overflow", "hidden"],
      ["min-height", "320px"],
      ["margin-block", "35px"],
      ["border-bottom", "1px solid #25292255"],
    ],
  ],
  "gravity-mark": [
    [
      [symbols.layer, "app-145"],
      [symbols.sort, 337],
      ["position", "absolute"],
      ["inset", "0 auto auto 0"],
      ["width", "clamp(105px, 14vw, 215px)"],
      ["aspect-ratio", "1"],
      ["border", "0"],
      ["background", "transparent"],
      ["padding", "12px"],
      ["cursor", "grab"],
      ["touch-action", "none"],
      ["will-change", "transform"],
    ],
  ],
  "gravity-hint": [
    [
      [symbols.layer, "app-147"],
      [symbols.sort, 340],
      ["position", "absolute"],
      ["top", "0"],
      ["right", "0"],
      ["font", '10px "IBM Plex Mono", monospace'],
      ["pointer-events", "none"],
    ],
  ],
  "gravity-secret": [
    [
      [symbols.layer, "app-147"],
      [symbols.sort, 341],
      ["position", "absolute"],
      ["left", "0"],
      ["top", "32px"],
      ["max-width", "26ch"],
      ["font", '12px/1.5 "IBM Plex Mono", monospace'],
    ],
  ],
  "product-study": [
    [
      [symbols.layer, "app-149"],
      [symbols.sort, 344],
      ["margin", "0"],
      ["padding", "0 5vw 6vw"],
    ],
  ],
  "cupboard-status": [
    [
      [symbols.layer, "app-151"],
      [symbols.sort, 347],
      ["padding", "45px 5vw 65px"],
      ["border-top", "1px solid #25292244"],
    ],
  ],
  "cupboard-actions": [
    [
      [symbols.layer, "app-155"],
      [symbols.sort, 361],
      ["display", "flex"],
      ["justify-content", "center"],
      ["align-items", "center"],
      ["flex-wrap", "wrap"],
      ["gap", "28px"],
      ["margin-top", "28px"],
      ["font-size", "14px"],
    ],
  ],
  "cupboard-button": [
    [
      [symbols.layer, "app-155"],
      [symbols.sort, 362],
      ["display", "inline-flex"],
      ["align-items", "center"],
      ["gap", "24px"],
      ["padding", "13px 23px"],
      ["border-radius", "99px"],
      ["background", "#1d1d1f"],
      ["color", "white"],
      ["transition", "background 0.2s"],
    ],
  ],
  "cupboard-link": [
    [
      [symbols.layer, "app-157"],
      [symbols.sort, 364],
      ["display", "inline-flex"],
      ["gap", "12px"],
      ["padding", "12px 0"],
    ],
  ],
  "cupboard-facts": [
    [
      [symbols.layer, "app-159"],
      [symbols.sort, 369],
      ["order", "2"],
      ["display", "grid"],
      ["grid-template-columns", "repeat(4, 1fr)"],
      ["width", "100%"],
      ["max-width", "1200px"],
      ["padding", "30px 0 38px"],
      ["border-top", "1px solid var(--product-line)"],
    ],
  ],
  "cupboard-intro": [
    [
      [symbols.layer, "app-161"],
      [symbols.sort, 375],
      ["text-align", "center"],
      ["max-width", "1440px"],
      ["margin", "auto"],
    ],
  ],
  "cupboard-continuity": [
    [
      [symbols.layer, "app-163"],
      [symbols.sort, 379],
      ["max-width", "780px"],
      ["margin", "70px auto 76px"],
    ],
  ],
  "cupboard-device-row": [
    [
      [symbols.layer, "app-163"],
      [symbols.sort, 380],
      ["display", "grid"],
      ["grid-template-columns", "repeat(4, 1fr)"],
      ["gap", "16px"],
    ],
  ],
  "cupboard-network-lines": [
    [
      [symbols.layer, "app-165"],
      [symbols.sort, 383],
      ["height", "75px"],
      ["width", "75%"],
      ["margin", "20px auto 0"],
      ["border", "1px solid #b1b2b9"],
      ["border-top", "0"],
      ["border-radius", "0 0 24px 24px"],
      ["position", "relative"],
    ],
  ],
  "cupboard-hub": [
    [
      [symbols.layer, "app-167"],
      [symbols.sort, 385],
      ["position", "relative"],
      ["display", "grid"],
      ["justify-items", "center"],
      ["gap", "16px"],
      ["width", "min(320px, 100%)"],
      ["margin", "30px auto 24px"],
      ["padding", "30px 24px"],
      ["background", "linear-gradient(135deg, #fff, #e7e8ec)"],
      ["border", "1px solid #fff"],
      ["border-radius", "28px"],
      ["box-shadow", "0 22px 55px #33364c12,\n    inset 0 -2px 3px #1d1d1f0a"],
    ],
  ],
  "cupboard-hub-light": [
    [
      [symbols.layer, "app-169"],
      [symbols.sort, 389],
      ["width", "6px"],
      ["height", "6px"],
      ["border-radius", "50%"],
      ["background", "#478474"],
      ["box-shadow", "0 0 10px #47847440"],
    ],
  ],
  "cupboard-state-grid": [
    [
      [symbols.layer, "app-169"],
      [symbols.sort, 390],
      ["display", "grid"],
      ["grid-template-columns", "repeat(2, 1fr)"],
      ["gap", "20px"],
      ["text-align", "left"],
    ],
  ],
  "cupboard-flow": [
    [
      [symbols.layer, "app-171"],
      [symbols.sort, 394],
      ["position", "relative"],
      ["isolation", "isolate"],
      ["overflow", "hidden"],
      ["background", "#100c09"],
      ["color", "#f5f5f7"],
      ["padding", "clamp(70px, 9vw, 130px) 5vw"],
    ],
  ],
  "cupboard-gradient": [
    [
      [symbols.layer, "app-171"],
      [symbols.sort, 395],
      ["position", "absolute"],
      ["inset", "0"],
      ["z-index", "-2"],
      [
        "background",
        "radial-gradient(\n    ellipse at 70% 30%,\n    #8a623d88,\n    #24170c77 45%,\n    #000 90%\n  )",
      ],
    ],
  ],
  "cupboard-flow-content": [
    [
      [symbols.layer, "app-173"],
      [symbols.sort, 398],
      ["max-width", "1200px"],
      ["margin", "auto"],
    ],
  ],
  "cupboard-flow-deck": [
    [
      [symbols.layer, "app-175"],
      [symbols.sort, 401],
      ["margin-top", "24px"],
      ["max-width", "38ch"],
      ["color", "#e2d8cf"],
      ["font-size", "20px"],
    ],
  ],
  "cupboard-steps": [
    [
      [symbols.layer, "app-175"],
      [symbols.sort, 402],
      ["display", "grid"],
      ["grid-template-columns", "repeat(4, 1fr)"],
      ["gap", "28px"],
      ["margin", "64px 0"],
    ],
  ],
  "cupboard-session": [
    [
      [symbols.layer, "app-177"],
      [symbols.sort, 406],
      ["max-width", "800px"],
      ["background", "#100e0cbb"],
      ["border", "1px solid #ffffff25"],
      ["border-radius", "20px"],
      ["overflow", "hidden"],
      ["backdrop-filter", "blur(18px)"],
    ],
  ],
  "cupboard-session-bar": [
    [
      [symbols.layer, "app-177"],
      [symbols.sort, 407],
      ["display", "flex"],
      ["gap", "20px"],
      ["padding", "18px 24px"],
      ["border-bottom", "1px solid #ffffff20"],
      ["color", "#a8998a"],
    ],
  ],
  "cupboard-foundations": [
    [
      [symbols.layer, "app-179"],
      [symbols.sort, 415],
      ["padding", "0 5vw clamp(70px, 9vw, 130px)"],
      ["max-width", "1440px"],
      ["margin", "auto"],
    ],
  ],
  "cupboard-foundation-grid": [
    [
      [symbols.layer, "app-181"],
      [symbols.sort, 418],
      ["display", "grid"],
      ["grid-template-columns", "repeat(4, 1fr)"],
      ["gap", "16px"],
      ["margin-top", "48px"],
    ],
  ],
};
