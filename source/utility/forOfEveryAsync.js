import { cloneType } from '../type/cloneType.js';
import { hasValue } from '../type/hasValue.js';
import { returnValue } from '../utility/returnValue.js';
import { isSet } from '../type/isSet.js';
import { isArray } from '../type/isArray.js';
import { isGenerator } from '../type/isGenerator.js';
/**
 * Asynchronously iterates (for of) through the given object while the iteratee returns true using a for of loop.
 *
 * @function forOfEveryAsync
 * @category utility
 * @type {Function}
 * @param {Object|Function|Class|Map|Set|Array} source - Object that will be looped through.
 * @param {Function} iteratee - Transformation function which is passed item, key, the newly created object, calling object, key count, and array of keys.
 * @returns {boolean} - Returns true if all values returned are true or false if one value returns false.
 *
 * @example
 * import { every, assert } from 'Acid';
 * assert(forOfEveryAsync({a: false, b: true, c: true}, (item) => {
 *  return item;
 * }), false);
 */
export async function forOfEveryAsync(source, iteratee = returnValue, generatorArgs) {
	if (isGenerator(source)) {
		for await (const item of source(...generatorArgs)) {
			const result = await iteratee(item, source);
			if (result === false) {
				return false;
			}
		}
	} else if (isArray(source) || isSet(source)) {
		for (const value of source) {
			const result = await iteratee(value, source);
			if (result === false) {
				return false;
			}
		}
	} else {
		for (const [key, value] of source) {
			const result = await iteratee(value, key, source);
			if (result === false) {
				return false;
			}
		}
	}
	return true;
}
