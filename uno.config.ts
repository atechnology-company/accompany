import { defineConfig, presetUno } from "unocss";
import { appPreflight } from "./src/lib/uno-preflight";

export default defineConfig({
  content: {
    filesystem: ["src/**/*.{svelte,ts,tsx,crepus}"],
  },
  preflights: [
    {
      getCSS: () => appPreflight,
    },
  ],
  presets: [presetUno()],
});
