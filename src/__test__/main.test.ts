/**
 * @jest-environment jsdom
 */
import * as functions from "../ts/main";

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
