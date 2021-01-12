// import modules
const assert = require('chai').assert;
const assertArraysEqual = require('../assertArraysEqual');
const middle = require('../middle');

// mocha/chai test 
describe("middletest() function: \n", () => {
  it("Middle index found: Returns true, indicating: [2] is the middle of [1, 2, 3])", () => {
    assert.isTrue(assertArraysEqual(middle([1, 2, 3]), [2]));
  });
  it("Middle index found: Returns true, indicating: [3] is the [1, 2, 3, 4, 5]", () => {
    assert.isTrue(assertArraysEqual(middle([1, 2, 3, 4, 5]), [3]));
  });
  it("Middle index found: Returns true, indicating: [2, 3] is the middle of [1, 2, 3, 4]", () => {
    assert.isTrue(assertArraysEqual(middle([1, 2, 3, 4]), [2, 3]));
  });
  it("Middle index not found: Returns false, indicating: [3] is not the middle of [1, 2, 3, 4, 5, 6]", () => {
    assert.isFalse(assertArraysEqual(middle([1, 2, 3, 4, 5, 6]), [3]));
  });
});