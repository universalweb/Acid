import { isArray } from '../types/isArray.js';
import { isNumber } from '../types/isNumber.js';
import { isPlainObject } from '../types/isPlainObject.js';
/**
 * Sets `value` on `source` under `key`, dispatching to the appropriate write method based on source type. Falls back to property assignment for unknown shapes.
 *
 * @function setKey
 * @category utility
 * @type {Function}
 * @param {Object|Array|Map|Set} source - Target to set into.
 * @param {String|Number} key - Key/index used to set.
 * @param {*} value - Value to assign.
 * @returns {Object|Array|Map|Set} - The source after assignment.
 *
 * @example
 * import { setKey, assert } from '@universalweb/acid';
 * assert(setKey({}, 'a', 1).a, 1);
 * const map = new Map();
 * setKey(map, 'k', 2);
 * assert(map.get('k'), 2);
 */
export function setKey(source, key, value) {
	if (key && isPlainObject(source)) {
		source[key] = value;
	} else if (isNumber(key) && isArray(source)) {
		source[key] = value;
	} else if (source.set) {
		source.set(key, value);
	} else if (source.push) {
		source.push(value);
	} else if (source.add) {
		source.add(value);
	} else {
		source[key] = value;
	}
	return source;
}
