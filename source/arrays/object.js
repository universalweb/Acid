import { eachArray } from './each.js';
/**
 * Takes all but the last item in the array.
 *
 * @function arrayToObject
 * @type {Function}
 * @category array
 * @param {Array} source - Array to have items extracted from.
 * @param {Array} properties - Array to have items extracted from.
 * @returns {Array} - Returns a completely flattened array.
 *
 * @example
 * import { arrayToObject, assert } from 'Acid';
 * assert(arrayToObject([1, 2, 3], ['a', 'b', 'c']), {a:1, b:2, c: 3});
 */
export function arrayToObject(source, properties) {
	const sortedObject = {};
	eachArray(source, (item, key) => {
		sortedObject[properties[key]] = item;
	});
	return sortedObject;
}

