const normalizeCase = /[ _-]+/g;
const space = /[ ]+/g;
/**
 * Converts a string into single space sepperated words in Kebab case.
 *
 * @function kebabCase
 * @category string
 * @type {Function}
 * @param {String} source - String to be converted into Kebab case.
 * @returns {String} - Converted string in Kebab case.
 *
 * @example
 * import { kebabCase, assert } from '@universalweb/acid';
 * assert(kebabCase('kebab case'), 'kebab-case');
 */
export function kebabCase(source) {
	return source.replace(/([A-Z]+)/g, ' $1')
		.replace(normalizeCase, ' ')
		.trim()
		.toLowerCase()
		.replace(space, '-');
}

