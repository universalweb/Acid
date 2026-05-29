/**
 * Checks if an object or objects are a BigInt.
 *
 * @function isBigInt
 * @category type
 * @param {*} source - Object to be checked.
 * @returns {Boolean} - Returns true or false.
 *
 * @example
 * import { isBigInt, assert } from '@universalweb/acid';
 * assert(isBigInt(BigInt(123)), true);
 */
export function isBigIntCall(target) {
	return target?.constructor === BigInt || false;
}
export function isBigInt(primarySource, ...otherSources) {
	if (otherSources.length === 0) {
		return isBigIntCall(primarySource);
	}
	if (!isBigIntCall(primarySource)) {
		return false;
	}
	const otherLength = otherSources.length;
	for (let otherIndex = 0; otherIndex < otherLength; otherIndex++) {
		if (!isBigIntCall(otherSources[otherIndex])) {
			return false;
		}
	}
	return true;
}
