// if this file calls anything that interacts with dom everything explodes so dont
import type { BlockedPage, StorageSchema } from "./types.js";

export let blockedPages: BlockedPage[] = [];

export async function initBlocked(): Promise<void> {
  const result = (await browser.storage.local.get(
    "blockedPages",
  )) as StorageSchema;

  blockedPages = result.blockedPages ?? [];
}

export async function updateBlocked(pages: BlockedPage[]): Promise<void> {
  await browser.storage.local.set({ blockedPages: pages });
}
