import type React from "react";
import type { TodoModel } from "../../models/TodoModel";
import type { ActionsTodo } from "../../reducers/TodoReducer";
import type { ReactElement } from "react";
import style from "./TodoList.module.scss";
import TodoItem from "../TodoItem/TodoItem";

interface TodoListProps {
  todos: TodoModel[];
  dispatch: React.Dispatch<ActionsTodo>;
}

export default function TodoList({
  todos,
  dispatch,
}: TodoListProps): ReactElement {
  return (
    <ul className={style.list}>
      {todos.map((todo: TodoModel) => (
        <TodoItem key={todo.id} todo={todo} dispatch={dispatch} />
      ))}
    </ul>
  );
}
