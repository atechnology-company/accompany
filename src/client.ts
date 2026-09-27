import { hydrate } from "svelte";
import { isKnownPath, notFound, resolveRoute } from "./lib/routes";
import { initEffects } from "./lib/effects";

const meta = isKnownPath(location.pathname)
  ? resolveRoute(location.pathname)
  : notFound;

hydrate(meta.component as never, {
  target: document.getElementById("app")!,
  props: {},
});

initEffects();

console.log(
  "%caccompany%c the sky is yours — view-source welcome",
  "font-weight:700;font-size:14px",
  "color:#8b93b8",
);
