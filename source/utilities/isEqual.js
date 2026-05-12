import { everyArray } from '../arrays/every.js';
import { isArray } from '../types/isArray.js';
import { isBuffer } from '../types/isBuffer.js';
import { isDate } from '../types/isDate.js';
import { isPlainObject } from '../types/isPlainObject.js';
import { isRegex } from '../types/isRegex.js';
import { isTypedArray } from '../types/isTypedArray.js';
import { keys } from '../objects/keys.js';
/**
 * Performs a deep comparison between two values.
 * Supports plain objects, arrays, typed arrays, buffers, dates, and regexes.
 *
 * @function isEqual
 * @type {Function}
 * @category utility
 * @param {*} source - Source value.
 * @param {*} target - Value to be compared.
 * @returns {Boolean} - Returns true or false.
 *
 * @example
 * import { isEqual, assert } from '@universalweb/acid';
 * assert(isEqual({a: [1, 2, 3]}, {a: [1, 2, 3]}), true);
 * assert(isEqual([1, 2], [1, 2, 3]), false);
 */
export function isEqual(source, target) {
	if (source === target) {
		return true;
	}
	if (source === null || target === null || source === undefined || target === undefined) {
		return false;
	}
	if (typeof source !== typeof target) {
		return false;
	}
	if (isBuffer(source)) {
		return isBuffer(target) && source.equals(target);
	}
	if (isDate(source)) {
		return isDate(target) && source.getTime() === target.getTime();
	}
	if (isRegex(source)) {
		return isRegex(target) && source.source === target.source && source.flags === target.flags;
	}
	if (isArray(source) || isTypedArray(source)) {
		if (source.length !== target?.length) {
			return false;
		}
		return everyArray(source, (item, index) => {
			return isEqual(item, target[index]);
		});
	}
	if (isPlainObject(source)) {
		if (!isPlainObject(target)) {
			return false;
		}
		const sourceKeys = keys(source);
		if (sourceKeys.length !== keys(target).length) {
			return false;
		}
		return everyArray(sourceKeys, (key) => {
			return isEqual(source[key], target[key]);
		});
	}
	return false;
}
