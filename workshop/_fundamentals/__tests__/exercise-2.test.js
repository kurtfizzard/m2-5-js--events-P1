const combineArrays = require("../exercise-2");

// Write 3 more expect functions to test the function you just wrote.
test("Exercise 2", () => {
  expect(
    combineArrays(["crisp", "bacon"], ["zuchini", "apple"])
  ).toStrictEqual(["apple", "bacon", "crisp", "zuchini"]);
  expect(combineArrays(["crisp", "bacon"], ["zuchini", 6])).toStrictEqual(
    undefined
  );
  expect(combineArrays([true], [false])).toStrictEqual(undefined);
  expect(
    combineArrays(["tomato", "rice"], ["pineapple", "shrimp"])
  ).toStrictEqual(["pineapple", "rice", "shrimp", "tomato"]);
  // add more tests here...
});
