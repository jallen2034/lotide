// assert equal function implementation
const eqArrays = function(arr1, arr2) {
  let isMatching = true;

  if (arr1.length === 0) {
    return false;
  }  

  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) {
      return false;
    }
  }
  return isMatching;
};

module.exports = eqArrays;