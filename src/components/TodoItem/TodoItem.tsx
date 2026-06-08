import { observer } from "mobx-react-lite";
import type { TodoModel } from "../../models/TodoModel";
import type { ReactElement } from "react";
import style from "./TodoItem.module.scss";
import { todoStore } from "../../store/TodoStore";

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
