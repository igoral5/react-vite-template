import type { ReactElement } from "react";
import style from "./App.module.scss";
import { Page } from "../Page/Page";

export default function App(): ReactElement {
  return (
    <div className={style.container}>
      <Page />
    </div>
  );
}
