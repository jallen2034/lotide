const assert = require('chai').assert;
const eqArrays = require('../eqArrays');
const tail = require('../tail');

const tail1 = tail(["Hello", "Lighthouse", "Labs"]); // after running tail() ["Lighthouse", "Labs"]
const tail2 = tail(["Lighthouse"]); // after running tail() ["Lighthouse"]
const tail3 = tail([]); // after running tail() []

// mocha/chai test 
describe("eqArrays() function: \n", () => {
  it("returns true when arrays: tail1[] and ['Lighthouse', 'Labs'] do match", () => {
    assert.strictEqual(eqArrays(tail1, ["Lighthouse", "Labs"]), true);
  });
  it("returns false when arrays: tail1[] and ['Lighthouse', 'Ladbs'] do not match", () => {
    assert.strictEqual(eqArrays(tail1, ["Lighthouse", "Ladbs"]), false);
  });
  it("returns false when arrays: tail1[] and ['yeeyee', 'Labs'] do not match", () => {
    assert.strictEqual(eqArrays(tail1, ["yeeyee", "Labs"]), false);
  });
  it("returns false when arrays: tail2[] and ['Lighthouse', 'Labs'] do not match", () => {
    assert.strictEqual(eqArrays(tail2, ["Lighthouse", "Labs"]), false);
  });
  it("returns false when arrays: tail3[] and ['Lighthouse', 'Labs'] do not match", () => {
    assert.strictEqual(eqArrays(tail3, ["Lighthouse", "Labs"]), false);
  });
});