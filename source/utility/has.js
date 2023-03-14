import { every } from './every.js';
import { isFunction } from '../type/isFunction.js';
import { isRegex } from '../type/isRegex.js';
import { isString } from '../type/isString.js';
import { noValue } from '../type/noValue.js';
/**
 * Checks if an object contains something.
 *
 * @function has
 * @category utility
 * @param {Array|String|Object} source - Object to be checked.
 * @param {String|Array|Function|RegExp} search - Object that is being searched for.
 * @param {Number} fromIndex - Index at which to start searching.
 * @returns {boolean} - Returns true or false.
 *
 * @example
 * import { has, assert } from 'Acid';
 * assert(has('Hello World', 'Hello'), true);
 * assert(has(['Hello', 'World'], 'hello'), true);
*/
export function has(source, search, position) {
	if (noValue(source) || noValue(search)) {
		return false;
	}
	if (isString(source)) {
		if (isString(search)) {
			return source.includes(search, position);
		} else if (isRegex(search)) {
			return search.test(source);
		} else if (isFunction(search)) {
			return Boolean(search(source));
		}
		return every(search, (item) => {
			return Boolean(has(source, item));
		});
	}
	return false;
}
