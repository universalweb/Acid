/**
 * Checks if an object or objects are a Float64Array.
 *
 * @function isF64
 * @category type
 * @param {*} source - Object to be checked.
 * @returns {Boolean} - Returns true or false.
 *
 * @example
 * import { isF64, assert } from '@universalweb/acid';
 * assert(isF64(new Float64Array()), true)
 */
export function isF64Call(target) {
	return target?.constructor === Float64Array || false;
}
export function isF64(primarySource, ...otherSources) {
	if (otherSources.length === 0) {
		return isF64Call(primarySource);
	}
	if (!isF64Call(primarySource)) {
		return false;
	}
	const otherLength = otherSources.length;
	for (let otherIndex = 0; otherIndex < otherLength; otherIndex++) {
		if (!isF64Call(otherSources[otherIndex])) {
			return false;
		}
	}
	return true;
}
