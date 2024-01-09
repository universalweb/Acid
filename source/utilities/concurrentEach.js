import { concurrentEachArray } from '../arrays/concurrentEach.js';
import { isArray } from '../types/isArray.js';
/**
 * Iterates through an array, invokes the async iteratee, and adds the promises to a queue. Then uses & returns the Promise.all on the queue returning the values from each promise. Does not await on the async iteratee.
 *
 * @function concurrentEach
 * @category utility
 * @type {Function}
 * @param {Array} source - Array that will be looped through.
 * @param {Function} iteratee - Transformation function which is passed item, index, calling array, and array length.
 * @param {*} thisBind - Object to use as the "this" within the function.
 * @returns {Promise|Array|undefined} - The array from Promise.all.
 *
 * @example
 * import { concurrentEach, has, assert } from '@universalweb/acid';
 * const results = await concurrentEach([1, 2, 3], async (item) => {
 *   return item * 2;
 * });
 * assert(has(results, [2, 4, 6]), true);
 */
export async function concurrentEach(source, iteratee, thisBind) {
	if (!source) {
		return;
	}
	if (isArray(source)) {
		return concurrentEachArray(source, iteratee, thisBind);
	}
	return;
}

