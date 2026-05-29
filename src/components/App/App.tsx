import type { ReactElement } from "react";
import Login from "../Login/Login";
import style from "./App.module.scss";

export default function App(): ReactElement {
  return (
    <main className={style.container}>
      <Login />
    </main>
  );
}
