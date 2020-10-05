const letterCount = require("../exercise-1");

// Write 3 more expect functions to test the function you just wrote.
test("Exercise 1", () => {
  expect(letterCount(["crisp", "bacon"])).toBe(10);
  expect(letterCount(["letter", "count", "successful"])).toBe(21);
  expect(letterCount(["crisp", "bacon", 0])).toBe(10);
  expect(letterCount(["crisp", true])).toBe(5);
  // add more tests here...
});
