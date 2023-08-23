import { isBuffer } from '../types/isBuffer.js';
import { isArray } from '../types/isArray.js';
import { clearBuffer } from '../buffers/clear.js';
import { clearArray } from '../arrays/clear.js';
/**
 * Clears the values out of an array, buffer, and objects like Map that have a clear method.
 *
 * @function clear
 * @category utility
 * @type {Function}
 * @param {Array} source - Takes an array to be emptied.
 * @returns {Array} - The originally given array.
 *
 * @example
 * import { clear, assert } from '@universalweb/acid';
 * assert(clear(Buffer.from([1,'B', 'Cat'])), []);
 */
export function clear(source) {
	if (source) {
		if (isBuffer(source)) {
			return clearBuffer(source);
		} else if (isArray(source)) {
			return clearArray(source);
		} else if (source.clear) {
			source.clear();
		} else if (source.length) {
			source.length = 0;
		}
	}
	return source;
}

