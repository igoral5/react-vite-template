export interface GalleryItem {
  id: string;
  image: string;
  description: string;
}

export interface GalleryData {
  title: string;
  description: string;
  images: GalleryItem[];
}