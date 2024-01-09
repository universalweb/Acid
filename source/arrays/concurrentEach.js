/**
 * Iterates through an array, invokes the async iteratee, and adds the promises to a queue. Then uses & returns the Promise.all on the queue returning the values from each promise. Does not await on the async iteratee.
 *
 * @function concurrentEachArray
 * @category array
 * @type {Function}
 * @async
 * @param {Array} source - Array that will be looped through.
 * @param {Function} iteratee - Transformation function which is passed item, index, the newly created array, calling array, and array length.
 * @param {*} thisBind - Object to use as the "this" within the function.
 * @returns {Promise|Array|undefined} - An array of the same calling array's type.
 *
 * @example
 * import { concurrentEachArray, has, assert } from '@universalweb/acid';
 * const results = await concurrentEachArray([1, 2, 3], async (item) => {
 *   return item * 2;
 * });
 * assert(has(results, [2, 4, 6]), true);
 */
export async function concurrentEachArray(source, iteratee, thisBind) {
	if (!source) {
		return;
	}
	const results = [];
	const arrayLength = source.length;
	if (thisBind) {
		for (let index = 0; index < arrayLength; index++) {
			results[index] = iteratee.call(thisBind, source[index], index, results, arrayLength);
		}
	} else {
		for (let index = 0; index < arrayLength; index++) {
			results[index] = iteratee(source[index], index, results, arrayLength);
		}
	}
	return Promise.all(results);
}
