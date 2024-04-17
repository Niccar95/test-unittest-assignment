import { IAddResponse } from "../ts/models/IAddResponse";
import * as functions from "./../ts/functions";

describe("add todos", () => {
  let AddTodo: jest.SpyInstance<IAddResponse>;
  beforeEach(() => {
    AddTodo = jest.spyOn(functions, "addTodo");
  });

  test("add the todos", () => {
    AddTodo.mockImplementation(() => {
      return { success: true, error: "" };
    });
  });
});
