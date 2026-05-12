import { cloneType } from '../types/cloneType.js';
import { hasValue } from '../types/hasValue.js';
import { isArray } from '../types/isArray.js';
import { isSet } from '../types/isSet.js';
import { returnValue } from './returnValue.js';
/**
 * Iterates (for of) through the given object while the iteratee returns true using a for of loop.
 *
 * @function forOfEvery
 * @category utility
 * @type {Function}
 * @param {Object|Function|Class|Map|Set|Array} source - Object that will be looped through.
 * @param {Function} iteratee - Transformation function which is passed item, key, the newly created object, calling object, key count, and array of keys.
 * @returns {Boolean} - Returns true if all values returned are true or false if one value returns false.
 *
 * @example
 * import { forOfEvery, assert } from '@universalweb/acid';
 * assert(forOfEvery([true, true, true], (item) => item), true);
 * assert(forOfEvery([true, false, true], (item) => item), false);
 */
export function forOfEvery(source, iteratee = returnValue) {
	if (isArray(source) || isSet(source)) {
		for (const value of source) {
			const result = iteratee(value, source);
			if (result === false) {
				return false;
			}
		}
	} else {
		for (const [key, value] of source) {
			const result = iteratee(value, key, source);
			if (result === false) {
				return false;
			}
		}
	}
	return true;
}
