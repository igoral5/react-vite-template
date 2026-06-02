import { type ReactElement } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { galleryData } from "../../data/Gallery";
import style from "./Card.module.scss";
import Modal from "../Modal/Modal";
import NotFoundPage from "../../pages/NotFound/NotFound";

export default function Card(): ReactElement {
  const { imgIndex } = useParams();

  const navigator = useNavigate()

  const onClose = () => {
    navigator("/");
  };

  const index = parseInt(imgIndex!);

  if (
    Number.isNaN(index) ||
    index < 0 ||
    index > galleryData.images.length
  ) {
    return <NotFoundPage />;
  }
  const image = galleryData.images[index];

  return (
    <Modal onClose={onClose}>
      <div className={style.container}>
        <img src={image.image} alt={image.description} />
        <p>{image.description}</p>
      </div>
    </Modal>
  );
}
