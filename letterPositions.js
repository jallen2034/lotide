// function to take in a string as it main paramater and return return all the indices (zero-based positions) 
// in the string where each character is found.
const letterPositions = function(sentence) {
  const results = {};
  // logic to update results here
  for (let i = 0; i < sentence.length; i++) {
    if (string[i] !== " ") {
      if ((!results[string[i]])) {
        results[sentance[i]] = [i];
      } else {
        // results{j: [0]}
        results[sentance[i]].push([i]);
      }
    }
  }
  return results;
};


console.log(letterPositions("jacob j"));
​
// return this object
// { j: [0, 6], a: [1], c: [2], o: [3], b: [4]}