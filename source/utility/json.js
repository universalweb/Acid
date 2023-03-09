const jsonNative = JSON;
/**
 * Parses JSON string with safety check for undefined.
 *
 * @function jsonParse
 * @category utility
 * @type {Function}
 * @param {string} source - String to be parsed.
 * @param {function} reviver - A function that prescribes how each value originally produced by parsing is transformed before being returned.
 * @returns {Object} - Returns the parsed object.
 *
 * @example
 * import { jsonParse, assert } from 'Acid';
 * assert(jsonParse('{a:1}'), {a:1});
 */
export function jsonParse(source, reviver) {
	if (source) {
		return jsonNative.parse(source, reviver);
	}
}
/**
 * Stringify an object into a JSON string.
 *
 * @function stringify
 * @category utility
 * @type {Function}
 * @param {Object} object - Object to Stringify.
 * @returns {string} - Returns the object as a valid JSON string.
 *
 * @example
 * import { stringify, assert } from 'Acid';
 * assert(stringify({a:1}), '{a:1}');
 */
export const stringify = jsonNative.stringify;

