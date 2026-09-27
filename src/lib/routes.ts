import Home from "../pages/Home.svelte";
import Cissa from "../pages/Cissa.svelte";
import Cupboard from "../pages/Cupboard.svelte";
import NotFound from "../pages/NotFound.svelte";

export type RouteMeta = {
  title: string;
  description: string;
  component: unknown;
};

export const routes: Record<string, RouteMeta> = {
  "/": {
    title: "accompany — the cloud that stays with you",
    description:
      "cissa, a modular open-source AI wearable, and cupboard, the box at home that keeps everything your AI remembers. Yours, on hardware you own.",
    component: Home,
  },
  "/cissa": {
    title: "cissa — the companion you wear",
    description:
      "An open-source, modular AI wearable. A sensing core that magnet-snaps to a bigger battery, clips to your shirt, or wears as a pendant or bracelet. Infinitely customizable.",
    component: Cissa,
  },
  "/cupboard": {
    title: "cupboard — the cloud, but it's yours",
    description:
      "A small box at home that holds the real copy of your stuff and everything your AI remembers. Now with local inference on Jetson, a Cissa backend, self-hosted sites and services, and long-lived AI coworkers.",
    component: Cupboard,
  },
};

export const notFound: RouteMeta = {
  title: "accompany — nothing here but sky",
  description: "This page drifted away. Head back home.",
  component: NotFound,
};

const PATHS = new Set(Object.keys(routes));

export function resolveRoute(pathname: string): RouteMeta {
  return routes[pathname] ?? notFound;
}

export function isKnownPath(pathname: string): boolean {
  return PATHS.has(pathname);
}
