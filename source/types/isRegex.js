/**
 * Checks if the value is a RegExp.
 *
 * @function isRegex
 * @category type
 * @param {*} source - Object to be checked.
 * @returns {Boolean} - Returns true or false.
 *
 * @example
 * import { isRegex, assert } from '@universalweb/acid';
 * assert(isRegex(/test/), true);
 */
export function isRegexCall(target) {
	return target?.constructor === RegExp || false;
}
export function isRegex(primarySource, ...otherSources) {
	if (otherSources.length === 0) {
		return isRegexCall(primarySource);
	}
	if (!isRegexCall(primarySource)) {
		return false;
	}
	const otherLength = otherSources.length;
	for (let otherIndex = 0; otherIndex < otherLength; otherIndex++) {
		if (!isRegexCall(otherSources[otherIndex])) {
			return false;
		}
	}
	return true;
}
