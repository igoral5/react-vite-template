import type { TodoModel } from "../../models/TodoModel";
import type { ReactElement } from "react";
import style from "./TodoItem.module.scss";
import { useDispatch } from "../../hooks/TodoHooks";
import { delTodo } from "../../reducers/TodoReducer";

interface TodoItemProps {
  todo: TodoModel;
}

export default function TodoItem({ todo }: TodoItemProps): ReactElement {
  const { id, text } = todo;

  const dispatch = useDispatch();

  const onDeleteTodo = () => {
    dispatch(delTodo(id));
  };

  return (
    <li className={style.todoItem}>
      <div>{text}</div>
      <button className={style.todoDeleteButton} onClick={onDeleteTodo}>
        удалить
      </button>
    </li>
  );
}
