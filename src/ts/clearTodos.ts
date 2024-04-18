import { removeAllTodos } from "./functions";
import { createHtml } from "./htmlFunctions";
import { Todo } from "./models/todo";

export function clearTodos(todos: Todo[]) {
  removeAllTodos(todos);
  createHtml(todos);
}
