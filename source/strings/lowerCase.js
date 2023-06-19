const normalizeCase = /[ _-]+/g;
/**
 * Converts a string into single space sepperated words in lowerCase.
 *
 * @function lowerCase
 * @category string
 * @type {Function}
 * @param {String} source - String to be converted into upper case.
 * @returns {String} - Converted string in upper case.
 *
 * @example
 * import { lowerCase, assert } from '@universalweb/acid';
 * assert(lowerCase('upper-case'), 'upper case');
 * assert(lowerCase('upper_case'), 'upper case');
 */
export function lowerCase(source) {
	return source
		.replace(/([A-Z]+)/g, ' $1')
		.replace(normalizeCase, ' ')
		.trim()
		.toLowerCase();
}
