// import needed modules
const eqArrays = require('./eqArrays');

// function to see if the return value from eqArrays() and "true" match
// throw arr1[] and arr2[] into eqArrays() to compare, if they do this returns true
// check if returnbool === true (truthy) say both arrays match
// otherwise say they dont
const assertArraysEqual = function (arr1, arr2) {
  const returnBool = eqArrays(arr1, arr2);
  if (returnBool) {
    console.log(`✅🥴💯 Assertion Passed: ${arr1} === ${arr2}`);
  } else {
    console.log(`🛑🥺😞 Assertion Failed: ${arr1} !== ${arr2}`);
  }
};

// test and use functions
// assertArraysEqual([1, 2, 3], [1, 2, 3]);
// assertArraysEqual([1, 2, 3], [3, 2, 1]);
// assertArraysEqual(["1", "2", "3"], ["1", "2", "3"]);
// assertArraysEqual(["1", "2", "3"], ["1", "2", 3]);

// export eqArrays() to be used in a different module elsewhere
module.exports = assertArraysEqual;