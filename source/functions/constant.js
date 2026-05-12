/**
 * Returns a function that always returns the given value.
 *
 * @function constant
 * @category function
 * @type {Function}
 * @param {*} value - Value to return.
 * @returns {Function} - Function that returns the value.
 *
 * @example
 * import { constant, assert } from '@universalweb/acid';
 * const always7 = constant(7);
 * assert(always7(), 7);
 */
export function constant(value) {
	return () => value;
}
