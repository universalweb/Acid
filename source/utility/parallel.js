import { hasValue } from '../type/hasValue.js';
import { returnValue } from './returnValue.js';
/**
 * Iterates through the given array in reverse.
 *
 * @function parallel
 * @category array
 * @type {Function}
 * @param {Array} source - Array that will be looped through.
 * @param {Function} iteratee - Transformation function which is passed item, index, calling array, and array length.
 * @param {*} thisBind - An object to be given each time to the iteratee.
 * @returns {Array} - The originally given array.
 *
 * @example
 * import { parallel, assert } from 'Acid';
 * const tempList = [];
 * await parallel([1, 2], async (item) => {
 *   tempList.push(item);
 * });
 * assert(tempList, has(tempList, [1, 2]));
 */
export function parallel(source, iteratee, thisBind) {
	const arrayLength = source.length;
	for (let index = arrayLength - 1;index >= 0;index--) {
		iteratee(source[index], index, source, arrayLength, thisBind);
	}
	return source;
}

