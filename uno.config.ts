import { defineConfig, presetUno, type CSSEntriesInput } from "unocss";
import { appPreflights } from "./src/lib/uno-preflight";
import { unoClassRules } from "./src/lib/uno-rules";

export default defineConfig({
  content: {
    filesystem: ["src/**/*.{svelte,ts,tsx,crepus}"],
  },
  rules: [
    [
      /^[\w-]+$/,
      (_, { rawSelector, symbols }) => {
        // Semantic names such as svg-defs are not preset variant expressions.
        if (!Object.hasOwn(unoClassRules, rawSelector)) return;
        return unoClassRules[rawSelector]?.map((entries): CSSEntriesInput => [
          [symbols.variants, () => []],
          ...entries,
        ]);
      },
    ],
  ],
  preflights: appPreflights,
  // Utilities precede the app styles, as they did with the separate stylesheet.
  // These are Uno output groups, not native CSS cascade layers.
  sortLayers: (layers) => [
    ...layers.filter((layer) => !layer.startsWith("app-")),
    ...layers.filter((layer) => layer.startsWith("app-")).sort(),
  ],
  mergeSelectors: false,
  presets: [presetUno()],
});
