import type { ReactElement } from "react";
import { Link } from "react-router-dom";
import style from "./NotFound.module.scss";
import pageNotFound from "../../assets/404.svg";

export default function NotFoundPage(): ReactElement {
  return (
    <div className={style.container}>
      <div className={style.content}>
        <img alt="page not found" src={pageNotFound} />
        <br />
        <Link to="/" className={style.link}>
          Перейти в галерею
        </Link>
      </div>
    </div>
  );
}
