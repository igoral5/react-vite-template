import { nanoid } from "nanoid";
import type { TodoModel } from "../models/TodoModel";

export interface ITodos {
  getList(): TodoModel[];
  add(text: string): void;
  remove(id: string): void;
}

export class Todos implements ITodos {
  constructor(protected todos: TodoModel[] = []) {}

  getList(): TodoModel[] {
    return this.todos;
  }

  add(text: string): void {
    this.todos.push({ id: nanoid(6), text });
  }

  remove(id: string): void {
    this.todos = this.todos.filter((todo) => todo.id !== id);
  }
}
