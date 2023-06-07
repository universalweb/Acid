/**
 * Chunks an array according to a user defined number.
 *
 * @function chunk
 * @category Array
 * @type {Function}
 * @param {Array} array - Array to be chunked.
 * @param {Number} size - Number which determines the size of each chunk.
 * @returns {Array} - A chunked version of the source array.
 *
 * @example
 * import { chunk, assert } from '@universalweb/acid';
 * assert(chunk([1,2,3], 1), [[1],[2],[3]]);
 */
export function chunk(array, size = 1) {
	const chunked = [];
	let index = 0;
	array.forEach((item, key) => {
		if (!(key % size)) {
			chunked.push([]);
			if (key) {
				index++;
			}
		}
		chunked[index].push(item);
	});
	return chunked;
}
