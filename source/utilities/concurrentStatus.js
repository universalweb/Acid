import { hasValue } from '../types/hasValue.js';
import { returnValue } from './returnValue.js';
/**
 * Iterates through an array, invokes the async iteratee, and adds the promises to a queue. Then uses & returns the Promise.allSettled on the queue returning the values from each promise. Does not await on the async iteratee.
 *
 * @function concurrentStatus
 * @category utility
 * @type {Function}
 * @param {Array} source - Array that will be looped through.
 * @param {Function} iteratee - Transformation function which is passed item, index, calling array, and array length.
 * @param {*} additionalArgument - An object to be given each time to the iteratee.
 * @returns {Array} - The array from Promise.allSettled.
 *
 * @example
 * import { concurrentStatus, assert } from '@universalweb/acid';
 * const tempList = [];
 * await concurrentStatus([1, 2], async (item) => {
 *   return item;
 * });
 * assert(tempList,  [{status: 'fulfilled', value: 1}, {status: 'fulfilled', value: 2}]);
 */
export function concurrentStatus(source, iteratee, additionalArgument) {
	const arrayLength = source.length;
	const queue = [];
	for (let index = 0; index < arrayLength; index++) {
		queue[index] = iteratee(source[index], index, source, arrayLength, additionalArgument);
	}
	return Promise.allSettled(queue);
}

