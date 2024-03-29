import { hasValue } from './hasValue.js';
/**
 * Checks if an object or objects are a plain object.
 *
 * @function isFunction
 * @category type
 * @param {*} source - Object to be checked.
 * @returns {Boolean} - Returns true or false.
 *
 * @example
 * import { isFunction } from '@universalweb/acid';
 * isFunction(() => {});
 * // => true
 */
export const isFunction = (source) => {
	return (hasValue(source)) ? source instanceof Function : false;
};
