/**
 * Checks if an object or objects are a Int8Array.
 *
 * @function isI8
 * @category type
 * @param {*} source - Object to be checked.
 * @returns {Boolean} - Returns true or false.
 *
 * @example
 * import { isI8, assert } from '@universalweb/acid';
 * assert(isI8(new Int8Array()), true);
 */
export function isI8Call(target) {
	return target?.constructor === Int8Array || false;
}
export function isI8(primarySource, ...otherSources) {
	if (otherSources.length === 0) {
		return isI8Call(primarySource);
	}
	if (!isI8Call(primarySource)) {
		return false;
	}
	const otherLength = otherSources.length;
	for (let otherIndex = 0; otherIndex < otherLength; otherIndex++) {
		if (!isI8Call(otherSources[otherIndex])) {
			return false;
		}
	}
	return true;
}
