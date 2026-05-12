/**
 * Checks if a number is even & returns true or false.
 *
 * @function isEven
 * @category number
 * @type {Function}
 * @param {Number} source - Number to be checked.
 * @returns {Boolean} - Returns true or false.
 *
 * @example
 * import { isEven, assert } from '@universalweb/acid';
 * assert(isEven(2), true);
 * assert(isEven(1), false);
 */
export function isEven(source) {
	return (source & 1) === 0;
}

