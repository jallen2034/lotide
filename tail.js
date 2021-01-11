// function to return the tail of an array
// if len of actualArr[] is <= 2 (actualarr[0,0]), return an empty array
// otherwise, create new empty returnArr[] to return where it is needed
// loop through actualArr.len and then take the actualArr[i] and assign it inside of returnArr[i - 1]
// return that new filled returnArr[] with the tail of the original array
const tail = function(actualArr) {
  const returnArr = [];
  if (actualArr.length <= 1) {
    return returnArr;
  } else {
    for (let i = 1; i < actualArr.length; i++) {
      returnArr[i - 1] = actualArr[i];
    }
  }
  return returnArr;
};

// export assertEqualArrays() and tail() functions to be used and called for in our test file 
module.exports = tail;