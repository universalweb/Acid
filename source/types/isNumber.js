import { isConstructorFactory } from './isConstructorFactory.js';
import { isTypeFactory } from './isTypeFactory.js';
/**
 * Checks if the value is a number.
 *
 * @function isNumber
 * @category type
 * @param {*} source - Object to be checked.
 * @returns {Boolean} - Returns true or false.
 *
 * @example
 * import { isNumber, assert } from '@universalweb/acid';
 * assert(isNumber(1), true);
 */
export const isNumberCall = isConstructorFactory(Number);
export const isNumber = isTypeFactory(isNumberCall);
/**
 * Checks if the value is not a number.
 *
 * @function isNotNumber
 * @category type
 * @param {*} source - Object to be checked.
 * @returns {Boolean} - Returns true or false.
 *
 * @example
 * import { isNotNumber, assert } from '@universalweb/acid';
 * assert(isNotNumber(1), false);
 */
export function isNotNumber(source) {
	return !isNumber(source);
}
