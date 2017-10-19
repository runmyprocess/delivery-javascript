import fr from 'date-fns/locale/fr'
import isFuture from 'date-fns/is_future'
import isAfter from 'date-fns/is_after'
import distanceInWords from 'date-fns/distance_in_words'
import differenceInCalendarDays from 'date-fns/difference_in_calendar_days'
import dateFnsFormat from 'date-fns/format'
import startOfMonth from 'date-fns/start_of_month'
import subMonths from 'date-fns/sub_months'

/**
 * Check if a given date is in the future.
 * @param {timestamp} date - The date to check.
 * @returns {boolean} - The date is in the future.
 */
export {isFuture}

/**
 * Check if the first date is after the second one.
 * @param {timestamp} date - The date that should be after the other one to return true.
 * @param {timestamp} dateToCompare - The date to compare with.
 * @returns {boolean} - The first date is after the second date.
 */
export {isAfter}

/**
 * Return the formatted date string in the given format.
 * @param   {timestamp} timestamp - RunMyProcess timestamp expressed in seconds.
 * @param   {string} format - Format of the date (e.g. 'DD/MM/YYYY').
 * @returns {string} - Formatted date.
 */
export function format (timestamp, format) {
  var date = new Date(timestamp * 1000)
  return dateFnsFormat(date, format)
}

/**
 * Calculate the duration in days between two dates.
 * @param   {timestamp} start - Start date expressed as a timestamp in seconds.
 * @param   {timestamp} end - End date expressed as a timestamp in seconds.
 * @returns {integer} - Number of days between the dates.
 */
export function durationDays (start, end) {
  if (!start || !end || (start > end)) {
    return '0'
  } else {
    var dateStart = new Date(start * 1000)
    var dateEnd = new Date(end * 1000)
    var duration = differenceInCalendarDays(dateEnd, dateStart)
    return duration
  }
}

/**
 * Calculate the duration expressed in plain words between two dates.
 * @param   {timestamp} start - Start date expressed as a timestamp in seconds.
 * @param   {timestamp} end - End date expressed as a timestamp in seconds.
 * @returns {string} - Duration in words between the dates.
 */
export function durationWords (start, end) {
  if (!start || !end || (start > end)) {
    return ''
  } else {
    var dateStart = new Date(start * 1000)
    var dateEnd = new Date(end * 1000)
    var duration = distanceInWords(dateEnd, dateStart, { locale: fr })
    return duration
  }
}

/**
 * Returns an array of the N past months, starting at the current month.
 * @param   {integer} length - Number of past months included in the array.
 * @param   {string} format - Format of the month (e.g. 'MM/YYYY').
 * @returns {Array} - Array of the N past months.
 */
export function listMonths (length, format) {
  var month = startOfMonth(new Date())
  var months = []
  var i = 0
  while (i < length) {
    months[i].label = dateFnsFormat(month, format)
    months[i].value = dateFnsFormat(month, format)
    subMonths(month, 1)
    i++
  }
  return months
}
