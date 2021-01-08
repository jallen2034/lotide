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
const assertEqual = function(actual, expected) {
  const inspect = require('util').inspect; 
  const result = eqArrays(actual, expected);

  if (result) {
    console.log(`✅🥴💯 Assertion Passed: ${inspect(actual)} === ${inspect(expected)}`);
  } else {
    console.log(`🛑🥺💀 Assertion Failed: ${inspect(actual)} !== ${inspect(expected)}`);
  }
};

// implement takeUntil() function
const takeUntil = function(array, callback) {
  const results = [];

  for (let item of array) {
    let returnBool = callback(item);
    if (returnBool) {
      break;
    }
    results.push(item);
  }
  return results;
};

const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
const data2 = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];

// test cases 
assertEqual(takeUntil(data1, x => x < 0), [1, 2, 5, 7, 2]); 
assertEqual(takeUntil(data2, x => x === ','), ['I\'ve', 'been', 'to', 'Hollywood']);
assertEqual(takeUntil(data1, x => x < 0), [1, 2, 8, 2, 9]); 
assertEqual(takeUntil(data2, x => x === ','), ['I\'ve', 'bort', 'to', 'yee']); 