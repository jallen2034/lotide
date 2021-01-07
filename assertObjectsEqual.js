// assert equal function implementation
const eqArrays = function(arr1, arr2) {
  let isMatching = true;

  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) {
      isMatching = false;
      return isMatching;
    }
  }
  return isMatching;
};

// Returns true if both objects have identical keys with identical values.
// Otherwise you get back a big fat false!
// initally set isMatching to true and then loop through every key in object 1
// condtion to catch when object1[key] doesnt match object2[key] when both of these vals are arrays[]
// run eqArrays() function passing in object1[key] and object2[key] arrays to compare
// if the return value from eqArrays() = false then set isMatching to false 
// otherwise leave isMatching to true, then return that updated bool 
// then have another if check to catch when both object1[key] and object1[key] are not arrays and see if they match
const eqObjects = function(object1, object2) {
  let isMatching = true;
  for (key in object1) {

    if (Array.isArray(object1[key])) {
      return !eqArrays(object1[key], object2[key]) ? isMatching = false : isMatching;
    }

    if (object1[key] !== object2[key]) {
      isMatching = false;
      return isMatching;
    }
  }
  return isMatching;
};

// assertObjectsEqual function takes in actual and expected params as two seperate objects
// pass these two objects into eqObjects to compare if they match, if they do, return true, if not return false
// check if result === truthy, if so, console log that the first object matches the second object
// otherwise log  that the first object does NOT matches the second object
const assertObjectsEqual = function(actual, expected) {
  const inspect = require('util').inspect; // <= add this line
  const result = eqObjects(actual, expected);

  if (result) {
    console.log(`✅🥴💯 Assertion Passed: ${inspect(actual)} === ${inspect(expected)}`);
  } else {
    console.log(`🛑🥺💀 Assertion Failed: ${inspect(actual)} !== ${inspect(expected)}`);
  }
};

const object1 = { keyRed: "1", keyBlue: ["2", 3] };
const object2 = { keyBlue: ["2", 3], keyRed: "1" };
const object3 = { keyRed: "1", keyBlue: ["2", 1] };
const object4 = { keyBlue: ["7", 3], keyRed: "1" };

// test call this function to test if two objects
assertObjectsEqual(object1, object2); // => match
assertObjectsEqual(object3, object4); // => match