import type { StorageSchema } from "./types.js";

const domainEl = document.getElementById("blocked-domain");
const untilEl = document.getElementById("blocked-until");

if (domainEl && untilEl) {
  const result = (await browser.storage.local.get(
    "currentBlocked",
  )) as StorageSchema;
  const info = result.currentBlocked;

  if (info) {
    domainEl.textContent = `Blocked: ${info.url}`;
    untilEl.textContent = `Blocked until: ${new Date(
      info.until,
    ).toLocaleString()}`;
    await browser.storage.local.remove("currentBlocked");
  }
}
