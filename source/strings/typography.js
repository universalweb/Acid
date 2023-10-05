import { restString } from './range.js';
const getWords = /\w+/g;
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
 * assert(upperFirstLetter('upper'), 'U');
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
 * assert(upperFirstLetter('upper'), 'U');
 * upperFirst('upper');
 * // => 'Upper'
 */
export function upperFirst(string) {
	return upperFirstLetter(string) + restString(string);
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
 * assert(upperFirstOnly('upper'), 'Upper');
 */
export function upperFirstOnly(string) {
	return upperFirstLetter(string) + restString(string).toLowerCase();
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
 * assert(upperFirstAll('uPPer'), 'UPPer');
 */
export function upperFirstAll(string) {
	return string.replace(getWords, (match) => {
		return upperFirst(match);
	});
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
 * assert(upperFirstOnlyAll('this is'), 'This Is');
 */
export function upperFirstOnlyAll(string) {
	return string.replace(getWords, (match) => {
		return upperFirstOnly(match);
	});
}
