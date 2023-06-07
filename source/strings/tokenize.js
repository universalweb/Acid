const tokenizeRegEx = /\S+/g;
const wordsRegEx = /\w+/g;
/**
 * Break string by non-white space characters matches.
 *
 * @function tokenize
 * @type {Function}
 * @category string
 * @param {String} string - String to be broken up.
 * @returns {Array} - Array of words without white space characters.
 *
 * @example
 * import { tokenize, assert } from '@universalweb/acid';
 * tokenize('I am Lucy!');
 * // => ["I", "am", "Lucy!"]
 */
export function tokenize(string) {
	return string.match(tokenizeRegEx) || [];
}
/**
 * Break string into word matches.
 *
 * @function words
 * @type {Function}
 * @param {String} string - String to be broken up.
 * @returns {Array} - Array of words with word characters only.
 *
 * @example
 * import { words, assert } from '@universalweb/acid';
 * words('I am Lucy!');
 * // => ["I", "am", "Lucy"]
 */
export function words(string) {
	return string.match(wordsRegEx) || [];
}

