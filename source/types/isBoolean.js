import { isConstructorNameFactory } from './isConstructor.js';
import { isTypeFactory } from './isTypeFactory.js';
/**
 * Checks if the value is a Boolean.
 *
 * @function isBoolean
 * @category type
 * @param {*} source - Object to be checked.
 * @returns {Boolean} - Returns true or false.
 *
 * @example
 * import { isBoolean } from '@universalweb/acid';
 * isBoolean(true);
 * // => true
 */
export const isBooleanCall = isConstructorNameFactory('Boolean');
export const isBoolean = isTypeFactory(isBooleanCall);
