/**
 * Checks if an object or objects are a Int32Array.
 *
 * @function isI32
 * @category type
 * @param {*} source - Object to be checked.
 * @returns {Boolean} - Returns true or false.
 *
 * @example
 * import { isI32, assert } from '@universalweb/acid';
 * assert(isI32(new Int32Array()), true);
 */
export function isI32Call(target) {
	return target?.constructor === Int32Array || false;
}
export function isI32(primarySource, ...otherSources) {
	if (otherSources.length === 0) {
		return isI32Call(primarySource);
	}
	if (!isI32Call(primarySource)) {
		return false;
	}
	const otherLength = otherSources.length;
	for (let otherIndex = 0; otherIndex < otherLength; otherIndex++) {
		if (!isI32Call(otherSources[otherIndex])) {
			return false;
		}
	}
	return true;
}
