import { isArray } from '../types/isArray.js';
import { isNumber } from '../types/isNumber.js';
/**
 * Appends/sets `value` on `source`, dispatching to the appropriate write method. Prefers `push`/`add` for collections, falls back to property assignment using `key`.
 *
 * @function setValue
 * @category utility
 * @type {Function}
 * @param {Array|Set|Object} source - Target to set into.
 * @param {*} value - Value to set.
 * @param {String|Number} [key] - Optional key for plain-object assignment.
 * @returns {Array|Set|Object} - The source after assignment.
 *
 * @example
 * import { setValue, assert } from '@universalweb/acid';
 * const arr = [];
 * setValue(arr, 'x');
 * assert(arr, ['x']);
 */
export function setValue(source, value, key) {
	if (isNumber(key) && isArray(source)) {
		source[key] = value;
	} else if (source.push) {
		source.push(value);
	} else if (source.add) {
		source.add(value);
	} else {
		source[key] = value;
	}
	return source;
}
