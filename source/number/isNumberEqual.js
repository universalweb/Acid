/**
  * Strictly checks if a number equal to another number.
  *
  * @function isNumberEqual
  * @category number
  * @type {Function}
  * @param {number} item - Number to be checked against num.
  * @param {number} num - Number to be checked against item.
  * @returns {boolean} - Returns true or false.
  *
  * @example
  * import { stubArray } from './Acid.js';
  * isNumberEqual(0, 0);
  * // => true
  * isNumberEqual(0, 1);
  * // => false
*/
export const isNumberEqual = (item, num) => {
	return item === num;
};
