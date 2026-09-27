import { compile } from "svelte/compiler";

/**
 * Compiles .svelte files for Bun.build — mirrors moonshine's
 * examples/svelte-adopt/src/svelte-plugin.ts.
 */
export const sveltePlugin = (generate: "server" | "client") => ({
  name: "accompany-svelte",
  setup(build: any) {
    build.onLoad({ filter: /\.svelte$/ }, async (args: any) => {
      const source = await Bun.file(args.path).text();
      const { js, css } = compile(source, {
        filename: args.path,
        generate,
        runes: true,
      });
      if (css?.code) {
        // Styles belong in src/app.css; components must not carry <style> so
        // SSR output and hydration stay deterministic. Surface violations.
        console.warn(`[svelte] ${args.path} has a <style> block — move it to app.css`);
      }
      return { contents: js.code, loader: "js" };
    });
  },
});
