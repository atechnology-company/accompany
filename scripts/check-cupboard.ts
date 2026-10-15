// Run after bun run build: bun scripts/check-cupboard.ts.
import assert from "node:assert/strict";
import worker from "../dist/worker.js";
const env = {
  ASSETS: { fetch: async () => new Response("missing", { status: 404 }) },
};
for (const path of ["/", "/cissa", "/cupboard"]) {
  const response = await worker.fetch(
    new Request(`http://localhost${path}`),
    env,
  );
  assert.equal(response.status, 200, path);
  const html = await response.text();
  assert.ok(html.includes("<main>"), path);
  if (path === "/cupboard") {
    for (const text of [
      "your digital life.",
      "at home.",
      "mono protocol",
      "scoped per app",
      "does not run the models itself in v1",
      "$400 target",
      "prelaunch",
      "hardware design study",
      "an illustrated session",
    ])
      assert.ok(html.includes(text), text);
    assert.equal((html.match(/<h1 /g) ?? []).length, 1);
    assert.equal((html.match(/<details/g) ?? []).length, 6);
    assert.ok(!html.includes("/investors"));
  }
}
assert.equal(
  (await worker.fetch(new Request("http://localhost/missing"), env)).status,
  404,
);
assert.equal(
  (
    await worker.fetch(
      new Request("http://localhost/cupboard", { method: "POST" }),
      env,
    )
  ).status,
  405,
);
console.log("SSR, route, feature-content, and method checks passed");
