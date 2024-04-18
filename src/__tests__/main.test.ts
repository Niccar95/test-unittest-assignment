import { createNewTodo } from "../ts/main";
import { IAddResponse } from "../ts/models/IAddResponse";
import { Todo } from "../ts/models/todo";
import * as functions from "./../ts/functions";
import * as htmlFunctions from "./../ts/htmlFunctions";

describe("Testing individual functions", () => {
  let mockAddTodo: jest.SpyInstance<IAddResponse>;
  let mockCreateHTML: jest.SpyInstance<void>;
  let mockDisplayError: jest.SpyInstance<void>;

  beforeEach(() => {
    mockAddTodo = jest.spyOn(functions, "addTodo");
    mockCreateHTML = jest.spyOn(htmlFunctions, "createHtml");
    mockDisplayError = jest.spyOn(htmlFunctions, "displayError");
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
  </div>`;
  });

  afterEach(() => {
    mockAddTodo.mockReset();
    mockCreateHTML.mockReset();
    mockDisplayError.mockReset();
  });

  test("It should call the createHtml function", () => {
    let todoText = "hello";
    let todo: Todo[] = [];

    mockAddTodo.mockImplementation(() => {
      return { success: true, error: "" };
    });

    createNewTodo(todoText, todo);

    expect(mockCreateHTML).toHaveBeenCalled();
  });

  test("It should call the displayError function", () => {
    let todoText = "hello";
    let todo: Todo[] = [];

    mockAddTodo.mockImplementation(() => {
      return { success: false, error: "bye" };
    });

    createNewTodo(todoText, todo);

    expect(mockDisplayError).toHaveBeenCalled();
  });
});
