import { concurrentArray } from '../arrays/concurrent.js';
import { isArray } from '../types/isArray.js';
/**
 * Iterates through an array, invokes the async iteratee, and adds the promises to a queue. Then uses & returns the Promise.all on the queue returning the values from each promise. Does not await on the async iteratee.
 *
 * @function concurrent
 * @category utility
 * @type {Function}
 * @param {Array} source - Array that will be looped through.
 * @param {Function} iteratee - Transformation function which is passed item, index, calling array, and array length.
 * @param {*} additionalArgument - An object to be given each time to the iteratee.
 * @returns {Promise|Array|undefined} - The array from Promise.all.
 *
 * @example
 * import { concurrent, assert } from '@universalweb/acid';
 * const results = await concurrent([1, 2, 3], async (item) => {
 *   return item * 2;
 * });
 * assert(has(results, [2, 4, 6]), true);
 */
export async function concurrent(source, iteratee, additionalArgument) {
	if (!source) {
		return;
	}
	if (isArray(source)) {
		return concurrentArray(source, iteratee, additionalArgument);
	}
	return;
}

