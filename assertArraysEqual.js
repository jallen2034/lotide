// import needed modules
const eqArrays = require('./eqArrays');

// function to see if the return value from eqArrays() and "true" match
// throw arr1[] and arr2[] into eqArrays() to compare, if they do this returns true
// check if returnbool === true (truthy) say both arrays match
// otherwise say they dont
const assertArraysEqual = function (arr1, arr2) {
  const returnBool = eqArrays(arr1, arr2);
  return returnBool;
};

// export eqArrays() to be used in a different module elsewhere
module.exports = assertArraysEqual;