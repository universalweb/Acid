const normalizeCase = /[-_]/g;
const spaceFirstLetter = / (.)/g;
/**
 * Converts a string and converts it entirely into uppercase.
 *
 * @function upperCase
 * @category string
 * @type {Function}
 * @param {string} string - String to be converted into upper case.
 * @returns {string} - Converted string in upper case.
 *
 * @example
 * import { stubArray } from './Acid.js';
 * upperCase('upper case');
 * // => 'UPPER CASE'
 */
export function upperCase(string) {
	return string.replace(normalizeCase, ' ')
		.trim()
		.toUpperCase();
}
/**
 * Converts a string into Camel case format.
 *
 * @function camelCase
 * @category string
 * @type {Function}
 * @param {string} string - String to be converted into Camel case.
 * @returns {string} - Converted string in Camel case.
 *
 * @example
 * import { stubArray } from './Acid.js';
 * camelCase('camel case');
 * // => 'camelCase'
 */
export function camelCase(string) {
	return string.toLowerCase()
		.replace(spaceFirstLetter, (match) => {
			return match.toUpperCase().replace(/ /g, '');
		});
}
/**
 * Converts a string into Kebab case format.
 *
 * @function kebabCase
 * @category string
 * @type {Function}
 * @param {string} string - String to be converted into Kebab case.
 * @returns {string} - Converted string in Kebab case.
 *
 * @example
 * import { stubArray } from './Acid.js';
 * kebabCase('kebab case');
 * // => 'kebab-case'
 */
export function kebabCase(string) {
	return string.replace(normalizeCase, ' ')
		.trim()
		.toLowerCase()
		.replace(spaceFirstLetter, '-$1');
}
/**
 * Converts a string into snake case format.
 *
 * @function snakeCase
 * @category string
 * @type {Function}
 * @param {string} string - String to be converted into snake case.
 * @returns {string} - Converted string in Snake case.
 *
 * @example
 * import { stubArray } from './Acid.js';
 * snakeCase('snake case');
 * // => 'snake_case'
 */
export function snakeCase(string) {
	return string.replace(normalizeCase, ' ')
		.trim()
		.toLowerCase()
		.replace(spaceFirstLetter, '_$1');
}

