import { filterObject } from './filter.js';
import { isArray } from '../types/isArray.js';
import { isString } from '../types/isString.js';
import { isNumber } from '../types/isNumber.js';
import { isFunction } from '../types/isFunction.js';
import { isRegex } from '../types/isRegex.js';
import { arrayToRegex } from '../regexps/arrayToRegex.js';
/**
 * Returns a clone of the given object without the given properties.
 *
 * @function omit
 * @category object
 * @type {Function}
 * @param {Object} source - Object from which keys are extracted.
 * @param {Array|RegExp|String} blacklist - List of property keys to omit from the returned object.
 * @returns {Object} - A new object with the removed.
 *
 * @example
 * import { omit, assert } from '@universalweb/acid';
 * assert(omit({a:1, b:2}, ['a']), {b:2});
 * assert(omit({a:1, b:2}, 'a'), {b:2});
 * assert(omit({1:'test', b:2}, 1), {b:2});
 */
export function omit(source, blacklist) {
	if (!source) {
		return;
	}
	if (isArray(blacklist)) {
		const blacklistRegex = arrayToRegex(blacklist);
		return filterObject(source, (item, key) => {
			return !blacklistRegex.test(key);
		});
	}
	if (isRegex(blacklist)) {
		return filterObject(source, (item, key) => {
			return !blacklist.test(key);
		});
	}
	if (isString(blacklist)) {
		return filterObject(source, (item, key) => {
			return key !== blacklist;
		});
	}
	if (isNumber(blacklist)) {
		const numberToString = blacklist.toString();
		return filterObject(source, (item, key) => {
			return key !== numberToString;
		});
	}
	if (isFunction(blacklist)) {
		return filterObject(source, (item, key) => {
			return !blacklist(item, key);
		});
	}
}

