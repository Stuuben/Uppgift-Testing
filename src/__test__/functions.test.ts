/**
 *@jest-enviorment jsdom
 */
import { addTodo, changeTodo, removeAllTodos } from "../ts/functions";
import { Todo } from "../ts/models/Todo";

test("Should Not add todo correctly", () => {
  //arrange
  let mynotTodos: Todo[] = [];
  //act
  addTodo("HE", mynotTodos);
  //assert
  expect(mynotTodos.length).toBe(0);
});

test("Should add todo correctly", () => {
  //arrange
  let myTodos: Todo[] = [];
  //act
  addTodo("Min bästa Todo", myTodos);
  //assert
  expect(myTodos.length).toBe(1);
});

test("Should remove todo correctly", () => {
  // Arange
  let aList: Todo[] = [new Todo("Lär dig koda!", false)];

  // Act
  removeAllTodos(aList);
  // Assert
  expect(aList.length).toBe(0);
});

test("Should change todo correctly", () => {
  //arange
  let x: Todo = new Todo("åka biil", false);
  //act
  changeTodo(x);
  // arrange
  expect(x.done).toBe(true);
});
