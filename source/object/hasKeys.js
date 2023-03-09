import { everyArray } from '../array/every.js';
import { keys } from '../object/keys.js';
import { toPath } from '../utility/toPath.js';
import { get } from '../utility/get.js';
const hasOwn = Object.hasOwn;
/**
 * Checks to see if an object has all of the given property names.
 *
 * @function hasKeys
 * @category object
 * @type {Function}
 * @param {Object} source - Source object to check for keys.
 * @param {...String} properties - List of strings to check.
 * @returns {boolean} - Returns true or false.
 *
 * @example
 * import { hasKeys, assert } from 'Acid';
 * assert(hasKeys({a: {b: { c: 1}}}, 'a', 'a.b', 'a.b.c'), true);
 */
export function hasKeys(source, ...properties) {
	return everyArray(properties, (item) => {
		const pathArray = toPath(item);
		if (pathArray.length === 1) {
			return hasOwn(source, item);
		} else {
			const lastPath = pathArray.pop();
			const initialPathObject = get(pathArray, source);
			if (initialPathObject) {
				return hasOwn(initialPathObject, lastPath);
			}
			return false;
		}
	});
}
/**
 * Checks to see if an object has any of the given property names.
 *
 * @function hasAnyKeys
 * @category object
 * @type {Function}
 * @param {Object} source - Source object to check for keys.
 * @param {Array} properties - List of strings to check.
 * @returns {boolean} - Returns true or false.
 *
 * @example
 * import { hasAnyKeys, assert } from 'Acid';
 * assert(hasAnyKeys({a: {b: { yes : 1}}}, 'no', 'nope', 'a.b.yes'), true);
 * assert(hasAnyKeys({a: {b: { yes : 1}}}, 'no', 'nope', 'a.b.noped'), false);
 */
export function hasAnyKeys(source, ...properties) {
	return Boolean(properties.find((item) => {
		const pathArray = toPath(item);
		if (pathArray.length === 1) {
			return hasOwn(source, item);
		} else {
			const lastPath = pathArray.pop();
			const initialPathObject = get(pathArray, source);
			if (initialPathObject) {
				return hasOwn(initialPathObject, lastPath);
			}
			return false;
		}
	}));
}

