import { useReducer, type ReactElement } from "react";
import style from "./App.module.scss";
import type { TodoModel } from "../../models/TodoModel";
import { nanoid } from "nanoid";
import { todoReducer } from "../../reducers/TodoReducer";
import TodoInput from "../TodoInput/TodoInput";
import TodoList from "../TodoList/TodoList";

const initialTodos: TodoModel[] = [
	{
		id: nanoid(6),
		text: 'Полить цветы'
	},
	{
		id: nanoid(6),
		text: 'Погулять с собакой'
	},
	{
		id: nanoid(6),
		text: 'Прочитать книгу'
	}
]

export default function App(): ReactElement {
  const [todos, dispatch] = useReducer(todoReducer, initialTodos); 
	return (
		<div className={style.container}>
			<div className={style.inner}>
				<TodoInput dispatch={dispatch} />
				<TodoList todos={todos} dispatch={dispatch}/>
			</div>
		</div>
	)
}
