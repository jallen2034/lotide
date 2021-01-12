// modules to import
const assert = require('chai').assert;
const {assertArraysEqual} = require('../index');

// mocha/chai test 
describe("assertArraysEqual() function: \n", () => {
  it("Returns true is the two arrays do match!: [1, 2, 3], [1, 2, 3]", () => {
    assert.isTrue(assertArraysEqual([1, 2, 3], [1, 2, 3]));
  });
  it("Returns false if the two arrays do not match!: [1, 2, 3], [3, 2, 1]", () => {
    assert.isFalse(assertArraysEqual([1, 2, 3], [3, 2, 1]));;
  });
  it("Returns true if the two arrays do match!: ['1', '2', '3'], ['1', '2', '3']", () => {
    assert.isTrue(assertArraysEqual(['1', '2', '3'], ['1', '2', '3']));
  });
  it("Returns false if the two arrays do not match!: ['1', '2', '3'], ['1', '2', 3]", () => {
    assert.isFalse(assertArraysEqual(['1', '2', '3'], ['1', '2', 3]));
  });
});