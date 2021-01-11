// FUNCTION IMPLEMENTATION
const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅🥴💯 Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🥺💀 Assertion Failed: ${actual} !== ${expected}`);
  }
};

// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/keys
// Obkect.keys method takes in entire bestTVShowObj{} object as its argument and returns an array of keys which is stored
// in const keys, we then loop through this array of keys with for (key in keys) 
const findKeyByValue = function(bestTVShowObj, valToSearch) {
  const keys = Object.keys(bestTVShowObj);
  console.log(keys);
  
  for (key of keys){
    if (bestTVShowObj[key] === valToSearch) {
      return key;
    }
  }
};

// object to do our testing with
const bestTVShowsByGenre = { 
  sci_fi: "The Expanse",
  comedy: "Brooklyn Nine-Nine",
  comedy2: "Silicon Valley",
  drama:  "The Wire",
  drama2:  "Breaking Bad",
  drama3:  "Mr. Robot",
};

// test cases
assertEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");
assertEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined);

