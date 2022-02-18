import namespace from '../namespace/index';
import { isEqual } from './isEqual';
import { whileArray } from '../array/each';
import { assign, keys } from '../internal/object';
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
  * propertyMatch({
  *   a: 1,
  *   b: 2
  * }, {
  *   a: 1,
  *   b: 2
  * }, ['a', 'b']);
  * // => true
*/
export const propertyMatch = (source, compared, properties = keys(source)) => {
	return whileArray(properties, (property) => {
		return isEqual(source[property], compared[property]);
	});
};
assign(namespace, {
	propertyMatch,
});
