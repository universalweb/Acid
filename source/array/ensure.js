import { isArray } from '../type/isArray.js';
import { hasValue } from '../type/hasValue.js';
/**
  * Ensures the source is an array if not the source is wrapped in a array or an empty array is returned.
  *
  * @function ensureArray
  * @category array
  * @type {Function}
  * @param {*} source - Object to be checked.
  * @returns {Array} - Returns an array.
  *
  * @example
  * ensureArray('Hello');
  * // => ['Hello']
  *
  * @example
  * ensureArray({a:1, b:2})
  * // => [{a:1, b:2}]
*/
export function ensureArray(source) {
	return (isArray(source) && source) || (hasValue(source) && [source]) || [];
}

