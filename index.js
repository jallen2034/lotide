// index.js
const head = require('./head');
const tail = require('./tail');
const middle = require('./middle');
const assertArraysEqual = require('./assertArraysEqual');
const eqArrays = require('./eqArrays');

// create new object to export fromt his file/module with the functions importedf above for us to use elsewhere 
module.exports = {
  head,
  tail,
  middle,
  assertArraysEqual,
  eqArrays
};