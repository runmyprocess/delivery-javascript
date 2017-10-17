import fr from 'date-fns/locale/fr'
import isFuture from 'date-fns/is_future'
import isAfter from 'date-fns/is_after'
import distanceInWords from 'date-fns/distance_in_words'
import differenceInCalendarDays from 'date-fns/difference_in_calendar_days'

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
