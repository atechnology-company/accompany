export const appPreflight = String.raw`:root {
  --bg: #070b18;
  --ink: #f2f4ff;
  --muted: #b9c1dd;
  --dim: #7f88ab;
  --line: rgba(255, 255, 255, 0.11);
  --cissa: #ff9a62;
  --cissa-soft: #ffd9a0;
  --cupboard: #6ee7c8;
  --cupboard-soft: #a7f3e0;
  --glass-bg: rgba(255, 255, 255, 0.07);
  --glass-border: rgba(255, 255, 255, 0.14);
  --radius: 20px;
}

* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

html {
  color-scheme: dark;
}

body {
  background: var(--bg);
  color: var(--ink);
  font-family: "Geist",
    ui-sans-serif,
    system-ui,
    -apple-system,
    sans-serif;
  font-size: 16px;
  line-height: 1.6;
  -webkit-font-smoothing: antialiased;
  overflow-x: clip;
}

a {
  color: inherit;
  text-decoration: none;
}

::selection {
  background: rgba(255, 185, 135, 0.35);
}

:focus-visible {
  outline: 2px solid #8ea2ff;
  outline-offset: 3px;
  border-radius: 6px;
}

.sky canvas {
  display: block;
}

.sky .vanta-canvas {
  position: absolute;
  inset: 0;
  z-index: 1;
}

#app {
  position: relative;
  z-index: 1;
}

.display.big {
  font-size: clamp(3rem, 8vw, 7rem);
}

@supports (backdrop-filter: url(#liquid-glass) blur(4px)) {
  .nav {
    backdrop-filter: url(#liquid-glass) blur(6px) saturate(170%);
    -webkit-backdrop-filter: blur(6px) saturate(170%);
  }
}

[data-glare] {
  overflow: hidden;
}

[data-glare]::after {
  content: "";
  position: absolute;
  inset: 0;
  border-radius: inherit;
  background: radial-gradient(
    340px circle at var(--mx, 50%) var(--my, 50%),
    rgba(255, 255, 255, 0.15),
    transparent 62%
  );
  opacity: 0;
  transition: opacity 0.35s ease;
  pointer-events: none;
}

[data-glare]:hover::after {
  opacity: 1;
}

.nav.scrolled {
  background: rgba(10, 15, 30, 0.55);
  box-shadow: 0 18px 50px rgba(2, 5, 14, 0.55),
    inset 0 1px 0 rgba(255, 255, 255, 0.12);
}

.nav-links a {
  padding: 8px 15px;
  border-radius: 999px;
  color: var(--muted);
  transition: background 0.25s ease,
    color 0.25s ease;
}

.nav-links a:hover {
  background: rgba(255, 255, 255, 0.1);
  color: var(--ink);
}

.nav-ext:hover {
  color: var(--ink);
  border-color: var(--line);
}

.hero-title.small {
  font-size: clamp(2.4rem, 7.5vw, 5.5rem);
}

@keyframes bob {
  0%,
  100% {
    transform: translateY(0);
    opacity: 0.55;
  }
  50% {
    transform: translateY(8px);
    opacity: 1;
  }
}

.btn:hover {
  background: rgba(255, 255, 255, 0.13);
}

.marquee:hover .marquee-track {
  animation-play-state: paused;
}

@keyframes marquee {
  to {
    transform: translateX(-50%);
  }
}

.card:hover {
  border-color: rgba(255, 255, 255, 0.3);
}

.card.cissa:hover {
  border-color: rgba(255, 154, 98, 0.55);
}

.card.cupboard:hover {
  border-color: rgba(110, 231, 200, 0.55);
}

.card-body p {
  color: var(--muted);
  font-size: 0.98rem;
}

.card:hover .card-go {
  color: var(--ink);
}

.step h3 {
  font-size: 1.2rem;
  font-weight: 660;
  letter-spacing: -0.02em;
  margin: 10px 0 8px;
}

.step p {
  color: var(--muted);
  font-size: 0.93rem;
}

.term pre {
  padding: 20px 22px;
  font-size: 13.5px;
  line-height: 1.8;
  overflow-x: auto;
}

.feature h3 {
  font-size: 1.06rem;
  font-weight: 650;
  letter-spacing: -0.015em;
  margin-bottom: 8px;
}

.feature p {
  color: var(--muted);
  font-size: 0.93rem;
}

.feature-link a {
  font-size: 13px;
  letter-spacing: 0.1em;
  color: var(--cupboard-soft);
}

.feature-link a:hover {
  color: var(--ink);
}

.closing .hero-cta {
  margin-top: 28px;
}

.footer-brand .brand {
  margin-bottom: 14px;
}

.footer-col h4 {
  font-size: 11.5px;
  font-weight: 500;
  letter-spacing: 0.18em;
  color: var(--dim);
  margin-bottom: 4px;
}

.footer-col a {
  color: var(--muted);
  font-size: 0.95rem;
  transition: color 0.25s ease;
}

.footer-col a:hover {
  color: var(--ink);
}

@media (max-width: 960px) {
  .duo,
  .split-2 {
    grid-template-columns: 1fr;
  }

  .steps {
    grid-template-columns: 1fr 1fr;
  }

  .features {
    grid-template-columns: 1fr 1fr;
  }

  .footer-grid {
    grid-template-columns: 1fr 1fr;
  }
}

@media (max-width: 640px) {
  .nav {
    gap: 0.7rem;
  }

  .nav-ext {
    display: none;
  }

  .nav-links a {
    padding: 8px 11px;
  }

  .steps,
  .features,
  .footer-grid {
    grid-template-columns: 1fr;
  }

  .hero-cta {
    flex-direction: column;
    align-items: center;
  }

  .btn {
    width: min(320px, 82vw);
  }
}

@media (prefers-reduced-motion: reduce) {
  .marquee-track,
  .scroll-cue {
    animation: none;
  }

  .nav,
  .card,
  .btn {
    transition: none;
  }
}

.home .field-label {
  font: 10px/1.6 "IBM Plex Mono",
    monospace;
  letter-spacing: 0.045em;
}

.fancy-label-island .sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  margin: -1px;
  overflow: hidden;
  clip-path: inset(50%);
  white-space: nowrap;
}

.fancy-label-island .inline-block {
  display: inline-block;
  white-space: pre-wrap;
}

.home :focus-visible {
  outline-color: #525d25;
}

.home a {
  -webkit-tap-highlight-color: transparent;
}

.home button {
  -webkit-tap-highlight-color: transparent;
}

.home-skip:focus {
  top: 12px;
}

.home-brand span {
  font-size: 26px;
  font-weight: 400;
}

.home-nav nav {
  display: flex;
  gap: 36px;
}

.home-nav a {
  padding-block: 10px;
}

.home-nav nav a:hover {
  text-decoration: underline;
  text-underline-offset: 5px;
}

.home-footer a:hover {
  text-decoration: underline;
  text-underline-offset: 5px;
}

.home-source i {
  height: 7px;
  width: 7px;
  background: #ad420f;
  border-radius: 50%;
}

.home-source > span {
  margin-left: 15px;
}

.hero-landscape.landscape-ready {
  opacity: 1;
}

.home:not([data-intro-managed="true"]) .hero-landscape {
  animation: intro-fallback 1.8s both;
}

.home-hero::after {
  content: "";
  position: absolute;
  inset: 0 0 27%;
  z-index: 2;
  pointer-events: none;
  background: radial-gradient(ellipse at 50% 0%, #fffde780, transparent 68%);
  mix-blend-mode: soft-light;
  animation: daylight-sweep 14s ease-in-out infinite alternate;
  animation-play-state: var(--ambient-play, running);
}

.hero-object::after {
  content: "";
  position: absolute;
  width: 55%;
  height: 7%;
  left: 22%;
  bottom: 5%;
  border-radius: 50%;
  background: radial-gradient(ellipse, #26362e35, transparent 70%);
  animation: daylight-shadow 14s ease-in-out infinite alternate;
  animation-play-state: var(--ambient-play, running);
  pointer-events: none;
  z-index: -1;
}

@keyframes daylight-sweep {
  from { transform: translateX(-22%); opacity: 0.45; }
  to { transform: translateX(22%); opacity: 0.8; }
}

@keyframes daylight-shadow {
  from { transform: translateX(16px) scaleX(.85); opacity: 0.6; }
  to { transform: translateX(-16px) scaleX(1.1); opacity: 1; }
}

.home-atmosphere .sky {
  position: absolute;
  mix-blend-mode: soft-light;
  opacity: 0.55;
}

.home-atmosphere .sky[data-dithered] {
  background: transparent;
  mix-blend-mode: normal;
  opacity: 1;
  mask-image: linear-gradient(#000 35%, #0009 60%, transparent 90%);
}

.home-atmosphere .sky[data-dithered] .sky-static {
  display: none;
}

.home-atmosphere .sky[data-dithered] .sky-scrim {
  display: none;
}

.home-atmosphere .vanta-canvas {
  opacity: 0.78;
}

.paper-emblem > svg {
  position: absolute;
  inset: 0;
}

.paper-emblem > svg[hidden] {
  display: none;
}

.paper-emblem canvas {
  display: block;
}

.paper-emblem > :is(canvas {
  animation: emblem-turn 48s linear infinite;
}

svg) {
  animation: emblem-turn 48s linear infinite;
}

.paper-emblem > canvas {
  animation: intro-reveal .85s both, emblem-turn 48s linear infinite;
}

@keyframes emblem-turn { to { transform: rotate(360deg); } }

.hero-bottomline > .field-label {
  color: #fffef1;
  text-shadow: 0 1px 5px #172719;
}

.explore-link > span:last-child {
  font-size: 24px;
  transition: transform 0.3s;
}

.explore-link:hover > span:last-child {
  transform: translateY(5px);
}

.home-wordmark sup {
  font: 14px "IBM Plex Mono",
    monospace;
  position: absolute;
  right: 0.3%;
  bottom: 22%;
  letter-spacing: 0;
}

.home h2 {
  font-size: clamp(40px, 5.2vw, 78px);
  line-height: 1.02;
  letter-spacing: -0.055em;
  font-weight: 450;
}

.companions-heading > p {
  font-size: 14px;
  line-height: 1.6;
  padding-right: 3vw;
}

.product-still img {
  display: block;
  width: 100%;
  height: auto;
  max-height: 660px;
  object-fit: cover;
  mix-blend-mode: multiply;
}

.product-still figcaption {
  position: absolute;
  right: 0;
  bottom: 14px;
  color: #555b50;
}

.product-caption h3 {
  font-size: 44px;
  font-weight: 450;
  letter-spacing: -0.05em;
  display: flex;
  justify-content: space-between;
  margin-block: 8px;
}

.product-caption h3 span {
  font-size: 30px;
  transition: transform 0.3s;
}

.product-caption:hover h3 span {
  transform: translate(5px, -5px);
}

.product-caption p {
  font-size: 14px;
  color: #51564c;
}

.companion-switch::after {
  content: "";
  position: absolute;
  bottom: -1px;
  left: 0;
  height: 2px;
  width: calc((100% - 28px) / 2);
  background: var(--home-ink);
  transition: transform 0.45s cubic-bezier(.22, 1, .36, 1);
}

.companion-switch.keep-selected::after {
  transform: translateX(calc(100% + 28px));
}

.companion-switch button {
  font: inherit;
  font-size: 16px;
  background: none;
  color: #51564c;
  border: 0;
  border-bottom: 2px solid transparent;
  padding: 14px 0;
  cursor: pointer;
}

.companion-switch button[aria-pressed="true"] {
  color: var(--home-ink);
}

.companion-switch button span {
  font: 9px "IBM Plex Mono",
    monospace;
  vertical-align: super;
  margin-left: 10px;
}

.story-panel h2 {
  white-space: pre-line;
  font-size: clamp(34px, 4.1vw, 64px);
}

.story-panel > p {
  max-width: 36ch;
  font-size: 15px;
  line-height: 1.7;
  margin-block: 26px;
}

.story-image img {
  position: absolute;
  inset: 0 auto 0 0;
  width: 100%;
  height: 100%;
  object-fit: contain;
  object-position: center;
  mix-blend-mode: multiply;
}

.outlook-section h2 {
  font-size: clamp(48px, 7.5vw, 116px);
  margin-block: 90px 70px;
}

.outlook-section h2 em {
  font-weight: 450;
}

.possibilities details {
  border-top: 1px solid #25292255;
}

.possibilities summary {
  list-style: none;
  display: grid;
  grid-template-columns: 25px 1fr 20px;
  align-items: center;
  gap: 16px;
  min-height: 82px;
  cursor: pointer;
  font-size: 17px;
}

.possibilities summary::-webkit-details-marker {
  display: none;
}

.possibilities details[open] .detail-plus {
  transform: rotate(45deg);
}

.possibilities details p {
  font-size: 15px;
  line-height: 1.7;
  padding: 0 40px 25px;
  color: #51564c;
}

.home-closing h2 {
  font-size: clamp(65px, 10vw, 150px);
  margin: 50px 0 35px;
}

.home-footer > div {
  display: flex;
  flex-direction: column;
  gap: 14px;
  font-size: 12px;
}

.home-footer > p {
  text-align: right;
}

@media (min-width: 1600px) {
  .home-wordmark {
    font-size: 17.3vw;
  }
}

@media (max-width: 800px) {
  .home-nav {
    padding: 16px 5vw;
  }
  .home-nav nav {
    gap: 20px;
  }
  .home-source {
    display: none;
  }
  .home-hero {
    height: 90svh;
    min-height: 690px;
  }
  .hero-topline,
  .hero-bottomline {
    inset-inline: 5vw;
  }
  .hero-thought {
    width: auto;
  }
  .hero-object {
    top: 43%;
  }
  .hero-bottomline {
    bottom: 24%;
  }
  .hero-bottomline > .field-label {
    color: var(--home-ink);
    text-shadow: none;
  }
  .hero-lens {
    top: 52%;
    left: 72%;
  }
  .home-wordmark {
    bottom: 4%;
  }
  .companions-heading {
    align-items: start;
    flex-direction: column;
    margin-top: 45px;
  }
  .companions-heading > p {
    font-size: 15px;
  }
  .companion-story {
    grid-template-columns: 1fr;
  }
  .story-copy {
    padding: 40px 7vw;
  }
  .companion-switch {
    margin-block: 30px;
  }
  .story-panel h2 {
    font-size: 48px;
  }
  .story-panel > p {
    max-width: 46ch;
  }
  .story-image {
    height: 520px;
    min-height: 0;
  }
  .outlook-body {
    grid-template-columns: 1fr;
    gap: 40px;
  }
  .outlook-section h2 {
    margin-block: 60px 45px;
  }
  .home-footer {
    grid-template-columns: 1fr 1fr;
  }
  .home-footer > p {
    text-align: left;
  }
}

@media (max-width: 480px) {
  .home-brand {
    font-size: 21px;
  }
  .home-nav nav {
    font-size: 11px;
    gap: 16px;
  }
  .home-nav nav a:last-child {
    display: none;
  }
  .home-hero {
    min-height: 670px;
    height: 92svh;
  }
  .hero-topline {
    top: 17%;
  }
  .hero-topline > .field-label {
    max-width: 140px;
    font-size: 9px;
  }
  .hero-thought {
    font-size: 24px;
  }
  .hero-object {
    top: 44%;
  }
  .paper-emblem {
    width: min(82vw, 340px);
    height: min(82vw, 340px);
  }
  .hero-bottomline {
    bottom: 22%;
  }
  .explore-link {
    font-size: 11px;
    gap: 14px;
  }
  .hero-bottomline .field-label {
    font-size: 9px;
  }
  .hero-lens {
    top: 57%;
    left: 66%;
  }
  .glass-lens {
    width: 76px;
    height: 44px;
  }
  .home-wordmark {
    bottom: 5%;
  }
  .home-wordmark sup {
    font-size: 8px;
    bottom: 17%;
  }
  .section-index span:last-child {
    display: none;
  }
  .companions-section {
    padding-block: 30px 50px;
  }
  .product-still {
    margin-inline: -5vw;
  }
  .product-still img {
    height: 350px;
    object-fit: cover;
  }
  .product-still figcaption {
    right: 5vw;
    font-size: 8px;
  }
  .product-caption h3 {
    font-size: 34px;
  }
  .product-caption h3 span {
    font-size: 22px;
  }
  .product-caption p {
    font-size: 12px;
  }
  .story-image {
    height: 400px;
  }
  .outlook-section {
    padding-block: 40px 65px;
  }
  .possibilities summary {
    font-size: 15px;
    gap: 10px;
  }
  .home-closing {
    padding-block: 40px 50px;
  }
  .closing-mark {
    right: 7vw;
    top: 69%;
    width: 17vw;
    height: 17vw;
  }
  .closing-link {
    gap: 35px;
  }
  .home-footer {
    padding-block: 35px;
    gap: 30px 20px;
  }
  .home-footer > .home-brand {
    grid-column: 1 / -1;
  }
  .home-footer > p {
    grid-column: 1 / -1;
  }
}

@media (prefers-reduced-motion: reduce) {
  .home *,
  .home *::before,
  .home *::after {
    animation: none !important;
    transition: none !important;
  }
}

.product-concept.compact {
  width: 220px;
}

.product-concept img {
  width: 100%;
  height: auto;
  display: block;
  border-radius: 8px;
}

.product-concept figcaption {
  font-size: 10px;
  margin-top: 12px;
  color: var(--muted);
  text-align: center;
}

.field-journal h2 {
  margin: 65px 0;
}

.journal-entry:last-child {
  margin-top: 150px;
}

.journal-photo img {
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: scale 0.7s;
}

.journal-entry:hover img {
  scale: 1.045;
}

.journal-caption > span:last-child {
  font-size: 26px;
}

.journal-entry h3 {
  font-size: clamp(17px, 1.8vw, 30px);
  font-weight: 450;
  letter-spacing: -0.045em;
  margin-block: 10px 15px;
}

@media (max-width: 600px) {
  .field-journal { padding-block: 45px; }
  .field-journal h2 { margin-block: 45px; }
  .field-journal-grid { grid-template-columns: 1fr; gap: 45px; }
  .journal-entry:last-child { margin-top: 0; }
}

@media (max-width: 360px) {
  .hero-thought { font-size: 20px; }
  .hero-bottomline { gap: 18px; }
  .explore-link { max-width: 130px; }
  .product-caption h3 { font-size: 29px; }
}

.product-page .field-label {
  font: 10px/1.6 "IBM Plex Mono",
    monospace;
  letter-spacing: 0.045em;
}

.product-page :focus-visible {
  outline-color: #525d25;
}

.product-page a {
  -webkit-tap-highlight-color: transparent;
}

.product-page summary {
  -webkit-tap-highlight-color: transparent;
}

.product-skip:focus {
  top: 12px;
}

.product-nav nav {
  display: flex;
  gap: 36px;
}

.product-nav nav a {
  padding-block: 10px;
}

.product-nav a:hover {
  text-decoration: underline;
  text-underline-offset: 5px;
}

.product-footer a:hover {
  text-decoration: underline;
  text-underline-offset: 5px;
}

.product-nav [aria-current="page"] {
  text-decoration: underline;
  text-decoration-thickness: 1px;
  text-underline-offset: 5px;
}

.product-sky .sky {
  position: absolute;
  inset: 0;
}

.product-sky .sky {
  z-index: 0;
  opacity: 0.65;
}

.product-sky::after {
  position: absolute;
  z-index: 1;
  inset: 0;
  content: "";
  background: linear-gradient(180deg, #f7f2e240 0%, transparent 40%, #eeece4 100%),
    radial-gradient(#4853412b 0.45px, transparent 0.6px);
  background-size: auto, 3px 3px;
  pointer-events: none;
}

.product-hero h1 {
  max-width: 100%;
  font-size: clamp(4.6rem, 15.8vw, 18rem);
  font-weight: 450;
  line-height: 0.78;
  letter-spacing: -0.09em;
  overflow-wrap: anywhere;
}

.product-hero h1 span {
  color: var(--product-accent);
}

.product-hero-object img {
  display: block;
  width: 100%;
  height: auto;
  max-height: 54svh;
  object-fit: contain;
  mix-blend-mode: multiply;
}

.product-hero-object figcaption {
  position: absolute;
  right: 0;
  bottom: -22px;
  white-space: nowrap;
}

.product-scroll-link span {
  font-size: 21px;
}

.product-page h2 {
  font-size: clamp(43px, 6.1vw, 94px);
  font-weight: 450;
  line-height: 0.98;
  letter-spacing: -0.065em;
  text-wrap: balance;
}

.product-editorial-copy > p:not(.field-label) {
  color: var(--product-muted);
  font-size: clamp(16px, 1.35vw, 20px);
  line-height: 1.6;
  text-wrap: pretty;
}

.product-pairing > p:not(.field-label) {
  color: var(--product-muted);
  font-size: clamp(16px, 1.35vw, 20px);
  line-height: 1.6;
  text-wrap: pretty;
}

.product-text-link:hover > span[aria-hidden] {
  transform: translate(4px, -4px);
}

.product-callout-link:hover > span[aria-hidden] {
  transform: translate(4px, -4px);
}

.product-text-link > span[aria-hidden] {
  transition: transform 0.25s ease;
}

.product-callout-link > span[aria-hidden] {
  transition: transform 0.25s ease;
}

.product-editorial-image img {
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.product-editorial-image figcaption {
  position: absolute;
  bottom: 22px;
  left: 28px;
  padding: 5px 8px;
  background: #eeece4bf;
}

.product-editorial-copy h2 {
  margin-block: 44px 27px;
  font-size: clamp(38px, 4vw, 69px);
}

.product-feature-heading > p {
  padding-top: 8px;
}

.product-accordion details {
  border-top: 1px solid var(--product-line);
}

.product-accordion summary {
  display: grid;
  grid-template-columns: 42px minmax(0, 1fr) 28px;
  align-items: center;
  gap: 18px;
  min-height: 93px;
  list-style: none;
  cursor: pointer;
  font-size: clamp(18px, 1.7vw, 25px);
  letter-spacing: -0.035em;
}

.product-accordion summary::-webkit-details-marker {
  display: none;
}

.product-accordion details[open] .product-plus {
  transform: rotate(45deg);
}

.product-accordion details p {
  max-width: 61ch;
  padding: 0 58px 31px;
  color: var(--product-muted);
  font-size: 16px;
  line-height: 1.65;
}

.product-pairing h2 {
  max-width: 11ch;
  margin-block: 47px 30px;
  font-size: clamp(49px, 7.2vw, 116px);
}

.product-pairing > p:not(.field-label) {
  max-width: 43ch;
  color: var(--product-ink);
}

.product-footer > div {
  display: flex;
  flex-direction: column;
  gap: 14px;
  font-size: 12px;
}

.product-footer > p {
  text-align: right;
}

@media (max-width: 800px) {
  .product-nav {
    padding: 16px 5vw;
  }

  .product-nav nav {
    gap: 20px;
  }

  .product-nav-back {
    display: none;
  }

  .product-hero {
    display: flex;
    flex-direction: column;
    min-height: 90svh;
    padding: 110px 5vw 34px;
  }

  .product-hero-meta {
    position: static;
  }

  .product-hero-object {
    position: relative;
    inset: auto;
    order: 1;
    margin: 40px auto 45px;
    width: min(62vw, 450px);
  }

  .product-hero-copy { order: 2; align-self: stretch; }
  .product-hero-object figcaption { position: static; margin-top: 12px; text-align: right; }
  .product-scroll-link { position: static; order: 3; align-self: end; margin-top: 32px; }

  .cupboard-object {
    width: min(58vw, 420px);
  }

  .product-intro-grid,
  .product-feature-heading,
  .product-editorial {
    grid-template-columns: 1fr;
  }

  .product-intro-grid {
    gap: 40px;
  }

  .product-editorial {
    min-height: 0;
  }

  .product-editorial-image {
    min-height: min(70vw, 540px);
  }

  .product-editorial-copy {
    padding: 52px 7vw 62px;
  }

  .product-feature-heading {
    gap: 25px;
  }

  .product-footer {
    grid-template-columns: 1fr 1fr;
  }

  .product-footer > p {
    text-align: left;
  }
}

@media (max-width: 480px) {
  .product-nav .home-brand {
    font-size: 21px;
  }

  .product-nav nav {
    gap: 16px;
    font-size: 11px;
  }

  .product-hero {
    min-height: 670px;
  }

  .product-hero-meta {
    top: 14%;
    font-size: 9px;
  }

  .product-hero h1 {
    font-size: 21vw;
    line-height: 0.82;
    white-space: nowrap;
  }

  .product-page-cupboard h1 {
    font-size: 20vw;
  }

  .product-deck {
    margin-top: 26px;
    font-size: 18px;
  }

  .product-hero-object {
    width: 73vw;
  }

  .cupboard-object {
    width: 69vw;
  }

  .product-hero-object figcaption {
    right: -3px;
    bottom: -18px;
    font-size: 8px;
  }

  .product-scroll-link {
    bottom: 27px;
    right: 5vw;
    gap: 16px;
    font-size: 11px;
  }

  .product-rule span:last-child {
    display: none;
  }

  .product-page h2 {
    font-size: clamp(41px, 12.2vw, 59px);
  }

  .product-editorial-image {
    min-height: 340px;
  }

  .product-editorial-image figcaption {
    bottom: 13px;
    left: 5vw;
    font-size: 8px;
  }

  .product-editorial-copy h2 {
    margin-block: 32px 22px;
  }

  .product-accordion summary {
    grid-template-columns: 28px minmax(0, 1fr) 20px;
    gap: 10px;
    min-height: 78px;
    font-size: 18px;
  }

  .product-accordion details p {
    padding: 0 30px 25px 38px;
    font-size: 15px;
  }

  .product-plus {
    font-size: 24px;
  }

  .product-footer {
    gap: 30px 20px;
    padding-block: 35px;
  }

  .product-footer > .home-brand,
  .product-footer > p {
    grid-column: 1 / -1;
  }
}

@media (prefers-reduced-motion: reduce) {
  .product-page *,
  .product-page *::before,
  .product-page *::after {
    animation: none !important;
    transition: none !important;
  }
}

.home :is(.home-nav {
  animation: intro-fallback 0.8s 3.5s both;
}

.home-footer) {
  animation: intro-fallback 0.8s 3.5s both;
}

.home main > section:not(.home-hero) {
  animation: intro-fallback 0.8s 3.5s both;
}

.home[data-intro-managed="true"]:not([data-intro="ready"]) :is(.home-nav {
  animation: none;
  opacity: 0;
  visibility: hidden;
}

.home-footer) {
  animation: none;
  opacity: 0;
  visibility: hidden;
}

.home[data-intro-managed="true"]:not([data-intro="ready"]) main > section:not(.home-hero) {
  animation: none;
  opacity: 0;
  visibility: hidden;
}

.home[data-intro-managed="true"][data-intro="loading"] .hero-object .paper-emblem {
  animation: none;
  opacity: 0;
  visibility: hidden;
}

.home[data-intro="ready"] :is(.home-nav {
  animation: intro-reveal 0.8s both;
}

.home-footer) {
  animation: intro-reveal 0.8s both;
}

.home[data-intro="ready"] main > section:not(.home-hero) {
  animation: intro-reveal 0.8s both;
}

.home .hero-object .paper-emblem {
  animation: intro-fallback 0.85s 2.4s both;
}

.home[data-intro="logo"] .hero-object .paper-emblem {
  animation: intro-reveal 0.85s both;
}

.home[data-intro="ready"] .hero-object .paper-emblem {
  animation: intro-reveal 0.85s both;
}

@keyframes intro-fallback {
  from { opacity: 0; visibility: hidden; }
  to { opacity: 1; visibility: visible; }
}

@keyframes intro-reveal {
  from { opacity: 0; visibility: hidden; }
  to { opacity: 1; visibility: visible; }
}

.closing-playground .home-closing {
  padding-right: 0;
}

.closing-playground h2 {
  font-size: clamp(54px, 8.5vw, 140px);
}

.gravity-mark:active {
  cursor: grabbing;
}

.gravity-mark img {
  display: block;
  width: 100%;
  height: auto;
  pointer-events: none;
  filter: brightness(0.18);
  animation: emblem-turn 24s linear infinite;
}

.product-page-cupboard .product-sky {
  background: #c4e2e2 url("/open-sky.webp") center / cover;
}

.product-page-cupboard .product-sky .sky {
  opacity: 0.32;
  mix-blend-mode: soft-light;
}

.product-study img {
  display: block;
  width: 100%;
  max-height: 800px;
  object-fit: cover;
}

.product-study figcaption {
  padding-top: 14px;
}

.cupboard-status p:not(.field-label) {
  max-width: 65ch;
  margin-top: 18px;
  line-height: 1.7;
}

@media (min-width: 2200px) {
  .home-hero { height: max(100svh, 46vw); max-height: none; }
}

@media (max-width: 600px) {
  .closing-playground { grid-template-columns: 1fr; padding: 0; }
  .gravity-stage { height: 250px; min-height: 0; margin: 0 5vw 35px; }
  .closing-playground .home-closing { padding-bottom: 30px; }

  
  .home .field-label { font-size: 11px; line-height: 1.65; letter-spacing: .02em; }
  .home-nav { padding: 18px 6vw; }
  .home-nav nav { font-size: 13px; }
  .home-nav nav a:last-child { display: none; }
  .home-brand { letter-spacing: -.045em; }
  .home-brand .symbol-asterisk { font-size: 24px; }
  .home-hero {
    display: flex;
    flex-direction: column;
    height: auto;
    min-height: 0;
    max-height: none;
    padding-top: 112px;
  }
  .home-atmosphere { inset: 0; }
  .hero-topline {
    position: relative;
    inset: auto;
    display: flex;
    flex-direction: column;
    gap: 18px;
    margin-inline: 6vw;
  }
  .hero-topline > .field-label { max-width: none; font-size: 11px; }
  .hero-thought {
    order: -1;
    width: auto;
    font-size: clamp(28px, 7.5vw, 38px);
    line-height: 1.2;
    letter-spacing: -.025em;
  }
  .hero-object {
    position: relative;
    inset: auto;
    align-self: center;
    transform: none;
    margin: 18px auto 0;
  }
  .paper-emblem { width: min(82vw, 360px); height: min(82vw, 360px); }
  .hero-bottomline {
    position: relative;
    inset: auto;
    display: flex;
    flex-direction: column;
    align-items: stretch;
    gap: 24px;
    padding: 26px 6vw 32px;
    background: var(--paper);
  }
  .hero-bottomline .field-label { font-size: 11px; }
  .explore-link {
    max-width: none;
    width: 100%;
    justify-content: space-between;
    gap: 20px;
    min-height: 44px;
    font-size: 15px;
  }
  .explore-link > .material-symbol { font-size: 28px; }
  .home-wordmark {
    position: relative;
    inset: auto;
    padding: 8px 3vw 28px;
    background: var(--paper);
    font-size: 16.2vw;
    letter-spacing: -.055em;
    line-height: 1.2;
  }
  .home-wordmark sup { right: 3vw; bottom: 35%; font-size: 12px; }
  .closing-link { align-items: center; justify-content: space-between; gap: 24px; }
  .home-footer > div, .product-footer > div { font-size: 14px; line-height: 1.6; }
}

@media (prefers-reduced-motion: reduce) {
  .hero-landscape { transition: none; }
  .home-hero::after, .hero-object::after { animation: none; }
  .paper-emblem > :is(canvas, svg), .gravity-mark img { animation: none !important; }
  .home :is(.home-nav, .hero-topline, .hero-bottomline, .hero-lens, .home-wordmark, .home-footer, .paper-emblem),
  .home main > section:not(.home-hero) {
    animation: none !important;
    opacity: 1;
    visibility: visible;
  }
}
`;
