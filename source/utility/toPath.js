const regexToPath = /\.|\[/;
const regexCloseBracket = /]/g;
const emptyString = '';
/**
  * Breaks up string into object chain list.
  *
  * @function toPath
  * @type {Function}
  * @category utility
  * @param {string} string - String to be broken up.
  * @returns {Array} - Array used to go through object chain.
  *
  * @example
  * import { stubArray } from './Acid.js';
  * toPath('post.like[2]');
  * // => ['post', 'like', '2']
*/
export function toPath(string) {
	return string.replace(regexCloseBracket, emptyString).split(regexToPath);
}

