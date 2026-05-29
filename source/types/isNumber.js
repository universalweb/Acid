/**
 * Checks if the value is a number.
 *
 * @function isNumber
 * @category type
 * @param {*} source - Object to be checked.
 * @returns {Boolean} - Returns true or false.
 *
 * @example
 * import { isNumber, assert } from '@universalweb/acid';
 * assert(isNumber(1), true);
 */
export function isNumberCall(target) {
	return target?.constructor === Number || false;
}
export function isNumber(primarySource, ...otherSources) {
	if (otherSources.length === 0) {
		return isNumberCall(primarySource);
	}
	if (!isNumberCall(primarySource)) {
		return false;
	}
	const otherLength = otherSources.length;
	for (let otherIndex = 0; otherIndex < otherLength; otherIndex++) {
		if (!isNumberCall(otherSources[otherIndex])) {
			return false;
		}
	}
	return true;
}
/**
 * Checks if the value is not a number.
 *
 * @function isNotNumber
 * @category type
 * @param {*} source - Object to be checked.
 * @returns {Boolean} - Returns true or false.
 *
 * @example
 * import { isNotNumber, assert } from '@universalweb/acid';
 * assert(isNotNumber(1), false);
 */
export function isNotNumber(source) {
	return !isNumber(source);
}
