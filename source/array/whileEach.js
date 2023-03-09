import { hasValue } from '../type/hasValue.js';
import { returnValue } from '../utility/returnValue.js';
/**
 * Iterates through the given array but re-checks the length each loop. Usefull while mutating the same array being looped over.
 *
 * @function whileEachArray
 * @category array
 * @type {Function}
 * @param {Array} source - Array that will be looped through.
 * @param {Function} iteratee - Transformation function which is passed item, index, calling array, and array length.
 * @param {*} thisBind - An object to be given each time to the iteratee.
 * @returns {Array} - The originally given array.
 *
 * @example
 * import { whileEachArray, assert } from 'Acid';
 * const list = [];
 * whileEachArray([1, 2, 3], (item, index) => {
 *   list[index] = item;
 * });
 * assert(list, [1, 2, 3]);
 */
export function whileEachArray(source, iteratee, thisBind) {
	let index = 0;
	while (index < source.length) {
		iteratee(source[index], index, source, source.length, thisBind);
		index++;
	}
	return source;
}

