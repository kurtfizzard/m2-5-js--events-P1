// Exercise 4
//
// 1. Write a function that accepts an array of objects and a key (string) as arguments and returns a new array with only the values of the corresponding key.
// e.g. getValues([{name: 'chris', age: 23}, {name: 'liv', age: 36}, {name: 'dave', age: 43}, 'age']) returns [23, 36, 43]

// - If the provided key is not in any of the objects, return null for that value;

const getValues = (arr, key) => {
  // create a new array formed by looping over the given array
  //  checking to see if the key is present in each element
  let newArray = arr.map((obj) => {
    // if the provided key is not present in the object, return null
    if (!obj[key]) {
      return null;
    }
    // if the provided key is present in the object, add it's value to the new array
    return obj[key];
  });
  // return the new array
  return newArray;
};

// let newArray = arr.map((obj) => obj[key] ? obj[key] : null);
// return newArray;

// 2. Do a console.log to verify your function.

// 3. Test your function.
// Look for the corresponding exercise file in the __tests__ folder.
// Add some test cases in the test. The first one is done for you.

module.exports = getValues;
