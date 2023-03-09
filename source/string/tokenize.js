const tokenizeRegEx = /\S+/g;
const wordsRegEx = /\w+/g;
/**
 * Break string by non-white space characters matches.
 *
 * @function tokenize
 * @type {Function}
 * @category string
 * @param {string} string - String to be broken up.
 * @returns {Array} - Array of words without white space characters.
 *
 * @example
 * import { stubArray } from 'Acid';
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
 * @param {string} string - String to be broken up.
 * @returns {Array} - Array of words with word characters only.
 *
 * @example
 * import { stubArray } from 'Acid';
 * words('I am Lucy!');
 * // => ["I", "am", "Lucy"]
 */
export function words(string) {
	return string.match(wordsRegEx) || [];
}

