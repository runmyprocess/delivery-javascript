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

export function sumColumn (array-string) {
  return array-string.reduce(function(accumulator, currentValue) {
            return accumulator + Number(currentValue)
        }, 0)
}
