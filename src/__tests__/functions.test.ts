import { addTodo, changeTodo, removeAllTodos } from "../ts/functions";
import { Todo } from "../ts/models/todo";

describe("testing add todo", () => {
  test("this should add a new todo", () => {
    const todoText = "hello";
    let todos: Todo[] = [];

    addTodo(todoText, todos);

    expect(todos[0].text).toBe("hello");
    expect(todos[0].done).toBeFalsy();
  });

  test("This task should gave more than 2 letters", () => {
    let todos: Todo[] = [];
    const todoText = "hello";
    addTodo(todoText, todos);
    expect(todos[0].text.length).toBeGreaterThan(2);
  });
});

describe("toggle testing", () => {
  test("this should toggle todo", () => {
    const test = { text: "yo", done: false };
    changeTodo(test);

    expect(test.done).toBeFalsy;
  });
});

describe("remove all todos", () => {
  test("remove all todos", () => {
    const Todo = { text: "yooo", done: true };
    const todos: Todo[] = [Todo];
    removeAllTodos(todos);

    expect(todos.length).toBeLessThan(1);
  });
});
