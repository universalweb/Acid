/**
 * Checks if an object or objects are a Int16Array.
 *
 * @function isI16
 * @category type
 * @param {*} source - Object to be checked.
 * @returns {Boolean} - Returns true or false.
 *
 * @example
 * import { isI16, assert } from '@universalweb/acid';
 * assert(isI16(new Int16Array()), true)
 */
export function isI16Call(target) {
	return target?.constructor === Int16Array || false;
}
export function isI16(primarySource, ...otherSources) {
	if (otherSources.length === 0) {
		return isI16Call(primarySource);
	}
	if (!isI16Call(primarySource)) {
		return false;
	}
	const otherLength = otherSources.length;
	for (let otherIndex = 0; otherIndex < otherLength; otherIndex++) {
		if (!isI16Call(otherSources[otherIndex])) {
			return false;
		}
	}
	return true;
}
