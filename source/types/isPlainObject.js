/**
 * Checks if the value is a plain object — either `{}` (Object.prototype-backed) or a null-prototype object (e.g. from `Object.create(null)`, `Object.groupBy`, `Map.groupBy`). Class instances, arrays, dates, etc. all return false.
 *
 * @function isPlainObject
 * @category type
 * @param {*} source - Object to be checked.
 * @returns {Boolean} - Returns true or false.
 *
 * @example
 * import { isPlainObject, assert } from '@universalweb/acid';
 * assert(isPlainObject({}), true);
 * assert(isPlainObject(Object.create(null)), true);
 * assert(isPlainObject([]), false);
 */
export function isPlainObject(source) {
	if (source === null || typeof source !== 'object') {
		return false;
	}
	const prototype = Object.getPrototypeOf(source);
	return prototype === null || prototype === Object.prototype;
}
