import { observer } from "mobx-react-lite";
import type { TodoModel } from "../../models/TodoModel";
import type { ReactElement } from "react";
import todoStore from "../../store/TodoStore";
import style from "./TodoItem.module.scss";

interface TodoItemProps {
  todo: TodoModel;
}

function TodoItem({ todo }: TodoItemProps): ReactElement {
  const { id, text } = todo;

  const onDeleteTodo = () => {
    todoStore.removeTodo(id);
  };

  return (
    <li className={style.todoItem}>
      <div>{text}</div>
      <button className={style.todoDeleteButton} onClick={onDeleteTodo}>
        удалить
      </button>
    </li>
  );
};

export default observer(TodoItem);
