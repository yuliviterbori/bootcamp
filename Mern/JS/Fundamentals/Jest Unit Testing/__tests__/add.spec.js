const assert = require('assert');
const add = require('../script');


describe("Add function", () => {
    test("it should add two numbers", () => {
  
      expect(add(2, 2)).toEqual(4);
      expect(add(4, 6)).toEqual(10);
    });
  });


assert.strictEqual(add(2, 2), 4);
assert.strictEqual(add(4, 6), 10);