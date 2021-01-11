// modules to import
const assertEqual = require('../assertEqual');
const eqArrays = require('../eqArrays');
const head = require('../head');
const tail = require('../tail');

// test code for head.js 
assertEqual(head([5,6,7]), 5);
assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello");
assertEqual(head([6]), 5);
assertEqual(head([]), 5);