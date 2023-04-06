import { eachArray } from '../array/each.js';
/**
 * Count the amount of times a key is present in a collection.
 *
 * @function countKey
 * @category collection
 * @type {Function}
 * @param {Array} collection - Array of objects.
 * @param {Function} propertyName - The name of the key.
 * @returns {number} - The count.
 *
 * @example
 * import { countKey, assert } from 'Acid';
 * assert(countKey([{a:1}, {a:3}], 'a'), 2);
 */
export function countKey(collection, propertyName) {
	let count = 0;
	eachArray(collection, (item) => {
		if (item[propertyName]) {
			count++;
		}
	});
	return count;
}