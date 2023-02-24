import { hasValue } from './hasValue.js';
/**
 * Checks if the value is a plain object.
 *
 * @function isFunction
 * @category type
 * @param {*} value - Object to be checked.
 * @returns {boolean} - Returns true or false.
 *
 * @example
 * import { isFunction } from './Acid.js';
 * isFunction(() => {});
 * // => true
*/
export const isFunction = (value) => {
	return (hasValue(value)) ? value instanceof Function : false;
};
