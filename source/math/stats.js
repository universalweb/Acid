/**
 * Returns the smallest value in a numeric array.
 *
 * @function min
 * @category math
 * @type {Function}
 * @param {Number[]} numbers - Array of numbers.
 * @returns {Number|undefined} - Smallest number or undefined when empty.
 *
 * @example
 * import { min, assert } from '@universalweb/acid';
 * assert(min([3, 1, 2]), 1);
 */
export function min(numbers) {
	if (!numbers?.length) {
		return;
	}
	return Math.min(...numbers);
}
/**
 * Returns the largest value in a numeric array.
 *
 * @function max
 * @category math
 * @type {Function}
 * @param {Number[]} numbers - Array of numbers.
 * @returns {Number|undefined} - Largest number or undefined when empty.
 *
 * @example
 * import { max, assert } from '@universalweb/acid';
 * assert(max([3, 1, 2]), 3);
 */
export function max(numbers) {
	if (!numbers?.length) {
		return;
	}
	return Math.max(...numbers);
}
/**
 * Returns the arithmetic mean of a numeric array.
 *
 * @function mean
 * @category math
 * @type {Function}
 * @param {Number[]} numbers - Array of numbers.
 * @returns {Number|undefined} - Mean or undefined when empty.
 *
 * @example
 * import { mean, assert } from '@universalweb/acid';
 * assert(mean([1, 2, 3, 4]), 2.5);
 */
export function mean(numbers) {
	if (!numbers?.length) {
		return;
	}
	let total = 0;
	for (let index = 0; index < numbers.length; index++) {
		total += numbers[index];
	}
	return total / numbers.length;
}
/**
 * Returns the median value of a numeric array. Does not mutate the input.
 *
 * @function median
 * @category math
 * @type {Function}
 * @param {Number[]} numbers - Array of numbers.
 * @returns {Number|undefined} - Median or undefined when empty.
 *
 * @example
 * import { median, assert } from '@universalweb/acid';
 * assert(median([3, 1, 2]), 2);
 */
export function median(numbers) {
	if (!numbers?.length) {
		return;
	}
	const sorted = [...numbers].sort((a, b) => a - b);
	const mid = sorted.length >> 1;
	if (sorted.length % 2) {
		return sorted[mid];
	}
	return (sorted[mid - 1] + sorted[mid]) / 2;
}
