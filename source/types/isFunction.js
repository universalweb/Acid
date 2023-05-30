import { hasValue } from './hasValue.js';
/**
 * Checks if an object or objects are a plain object.
 *
 * @function isFunction
 * @category type
 * @param {*} source - Object to be checked.
 * @returns {boolean} - Returns true or false.
 *
 * @example
 * import { isFunction } from 'Acid';
 * isFunction(() => {});
 * // => true
 */
export const isFunction = (source) => {
	return (hasValue(source)) ? source instanceof Function : false;
};
