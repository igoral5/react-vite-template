import { observer } from "mobx-react-lite";
import style from "./TodoList.module.scss";
import type { TodoModel } from "../../models/TodoModel";
import type { ReactElement } from "react";
import TodoItem from "../TodoItem/TodoItem";
import { todoStore } from "../../store/TodoStore";

function TodoList(): ReactElement {
  return (
    <ul className={style.list}>
      {todoStore.todos.map((todo: TodoModel) => (
        <TodoItem key={todo.id} todo={todo} />
      ))}
    </ul>
  );
}

export default observer(TodoList);
