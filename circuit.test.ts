import { CircuitBreaker } from "./circuit.ts";
import { test } from "node:test";
import assert from "node:assert/strict";
test("opens and recovers", () => {
  let clock = 0;
  const cb = new CircuitBreaker(2, 5, () => clock);
  cb.record(false); cb.record(false);
  assert.ok(!cb.allow());
  clock = 5;
  assert.ok(cb.allow());
});
