/**
 * Checks if an object or objects are a Uint8Array.
 *
 * @function isU8
 * @category type
 * @param {*} source - Object to be checked.
 * @returns {Boolean} - Returns true or false.
 *
 * @example
 * import { isU8, assert } from '@universalweb/acid';
 * assert(isU8(new Uint8Array()), true);
 */
export function isU8Call(target) {
	return target?.constructor === Uint8Array || false;
}
export function isU8(primarySource, ...otherSources) {
	if (otherSources.length === 0) {
		return isU8Call(primarySource);
	}
	if (!isU8Call(primarySource)) {
		return false;
	}
	const otherLength = otherSources.length;
	for (let otherIndex = 0; otherIndex < otherLength; otherIndex++) {
		if (!isU8Call(otherSources[otherIndex])) {
			return false;
		}
	}
	return true;
}
