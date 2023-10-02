import { writable } from "svelte/store";

export const userWritable = writable<any>(undefined);

const storage = globalThis.localStorage;

const storageUser = storage?.getItem("user");

if (!!storageUser) userWritable.set(JSON.parse(storageUser));

userWritable.subscribe(u => {
  if (!u) return storage?.removeItem("user");
  storage?.setItem("user", JSON.stringify(u))
});
