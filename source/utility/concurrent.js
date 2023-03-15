import { hasValue } from '../type/hasValue.js';
import { returnValue } from './returnValue.js';
/**
 * Iterates through an array, invokes the async iteratee, and adds the promises to a queue. Then uses & returns the Promise.all on the queue returning the values from each promise. Does not await on the async iteratee.
 *
 * @function concurrent
 * @category utility
 * @type {Function}
 * @param {Array} source - Array that will be looped through.
 * @param {Function} iteratee - Transformation function which is passed item, index, calling array, and array length.
 * @param {*} thisBind - An object to be given each time to the iteratee.
 * @returns {Array} - The array from Promise.all.
 *
 * @example
 * import { concurrent, assert } from 'Acid';
 * const tempList = [];
 * await concurrent([1, 2], async (item) => {
 *   return item;
 * });
 * assert(tempList,  [1, 2]);
 */
export function concurrent(source, iteratee, thisBind) {
	const arrayLength = source.length;
	const queue = [];
	for (let index = 0;index < arrayLength; index++) {
		queue[index] = iteratee(source[index], index, source, arrayLength, thisBind);
	}
	return Promise.all(queue);
}

