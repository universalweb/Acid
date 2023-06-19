const normalizeCase = /[ _-]+/g;
/**
 * Converts a string into Camel case format.
 *
 * @function camelCase
 * @category string
 * @type {Function}
 * @param {String} source - String to be converted into Camel case.
 * @returns {String} - Converted string in Camel case.
 *
 * @example
 * import { camelCase, assert } from '@universalweb/acid';
 * assert(camelCase('camel case'), 'camelCase');
 */
export function camelCase(source) {
	let result = '';
	source.replace(normalizeCase, ' ').trim()
		.split(' ')
		.forEach((item, index) => {
			if (index === 0) {
				result += item.toLowerCase();
			} else {
				result += item[0].toUpperCase() + item.slice(1).toLowerCase();
			}
		});
	return result;
}
