/*
Master test suite file that will include all tests in the specified directory.

var context = require.context('./test', true, /\.js$/);
context.keys().forEach(context);
module.exports = context;
*/

/*
TODO Why es6 import not working here ?
import chai from 'chai'
import {isEmpty} from '../src/mod/string'

let expect = chai.expect
let should = chai.should()
let assert = chai.assert
*/
import chai from 'chai'
import {isEmpty} from '../src/mod/string'

// http://www.albertgao.xyz/2016/12/09/testing-via-mocha-and-chai-in-es5-and-es6/

describe('string', function () {
  describe('isEmpty', function () {
    it('should return true when the value is undefined', function () {
      chai.assert.equal(true, isEmpty(undefined))
    })
    it('should return true when the value is null', function () {
      chai.assert.equal(true, isEmpty(null))
    })
    it('should return true when the value is NaN', function () {
      chai.assert.equal(true, isEmpty(NaN))
    })
    it('should return true when the value is false', function () {
      chai.assert.equal(true, isEmpty(false))
    })
    it('should return true when the value is 0', function () {
      chai.assert.equal(true, isEmpty(0))
    })
    it('should return true when the value is ""', function () {
      chai.assert.equal(true, isEmpty(''))
    })
    it('should return false when the value is "Hello"', function () {
      chai.assert.equal(false, isEmpty('Hello'))
    })
    it('should return false when the value is 25', function () {
      chai.assert.equal(false, isEmpty(25))
    })
  })
})
