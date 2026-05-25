import type { Reducer } from "react";
import type { TodoModel } from "../models/TodoModel";
import { nanoid } from "nanoid";

type TodoState = TodoModel[];

type ActionAddTodo = {
    type: "ADD_TODO";
    payload: string;
}

type ActionDelTodo = {
    type: "DEL_TODO";
    payload: string;
}

export type ActionsTodo = ActionAddTodo | ActionDelTodo;

export const todoReducer: Reducer<TodoState, ActionsTodo> = (value, action) => {
    switch (action.type) {
        case "ADD_TODO":
            return [...value, {id: nanoid(6), text: action.payload}];
        case "DEL_TODO":
            return value.filter((val) => val.id !== action.payload);
    }
};


