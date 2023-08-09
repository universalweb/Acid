/**
 * Clears the values out of a buffer.
 *
 * @function clearBuffer
 * @category buffer
 * @type {Function}
 * @param {Array} source - Takes an array to be emptied.
 * @returns {Array} - The originally given array.
 *
 * @example
 * import { clearBuffer, assert } from '@universalweb/acid';
 * assert(clearBuffer(Buffer.from([1,'B', 'Cat'])), Buffer.from([]));
 */
export function clearBuffer(source) {
	source.fill(0);
	return source;
}

