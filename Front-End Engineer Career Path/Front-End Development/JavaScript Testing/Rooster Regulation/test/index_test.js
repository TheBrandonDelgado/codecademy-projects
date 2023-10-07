const assert = require('assert')
const Rooster = require('../index')

describe("Rooster", () => {
  describe(".announceDawn", () => {
    it("returns a rooster call", () => {
      const expected = 'cock-a-doodle-doo!'

      const announce = Rooster.announceDawn()

      assert.ok(announce, expected)
    })
  })

  describe(".timeAtDawn", () => {
    it("returns its argument as a string", () => {
      const num = 2

      const timeAsString = Rooster.timeAtDawn(num)

      assert.strictEqual('2', timeAsString)
    })
    it("throws an error if passed a number less than 0", () => {
      const time = -1

      assert.throws(() => {
        Rooster.timeAtDawn(time)
      }, RangeError)
    })
    it("throws an arror if passed a number greater than 23", () => {
      const time = 24

      assert.throws(() => {
        Rooster.timeAtDawn(time)
      }, RangeError)
    })
  })
})