/**
 * Checks if an object(s) is a Set.
 *
 * @function isSet
 * @category type
 * @param {...*} sources - Objects to be checked.
 * @returns {Boolean} - Returns true or false.
 *
 * @example
 * import { isSet, assert } from '@universalweb/acid';
 * assert(isSet(new Set()), true);
 */
export function isSetCall(target) {
	return target?.constructor === Set || false;
}
export function isSet(primarySource, ...otherSources) {
	if (otherSources.length === 0) {
		return isSetCall(primarySource);
	}
	if (!isSetCall(primarySource)) {
		return false;
	}
	const otherLength = otherSources.length;
	for (let otherIndex = 0; otherIndex < otherLength; otherIndex++) {
		if (!isSetCall(otherSources[otherIndex])) {
			return false;
		}
	}
	return true;
}
