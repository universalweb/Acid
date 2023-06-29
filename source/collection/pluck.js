import { mapArray } from '../arrays/map.js';
import { pluckObject } from '../objects/pluckObject.js';
/**
 * Returns an array of the plucked values from the collection.
 *
 * @function pluck
 * @category collection
 * @type {Function}
 * @param {Array} collection - Array used to determine what value to be plucked.
 * @param {(String|Number|Array.<string, number>)} targets - Property name.
 * @returns {Array} - An array of plucked values.
 *
 * @example
 * import { pluck, assert } from '@universalweb/acid';
 * assert(pluck([{a: 1}, {a: 2}], 'a'), [1, 2]);
 * assert(pluck([{a: 1, b:3}, {a: 1, b:3}], ['a','b']), [[1, 3], [1, 3]]);
 */
export function pluck(collection, targets) {
	return mapArray(collection, (item) => {
		return pluckObject(item, targets);
	});
}
