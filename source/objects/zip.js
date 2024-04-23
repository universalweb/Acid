import { eachArray } from '../arrays/each.js';
import { eachObject } from './each.js';
/**
 * Creates an object from two arrays, one of property identifiers and one of corresponding values.
 *
 * @function zipObject
 * @type {Function}
 * @category object
 * @param {Array} properties - The property identifiers.
 * @param {Array} values - The property values.
 * @returns {Object} - Returns the new object.
 *
 * @example
 * zipObject(['a', 'b'], [1, 2]);
 * // => { 'a': 1, 'b': 2 }
 */
export const zipObject = (properties, values) => {
	const source = {};
	eachArray(properties, (item, key) => {
		source[item] = values[key];
	});
	return source;
};
/**
 * Takes an array of grouped elements and creates an array regrouping the elements to their pre-zip object configuration.
 *
 * @function unZipObject
 * @type {Function}
 * @category object
 * @param {Object} object - The object to process.
 * @returns {Array} - Returns two arrays one of keys and the other of values inside a single array.
 *
 * @example
 * unZipObject({ 'a': 1, 'b': 2 });
 * // => [['a', 'b'], [1, 2]]
 */
export const unZipObject = (object) => {
	const objectKeys = [];
	const objectValues = [];
	eachObject(object, (item, key) => {
		objectKeys.push(key);
		objectValues.push(item);
	});
	return [
		objectKeys,
		objectValues,
	];
};

