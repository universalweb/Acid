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
 * assert(has(['Hello', 'World'], 'Hello'), true);
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
			return source.some((item) => {
				return search.test(item);
			});
		}
		if (isFunction(search)) {
			return source.some(search);
		}
		if (isArray(search)) {
			return everyArray(search, (item) => {
				return has(source, item);
			});
		}
		return source.includes(search, position);
	}
	if (isPlainObject(source)) {
		const keys = Object.keys(source);
		const keysLength = keys.length;
		if (isRegex(search)) {
			for (let index = 0; index < keysLength; index++) {
				if (search.test(source[keys[index]])) {
					return true;
				}
			}
			return false;
		}
		if (isFunction(search)) {
			for (let index = 0; index < keysLength; index++) {
				const key = keys[index];
				if (search(source[key], key, source)) {
					return true;
				}
			}
			return false;
		}
		if (isPlainObject(search)) {
			return everyObject(search, (item, key) => {
				return source[key] === item;
			});
		}
		for (let index = 0; index < keysLength; index++) {
			if (source[keys[index]] === search) {
				return true;
			}
		}
		return false;
	}
	return false;
}
