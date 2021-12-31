import acid from '../namespace/index';
import { assign } from '../internal/object';
const jsonNative = JSON;
/**
   * Parses JSON string.
   *
   * @function jsonParse
   * @category utility
   * @type {Function}
   * @param {string} string - String to be parsed.
   * @returns {Object} Returns the parsed object.
   *
   * @example
   * jsonParse('{}');
   * // => {}
 */
export const jsonParse = jsonNative.parse;
/**
   * Stringify an object into a JSON string.
   *
   * @function stringify
   * @category utility
   * @type {Function}
   * @param {Object} object - Object to Stringify.
   * @returns {string} Returns the object as a valid JSON string.
   *
   * @example
   * stringify({});
   * // => '{}'
 */
export const stringify = jsonNative.stringify;
assign(acid, {
	jsonParse,
	stringify
});
