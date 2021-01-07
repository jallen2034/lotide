// allItems: an array of strings that we need to look through
// itemsToCount: an object specifying what to count
// loop through all key value pairs in allItems, then set a counter for each name found in the array below for this name to 0
// then at each key, loop through the entire allItems[] array through all its indexes
// inside here, check if whats inside of allItems[i] matches the name of the key in the outer loop AND the value at that key is NOT false
// if so, increment nameCounter to indicate we found a match of that name 1 time
// outside of the inner loop, reassign the value of itemsToCount[key] to whatever value nameCounter is.
// if the value at the current itemsToCount{} key value pair is 0, delete that entire key value pair
// then return updated itemsToCount {} object
const countOnly = function(allItems, itemsToCount) {
  for (key in itemsToCount) {
    let nameCounter = 0;

    for (let i = 0; i < allItems.length; i++) {
      if (allItems[i] === key && itemsToCount[key] !== false) {
        nameCounter++;
      }
    }
    itemsToCount[key] = nameCounter;
    
    if (itemsToCount[key] === 0) {
      delete itemsToCount[key];
    }
  }
  return itemsToCount;
};

// assert equal function implemntation
const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅🥴💯 Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🥺💀 Assertion Failed: ${actual} !== ${expected}`);
  }
};

// array of first names we want to compare against our object of names we pass in
const firstNames = [
  "Karl",
  "Salima",
  "Agouhanna",
  "Fang",
  "Kavith",
  "Jason",
  "Salima",
  "Fang",
  "Joe"
];

// test cases
const result1 = countOnly(firstNames, { "Jason": true, "Karima": true, "Fang": true, "Agouhanna": false });
console.log(result1);
assertEqual(result1["Jason"], 1);
assertEqual(result1["Karima"], undefined);
assertEqual(result1["Fang"], 2);
assertEqual(result1["Agouhanna"], undefined);