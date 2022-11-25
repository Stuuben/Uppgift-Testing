/**
 * @jest-environment jsdom
 */
import * as functions from "../ts/main";
import { Todo } from "../ts/models/Todo";
import * as functions2 from "../ts/main";
import { removeAllTodos } from "../ts/functions";

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

/* test("should not add class to div", () => {
  //Arrange
  document.body.innerHTML = `
  <div id="error" class="error"></div>`;
  let error: string = "Errormsg";
  let show: boolean = false;

  //Act
  functions.displayError(error, show);

  //Assert
  expect(
    (document.getElementById("error") as HTMLDivElement).classList.length
  ).toBe(0);
}); */

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
  let todoText: string = "Göre";
  let todos: Todo[] = [new Todo("Hejhopp", true)];

  // act
  functions.createNewTodo(todoText, todos);

  // assert
  expect(spy).toBeCalledTimes(0);
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

/* test("Should call changeTodo", () => {
  //arrange
  let spy = jest.spyOn(functions, "clearTodos").mockReturnValue();

  let todo = new Todo("text", false);
  //act
  functions.toggleTodo(todo);
  //assert
  expect(spy).toHaveBeenCalled();
}); */

/* test("should be able to click", () => {
  // Arrange
  let spy = jest.spyOn(functions, "createNewTodo").mockReturnValue();
  document.body.innerHTML = ` 
  <form id="newTodoForm"><div>
  <input type="text" id="newTodoText" />
  <button>Skapa</button>
    </div></form>;`;

  let todos: Todo[] = [new Todo("inlämning", false)];
  let text = "inlämning";
  functions.init();

  // Act
  document.querySelector("button")?.click();

  // Assert
  expect(spy).toHaveBeenCalled();
}); */

test("Should add class to div correctly", () => {
  //Arrange
  document.body.innerHTML = `
  <div id="errorId" class="show"></div>
  `;

  //Act
  functions.displayError("Error", true);
  //Assert
  expect(
    (document.getElementById("errorId") as HTMLDivElement).classList.length
  ).toBe(1);
});
