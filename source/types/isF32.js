/**
 * Checks if an object or objects are a Float32Array.
 *
 * @function isF32
 * @category type
 * @param {*} source - Object to be checked.
 * @returns {Boolean} - Returns true or false.
 *
 * @example
 * import { isF32, assert } from '@universalweb/acid';
 * assert(isF32(new Float32Array()), true);
 */
export function isF32Call(target) {
	return target?.constructor === Float32Array || false;
}
export function isF32(primarySource, ...otherSources) {
	if (otherSources.length === 0) {
		return isF32Call(primarySource);
	}
	if (!isF32Call(primarySource)) {
		return false;
	}
	const otherLength = otherSources.length;
	for (let otherIndex = 0; otherIndex < otherLength; otherIndex++) {
		if (!isF32Call(otherSources[otherIndex])) {
			return false;
		}
	}
	return true;
}
