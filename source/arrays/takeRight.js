/**
 * Returns a shallow copy of the array up to an amount starting from the right.
 *
 * @function takeRight
 * @category array
 * @type {Function}
 * @param {Array} source - The source array to take right from.
 * @param {Array} [indexRight = 1] - Zero-based index from the right to begin extraction.
 * @returns {Array} - The aggregated array.
 *
 * @example
 * import { takeRight, assert } from '@universalweb/acid';
 * assert(takeRight([1,2,3], 2), [2, 3]);
 */
export function takeRight(source, indexRight = 1) {
	const arrayLength = source.length;
	return source.slice(arrayLength - indexRight, arrayLength);
}

