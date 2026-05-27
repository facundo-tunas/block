import { blockedPages, initBlocked, updateBlocked } from "./storage.js";

browser.webRequest.onBeforeRequest.addListener(
  async (details): Promise<browser.webRequest.BlockingResponse> => {
    const hostname = new URL(details.url).hostname;
    await initBlocked();

    const now = Date.now();
    const active = blockedPages.filter((p) => p.blockedUntil > now);
    const match = active.find((p) => p.url === hostname);

    if (blockedPages.length !== active.length) {
      await updateBlocked(active);
    }

    if (match) {
      await browser.storage.local.set({
        currentBlocked: { url: match.url, until: match.blockedUntil },
      });
      return { redirectUrl: browser.runtime.getURL("blocked.html") };
    }

    return {};
  },
  { urls: ["<all_urls>"], types: ["main_frame"] },
  ["blocking"],
);
