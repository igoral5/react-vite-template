import {
  useState,
  type ChangeEvent,
  type ReactElement,
  type SyntheticEvent,
} from "react";
import style from "./TodoInput.module.scss";
import { useDispatch } from "../../hooks/TodoHooks";
import { addTodo } from "../../reducers/TodoReducer";

export default function TodoInput(): ReactElement {
  const [todoText, setTodoText] = useState<string>("");

  const dispatch = useDispatch();

  const onInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setTodoText(e.target.value);
  };

  const onAddTodo = (e: SyntheticEvent) => {
    e.preventDefault();
    if (todoText !== "") {
      setTodoText("");
      dispatch(addTodo(todoText));
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
