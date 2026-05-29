/**
 * Checks if an object or objects are a Uint32Array.
 *
 * @function isU32
 * @category type
 * @param {*} source - Object to be checked.
 * @returns {Boolean} - Returns true or false.
 *
 * @example
 * import { isU32, assert } from '@universalweb/acid';
 * assert(isU32(new Uint32Array()), true)
 */
export function isU32Call(target) {
	return target?.constructor === Uint32Array || false;
}
export function isU32(primarySource, ...otherSources) {
	if (otherSources.length === 0) {
		return isU32Call(primarySource);
	}
	if (!isU32Call(primarySource)) {
		return false;
	}
	const otherLength = otherSources.length;
	for (let otherIndex = 0; otherIndex < otherLength; otherIndex++) {
		if (!isU32Call(otherSources[otherIndex])) {
			return false;
		}
	}
	return true;
}
