import { defineConfig, presetUno } from "unocss";

export default defineConfig({
  content: {
    filesystem: ["src/**/*.{svelte,ts,tsx,crepus}"],
  },
  preflights: [],
  presets: [presetUno()],
});
