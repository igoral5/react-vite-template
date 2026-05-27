import type { TodoModel } from "../../models/TodoModel";
import type { ReactElement } from "react";
import style from "./TodoList.module.scss";
import TodoItem from "../TodoItem/TodoItem";
import { useSelector } from "../../hooks/TodoHooks";


export default function TodoList(): ReactElement {

  const todos = useSelector(store => store.todos);

  return (
    <ul className={style.list}>
      {todos.map((todo: TodoModel) => (
        <TodoItem key={todo.id} todo={todo} />
      ))}
    </ul>
  );
}
