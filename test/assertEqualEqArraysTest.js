// import modules
const assert = require('chai').assert;
const {eqArrays} = require('../index');

// mocha/chai test 
describe("eqArrays() function: \n", () => {
  it("returns true when arrays: [1, 2, 3], [1, 2, 3] match", () => {
    assert.strictEqual(eqArrays([1, 2, 3], [1, 2, 3]), true);
  });
  it("returns false when arrays: [1, 2, 3], [1, 2, 3] don't match", () => {
    assert.strictEqual(eqArrays([1, 2, 3], [3, 2, 1]), false);
  });
  it("returns true when arrays: ['1', '2', '3'], ['1', '2', '3'] match", () => {
    assert.strictEqual(eqArrays(["1", "2", "3"], ["1", "2", "3"]), true);
  });
  it("returns false when arrays: ['1', '2', '3'], ['1', '2', 3] don't match", () => {
    assert.strictEqual(eqArrays(["1", "2", "3"], ["1", "2", 3]), false);
  });
});