import { nanoid } from "nanoid";
import { addTodo, delTodo } from "../actions/TodoActions";
import type { TodoModel } from "../models/TodoModel";
import { createReducer } from "@reduxjs/toolkit";

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

export const todoReducer = createReducer(initialState, (bulder) => {
  bulder
    .addCase(addTodo, (state, action) => {
      state.todos.push({ id: nanoid(6), text: action.payload });
    })
    .addCase(delTodo, (state, action) => {
      state.todos = state.todos.filter((val) => val.id !== action.payload);
    });
});
