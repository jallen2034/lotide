// function to reverse a string given in as a command line argument
// pass in process.argv[] array of all the command line args from this program into reverseString()
// create a empty string reverseWords we want to eventually store our reversed words/strings in order
// loop through our array of args[] we passed in to this function as a paramater, from args[2] up to args.length. 
// this allows us to always exclude args[0], args[1] and args[2] but loop up to whatever args.length[] is to catch any possible number of words/strings thrown in
// inside that loop, declare a empty string to store the newWord we will push to reverseWords[] eventually
// nested inner loop that starts j at whatever args[i].length is - 1, this deincrements 1 time in each loop until j >= 0
// it then adds the chars in args[i][j] into the current newWord
// outside of this inner nested loop, the new reversed newWord is pushed into reverseWords string + a space at the end of each word
// that string is returned ot the outside world
const reverseString = function(args) {
  let reverseWords = "";

  for (let i = 2; i < args.length; i++) {
    let newWord = "";

    for (let j = args[i].length - 1; j >= 0; j--) {
      newWord += args[i][j];
    }
    reverseWords += newWord + " ";
  }
  return reverseWords;
};

// call and use function
console.log(reverseString(process.argv));