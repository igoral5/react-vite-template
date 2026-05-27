import { createAction } from "@reduxjs/toolkit";

export const addTodo = createAction<string>("ADD_TODO");
export const delTodo = createAction<string>("DEL_TODO");


