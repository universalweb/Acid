export function onlyUnique(value, index, array) {
	return array.indexOf(value) === index;
}
export function sortUnique(item, index, array) {
	return item !== array[index - 1];
}
/**
 * Filters the array down to unique elements. Default path uses a `Set` — O(n). When `isSorted` is true, walks once comparing each item to the previous — O(n) with no extra allocation.
 *
 * @function unique
 * @category array
 * @type {Function}
 * @param {Array} source - The array to be filtered.
 * @param {Boolean} [isSorted] - Hint that the input is already sorted so the no-alloc path applies.
 * @returns {Array} - The filtered array.
 *
 * @example
 * import { unique, assert } from '@universalweb/acid';
 * assert(unique([1, 2, 2, 4]), [1, 2, 4]);
 */
export function unique(source, isSorted) {
	if (isSorted) {
		return source.filter(sortUnique);
	}
	return [...new Set(source)];
}

