const isArrayNative = Array.isArray;
/**
 * Checks if the value is an array. References Array.isArray.
 *
 * @function isArray
 * @category type
 * @param {*} source - Object to be checked.
 * @returns {Boolean} - Returns true or false.
 *
 * @example
 * import { isArray, assert } from '@universalweb/acid';
 * assert(isArray([]), true);
 * assert(isArray(2), false);
 */
export function isArray(primarySource, ...otherSources) {
	if (otherSources.length === 0) {
		return isArrayNative(primarySource);
	}
	if (!isArrayNative(primarySource)) {
		return false;
	}
	const otherLength = otherSources.length;
	for (let otherIndex = 0; otherIndex < otherLength; otherIndex++) {
		if (!isArrayNative(otherSources[otherIndex])) {
			return false;
		}
	}
	return true;
}
/**
 * Checks if the value is not an array.
 *
 * @function isNotArray
 * @category type
 * @param {*} source - Object to be checked.
 * @returns {Boolean} - Returns true or false.
 *
 * @example
 * import { isNotArray, assert } from '@universalweb/acid';
 * assert(isNotArray([]), false);
 * assert(isNotArray(2), true);
 */
export function isNotArray(source, ...args) {
	return !isArray(source, ...args);
}
