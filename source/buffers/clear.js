import { isBuffer } from '../types/isBuffer.js';
/**
 * Zero-fills a Buffer in place and returns it.
 *
 * @function clearBuffer
 * @category buffer
 * @type {Function}
 * @param {Buffer} source - Buffer to be zero-filled.
 * @returns {Buffer} - The originally given buffer, now filled with zeros.
 *
 * @example
 * import { clearBuffer, assert } from '@universalweb/acid';
 * assert(clearBuffer(Buffer.from([1, 2, 3])), Buffer.from([0, 0, 0]));
 */
export function clearBuffer(source) {
	if (isBuffer(source) || source?.fill) {
		source.fill(0);
	}
	return source;
}

