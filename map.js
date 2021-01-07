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
  const inspect = require('util').inspect; // <= add this line
  const result = eqArrays(actual, expected);

  if (result) {
    console.log(`✅🥴💯 Assertion Passed: ${inspect(actual)} === ${inspect(expected)}`);
  } else {
    console.log(`🛑🥺💀 Assertion Failed: ${inspect(actual)} !== ${inspect(expected)}`);
  }
};

// collection of words
// Let's define map in a minimal way in order to fix the error.
const words = ["ground", "control", "to", "major", "tom"];
const map = function(array, callback) {
  const results = [];

  for (let item of array) {
    results.push(callback(item));
  }
  return results;
}

// other test cases 
assertEqual(map(words, function(wordItem) {return wordItem[0]}), [ 'g', 'c', 't', 'm', 't' ]); 
assertEqual(map(words, function(wordItem) {return wordItem[0]}), [ 'g', 'c', 't', 'c', 'r' ]);
assertEqual(map(words, function(wordItem) {return wordItem[0]}), [ 'g', 'c', 't', 'c', 'r' ]);


