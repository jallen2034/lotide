// function to take in a string as it main paramater
// create empty returnObj{} we will eventually push new key value pairs to
// loop through the string char by char, check if the char at i !== " "
// then check if returnObj with a key of the index of what "string[i]" currently does not exist 
// create a new key value pair in returnObj with string[i] as the key and 1 as its value
// otherwise +1 value to the value in the existing key value pair found
// return the new update dobject to the outside world
const countLetters = function(string) {
  let returnObj = {};

  for (let i = 0; i < string.length; i++) {
    if (string[i] !== " ") {
      if ((!returnObj[string[i]])) {
        returnObj[string[i]] = 1;
      } else {
        returnObj[string[i]] += 1;
      }
    }
  }
  return returnObj;
};

// test case of function
console.log(countLetters("lighthouse in the house"));