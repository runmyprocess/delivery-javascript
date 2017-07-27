/*
Master test suite file that will include all tests in the specified directory.

var context = require.context('./test', true, /\.js$/);
context.keys().forEach(context);
module.exports = context;
*/

// var assert = require('assert')
var assert = require('chai').assert

describe('Array', function () {
  describe('#indexOf()', function () {
    it('should return -1 when the value is not present', function () {
      assert.equal(-1, [1, 2, 3].indexOf(4))
    })
  })
})
