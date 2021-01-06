// https://stackoverflow.com/questions/5016313/how-to-determine-if-a-number-is-odd-in-javascript
// https://stackoverflow.com/questions/20904368/javascript-finding-the-most-middle-value-in-an-array/20904456
// if arrays length mod 2 === 0, then its length is even, otherwise arrays length is odd
// if even, create var evenMiddle const to store the result of the integer less than or equal to array.length / 2, - 1 
// push the index of the array at array[middleArr] into middleArr[]. push the index of the array at array[middleArr + 1] into middleArr[]
const middle = function(array) {
  let middleArr = [];
  
  if (array.length <= 2) {
    return middleArr;
  }

  if (array.length % 2 === 0) {
    const evenMiddle = Math.floor(array.length / 2) - 1;
    middleArr.push(array[evenMiddle]);
    middleArr.push(array[evenMiddle + 1]);
  } else {
    const oddMiddle = Math.floor(array.length / 2);
    middleArr.push(array[oddMiddle]);
  }
  return middleArr;
}

// function to see if the return value from eqArrays() and "true" match
const assertArraysEqual = function (arr1, arr2) {
  const returnBool = eqArrays(arr1, arr2);
  if (returnBool) {
    console.log(`✅🥴💯 Assertion Passed: ${arr1} === ${arr2}`);
  } else {
    console.log(`🛑🥺😞 Assertion Failed: ${arr1} !== ${arr2}`);
  }
};

// function to check if any indexes of both arrays dont match at all
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

// tests
assertArraysEqual(middle([1, 2, 3]), [2]); // => [2]
assertArraysEqual(middle([1, 2, 3, 4, 5]), [3]); // => [3]
assertArraysEqual(middle([1, 2, 3, 4]), [2, 3]); // => [2, 3]
assertArraysEqual(middle([1, 2, 3, 4, 5, 6]), [3]); // => [3, 4]