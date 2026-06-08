import { makeAutoObservable } from "mobx";
import type { TodoModel } from "../models/TodoModel";
import { nanoid } from "nanoid";

class TodoStore {
  todos: TodoModel[];

  constructor(todos: TodoModel[] = []) {
    this.todos = todos;
    makeAutoObservable(this);
  }

  addTodo(text: string) {
    this.todos.push({ id: nanoid(6), text });
  }

  removeTodo(id: string) {
    this.todos = this.todos.filter((todo) => todo.id !== id);
  }
}

const initialState: TodoModel[] = [
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

export const todoStore = new TodoStore(initialState);
