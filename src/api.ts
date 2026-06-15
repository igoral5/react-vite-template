import { nanoid } from "nanoid";
import type { TPost } from "./types";

const posts: TPost[] = [
  { id: nanoid(6), text: "А у нас в квартире газ" },
  { id: nanoid(6), text: "А у нас вопровод, вот" },
  { id: nanoid(6), text: "А у нас в квартире кошка, родила вчера котят" },
];

export const loadPosts = (): Promise<TPost[]> =>
  new Promise((resolve) => {
    setTimeout(() => {
      resolve(posts);
    }, 3000);
  });

export const addPost = (text: string) =>
  new Promise((resolve) => {
    setTimeout(() => {
      posts.push({ id: nanoid(6), text });
      resolve({ ok: true });
    }, 1000);
  });
