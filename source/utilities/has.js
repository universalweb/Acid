import { every } from './every.js';
import { isArray } from '../types/isArray.js';
import { isFunction } from '../types/isFunction.js';
import { isRegex } from '../types/isRegex.js';
import { isString } from '../types/isString.js';
import { noValue } from '../types/noValue.js';
/**
 * Checks if an object contains something.
 *
 * @function has
 * @category utility
 * @param {Array|String|Object} source - Object to be checked.
 * @param {String|Array|Function|RegExp} search - Object that is being searched for.
 * @param {Number} position - Index at which to start searching.
 * @returns {Boolean} - Returns true or false.
 *
 * @example
 * import { has, assert } from '@universalweb/acid';
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
		}
		if (isRegex(search)) {
			return search.test(source);
		}
		if (isFunction(search)) {
			return Boolean(search(source));
		}
		return every(search, (item) => {
			return Boolean(has(source, item));
		});
	}
	if (isArray(source)) {
		if (isString(search)) {
			return source.includes(search, position);
		}
		if (isRegex(search)) {
			return every(source, (item) => {
				return item.test(search);
			});
		}
		if (isArray(search)) {
			return every(search, (item) => {
				return Boolean(has(source, item));
			});
		}
	}
	return false;
}
