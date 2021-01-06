// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/label
// outer: loop through all indexes in arr1, up to array1.len
// inner: loop through all indexes in arr2, up to array2.len
// compare each item in arra1[] (at index [i]) to each item in arr2[]
// if item in arra1[] matches arr2[], then reset the value of the inner loop to 0
// and then FORCE the outer loop to incremenet again to proceed with comparing the next index in arr1[] (with continue)
// if we have compared the entire of arr2[] against arr1[] and have not found a match, 
// we know we want to keep the current arr1[] item at index [i] + push it to our previously empty newArr[]
// continue this process until all indexes of arr1[] are navigated
// finally return the completed newArr outside the function where it is needed
const without = function (arr1, arr2) {
  let newArr = [];
  outer: for (let i = 0; i < arr1.length; i++) {
    inner: for (let j = 0; j < arr2.length; j++) {
      if (arr1[i] === arr2[j]) {
        j = 0;
        continue outer;
      }
    }
    newArr.push(arr1[i]);
  }
  return newArr;
};

// test cases to test without() function
console.log(without([1, 2, 3], [1]));// => [2, 3]
console.log(without(["1", "2", "3"], [1, 2, "3"])); // => ["1", "2"]
const words = ["hello", "world", "lighthouse"];
console.log(without(words, ["lighthouse"])); 