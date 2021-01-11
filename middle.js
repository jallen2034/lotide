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
};

// export needed modules
module.exports = middle;