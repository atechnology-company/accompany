import { defineConfig, presetUno } from "unocss";
import { appPreflight } from "./src/lib/uno-preflight";
import { unoClassRules } from "./src/lib/uno-rules";

export default defineConfig({
  content: {
    filesystem: ["src/**/*.{svelte,ts,tsx,crepus}"],
  },
  rules: Object.entries(unoClassRules).map(([className, declarations]) => [
    new RegExp(`^${className}$`),
    () => declarations,
  ]),
  preflights: [
    {
      getCSS: () => appPreflight,
    },
  ],
  presets: [presetUno()],
});
