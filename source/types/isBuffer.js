import { everyArray } from '../arrays/every.js';
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
export function isBufferCall(target) {
	if (!globalThis.Buffer) {
		return false;
	}
	if (globalThis.Buffer.isBuffer) {
		return globalThis.Buffer.isBuffer(target);
	}
	return target?.constructor === globalThis.Buffer || false;
}
export function isBuffer(primarySource, ...otherSources) {
	if (!globalThis.Buffer) {
		return false;
	}
	if (otherSources.length === 0) {
		return isBufferCall(primarySource);
	}
	if (!isBufferCall(primarySource)) {
		return false;
	}
	return everyArray(otherSources, isBufferCall);
}
