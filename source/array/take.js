/**
 * Returns a shallow copy of the array up to an amount.
 *
 * @function take
 * @category array
 * @type {Function}
 * @param {Array} source - The source array to take from.
 * @param {Array} [endIndex = 1] - Zero-based index before which to end extraction.
 * @returns {Array} - The aggregated array.
 *
 * @example
 * import { take, assert } from 'Acid';
 * assert(take([1,2,3], 2), [1, 2]);
 */
export function take(source, endIndex = 1) {
	return source.slice(0, endIndex);
}

