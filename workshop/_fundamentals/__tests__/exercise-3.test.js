const getPairing = require("../exercise-3");

// Write 3 more expect functions to test the function you just wrote.
test("Exercise 3", () => {
  expect(getPairing("burger")).toBe("beer");
  expect(getPairing("fish")).toBe("white wine");
  expect(getPairing("beef")).toBe("red wine");
  expect(getPairing(6)).toBe("I didn't get that!");
  // add more tests here...
});
