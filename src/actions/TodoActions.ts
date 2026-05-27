export const ADD_TODO = "ADD_TODO";
export const DEL_TODO = "DEL_TODO";

type ActionAddTodo = {
    type: typeof ADD_TODO;
    text: string;
}

type ActionDelTodo = {
    type: typeof DEL_TODO;
    id: string;
}

export type ActionsTodo = ActionAddTodo | ActionDelTodo;

