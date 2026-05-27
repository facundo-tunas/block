import { blockedPagesContainer } from "./dom.js";
import { createElement } from "./helpers.js";
import { blockedPages, updateBlocked } from "./storage.js";

export function populateList(): void {
  const pages: HTMLElement[] = [];

  blockedPages.forEach((element, index) => {
    const url = createElement("p", {
      textContent: element.url,
    });

    const date = createElement("p", {
      textContent: new Date(element.blockedUntil).toLocaleString(),
    });

    const removeBtn = createElement("button", {
      textContent: "Remove",
    });

    removeBtn.addEventListener("click", async () => {
      blockedPages.splice(index, 1);
      await updateBlocked(blockedPages);
      populateList();
    });

    pages.push(
      createElement("div", {
        className: "page",
        children: [url, date, removeBtn],
      }),
    );
  });

  blockedPagesContainer.innerHTML = "";
  blockedPagesContainer.append(...pages);
}
