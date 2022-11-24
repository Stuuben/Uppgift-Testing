/**
 * @jest-enviorment jsdom
 */
import * as functions from "../ts/main";

test("Should clear todo", () => {
  //arrange
  let spy = jest.spyOn(functions, "init").mockReturnValue();

  document.body.innerHTML = `
<button type="button" id="clearTodos">Rensa lista</button>
`;

  //act
  //document.getElementById("clearTodods")?.click();

  //assert
  expect(spy).toHaveBeenCalled();
});
