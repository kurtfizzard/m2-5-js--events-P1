// Exercise 1
//
// 1. Write a function that returns the sum of the letter count of each string in the array
// e.g. letterCount(["crisp", "bacon"]) returns 10

const letterCount = (arr) => {
  // create a new variable for the sum of the letter count of each string in the array
  let sum = 0;
  // loop over each element in the array
  arr.forEach((element) => {
    // if they are all strings add the string's length to the total
    if (typeof element === "string") {
      sum += element.length;
    }
    // if an element is not a string, skip it
    return;
  });
  // return the sum of the string lengths
  return sum;
};

// 2. Do a console.log to verify your function.

// 3. Test your function.
// Look for the corresponding exercise file in the __tests__ folder.
// Add some test cases in the test. The first one is done for you.

module.exports = letterCount;
