import { cpSync, mkdirSync, rmSync } from "node:fs";
import { spawnSync } from "node:child_process";
import { parseCrepus, renderCrepusIr } from "@tschk/crepus-moonshine";
import { renderToStaticMarkup } from "react-dom/server";
import { sveltePlugin } from "./src/lib/svelte-plugin";

const CREPUS_SOURCE = "src/crepus/Closing.crepus";
const CREPUS_OUTPUT = "src/generated/Closing.svelte";

function run(command: string, args: string[]): void {
  const result = spawnSync(command, args, { stdio: "inherit" });
  if (result.status !== 0) {
    throw new Error(`${command} ${args.join(" ")} failed`);
  }
}

function emitClosing(): Promise<void> {
  const outputDir = "dist/crepus";
  run(process.env.CREPUS_BIN ?? "crepus", [
    "web",
    "build",
    "--emit",
    "svelte",
    "--site",
    "src/crepus",
    "--entry",
    "Closing.crepus",
    "--out-dir",
    outputDir,
  ]);

  const emitted = Bun.file(`${outputDir}/CrepusEmit.svelte`);
  if (!emitted.size) {
    throw new Error("Crepus did not produce its Svelte emitter output");
  }

  return emitted.text().then((source) => {
    if (!source.includes("$props()")) {
      throw new Error(
        "Crepus Svelte emitter must expose the { scope, handlers } contract",
      );
    }

    // View IR currently emits layout nodes as divs. Restore only the heading
    // tag; all content, attributes, and structure still come from Crepus.
    const markup = source.replace(
      /<div class="closing-title flex flex-col">([\s\S]*?)<\/div>/,
      '<h2 class="closing-title flex flex-col">$1</h2>',
    );
    return Bun.write(
      CREPUS_OUTPUT,
      `<!-- Generated from ${CREPUS_SOURCE} by \`crepus web build --emit svelte\`. -->\n${markup}`,
    ).then(() => undefined);
  });
}

function clientOnlyForSSR() {
  return {
    name: "client-only-for-ssr",
    setup(build: any) {
      // These modules are loaded exclusively inside Svelte onMount (an SSR
      // no-op). Empty build-time modules prevent Wrangler rebundling them.
      build.onResolve(
        {
          filter:
            /^(?:@paper-design\/shaders|three|vanta\/dist\/vanta.clouds.min|\.\.\/lib\/fancy-island|\.\.\/lib\/vendor\/vitrio.esm.js)$/,
        },
        (args: any) => ({ path: args.path, namespace: "client-only" }),
      );
      build.onLoad({ filter: /.*/, namespace: "client-only" }, () => ({
        contents: "export default undefined;",
        loader: "js",
      }));
    },
  };
}

rmSync("dist", { recursive: true, force: true });
mkdirSync("dist/public/assets", { recursive: true });
await emitClosing();
// The official Moonshine Crepus adapter renders this static island at build
// time. Only trusted local template output ships; no WASM parser in the browser.
const notesIR = parseCrepus(
  await Bun.file("src/crepus/FieldNotes.crepus").text(),
);
await Bun.write(
  "src/generated/field-notes.json",
  JSON.stringify({
    html: renderToStaticMarkup(renderCrepusIr(notesIR)),
  }),
);

run("bunx", [
  "--no-install",
  "unocss",
  "src/**/*.{svelte,ts,tsx,crepus}",
  "--config",
  "uno.config.ts",
  "--preflights",
  "false",
  "--out-file",
  "dist/public/assets/uno.css",
]);

const client = await Bun.build({
  entrypoints: ["./src/client.ts"],
  outdir: "./dist/public/assets",
  target: "browser",
  format: "esm",
  minify: true,
  define: { "process.env.NODE_ENV": '"production"' },
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
  define: { "process.env.NODE_ENV": '"production"' },
  naming: { entry: "worker.js" },
  plugins: [sveltePlugin("server") as never, clientOnlyForSSR() as never],
});
if (!worker.success) {
  console.error(worker.logs);
  process.exit(1);
}

cpSync("public", "dist/public", { recursive: true });
await Bun.write("dist/public/assets/app.css", Bun.file("src/app.css"));

console.log(
  `build ok — client ${(Bun.file("dist/public/assets/client.js").size / 1024) | 0}kb, worker ${(Bun.file("dist/worker.js").size / 1024) | 0}kb, uno ${(Bun.file("dist/public/assets/uno.css").size / 1024) | 0}kb`,
);
