import { everyArray } from '../arrays/every.js';
import { isConstructorFactory } from './isConstructorFactory.js';
import { isTypeFactory } from './isTypeFactory.js';
/**
 * Checks if an object or objects are a Buffer.
 *
 * @function isBuffer
 * @category type
 * @param {*} source - Object to be checked.
 * @returns {Boolean} - Returns true or false.
 *
 * @example
 * import { isBuffer, assert } from '@universalweb/acid';
 * assert(isBuffer(Buffer.from('test')), true);
 */
export const isBufferCall = isConstructorFactory(globalThis.Buffer);
const isBufferFunc = isTypeFactory(isBufferCall);
export function isBuffer(source, ...otherSources) {
	if (!globalThis.Buffer) {
		return Error('Buffer is not available in this environment');
	}
	if (Buffer.isBuffer) {
		return Buffer.isBuffer(source) && (!otherSources?.length || everyArray(otherSources, Buffer.isBuffer));
	}
	return isBufferFunc(source, ...otherSources);
}
