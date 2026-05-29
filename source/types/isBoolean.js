/**
 * Checks if the value is a Boolean.
 *
 * @function isBoolean
 * @category type
 * @param {*} source - Object to be checked.
 * @returns {Boolean} - Returns true or false.
 *
 * @example
 * import { isBoolean, assert } from '@universalweb/acid';
 * assert(isBoolean(true), true)
 */
export function isBooleanCall(target) {
	return target?.constructor === Boolean || false;
}
export function isBoolean(primarySource, ...otherSources) {
	if (otherSources.length === 0) {
		return isBooleanCall(primarySource);
	}
	if (!isBooleanCall(primarySource)) {
		return false;
	}
	const otherLength = otherSources.length;
	for (let otherIndex = 0; otherIndex < otherLength; otherIndex++) {
		if (!isBooleanCall(otherSources[otherIndex])) {
			return false;
		}
	}
	return true;
}
