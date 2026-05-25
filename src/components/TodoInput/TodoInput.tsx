import type React from "react";
import type { ActionsTodo } from "../../reducers/TodoReducer";
import {
  useState,
  type ChangeEvent,
  type ReactElement,
  type SyntheticEvent,
} from "react";
import style from "./TodoInput.module.scss";

interface TodoInputProps {
  dispatch: React.Dispatch<ActionsTodo>;
}

export default function TodoInput({ dispatch }: TodoInputProps): ReactElement {
  const [todoText, setTodoText] = useState<string>("");

  const onInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setTodoText(e.target.value);
  };

  const onAddTodo = (e: SyntheticEvent) => {
    e.preventDefault();
    if (todoText !== "") {
      setTodoText("");
      dispatch({
        type: "ADD_TODO",
        payload: todoText,
      });
    }
  };
  return (
    <form onSubmit={onAddTodo} className={style.todoForm}>
      <input
        type="text"
        className={style.todoInput}
        placeholder="Введите todo..."
        onChange={onInputChange}
        value={todoText}
      />
      <button type="submit" className={style.todoSubmitButton}>
        Добавить
      </button>
    </form>
  );
}
