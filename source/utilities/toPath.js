const regexToPath = /\.|\[/;
const regexCloseBracket = /]/g;
const emptyString = '';
/**
 * Breaks up string into object chain list.
 *
 * @function toPath
 * @type {Function}
 * @category utility
 * @param {String} source - String to be broken up.
 * @returns {Array} - Array used to go through object chain.
 *
 * @example
 * import { toPath, assert } from '@universalweb/acid';
 * assert(toPath('post.like[2]'), ['post', 'like', '2']);
 */
export function toPath(source) {
	return source.replace(regexCloseBracket, emptyString).split(regexToPath);
}

