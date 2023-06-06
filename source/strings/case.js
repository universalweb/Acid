const normalizeCase = /[-_]/g;
const spaceFirstLetter = / (.)/g;
/**
 * Converts a string and converts it entirely into uppercase.
 *
 * @function upperCase
 * @category string
 * @type {Function}
 * @param {String} source - String to be converted into upper case.
 * @returns {String} - Converted string in upper case.
 *
 * @example
 * import { upperCase, assert } from 'Acid';
 * upperCase('upper case');
 * // => 'UPPER CASE'
 */
export function upperCase(source) {
	return source.replace(normalizeCase, ' ')
		.trim()
		.toUpperCase();
}
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
 * import { camelCase, assert } from 'Acid';
 * camelCase('camel case');
 * // => 'camelCase'
 */
export function camelCase(source) {
	return source.toLowerCase()
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
 * @param {String} source - String to be converted into Kebab case.
 * @returns {String} - Converted string in Kebab case.
 *
 * @example
 * import { kebabCase, assert } from 'Acid';
 * kebabCase('kebab case');
 * // => 'kebab-case'
 */
export function kebabCase(source) {
	return source.replace(normalizeCase, ' ')
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
 * @param {String} source - String to be converted into snake case.
 * @returns {String} - Converted string in Snake case.
 *
 * @example
 * import { snakeCase, assert } from 'Acid';
 * snakeCase('snake case');
 * // => 'snake_case'
 */
export function snakeCase(source) {
	return source.replace(normalizeCase, ' ')
		.trim()
		.toLowerCase()
		.replace(spaceFirstLetter, '_$1');
}

