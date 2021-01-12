// new mocha and chai test code
const assert = require('chai').assert;
const {head} = require('../index');

describe("head() function: \n", () => {
  it("returns 1 for [1, 2, 3]", () => {
    assert.strictEqual(head([1, 2, 3]), 1);
  });
  it("returns '5' for ['5']", () => {
    assert.strictEqual(head(['5']), 5); 
  });
});