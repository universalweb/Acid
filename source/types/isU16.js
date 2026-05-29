/**
 * Checks if an object or objects are a Uint16Array.
 *
 * @function isU16
 * @category type
 * @param {*} source - Object to be checked.
 * @returns {Boolean} - Returns true or false.
 *
 * @example
 * import { isU16, assert } from '@universalweb/acid';
 * assert(isU16(new Uint16Array()), true)
 */
export function isU16Call(target) {
	return target?.constructor === Uint16Array || false;
}
export function isU16(primarySource, ...otherSources) {
	if (otherSources.length === 0) {
		return isU16Call(primarySource);
	}
	if (!isU16Call(primarySource)) {
		return false;
	}
	const otherLength = otherSources.length;
	for (let otherIndex = 0; otherIndex < otherLength; otherIndex++) {
		if (!isU16Call(otherSources[otherIndex])) {
			return false;
		}
	}
	return true;
}
