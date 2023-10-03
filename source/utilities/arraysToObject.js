import { eachArray } from '../arrays/each.js';
/**
 * Takes all but the last item in the array.
 *
 * @function arraysToObject
 * @type {Function}
 * @category utility
 * @param {Array} source - Array to have items extracted from.
 * @param {Array} properties - Array to have items extracted from.
 * @returns {Array} - Returns a completely flattened array.
 *
 * @example
 * import { arraysToObject, assert } from '@universalweb/acid';
 * assert(arraysToObject([1, 2, 3], ['a', 'b', 'c']), {a:1, b:2, c: 3});
 */
export function arraysToObject(source, properties) {
	const sortedObject = {};
	eachArray(source, (item, key) => {
		sortedObject[properties[key]] = item;
	});
	return sortedObject;
}

