import { addTodo, removeAllTodos } from "../ts/functions";
import { Todo } from "../ts/models/Todo";

test("Should add todo correctly", () => {});

//

//

//
test("Should remove todo correctly", () => {
  // Arange
  let aList: Todo[] = [new Todo("Lär dig koda!", false)];
  let length = aList.length;
  let aTodo =
    // Act

    // Assert
    expect(length).toBe("Lär dig koda!");
});
