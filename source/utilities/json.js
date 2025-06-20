import { isString } from '../types/isString.js';
const jsonNative = JSON;
export const jsonParseNative = jsonNative.parse;
/**
 * Parses JSON string with safety check for undefined.
 *
 * @function jsonParse
 * @category utility
 * @type {Function}
 * @param {String} source - String to be parsed.
 * @param {Function} reviver - A function that transforms the results. This function is called for each member of the object.
 * If a member contains nested objects, the nested objects are transformed before the parent object is.
 * @returns {Object|undefined} - Returns the parsed object.
 *
 * @example
 * import { jsonParse, assert } from '@universalweb/acid';
 * assert(jsonParse('{a:1}'), {a:1});
 */
export function jsonParse(source, reviver) {
	if (isString(source)) {
		return jsonParseNative(source, reviver);
	}
}
/**
 * Parses JSON string with safety check for undefined.
 *
 * @function jsonParseTry
 * @category utility
 * @type {Function}
 * @param {String} source - String to be parsed.
 * @param {Function} reviver - A function that transforms the results. This function is called for each member of the object.
 * If a member contains nested objects, the nested objects are transformed before the parent object is.
 * @returns {Object|undefined} - Returns the parsed object.
 *
 * @example
 * import { jsonParse, assert } from '@universalweb/acid';
 * assert(jsonParse('{a:1}'), {a:1});
 */
export function jsonParseTry(source, reviver) {
	if (source) {
		try {
			return jsonParse(source, reviver);
		} catch (error) {
			return;
		}
	}
}
/**
 * Stringify an object into a JSON string.
 *
 * @function stringify
 * @category utility
 * @type {Function}
 * @param {Object} object - Object to Stringify.
 * @returns {String} - Returns the object as a valid JSON string.
 *
 * @example
 * import { stringify, assert } from '@universalweb/acid';
 * assert(stringify({a:1}), '{a:1}');
 */
export const stringify = jsonNative.stringify;

