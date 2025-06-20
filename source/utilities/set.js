import { everyArray } from '../arrays/every.js';
import { hasValue } from '../types/hasValue.js';
import { isArray } from '../types/isArray.js';
import { toPath } from './toPath.js';
/**
 * Travels down an object based on a string then assigns a value on the last object and or array.
 *
 * @function set
 * @category utility
 * @type {Function}
 * @param {*} source - Object to travel and set a value on.
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
 * set(objectTarget, 'post.like[2]', 'g');
 * assert(objectTarget.post.like[2], 'g');
 */
export function set(target, propertyString, value) {
	if (!target) {
		return;
	}
	let link = target;
	const pathArray = isArray(propertyString) ? propertyString : toPath(propertyString);
	const lastPathItem = pathArray.pop();
	const pathArrayLength = pathArray.length;
	everyArray(pathArray, (item) => {
		link = link[item];
		return hasValue(link);
	});
	if (link) {
		link[lastPathItem] = value;
	}
	return link;
}
