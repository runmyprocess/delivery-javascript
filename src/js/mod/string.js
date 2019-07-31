import toLower from 'lodash/toLower'
import startCase from 'lodash/startCase'
import titleCase from 'voca/title_case'

/**
 * Check if a given string is empty.
 * @param {string} string - The string to check.
 * @returns {boolean} - Will evaluate to true if value is: null, undefined, NaN, empty string (""), 0 or false.
 */
export function isEmpty (string) {
  // https://stackoverflow.com/questions/5515310/is-there-a-standard-function-to-check-for-null-undefined-or-blank-variables-in
  // https://codereview.stackexchange.com/questions/5572/string-isnullorempty-in-javascript
  return !string
}

/**
 * Convert a given string to title case.
 * @param {string} string - The string to convert to title case.
 * @returns {string} - Returns the title case string.
 */
export {titleCase}

/*
export function stringToProperCase (fp_sInput) {
  return fp_sInput.toLowerCase().replace(/(^|\s|[\-\,\.])\w/g, function (L) { return L.toUpperCase() }).replace(/ /g, ' ').replace(/\s+/g, ' ').trim()
}
*/

/**
 * Convert a string to the proper case.
 * @param  {string} string - The string to convert to title case.
 * @returns {string} - Returns the title case string.
 */
export function properCase (string) {
  return startCase(toLower(string))
}

/*
export function capitalize (string) {
  var output = _
    .chain(string)
    .capitalize()
    .trim()
    .value()
  return output
}
*/
