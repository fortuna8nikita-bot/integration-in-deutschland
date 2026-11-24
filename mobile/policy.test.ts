import assert from "node:assert/strict";
import test from "node:test";
import { isAllowed, isStartUrl } from "./policy.ts";

test("https pages are allowed", () => {
  assert.equal(isAllowed("https://www.ausweisapp.bund.de/"), true);
});

test("http, javascript and empty urls are blocked", () => {
  assert.equal(isAllowed("http://example.com"), false);
  assert.equal(isAllowed("javascript:alert(1)"), false);
  assert.equal(isAllowed(""), false);
  assert.equal(isAllowed("not a url"), false);
});

test("mail and phone links stay allowed", () => {
  assert.equal(isAllowed("mailto:amt@example.de"), true);
  assert.equal(isAllowed("tel:+4933916883600"), true);
});

test("placeholder start url is not ready", () => {
  assert.equal(isStartUrl("https://REPLACE-WITH-PUBLISHED-SITE"), false);
  assert.equal(isStartUrl("https://example.com/app"), true);
});
