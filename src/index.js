
/*
import _ from 'lodash'

function component () {
  var element = document.createElement('div')

  // Lodash, now imported by this script
  element.innerHTML = _.join(['Hello', 'webpack!!!'], ' ')

  return element
}

document.body.appendChild(component())

function addOne (input) {
  return input + 1
}
*/

var toto = Date.now()

const greeting = ({ name }) => `hello ${name}`
greeting({ name: 'moe' })

/**
 * Check if a date is later than today.
 * @param  {number} date_ts - Date formatted as a timestamp in seconds.
 * @returns {boolean}         - True if the date is later than today, otherwise false.
 */
function bool_check_date_valid (date_ts) {
  /*
      This function returns true if date is greater than today
  */
  var today = new Date().getTime() / 1000
  if (!is_empty(date_ts)) {
    if (parseInt(date_ts) >= parseInt(today)) {
      return true
    } else {
      return false
    }
  } else {
    return true
  }
}

/**
 * Check if a string is empty.
 * @param  {string} elt - String to be checked.
 * @returns {boolean} - True if the string is empty, otherwise false.
 */
function is_empty (elt) {
  if (elt !== '' && elt !== 'undefined' && elt != null) {
    return false
  }
  return true
}

/**
 * Compute the number of days between two dates.
 * @param  {number} date1_ts - Start date formatted as a timestamp in seconds.
 * @param  {number} date2_ts - End date formatted as a timestamp in seconds.
 * @returns {number}         - Number of days between input dates or -1 if something went wrong.
 */
function compute_nb_days (date1_ts, date2_ts) {
  var delta = parseInt(date2_ts) - parseInt(date1_ts)
  if (delta > 0) {
    return parseInt(delta / (24 * 3600))
  } else {
    return -1
  }
}
