import isFuture from 'date-fns/is_future'
import isAfter from 'date-fns/is_after'

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

export function duration (start, end) {
  return '0'
}
