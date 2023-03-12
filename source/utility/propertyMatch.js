import { isEqual } from './isEqual.js';
import { everyArray } from '../array/every.js';
import { keys } from '../object/keys.js';
/**
 * Using a deep comparison it checks if properties of two objects using an array are equal.
 *
 * @function propertyMatch
 * @type {Function}
 * @category utility
 * @param {Object} source - The source object to compare.
 * @param {Object} compared - Object to be compared to source.
 * @param {Array} properties - List of properties to compare defaults to keys(source).
 * @returns {Array} - Returns an array of properties.
 *
 * @example
 * import { propertyMatch, assert } from 'Acid';
 * assert(propertyMatch({
 *   a: 1,
 *   b: 2
 * }, {
 *   a: 1,
 *   b: 2
 * }, ['a', 'b']), true);
 */
export const propertyMatch = (source, compared, properties = keys(source)) => {
	return everyArray(properties, (property) => {
		return isEqual(source[property], compared[property]);
	});
};

