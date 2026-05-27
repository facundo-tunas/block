import {
  blockForm,
  durationButtons,
  urlInput,
  currentDuration,
} from "./dom.js";
import { blockedPages, updateBlocked } from "./storage.js";
import { populateList } from "./populate.js";
import { formatDuration } from "./helpers.js";

let currentDurationMinutes = 120;

export function updateDurationDisplay(): void {
  currentDuration.textContent = formatDuration(currentDurationMinutes);
}

blockForm.addEventListener("submit", async (e) => {
  e.preventDefault();

  const url = urlInput.value.trim();
  if (!url) return;

  const existing = blockedPages.find((p) => p.url === url);
  const blockedUntil = Date.now() + currentDurationMinutes * 60 * 1000;

  if (existing) {
    existing.blockedUntil = blockedUntil;
  } else {
    blockedPages.push({ url, blockedUntil });
  }

  await updateBlocked(blockedPages);
  populateList();
  urlInput.value = "";
});

durationButtons.forEach((btn) => {
  btn.addEventListener("click", () => {
    const text = btn.textContent;
    if (text === "-60m")
      currentDurationMinutes = Math.max(0, currentDurationMinutes - 60);
    else if (text === "-30m")
      currentDurationMinutes = Math.max(0, currentDurationMinutes - 30);
    else if (text === "+30m") currentDurationMinutes += 30;
    else if (text === "+60m") currentDurationMinutes += 60;

    updateDurationDisplay();
  });
});
