const normalizeCase = /[ _-]+/g;
/**
 * Converts a string into single space sepperated words in uppercase.
 *
 * @function upperCase
 * @category string
 * @type {Function}
 * @param {String} source - String to be converted into upper case.
 * @returns {String} - Converted string in upper case.
 *
 * @example
 * import { upperCase, assert } from '@universalweb/acid';
 * assert(upperCase('upper-case'), 'UPPER CASE');
 * assert(upperCase('upper_case'), 'UPPER CASE');
 */
export function upperCase(source) {
	return source
		.replace(/([A-Z]+)/g, ' $1')
		.replace(normalizeCase, ' ')
		.trim()
		.toUpperCase();
}
