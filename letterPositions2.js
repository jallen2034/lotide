// function to take in a string as it main paramater and return return all the indices (zero-based positions) 
// in the string where each character is found.
// create empty object we will eventually store our new object and key value pairs in
// loop through string character by character one at a time
// check if the character at sentence[i] is not a space
// then check if results with a key of the index of what "sentence[i]" currently does not exist 
// create a new key value pair in results{} with sentence[i] as the key and a new array with the value if i inside it as the value
// otherwise push a new index to the array that exists in the keyvalue pair which exists with the value of i (index of string!)
// return the new update dobject to the outside world
const letterPositions = function(sentence) {
  const results = {};
  for (let i = 0; i < sentence.length; i++) {
    if (sentence[i] !== " ") {
      if ((!results[sentence[i]])) {
        results[sentence[i]] = [i];
      } else {
        results[sentence[i]].push(i);
      }
    }
  }
  return results;
};

// test function
console.log(letterPositions("jacob j"));