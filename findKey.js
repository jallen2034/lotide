// FUNCTION IMPLEMENTATION
const assertEqual = function(actual, expected) {
  const inspect = require('util').inspect; 
  if (actual === expected) {
    console.log(`✅🥴💯 Assertion Passed: ${inspect(actual)} === ${inspect(expected)}`);
  } else {
    console.log(`🛑🥺💀 Assertion Failed: ${inspect(actual)} !== ${inspect(expected)}`);
  }
};

// implement takeUntil() function
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/keys
const findKey = function(object, callback) {
  let foundName = "";

  for (let key of Object.keys(object)) {
    let returnBool = callback(object[key]);
    
    if (returnBool) {
      foundName = key;
      break;
    }
  }
  return foundName;
}

// template test case
const found = findKey({
  "Blue Hill": { stars: 1 },
  "Akaleri":   { stars: 3 },
  "noma":      { stars: 2 },
  "elBulli":   { stars: 3 },
  "Ora":       { stars: 2 },
  "Akelarre":  { stars: 3 }
}, x => x.stars === 2) // => "noma"

// test cases 
assertEqual(found, "noma"); 
assertEqual(found,"normie");
assertEqual(found, "reee"); 
