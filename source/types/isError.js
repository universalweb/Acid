/**
 * Checks if an object or objects are an Error object.
 *
 * @function isError
 * @category type
 * @param {*} source - Object to be checked.
 * @returns {Boolean} - Returns true or false.
 *
 * @example
 * import { isError, assert } from '@universalweb/acid';
 * assert(isError(new Error()), true);
 */
export function isErrorCall(target) {
	return target?.constructor === Error || false;
}
export function isError(primarySource, ...otherSources) {
	if (otherSources.length === 0) {
		return isErrorCall(primarySource);
	}
	if (!isErrorCall(primarySource)) {
		return false;
	}
	const otherLength = otherSources.length;
	for (let otherIndex = 0; otherIndex < otherLength; otherIndex++) {
		if (!isErrorCall(otherSources[otherIndex])) {
			return false;
		}
	}
	return true;
}
