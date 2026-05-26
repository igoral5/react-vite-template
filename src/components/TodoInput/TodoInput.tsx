import {
  useState,
  type ChangeEvent,
  type ReactElement,
  type SyntheticEvent,
} from "react";
import style from "./TodoInput.module.scss";

interface TodoInputProps {
  addTodo: (text: string) => void;
}

export default function TodoInput({ addTodo }: TodoInputProps): ReactElement {
  const [todoText, setTodoText] = useState<string>("");

  const onInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setTodoText(e.target.value);
  };

  const onAddTodo = (e: SyntheticEvent) => {
    e.preventDefault();
    if (todoText !== "") {
      setTodoText("");
      addTodo(todoText);
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
