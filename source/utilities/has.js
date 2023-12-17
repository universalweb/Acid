import { every } from './every.js';
import { everyArray } from '../arrays/every.js';
import { everyObject } from '../objects/every.js';
import { isArray } from '../types/isArray.js';
import { isFunction } from '../types/isFunction.js';
import { isPlainObject } from '../types/isPlainObject.js';
import { isRegex } from '../types/isRegex.js';
import { isString } from '../types/isString.js';
import { noValue } from '../types/noValue.js';
/**
 * Checks if an object contains something. For basic searches.
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
	if (source === search) {
		return true;
	}
	if (isString(source)) {
		if (isString(search)) {
			return source.includes(search, position);
		}
		if (isRegex(search)) {
			return search.test(source);
		}
		if (isFunction(search)) {
			return search(source);
		}
		if (isArray(search)) {
			return everyArray(search, (item) => {
				return has(source, item);
			});
		}
		return every(search, (item) => {
			return has(source, item);
		});
	}
	if (isArray(source)) {
		if (isRegex(search)) {
			return everyArray(source, (item) => {
				return item.test(search);
			});
		}
		if (isFunction(search)) {
			return everyArray(source, search);
		}
		if (isArray(search)) {
			return everyArray(search, (item) => {
				return has(source, item);
			});
		}
		return source.includes(search, position);
	}
	if (isPlainObject(source)) {
		if (isRegex(search)) {
			return everyObject(source, (item) => {
				return item.test(search);
			});
		}
		if (isFunction(search)) {
			return everyObject(source, search);
		}
		if (isPlainObject(search)) {
			return everyObject(source, (item, key) => {
				return item === search[key];
			});
		}
		return everyObject(source, (item) => {
			return has(item, search);
		});
	}
	return false;
}
