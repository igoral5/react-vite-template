import { nanoid } from "nanoid";
import { ADD_TODO, DEL_TODO, type ActionsTodo } from "../actions/TodoActions";
import type { TodoModel } from "../models/TodoModel";

export type TodoState = TodoModel[];

const initialState: TodoState = [
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
];

export const todoReducer = (
  state: TodoState = initialState,
  action: ActionsTodo,
): TodoState => {
  switch (action.type) {
    case ADD_TODO:
      return [...state, { id: nanoid(6), text: action.text }];
    case DEL_TODO:
      return state.filter((val) => val.id !== action.id);
    default:
      return state;
  }
};
