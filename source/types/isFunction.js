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
 * import { isFunction, assert } from '@universalweb/acid';
 * assert(isFunction(() => {}), true)
 */
export function isFunction(source) {
	return (hasValue(source)) ? source instanceof Function : false;
}
