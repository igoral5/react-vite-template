import type { ReactElement } from "react";
import style from "./App.module.scss";
import TodoInput from "../TodoInput/TodoInput";
import TodoList from "../TodoList/TodoList";


export default function App(): ReactElement {
  return (
    <div className={style.container}>
      <div className={style.inner}>
        <TodoInput />
        <TodoList />
      </div>
    </div>
  );
}
