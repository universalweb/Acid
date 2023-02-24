import { hasValue } from '../type/hasValue.js';
import { toPath } from '../utility/toPath.js';
import { everyArray } from '../array/every.js';
/**
 * Returns property on an object.
 *
 * @function get
 * @category utility
 * @type {Function}
 * @param {string} propertyString - String used to retrieve properties.
 * @param {Object} objectChain - Object which has a property retrieved from it.
 * @returns {Object} - Returns property from the given object.
 *
 * @example
 * get('post.like[2]', {
 *   post: {
 *     like: ['a','b','c']
 *   }
 * });
 * // => 'c'
 */
export const get = (propertyString, objectChain) => {
	let link = objectChain;
	everyArray(toPath(propertyString), (item) => {
		link = link[item];
		return hasValue(link);
	});
	return link;
};

