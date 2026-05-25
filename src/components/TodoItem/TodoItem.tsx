import type React from "react";
import type { TodoModel } from "../../models/TodoModel";
import type { ActionsTodo } from "../../reducers/TodoReducer";
import type { ReactElement } from "react";
import style from "./TodoItem.module.scss";

interface TodoItemProps {
    todo: TodoModel;
    dispatch: React.Dispatch<ActionsTodo>;
}

export default function TodoItem({ todo, dispatch}: TodoItemProps): ReactElement {
   const { id, text } = todo;

    const onDeleteTodo = () => {
        dispatch({
            type: "DEL_TODO",
            payload: id,
        })
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

