export const blockedPagesContainer = document.getElementById(
  "blocked-pages"
) as HTMLDivElement;

export const blockForm = document.getElementById(
  "block-form"
) as HTMLFormElement;

export const durationList = document.getElementById(
  "duration-list"
) as HTMLDivElement;

export const blockButton = document.getElementById(
  "block-button"
) as HTMLButtonElement;

export const urlInput = document.querySelector(
  "input"
) as HTMLInputElement;

export const currentDuration = document.querySelector(
  ".current-duration"
) as HTMLSpanElement;

export const durationButtons = durationList.querySelectorAll(
  "#dr-btn"
) as NodeListOf<HTMLButtonElement>;

export const emptyMessage = document.querySelector(
  ".empty"
) as HTMLParagraphElement;
