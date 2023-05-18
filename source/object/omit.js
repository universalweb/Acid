import { filterObject } from './filter.js';
/**
 * Returns a clone of the given object without the given properties.
 *
 * @function omit
 * @category object
 * @type {Function}
 * @param {Object} source - Object from which keys are extracted.
 * @param {array} blacklist - List of property keys to omit from the returned object.
 * @returns {Object} - A new object with the removed.
 *
 * @example
 * omit({a:1, b:2}, ['a']);
 * // => {b:2}
 */
export function omit(source, blacklist) {
	if (!source) {
		return;
	}
	return filterObject(source, (item, key) => {
		return !blacklist.includes(key);
	});
}

