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
 * assert(tokenize('I am Lucy!'), ["I", "am", "Acid!"]);
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
 * assert(words('I am Acid!'), ["I", "am", "Acid"]);
 */
export function words(string) {
	return string.match(wordsRegEx) || [];
}

