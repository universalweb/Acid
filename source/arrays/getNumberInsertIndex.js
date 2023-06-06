import { everyArray } from './every.js';
/**
 * What index should the number be inserted at to keep a sorted array still sorted.
 *
 * @function getNumberInsertIndex
 * @category array
 * @type {Function}
 * @param {Array} source - Array to be checked.
 * @param {Number} target - Number to check where to be inserted.
 * @returns {Number} - The index at which to insert.
 *
 * @example
 * import { getNumberInsertIndex, assert } from 'Acid';
 * assert(getNumberInsertIndex([30, 39, 50], 40), 1);
 */
export function getNumberInsertIndex(source, target) {
	let insertIndex = 0;
	everyArray(source, (item, index) => {
		insertIndex = index;
		if (target >= item) {
			insertIndex = index + 1;
			return true;
		} else {
			return false;
		}
	});
	return insertIndex;
}
