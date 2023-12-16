import { hasValue } from '../types/hasValue.js';
/**
 * Asynchronously Iterates through the given array. Each async function is awaited as to ensure synchronous order.
 *
 * @function eachAsyncArray
 * @category array
 * @type {Function}
 * @async
 * @param {Array} source - Array that will be looped through.
 * @param {Function} iteratee - Transformation function which is passed item, index, calling array, array length, and additionalArg.
 * @param {*} thisCall - Iteratee called with thisCall as this.
 * @param {*} additionalArg - An object to be given each time to the iteratee.
 * @returns {Array|undefined} - Returns source the originally given array.
 *
 * @example
 * import { eachAsyncArray, assert } from '@universalweb/acid';
 * const tempList = [];
 * await eachAsyncArray([1, 2, 3], async (item) => {
 *   tempList.push(item);
 * });
 * assert(tempList, [1, 2, 3]);
 */
export async function eachAsyncArray(source, iteratee, thisCall, additionalArg) {
	if (!source) {
		return;
	}
	const arrayLength = source.length;
	if (hasValue(thisCall)) {
		for (let index = 0; index < arrayLength; index++) {
			await iteratee.call(thisCall, source[index], index, source, arrayLength, additionalArg);
		}
	} else {
		for (let index = 0; index < arrayLength; index++) {
			await iteratee(source[index], index, source, arrayLength, additionalArg);
		}
	}
	return source;
}

