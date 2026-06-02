import type { ReactElement } from "react";
import type { GalleryItem } from "../../types";
import style from "./Gallery.module.scss";
import { Link, useLocation } from "react-router-dom";

interface GalleryProps {
  title: string;
  description: string;
  images: GalleryItem[];
}

export default function Gallery({
  title,
  description,
  images,
}: GalleryProps): ReactElement {
  const location = useLocation();

  return (
    <section>
      <h2>{title}</h2>
      <p>{description}</p>
      <ul className={style.container}>
        {images.map((image, index) => (
          <li key={image.id}>
            <Link
              to={`/gallery/${index}`}
              state={{ backgroundLocation: location }}
            >
              <img src={image.image} alt={image.description} />
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
}
