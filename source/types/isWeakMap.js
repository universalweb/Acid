/**
 * Checks if an object or objects are a WeakMap.
 *
 * @function isWeakMap
 * @category type
 * @param {*} source - Object to be checked.
 * @returns {Boolean} - Returns true or false.
 *
 * @example
 * import { isWeakMap, assert } from '@universalweb/acid';
 * assert(isWeakMap(new WeakMap()), true);
 */
export function isWeakMapCall(target) {
	return target?.constructor === WeakMap || false;
}
export function isWeakMap(primarySource, ...otherSources) {
	if (otherSources.length === 0) {
		return isWeakMapCall(primarySource);
	}
	if (!isWeakMapCall(primarySource)) {
		return false;
	}
	const otherLength = otherSources.length;
	for (let otherIndex = 0; otherIndex < otherLength; otherIndex++) {
		if (!isWeakMapCall(otherSources[otherIndex])) {
			return false;
		}
	}
	return true;
}
