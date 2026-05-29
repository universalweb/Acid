/**
 * Returns a new array of items present in every input array (set intersection). Pre-builds a `Set` per comparator so each membership check is O(1) instead of O(n).
 *
 * @function intersection
 * @param {Array} array - Array to compare other arrays to.
 * @param {...Array} arrays - A variable number of arrays.
 * @category array
 * @returns {Array} - The new array of unique values shared by all of the arrays.
 *
 * @example
 * import { intersection, assert } from '@universalweb/acid';
 * assert(intersection([1, 2, 3], [2, 3, 4]), [2, 3]);
 */
export function intersection(array, ...arrays) {
	const arraysLength = arrays.length;
	if (arraysLength === 0) {
		return [...array];
	}
	const comparatorSets = new Array(arraysLength);
	for (let comparatorIndex = 0; comparatorIndex < arraysLength; comparatorIndex++) {
		comparatorSets[comparatorIndex] = new Set(arrays[comparatorIndex]);
	}
	const result = [];
	const arrayLength = array.length;
	for (let itemIndex = 0; itemIndex < arrayLength; itemIndex++) {
		const item = array[itemIndex];
		let presentInAll = true;
		for (let setIndex = 0; setIndex < arraysLength; setIndex++) {
			if (!comparatorSets[setIndex].has(item)) {
				presentInAll = false;
				break;
			}
		}
		if (presentInAll) {
			result.push(item);
		}
	}
	return result;
}
