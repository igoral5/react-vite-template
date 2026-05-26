import { type ReactElement } from "react";
import style from "./App.module.scss";
import { nanoid } from "nanoid";
import type { TodoModel } from "../../models/TodoModel";
import { useTodos } from "../../hooks/UseTodos";
import TodoInput from "../TodoInput/TodoInput";
import TodoList from "../TodoList/TodoList";

const initialTodos: TodoModel[] = [
  {
    id: nanoid(6),
    text: "Полить цветы",
  },
  {
    id: nanoid(6),
    text: "Погулять с собакой",
  },
  {
    id: nanoid(6),
    text: "Прочитать книгу",
  },
];

export default function App(): ReactElement {
  const [todos, { addTodo, removeTodo }] = useTodos(initialTodos);
  return (
    <div className={style.container}>
      <div className={style.inner}>
        <TodoInput addTodo={addTodo} />
        <TodoList todos={todos} removeTodo={removeTodo} />
      </div>
    </div>
  );
}
