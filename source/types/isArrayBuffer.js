/**
 * Checks if an object or objects are a ArrayBuffer.
 *
 * @function isArrayBuffer
 * @category type
 * @param {*} source - Object to be checked.
 * @returns {Boolean} - Returns true or false.
 *
 * @example
 * import { isArrayBuffer, assert } from '@universalweb/acid';
 * assert(isArrayBuffer(new ArrayBuffer()), true);
 */
export function isArrayBufferCall(target) {
	return target?.constructor === ArrayBuffer || false;
}
export function isArrayBuffer(primarySource, ...otherSources) {
	if (otherSources.length === 0) {
		return isArrayBufferCall(primarySource);
	}
	if (!isArrayBufferCall(primarySource)) {
		return false;
	}
	const otherLength = otherSources.length;
	for (let otherIndex = 0; otherIndex < otherLength; otherIndex++) {
		if (!isArrayBufferCall(otherSources[otherIndex])) {
			return false;
		}
	}
	return true;
}
