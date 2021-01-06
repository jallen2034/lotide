// FUNCTION IMPLEMENTATION
// set isMatching to true always
// loop through expectedArr.length, always check if resultArr[i] !== expectedArr[i]
// if it ever doesnt, kill loop and just return false indicating the content inside the indices of the two arrays do not match 
// otherwise if it loops through all the way, return isMatching as true
const assertEqual = function(resultArr, expectedArr) {
  let isMatching = true;

  for (let i = 0; i < expectedArr.length; i++) {
    if (resultArr[i] !== expectedArr[i]) {
      isMatching = false;
      return isMatching;
    }
  }
  return isMatching;
};

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

// test and use function
// call tail() and pass in ["Hello", "Lighthouse", "Labs"] and cut it down to ["Lighthouse", "Labs"]
// call tail() and pass in ["Lighthouse"] and cut it down to []
// compare tail1, tail2 and tail3 against ["Lighthouse", "Labs"].
// if all content in ALL indices of the two arrays match, print TRUE to the user
// if ANY of them dont match, print FALSE
const tail1 = tail(["Hello", "Lighthouse", "Labs"]);
const tail2 = tail(["Lighthouse"]);
const tail3 = tail([]);
console.log(assertEqual(tail1, ["Lighthouse", "Labs"])); // should return true, tail1 and ["Lighthouse", "Labs"] do match
console.log(assertEqual(tail1, ["Lighthouse", "Ladbs"])); // should return false, tail1 and ["Lighthouse", "Ladbs"] doesn't match
console.log(assertEqual(tail1, ["yeeyee", "Labs"])); // should return false, tail1 and ["yeeyee", "Labs"] doesn't match
console.log(assertEqual(tail2, ["Lighthouse", "Labs"])); // should return false, tail2 and ["Lighthouse", "Labs"] doesn't match
console.log(assertEqual(tail3, ["Lighthouse", "Labs"])); // should return false, tail3 and ["Lighthouse", "Labs"] doesn't match