// function to implement the pig latin scrambler
// pass in process.argv[] array of all the command line args from this program into pigLatin()
// create a empty array pigLatinWordsArr[] we want to eventually store our reversed words/strings in order
// loop through our array of args[] we passed in to this function as a paramater, from args[2] up to args.length. 
// inside that loop, declare a empty string to store the newPigWord we will push to reverseWords[] eventually
// nested inner loop that starts j at 1 to exclude the first char in the original string, up to args[i].length
// it then adds the chars in args[i][j] into the current newPigWord
// outside of this inner nested loop, first char of string is updated to newPigWord by accessing args[i][0], "ay" is then added to newPigWord after
// the newPigWord is pushed into reverseWords[]
// once outer loop finishes and stores all the reversed words in reverseWords[], concat treverseWords[] into a single string and then return it.
const pigLatin = function(args) {
  let pigLatinWords = "";

  for (let i = 2; i < args.length; i++) {
    let newPigWord = "";
    
    for (let j = 1; j < args[i].length; j++) {
      newPigWord += args[i][j];
    }
    newPigWord += args[i][0] + "ay";
    pigLatinWords += newPigWord + " ";
  }
  return pigLatinWords;
}

// call and use the function
console.log(pigLatin(process.argv));

