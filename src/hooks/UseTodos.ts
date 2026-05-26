import { useCallback, useRef, useState } from "react";
import type { TodoModel } from "../models/TodoModel";
import { type ITodos, Todos } from "../services/Todos";

export function useTodos(initialTodos?: TodoModel[]) {
    const todos = useRef<ITodos>(new Todos(initialTodos));

    const buildTodosState = useCallback(() => [...todos.current.getList()], []);

    const [state, setState] = useState(buildTodosState);

    const addTodo = useCallback((text: string) => {
        todos.current.add(text);
        setState(buildTodosState())
    }, [buildTodosState]);

    const removeTodo = useCallback((id: string) => {
        todos.current.remove(id);
        setState(buildTodosState());
    }, [buildTodosState])

    return [state, {addTodo, removeTodo}] as const;
}