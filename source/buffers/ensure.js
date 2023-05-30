import { isBuffer } from '../types/isBuffer.js';
import { hasValue } from '../types/hasValue.js';
/**
  * Ensures the source is a Buffer if not the source is used to create a buffer using Buffer.from else if there's no source an empty Buffer is returned with Buffer.alloc(0). Keep in mind not all objects can be used to create a Buffer.
  *
  * @function ensureBuffer
  * @category array
  * @type {Function}
  * @param {*} source - Object to be checked.
  * @returns {Array} - Returns an array.
  *
  * @example
  * import { isBuffer, ensureBuffer, assert } from 'Acid';
  * assert(isBuffer(ensureBuffer('test')), true);
*/
export function ensureBuffer(source) {
	return (isBuffer(source) && source) || (hasValue(source) && Buffer.from(source)) || Buffer.alloc(0);
}
