import { eachArray } from '../arrays/each.js';
/**
 * Count the amount of times a key is not present in a collection.
 *
 * @function countWithoutKey
 * @category collection
 * @type {Function}
 * @param {Array} collection - Array of objects.
 * @param {string} propertyName - The name of the key.
 * @returns {number} - The count.
 *
 * @example
 * import { countWithoutKey, assert } from 'Acid';
 * assert(countWithoutKey([{a:1}, {a:3}], 'b'), 2);
 */
export function countWithoutKey(collection, propertyName) {
	let count = 0;
	eachArray(collection, (item) => {
		if (!item[propertyName]) {
			count++;
		}
	});
	return count;
}
