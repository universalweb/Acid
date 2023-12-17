import { eachAsyncArray } from './eachAsync.js';
/**
 * Asynchronously iterates through the calling array and creates an array with the results of the iteratee (invoked and awaited one at a time) on every element in the calling array. If you want things happenign in parallel, use mapAllAsyncArray.
 *
 * @function mapAsyncArray
 * @category array
 * @type {Function}
 * @async
 * @param {Array} source - Array that will be looped through.
 * @param {Function} iteratee - Transformation function which is passed item, index, the newly created array, calling array, and array length.
 * @returns {Array} - An array of the same calling array's type.
 *
 * @example
 * import { mapAsyncArray, assert } from '@universalweb/acid';
 * assert(await mapAsyncArray([1, 2, 3], async (item) => {
 *   return item * 2;
 * }), [2, 4, 6]);
 */
export async function mapAsyncArray(source, iteratee) {
	const results = [];
	await eachAsyncArray(source, async (item, index, arrayLength) => {
		results[index] = await iteratee(item, index, results, arrayLength);
	});
	return results;
}

