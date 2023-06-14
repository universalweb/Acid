import { restString } from './range.js';
const spaceFirstLetter = / (.)/g;
/**
 * Returns the first letter capitalized.
 *
 * @function upperFirstLetter
 * @type {Function}
 * @category string
 * @param {String} string - String to extract first letter from.
 * @returns {String} - An upper case letter.
 *
 * @example
 * import { upperFirstLetter, assert } from '@universalweb/acid';
 * upperFirstLetter('upper');
 * // => "U"
 */
export function upperFirstLetter(string) {
	return string[0].toUpperCase();
}
/**
 * Capitalizes the first letter.
 *
 * @function upperFirst
 * @type {Function}
 * @category string
 * @param {String} string - String to be mutated.
 * @returns {String} - String with first letter capitalized.
 *
 * @example
 * import { upperFirst, assert } from '@universalweb/acid';
 * upperFirst('upper');
 * // => 'Upper'
 */
export function upperFirst(string) {
	return upperFirstLetter(string) + restString(string);
}
/**
 * Capitalize all first letters.
 *
 * @function upperFirstAll
 * @type {Function}
 * @category string
 * @param {String} string - String to be mutated.
 * @returns {String} - String with all first letters capitalized.
 *
 * @example
 * import { upperFirstAll, assert } from '@universalweb/acid';
 * upperFirstAll('Lucy is next up.');
 * // => 'Lucy Is Next Up.'
 */
export function upperFirstAll(string) {
	return string.replace(spaceFirstLetter, (match) => {
		return match.toUpperCase();
	});
}
/**
 * Capitalize first letter and lower case the rest.
 *
 * @function upperFirstOnly
 * @type {Function}
 * @category string
 * @param {String} string - String to be mutated.
 * @returns {String} - String with first letter capitalized.
 *
 * @example
 * import { upperFirstOnly, assert } from '@universalweb/acid';
 * upperFirstOnly('LYSERGIC ACID DIETHYLAMIDE');
 * // => 'Lysergic namespace diethylamide'
 */
export function upperFirstOnly(string) {
	return upperFirstLetter(string) + restString(string).toLowerCase();
}
/**
 * Capitalize all first letters and lower case the rest.
 *
 * @function upperFirstOnlyAll
 * @type {Function}
 * @category string
 * @param {String} string - String to be mutated.
 * @returns {String} - String with all first letters capitalized.
 *
 * @example
 * import { upperFirstOnlyAll, assert } from '@universalweb/acid';
 * upperFirstOnlyAll('LYSERGIC ACID DIETHYLAMIDE');
 * // => 'Lysergic Acid Diethylamide'
 */
export function upperFirstOnlyAll(string) {
	return upperFirstOnly(string.toLowerCase()).replace(spaceFirstLetter, (match) => {
		return match.toUpperCase();
	});
}
