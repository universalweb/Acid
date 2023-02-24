/**
  * Checks if a number is within a range.
  *
  * @function isNumberInRange
  * @category number
  * @type {Function}
  * @param {number} num - Number to be checked.
  * @param {number} start - Beginning of range.
  * @param {number} end - End of range.
  * @returns {boolean} - Returns true or false.
  *
  * @example
  * import { stubArray } from './Acid.js';
  * isNumberInRange(1, 0, 2);
  * // => true
  * isNumberInRange(1, -1, 0);
  * // => false
*/
export const isNumberInRange = (num, start, end) => {
	return num > start && num < end;
};

