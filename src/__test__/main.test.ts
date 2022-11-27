/**
 * @jest-environment jsdom
 */
import { Todo } from "../ts/models/Todo";
import * as functions from "../ts/main";
import * as FNfunction from "../ts/functions";

afterEach(() => {
  jest.restoreAllMocks();
});

test("Should clear todo", () => {
  //arrange
  const spy = jest.spyOn(functions, "clearTodos").mockReturnValue();
  document.body.innerHTML = `<button type="button" id="clearTodos">Rensa lista</button>`;

  functions.init();
  //act
  document.getElementById("clearTodos")?.click();

  //assert
  expect(spy).toHaveBeenCalled();
});

test("Should add html to div", () => {
  // arrange

  document.body.innerHTML = `
  <div id="error" class="error"></div>
  `;

  let error: string = "error";
  let show: boolean = true;
  //act
  functions.displayError(error, show);

  //assert
  expect((document.getElementById("error") as HTMLDivElement).innerHTML).toBe(
    "error"
  );
});

test("Should create a html for Todo", () => {
  // arrange
  let spy = jest.spyOn(functions, "createHtml").mockReturnValue();
  let todoText: string = "Göre";
  let todos: Todo[] = [new Todo("Hejhopp", false)];
  // act
  functions.createNewTodo(todoText, todos);
  // assert
  expect(spy).toBeCalledTimes(1);
});

test("Should not create a html for Todo", () => {
  // arrange
  let spy = jest.spyOn(functions, "displayError").mockReturnValue();
  let todoText: string = "Gö";
  let todos: Todo[] = [new Todo("Hejhopp", true)];

  // act
  functions.createNewTodo(todoText, todos);

  // assert
  expect(spy).toBeCalledTimes(1);
});

test("Should call changeHtml", () => {
  //arrange
  let spy = jest.spyOn(functions, "createHtml").mockReturnValue();

  let todo = new Todo("text", false);
  //act
  functions.toggleTodo(todo);
  //assert
  expect(spy).toHaveBeenCalled();
});

test("Should add class to div correctly", () => {
  //Arrange
  document.body.innerHTML = `
  <div id="error" class="error"></div>
  `;
  let error: string = "Error";
  let show: boolean = true;

  //Act
  functions.displayError("Error", show);
  //Assert
  expect(document.getElementById("error")?.classList.contains("show")).toBe(
    true
  );
});

test("Should not add class to div correctly", () => {
  //Arrange
  document.body.innerHTML = `
  <div id="error" class="error show"></div>
  `;
  let error: string = "Error";
  let show: boolean = false;

  //Act
  functions.displayError("error", show);

  //Assert
  expect(document.getElementById("error")?.classList.contains("show")).toBe(
    false
  );
});

test("Should run function correctly", () => {
  // Arrange
  let spy1 = jest.spyOn(functions, "createHtml").mockReturnValue();
  let spy2 = jest.spyOn(FNfunction, "removeAllTodos").mockReturnValue();

  // Act
  functions.clearTodos([]);

  // Assert
  expect(spy1).toHaveBeenCalledTimes(1);
  expect(spy2).toHaveBeenCalledTimes(1);
});

test("Should create html", () => {
  // Arrange
  document.body.innerHTML = `
 <ul id="todos"></ul>
 `;

  const todos = [
    {
      text: "todo1",
      done: false,
    },
    {
      text: "todo2",
      done: true,
    },
  ];

  // Act
  functions.createHtml(todos);

  // Assert

  expect(document.getElementById("todos")?.children.length).toBe(2);
});
