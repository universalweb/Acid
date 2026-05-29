function isStringCall(target) {
	return target?.constructor === String || false;
}
/**
 * Checks if the value is a string.
 *
 * @function isString
 * @category type
 * @param {*} source - Object to be checked.
 * @returns {Boolean} - Returns true or false.
 *
 * @example
 * import { isString, assert } from '@universalweb/acid';
 * assert(isString('hello'), true);
 * assert(isString(1), false);
 */
export function isString(primarySource, ...otherSources) {
	if (otherSources.length === 0) {
		return isStringCall(primarySource);
	}
	if (!isStringCall(primarySource)) {
		return false;
	}
	const otherLength = otherSources.length;
	for (let otherIndex = 0; otherIndex < otherLength; otherIndex++) {
		if (!isStringCall(otherSources[otherIndex])) {
			return false;
		}
	}
	return true;
}
/**
 * Checks if the value is not a string.
 *
 * @function isNotString
 * @category type
 * @param {*} source - Object to be checked.
 * @returns {Boolean} - Returns true or false.
 *
 * @example
 * import { isNotString, assert } from '@universalweb/acid';
 * assert(isNotString(1), true);
 * assert(isNotString('hello'), false);
 */
export function isNotString(source) {
	return !isString(source);
}
