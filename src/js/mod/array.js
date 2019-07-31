// import _ from 'lodash'
import some from 'lodash/some'

/**
 * Checks if predicate returns truthy for any element of collection. Iteration is stopped once predicate returns truthy.
 * @param {Array} collection - The collection to iterate over.
 * @param {Function} predicate - The function invoked per iteration.
 * @returns {boolean} - Returns true if any element passes the predicate check, else false.
 */
export function inArray (collection, predicate) {
  return some(collection, predicate)
}

/**
 * Sum the values of the column of an Array Widget.
 * @param {string} indexedValues - Array-like string returned by RMPApplication.getAllIndexedValues.
 * @returns {number} - Sum of the column's values.
 */
export function sumColumn (indexedValues) {
  if (!indexedValues) {
    return '0'
  } else {
    return indexedValues.reduce(function (accumulator, currentValue) {
      return accumulator + Number(currentValue)
    }, 0)
  }
}
