import type { ReactElement } from "react";
import style from "./App.module.scss";
import NumberList from "../NumberList/NumberList";

export default function App(): ReactElement {
  return <div className={style.container}><NumberList /></div>;
}
