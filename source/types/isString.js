import { isConstructorFactory } from './isConstructor.js';
/**
 * Checks if the value is a string.
 *
 * @function isString
 * @category type
 * @param {*} source - Object to be checked.
 * @returns {Boolean} - Returns true or false.
 *
 * @example
 * import { isString, assert } from '@universalweb/acid';
 * assert(isString('hello'), true);
 * assert(isString(1), false);
 */
export const isString = isConstructorFactory(String);
/**
 * Checks if the value is not a string.
 *
 * @function isNotString
 * @category type
 * @param {*} source - Object to be checked.
 * @returns {Boolean} - Returns true or false.
 *
 * @example
 * import { isNotString, assert } from '@universalweb/acid';
 * assert(isNotString(1), true);
 * assert(isNotString('hello'), false);
 */
export function isNotString(source) {
	return !isString(source);
}
