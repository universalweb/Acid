import { eachArray } from '../array/each.js';
/**
  * Returns a clone of the source object with the plucked properties.
  *
  * @function pick
  * @type {Function}
  * @category object
  * @param {Object} source - Object to be cloned.
  * @param {Array} whitelist - Array of property names used to determine what values to pluck.
  * @param {Object} [target = {}] - Object to be populated with plucked values.
  * @returns {Object} - A new object with plucked properties.
  *
  * @example
  * pick({a:1, b:2, c:3}, ['a','b']);
  * // => {a:1, b:2}
*/
export const pick = (source, whitelist, target = {}) => {
	if (!source) {
		return;
	}
	eachArray(whitelist, (item) => {
		target[item] = source[item];
	});
	return target;
};

