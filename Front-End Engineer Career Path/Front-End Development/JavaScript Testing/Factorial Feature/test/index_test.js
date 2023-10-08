var assert = require("assert");
var Calculate =  require('../index.js')

describe('Calculate', () => {
  describe('.factorial', () => {
    it('returns the factorial of 5', () => {
      const expectedResult = 120
      const inputNumber = 5
      const result = Calculate.factorial(inputNumber)

      assert.strictEqual(result, expectedResult)
    })
    it('returns the factorial of 3', () => {
      const expectedResult = 6
      const inputNumber = 3
      const result = Calculate.factorial(inputNumber)

      assert.strictEqual(result, expectedResult)
    })
    it('returns 1 when you pass in 0', () => {
      const expectedResult = 1
      const inputNumber = 0
      const result = Calculate.factorial(inputNumber)

      assert.strictEqual(result, expectedResult)
    })
  });
});