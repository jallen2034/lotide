// function to flatten our 2d array into a 1d array
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
console.log(flatten([1, 2, [3, 4], 5, [6]]) ); // => [1, 2, 3, 4, 5, 6]