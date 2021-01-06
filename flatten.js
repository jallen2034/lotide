// function to flatten our 2d array into a 1d array
// create empty flatArr[]
// loop through arrToFlat[] then set isArray to true or false on each passthrough after checking if
// the index at arrToFlat[i] is an array or not, that function returns true or false
// if isArray = true, the loop through the array inside of arrToFlat[i] and push the index at arrToFlat[i][j] into arrToFlat
// otherwise just push the char in arrToFlat[i] into flatArr[] as a new index
const flatten = function(arrToFlat) {
  let flatArr = [];
  
  for (let i = 0; i < arrToFlat.length; i++) {
    let isArray = Array.isArray(arrToFlat[i]);

    if (isArray) {
      for (let j = 0; j < arrToFlat[i].length; j++) {
        flatArr.push(arrToFlat[i][j]);
      }
    } else {
      flatArr.push(arrToFlat[i]);
    }
  }
  return flatArr;
};

// call and use flatten[] function
console.log(flatten([1, 2, [3, 4], 5, [6]])); // => [1, 2, 3, 4, 5, 6]
