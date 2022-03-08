import { eachArray } from '../array/each';
/**
  * Returns a clone of the source object with the plucked properties.
  *
  * @function pick
  * @type {Function}
  * @category object
  * @param {Object} source - Object to be cloned.
  * @param {Array} array - Array used to determine what values to be plucked.
  * @param {Object} [newObject = {}] - Object to be populated with plucked values.
  * @returns {Object} - A new object with plucked properties.
  *
  * @example
  * pick({a:1, b:2, c:3}, ['a','b']);
  * // => {a:1, b:2}
*/
export const pick = (source, array, newObject = {}) => {
	eachArray(array, (item) => {
		newObject[item] = source[item];
	});
	return newObject;
};

