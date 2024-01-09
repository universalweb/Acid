/**
 * Iterates through the given array of async function(s) adding each call to a queue. Then uses Promise.all on the queue returning the values from each promise. Does not await on each async iteratee before the next.
 *
 * @function concurrent
 * @type {Function}
 * @category Utility
 * @async
 * @param {Array} source - Array of async functions that will be looped through.
 * @param {*} thisBind - Object to use as the "this" within the function.
 * @param {...*} args - Arguments to pass to each function. Every argument after the first (thisBind) is passed to each function.
 * @returns {Object} - The originally given array.
 *
 * @example
 * import { concurrent, assert } from '@universalweb/acid';
 * const list = [];
 * await concurrent([async (item) => {
 *   return item;
 * }, async (item) => {
 *   return item;
 * }], null, 1);
 * assert(list, [1, 1]);
 */
export async function concurrent(source, thisBind, ...args) {
	const arrayLength = source.length;
	const results = [];
	if (thisBind) {
		for (let index = 0; index < arrayLength; index++) {
			const callable = source[index];
			results[index] = source[index].call(thisBind, ...args, index, results, callable);
		}
	} else {
		for (let index = 0; index < arrayLength; index++) {
			const callable = source[index];
			results[index] = source[index](...args, index, results, callable);
		}
	}
	return Promise.all(results);
}
