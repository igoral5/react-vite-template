import { observer } from "mobx-react-lite";
import {
  useState,
  type ChangeEvent,
  type ReactElement,
  type SyntheticEvent,
} from "react";
import todoStore from "../../store/TodoStore";
import style from "./TodoInput.module.scss";

function TodoInput(): ReactElement {
  const [todoText, setTodoText] = useState<string>("");

  const onInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    setTodoText(event.target.value);
  };

  const onAddTodo = (event: SyntheticEvent) => {
    event.preventDefault();
    if (todoText !== "") {
      setTodoText("");
      todoStore.addTodo(todoText);
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

export default observer(TodoInput);
