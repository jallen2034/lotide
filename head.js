// FUNCTION IMPLEMENTATION
const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅🥴💯 Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🥺💀 Assertion Failed: ${actual} !== ${expected}`);
  }
};

// function to take in the first array and return its 0th index
const head = function(actualArr) {
  return actualArr[0];
}

// TEST CODE
assertEqual(head([5,6,7]), 5);
assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello");
assertEqual(head([6]), 5);
assertEqual(head([]), 5);