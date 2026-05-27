import { initBlocked } from "./storage.js";
import { updateDurationDisplay } from "./listeners.js";
import { urlInput } from "./dom.js";
import { populateList } from "./populate.js";

initBlocked().then(populateList);
updateDurationDisplay();

const tabs = await browser.tabs.query({ active: true, currentWindow: true });
const currentUrl = tabs[0]?.url;
if (currentUrl) {
  urlInput.value = new URL(currentUrl).hostname;
}

