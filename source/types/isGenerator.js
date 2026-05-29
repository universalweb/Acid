import { getTypeName } from './getTypeName.js';
/**
 * Checks if a value is a GeneratorFunction.
 *
 * @function isGenerator
 * @category type
 * @param {*} source - Object to be checked.
 * @returns {Boolean} - Returns true or false.
 *
 * @example
 * import { isGenerator, assert } from '@universalweb/acid';
 * assert(isGenerator(function* (){}), true);
 */
export function isGeneratorCall(target) {
	return getTypeName(target) === 'GeneratorFunction';
}
export function isGenerator(primarySource, ...otherSources) {
	if (otherSources.length === 0) {
		return isGeneratorCall(primarySource);
	}
	if (!isGeneratorCall(primarySource)) {
		return false;
	}
	const otherLength = otherSources.length;
	for (let otherIndex = 0; otherIndex < otherLength; otherIndex++) {
		if (!isGeneratorCall(otherSources[otherIndex])) {
			return false;
		}
	}
	return true;
}
