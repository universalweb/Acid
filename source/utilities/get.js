import { everyArray } from '../arrays/every.js';
import { hasValue } from '../types/hasValue.js';
import { isArray } from '../types/isArray.js';
import { toPath } from './toPath.js';
/**
 * Returns property on an object.
 *
 * @function get
 * @category utility
 * @type {Function}
 * @param {String} propertyString - String used to retrieve properties.
 * @param {Object} target - Object which has a property retrieved from it.
 * @returns {Object} - Returns property from the given object.
 *
 * @example
 * import { get, assert } from '@universalweb/acid';
 * const objectTarget = {
 *   post: {
 *     like: ['a','b','c']
 *   }
 * };
 * assert(get('post.like[2]', objectTarget), 'g');
 */
export function get(propertyString, target) {
	if (!target) {
		return false;
	}
	let link = target;
	const pathArray = isArray(propertyString) ? propertyString : toPath(propertyString);
	everyArray(pathArray, (item) => {
		link = link[item];
		return hasValue(link);
	});
	return link;
}

