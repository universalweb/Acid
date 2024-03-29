import { everyArray } from './every.js';
import { isEqual } from '../utilities/isEqual.js';
/**
 * Performs a shallow strict comparison between two objects.
 *
 * @function isMatchArray
 * @type {Function}
 * @category array
 * @param {Array} source - Source object.
 * @param {Array} compareArray - Object to compare to source.
 * @returns {Boolean} - Returns true or false.
 *
 * @example
 * import { isMatchArray, assert } from '@universalweb/acid';
 * assert(isMatchArray([1, 2, 3], [1, 2, 3]), true);
 */
export function isMatchArray(source, compareArray) {
	if (source.length === compareArray.length) {
		return everyArray(source, (item, index) => {
			return isEqual(compareArray[index], item);
		});
	}
	return false;
}

