/**
 * Checks if an object or objects are a Map.
 *
 * @function isMap
 * @category type
 * @param {*} source - Object to be checked.
 * @returns {Boolean} - Returns true or false.
 *
 * @example
 * import { isMap, assert } from '@universalweb/acid';
 * assert(isMap(new Map()), true)
 */
export function isMapCall(target) {
	return target?.constructor === Map || false;
}
export function isMap(primarySource, ...otherSources) {
	if (otherSources.length === 0) {
		return isMapCall(primarySource);
	}
	if (!isMapCall(primarySource)) {
		return false;
	}
	const otherLength = otherSources.length;
	for (let otherIndex = 0; otherIndex < otherLength; otherIndex++) {
		if (!isMapCall(otherSources[otherIndex])) {
			return false;
		}
	}
	return true;
}
