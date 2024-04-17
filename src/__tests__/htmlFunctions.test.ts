import { createHtml } from "../ts/htmlFunctions";
import { Todo } from "../ts/models/todo";

describe("Testing html creation", () => {
  beforeEach(() => {
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

  test("This should create the list", () => {
    let todos: Todo[] = [];

    createHtml(todos);
  });
});
