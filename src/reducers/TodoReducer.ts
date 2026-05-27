import { nanoid } from "nanoid";
import type { TodoModel } from "../models/TodoModel";
import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

export type TodoState = {
  todos: TodoModel[];
};

const initialState: TodoState = {
  todos: [
    {
      id: nanoid(6),
      text: "Полить цветы",
    },
    {
      id: nanoid(6),
      text: "Погулять с собакой",
    },
    {
      id: nanoid(6),
      text: "Прочитать книгу",
    },
  ],
};

const todosSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {
    addTodo: (state, action: PayloadAction<string>) => {
      state.todos.push({ id: nanoid(6), text: action.payload });
    },
    delTodo: (state, action: PayloadAction<string>) => {
      state.todos = state.todos.filter((val) => val.id !== action.payload);
    },
  },
});

export const { addTodo, delTodo } = todosSlice.actions;
export const reducer = todosSlice.reducer;
