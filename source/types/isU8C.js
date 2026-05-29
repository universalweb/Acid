/**
 * Checks if an object or objects are a Uint8ClampedArray.
 *
 * @function isU8C
 * @category type
 * @param {*} source - Object to be checked.
 * @returns {Boolean} - Returns true or false.
 *
 * @example
 * import { isU8C, assert } from '@universalweb/acid';
 * assert(isU8C(new Uint8ClampedArray()), true)
 */
export function isU8CCall(target) {
	return target?.constructor === Uint8ClampedArray || false;
}
export function isU8C(primarySource, ...otherSources) {
	if (otherSources.length === 0) {
		return isU8CCall(primarySource);
	}
	if (!isU8CCall(primarySource)) {
		return false;
	}
	const otherLength = otherSources.length;
	for (let otherIndex = 0; otherIndex < otherLength; otherIndex++) {
		if (!isU8CCall(otherSources[otherIndex])) {
			return false;
		}
	}
	return true;
}
