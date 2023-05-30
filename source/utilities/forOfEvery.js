import { isSet } from '../types/isSet.js';
import { isArray } from '../types/isArray.js';
import { cloneType } from '../types/cloneType.js';
import { hasValue } from '../types/hasValue.js';
import { returnValue } from './returnValue.js';
/**
 * Iterates (for of) through the given object while the iteratee returns true using a for of loop.
 *
 * @function forOfEvery
 * @category utility
 * @type {Function}
 * @param {Object|Function|Class|Map|Set|Array} source - Object that will be looped through.
 * @param {Function} iteratee - Transformation function which is passed item, key, the newly created object, calling object, key count, and array of keys.
 * @returns {boolean} - Returns true if all values returned are true or false if one value returns false.
 *
 * @example
 * import { every, assert } from 'Acid';
 * assert(forOfEvery({a: false, b: true, c: true}, (item) => {
 *  return item;
 * }), false);
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
