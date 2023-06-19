const normalizeCase = /[ _-]+/g;
const space = /[ ]+/g;
/**
 * Converts a string into single space sepperated words in snake case.
 *
 * @function snakeCase
 * @category string
 * @type {Function}
 * @param {String} source - String to be converted into snake case.
 * @returns {String} - Converted string in Snake case.
 *
 * @example
 * import { snakeCase, assert } from '@universalweb/acid';
 * assert(snakeCase('snake case'), 'snake_case');
 */
export function snakeCase(source) {
	return source.replace(/([A-Z]+)/g, ' $1')
		.replace(normalizeCase, ' ')
		.trim()
		.toLowerCase()
		.replace(space, '_');
}
