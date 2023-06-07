import { everyArray } from '../arrays/every.js';
/**
 * What index should the object be inserted at to keep a sorted array still sorted.
 *
 * @function getCollectionInsertIndex
 * @category array
 * @type {Function}
 * @param {Array} source - Array to be checked.
 * @param {Number} target - Object to check where to be inserted.
 * @returns {Number} - The index at which to insert.
 *
 * @example
 * import { getCollectionInsertIndex, assert } from '@universalweb/acid';
 * assert(getCollectionInsertIndex([{a:1},{a:3},{a:4}], {a:2}), 1);
 */
export function getCollectionInsertIndex(source, target, propertyName) {
	let insertIndex = 0;
	everyArray(source, (item, index) => {
		insertIndex = index;
		if (target[propertyName] >= item[propertyName]) {
			insertIndex = index + 1;
			return true;
		} else {
			return false;
		}
	});
	return insertIndex;
}
