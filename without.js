// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/slice
// function takes in arr1[] and arr2[] as it arguments 
// loop through all indexes in arr1, if whats inside arr1[i] matches arr2[i]
// then remove the index from arr1(i) through to arr1(i + 1)
// return the new spliced arr1 with the removed index 
const without = function (arr1, arr2) {
  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] === arr2[i]) {
      arr1.splice(i, i + 1);
    }
  }
  return arr1;
};

// test cases to test without() function
console.log(without([1, 2, 3], [1]));// => [2, 3]
console.log(without(["1", "2", "3"], [1, 2, "3"])); // => ["1", "2"]