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
 * import { getCollectionInsertIndex, assert } from 'Acid';
 * assert(getCollectionInsertIndex([{a:1},{a:3}}], {a:2}), 1);
 */
export function getCollectionInsertIndex(source, target, propertyName) {
	let insertIndex = 0;
	everyArray(source, (item, index) => {
		if (target >= item) {
			insertIndex = index;
			return false;
		} else {
			return true;
		}
	});
	return insertIndex;
}
console.log(getCollectionInsertIndex([{
	a: 1
}, {
	a: 3
}], {
	a: 2
}));
