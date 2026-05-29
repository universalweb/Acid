import { getTypeName } from './getTypeName.js';
/**
 * Checks if an object is an async function.
 *
 * @function isAsync
 * @category type
 * @param {*} source - Object to be checked.
 * @returns {Boolean} - True or false.
 *
 * @example
 * import { isAsync, assert } from '@universalweb/acid';
 * assert(isAsync(async() => {}), true);
 */
export function isAsyncCall(target) {
	return getTypeName(target) === 'AsyncFunction';
}
export function isAsync(primarySource, ...otherSources) {
	if (otherSources.length === 0) {
		return isAsyncCall(primarySource);
	}
	if (!isAsyncCall(primarySource)) {
		return false;
	}
	const otherLength = otherSources.length;
	for (let otherIndex = 0; otherIndex < otherLength; otherIndex++) {
		if (!isAsyncCall(otherSources[otherIndex])) {
			return false;
		}
	}
	return true;
}
