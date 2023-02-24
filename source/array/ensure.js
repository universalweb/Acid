import { isArray } from '../type/isArray.js';
import { hasValue } from '../type/hasValue.js';
/**
  * Ensures the object is an array. If not wraps in array.
  *
  * @function ensureArray
  * @category array
  * @type {Function}
  * @param {*} object - Data to be checked.
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
export const ensureArray = (object) => {
	return (isArray(object) && object) || (hasValue(object) && [object]) || [];
};

