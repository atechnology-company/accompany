import { describe, expect, test } from "bun:test";
import worker from "../dist/worker.js";

const env = {
  ASSETS: { fetch: async () => new Response(null, { status: 404 }) },
};

describe("Moonshine Svelte request pipeline (run build first)", () => {
  for (const [path, title] of [
    ["/", "accompany"],
    ["/cissa", "cissa"],
    ["/cupboard", "cupboard"],
  ]) {
    test(`${path} renders SSR and strips HEAD bodies`, async () => {
      const response = await worker.fetch(
        new Request(`https://accompany.tsc.hk${path}`),
        env,
      );
      expect(response.status).toBe(200);
      const html = await response.text();
      expect(html).toContain(`<title>${title}`);
      expect(html).toContain("/assets/uno.css");
      expect(html).toContain("/assets/client.js");
      expect(html).toContain("family=DM+Sans");
      expect(html).toContain('href="https://tsc.hk"');
      expect(html).toContain('href="https://atechnology.company"');
      expect(html).not.toContain("a technology company");
      expect(html).toContain('class="material-symbol symbol-asterisk" aria-hidden="true"');
      expect(html).toContain('class="material-symbol symbol-downward" aria-hidden="true"');
      expect(html).toContain('class="material-symbol symbol-outward" aria-hidden="true"');
      expect(html).not.toMatch(/[✳↗↓]/u);
      const head = await worker.fetch(
        new Request(`https://accompany.tsc.hk${path}`, { method: "HEAD" }),
        env,
      );
      expect(head.status).toBe(200);
      expect(await head.text()).toBe("");
    });
  }

  test("homepage includes both genuine Crepus outputs and revised product forms", async () => {
    const response = await worker.fetch(
      new Request("https://accompany.tsc.hk/"),
      env,
    );
    const html = await response.text();
    expect(html).toContain("local intelligence.");
    expect(html).toContain("closing-title flex flex-col");
    expect(html).toContain("two forms of cissa");
    expect(html).not.toContain("detachable battery concept");
  });

  test("unknown routes stay 404 and writes remain disallowed", async () => {
    const missing = await worker.fetch(
      new Request("https://accompany.tsc.hk/missing"),
      env,
    );
    expect(missing.status).toBe(404);
    const write = await worker.fetch(
      new Request("https://accompany.tsc.hk/", { method: "POST" }),
      env,
    );
    expect(write.status).toBe(405);
  });
});
