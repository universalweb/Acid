import { hasValue } from '../type/hasValue.js';
import { isArray } from '../type/isArray.js';
import { toPath } from '../utility/toPath.js';
import { everyArray } from '../array/every.js';
/**
 * Returns property on an object.
 *
 * @function get
 * @category utility
 * @type {Function}
 * @param {string} propertyString - String used to retrieve properties.
 * @param {Object} target - Object which has a property retrieved from it.
 * @returns {Object} - Returns property from the given object.
 *
 * @example
 * import { get, assert } from 'Acid';
 * const objectTarget = {
 *   post: {
 *     like: ['a','b','c']
 *   }
 * };
 * assert(get('post.like[2]', objectTarget), 'c');
 */
export function get(propertyString, target) {
	if (!target) {
		return false;
	}
	let link = target;
	const pathArray = (isArray(propertyString)) ? propertyString : toPath(propertyString);
	everyArray(pathArray, (item) => {
		link = link[item];
		return hasValue(link);
	});
	return link;
}

