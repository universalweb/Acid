import { hasValue } from './hasValue.js';
/**
 * Checks if an object is null or undefined.
 *
 * @function noValue
 * @category type
 * @param {*} source - Object to be checked.
 * @returns {boolean} - Returns true or false.
 *
 * @example
 * import { noValue, assert } from 'Acid';
 * assert(noValue(null), true);
 * assert(noValue(undefined), true);
 * assert(noValue(1), false);
 * assert(noValue(0), false);
 */
export function noValue(source) {
	return !hasValue(source);
}
