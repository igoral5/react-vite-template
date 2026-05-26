import type { TodoModel } from "../../models/TodoModel";
import type { ReactElement } from "react";
import style from "./TodoItem.module.scss";

interface TodoItemProps {
    todo: TodoModel;
    removeTodo: (id: string) => void;
}

export default function TodoItem({ todo, removeTodo}: TodoItemProps): ReactElement {
   const { id, text } = todo;

    const onDeleteTodo = () => {
        removeTodo(id);
    }

    return (
        <li className={style.todoItem}>
            <div>
                {text}
            </div>
            <button className={style.todoDeleteButton} onClick={onDeleteTodo}>
                удалить
            </button>
        </li>
    ) 
}

