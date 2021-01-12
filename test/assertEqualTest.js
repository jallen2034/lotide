// modules to import
const assertEqual = require('../assertEqual');
const {tail, eqArrays} = require('../index');

// test and use function for tail.js
const tail1 = tail(["Hello", "Lighthouse", "Labs"]); // after running tail() ["Lighthouse", "Labs"]
const tail2 = tail(["Lighthouse"]); // after running tail() ["Lighthouse"]
const tail3 = tail([]); // after running tail() []
assertEqual(eqArrays(tail1, ["Lighthouse", "Labs"]), true); // should return true, tail1 and ["Lighthouse", "Labs"] do match
assertEqual(eqArrays(tail1, ["Lighthouse", "Ladbs"]), false); // should return false, tail1 and ["Lighthouse", "Ladbs"] doesn't match
assertEqual(eqArrays(tail1, ["yeeyee", "Labs"]), false); // should return false, tail1 and ["yeeyee", "Labs"] doesn't match
assertEqual(eqArrays(tail2, ["Lighthouse", "Labs"]), false); // should return false, tail2 and ["Lighthouse", "Labs"] doesn't match
assertEqual(eqArrays(tail3, ["Lighthouse", "Labs"]), false); // should return false, tail3 and ["Lighthouse", "Labs"] doesn't match