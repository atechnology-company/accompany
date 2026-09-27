import { cpSync, mkdirSync, rmSync } from "node:fs";
import { sveltePlugin } from "./src/lib/svelte-plugin";

rmSync("dist", { recursive: true, force: true });
mkdirSync("dist/public/assets", { recursive: true });

const client = await Bun.build({
  entrypoints: ["./src/client.ts"],
  outdir: "./dist/public/assets",
  target: "browser",
  format: "esm",
  minify: true,
  splitting: true,
  naming: {
    entry: "client.js",
    chunk: "[name]-[hash].js",
    asset: "[name]-[hash][ext]",
  },
  plugins: [sveltePlugin("client") as never],
});
if (!client.success) {
  console.error(client.logs);
  process.exit(1);
}

const worker = await Bun.build({
  entrypoints: ["./src/worker.ts"],
  outdir: "./dist",
  // "bun" (not "browser") so `import { onMount } from "svelte"` resolves to
  // svelte's server entry (SSR no-op) instead of the client runtime.
  target: "bun",
  format: "esm",
  minify: true,
  naming: { entry: "worker.js" },
  plugins: [sveltePlugin("server") as never],
});
if (!worker.success) {
  console.error(worker.logs);
  process.exit(1);
}

cpSync("public", "dist/public", { recursive: true });
await Bun.write("dist/public/assets/app.css", Bun.file("src/app.css"));

console.log(
  `build ok — client ${(Bun.file("dist/public/assets/client.js").size / 1024) | 0}kb, worker ${(Bun.file("dist/worker.js").size / 1024) | 0}kb`,
);
