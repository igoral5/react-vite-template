import type { GalleryData } from "../types";

export const galleryData: GalleryData = {
  title: "Gallery",
  description: "This is a gallery of my favorite photos",
  images: [
    {
      id: "1",
      image: "https://picsum.photos/seed/4/300/200",
      description: "Описание первой картинки",
    },
    {
      id: "2",
      image: "https://picsum.photos/seed/6/300/200",
      description: "Описание второй картинки",
    },
    {
      id: "3",
      image: "https://picsum.photos/seed/9/300/200",
      description: "Описание третьей картинки",
    },
    {
      id: "4",
      image: "https://picsum.photos/seed/16/300/200",
      description: "Описание четвёртой картинки",
    },
    {
      id: "5",
      image: "https://picsum.photos/seed/17/300/200",
      description: "Описание пятой картинки",
    },
  ],
};