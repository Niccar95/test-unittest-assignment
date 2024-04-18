import * as htmlFunctions from "./../ts/htmlFunctions";
import * as functions from "./../ts/functions";
import { Todo } from "../ts/models/todo";
import { clearTodos } from "../ts/clearTodos";

describe("testing clearTodos", () => {
  let mockRemoveAllTodos: jest.SpyInstance<void>;
  let mockcreateHtml: jest.SpyInstance<void>;

  beforeEach(() => {
    mockRemoveAllTodos = jest.spyOn(functions, "removeAllTodos");
    mockcreateHtml = jest.spyOn(htmlFunctions, "createHtml");

    document.body.innerHTML = `<div id="app">
    <form id="newTodoForm">
      <div>
        <input type="text" id="newTodoText" />
        <button>Skapa</button>
        <button type="button" id="clearTodos">Rensa lista</button>
      </div>
      <div id="error" class="error"></div>
    </form>
    <ul id="todos" class="todo"></ul>
  </div>
`;
  });

  test("This function should clear all todos", () => {
    let todos: Todo[] = [
      { text: "Task 1", done: false },
      { text: "Task 2", done: true },
    ];

    clearTodos(todos);

    expect(mockRemoveAllTodos).toHaveBeenCalled();
  });

  test("This function should clear all todos", () => {
    let todos: Todo[] = [];

    mockRemoveAllTodos.mockImplementation(() => {
      return { success: true, error: "" };
    });
    clearTodos(todos);

    expect(mockcreateHtml).toHaveBeenCalled();
  });
});
