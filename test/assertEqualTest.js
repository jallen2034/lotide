const assertEqual = require('../assertEqual'), head = require('../head'), tail = require('../tail'), eqArrays = require('../eqArrays');

// test code for head.js 
// assertEqual(head([5,6,7]), 5);
// assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello");
// assertEqual(head([6]), 5);
// assertEqual(head([]), 5);

// test and use function for tail.js
// const tail1 = tail(["Hello", "Lighthouse", "Labs"]); // after running tail() ["Lighthouse", "Labs"]
// const tail2 = tail(["Lighthouse"]); // after running tail() ["Lighthouse"]
// const tail3 = tail([]); // after running tail() []
// assertEqual(eqArrays(tail1, ["Lighthouse", "Labs"]), true); // should return true, tail1 and ["Lighthouse", "Labs"] do match
// assertEqual(eqArrays(tail1, ["Lighthouse", "Ladbs"]), false); // should return false, tail1 and ["Lighthouse", "Ladbs"] doesn't match
// assertEqual(eqArrays(tail1, ["yeeyee", "Labs"]), false); // should return false, tail1 and ["yeeyee", "Labs"] doesn't match
// assertEqual(eqArrays(tail2, ["Lighthouse", "Labs"]), false); // should return false, tail2 and ["Lighthouse", "Labs"] doesn't match
// assertEqual(eqArrays(tail3, ["Lighthouse", "Labs"]), false); // should return false, tail3 and ["Lighthouse", "Labs"] doesn't match

// test and use functions for eqArrays.js
// assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true);
// assertEqual(eqArrays([1, 2, 3], [3, 2, 1]), false);
// assertEqual(eqArrays(["1", "2", "3"], ["1", "2", "3"]), true);
// assertEqual(eqArrays(["1", "2", "3"], ["1", "2", 3]), false);