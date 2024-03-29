import { everyArray } from '../arrays/every.js';
import { get } from '../utilities/get.js';
import { keys } from './keys.js';
import { toPath } from '../utilities/toPath.js';
const hasOwn = Object.hasOwn;
/**
 * Checks to see if an object has all of the given property names.
 *
 * @function hasKeys
 * @category object
 * @type {Function}
 * @param {Object} source - Source object to check for keys.
 * @param {...String} properties - List of strings to check.
 * @returns {Boolean|undefined} - Returns true or false.
 *
 * @example
 * import { hasKeys, assert } from '@universalweb/acid';
 * assert(hasKeys({a: {b: { c: 1}}}, 'a', 'a.b', 'a.b.c'), true);
 */
export function hasKeys(source, ...properties) {
	if (!source) {
		return;
	}
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
 * @returns {Boolean|undefined} - Returns true or false.
 *
 * @example
 * import { hasAnyKeys, assert } from '@universalweb/acid';
 * assert(hasAnyKeys({a: {b: { yes : 1}}}, 'no', 'nope', 'a.b.yes'), true);
 * assert(hasAnyKeys({a: {b: { yes : 1}}}, 'no', 'nope', 'a.b.noped'), false);
 */
export function hasAnyKeys(source, ...properties) {
	if (!source) {
		return;
	}
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

