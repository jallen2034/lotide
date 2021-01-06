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

// function to see if the return value from eqArrays() and "true" match
const assertEqual = function (actual, expected) {
  if (actual !== expected) {
    console.log(`🛑🥺😞 Assertion Failed: ${actual} !== ${expected}`);
  } else if (actual === expected) {
    console.log(`✅🥴💯 Assertion Passed: ${actual} === ${expected}`);
  }
};

// test and use functions
assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true);
assertEqual(eqArrays([1, 2, 3], [3, 2, 1]), true);
assertEqual(eqArrays(["1", "2", "3"], ["1", "2", "3"]), true);
assertEqual(eqArrays(["1", "2", "3"], ["1", "2", 3]), true);