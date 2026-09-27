declare module "*.svelte" {
  import type { Component } from "svelte";
  const component: Component<Record<string, any>>;
  export default component;
}

declare module "vanta/dist/vanta.clouds.min" {
  const effect: (options: Record<string, any>) => { destroy: () => void };
  export default effect;
}
