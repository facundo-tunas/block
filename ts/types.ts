export type BlockedPage = {
  url: string;
  blockedUntil: number;
};

export type CurrentBlocked = {
  url: string;
  until: number;
};

export type StorageSchema = {
  blockedPages?: BlockedPage[];
  currentBlocked?: CurrentBlocked;
};


