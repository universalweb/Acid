/**
 * Iterates through an array, invokes the async iteratee, and adds the promises to a queue. Then uses & returns the Promise.all on the queue returning the values from each promise. Does not await on the async iteratee.
 *
 * @function concurrentArray
 * @category array
 * @type {Function}
 * @async
 * @param {Array} source - Array that will be looped through.
 * @param {Function} iteratee - Transformation function which is passed item, index, the newly created array, calling array, and array length.
 * @returns {Promise|Array|undefined} - An array of the same calling array's type.
 *
 * @example
 * import { concurrentArray, assert } from '@universalweb/acid';
 * const results = await concurrentArray([1, 2, 3], async (item) => {
 *   return item * 2;
 * });
 * assert(has(results, [2, 4, 6]), true);
 */
export async function concurrentArray(source, iteratee) {
	if (!source) {
		return;
	}
	const results = [];
	const arrayLength = source.length;
	for (let index = 0; index < arrayLength; index++) {
		results[index] = iteratee(source[index], index, results, arrayLength);
	}
	return Promise.all(results);
}
