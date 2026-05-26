import type { TodoModel } from "../../models/TodoModel";
import type { ReactElement } from "react";
import style from "./TodoList.module.scss";
import TodoItem from "../TodoItem/TodoItem";

interface TodoListProps {
  todos: TodoModel[];
  removeTodo: (id: string) => void;
}

export default function TodoList({
  todos,
  removeTodo,
}: TodoListProps): ReactElement {
  return (
    <ul className={style.list}>
      {todos.map((todo: TodoModel) => (
        <TodoItem key={todo.id} todo={todo} removeTodo={removeTodo} />
      ))}
    </ul>
  );
}
