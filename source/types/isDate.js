/**
 * Checks if the value is a Date.
 *
 * @function isDate
 * @category type
 * @param {*} source - Object to be checked.
 * @returns {Boolean} - Returns true or false.
 *
 * @example
 * import { isDate, assert } from '@universalweb/acid';
 * assert(isDate(new Date()), true);
 */
export function isDateCall(target) {
	return target?.constructor === Date || false;
}
export function isDate(primarySource, ...otherSources) {
	if (otherSources.length === 0) {
		return isDateCall(primarySource);
	}
	if (!isDateCall(primarySource)) {
		return false;
	}
	const otherLength = otherSources.length;
	for (let otherIndex = 0; otherIndex < otherLength; otherIndex++) {
		if (!isDateCall(otherSources[otherIndex])) {
			return false;
		}
	}
	return true;
}
