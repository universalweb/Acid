import { isConstructorNameFactory } from './isConstructor.js';
import { isTypeFactory } from './isTypeFactory.js';
/**
 * Checks if the value is a Boolean.
 *
 * @function isBoolean
 * @category type
 * @param {*} value - Object to be checked.
 * @returns {boolean} - Returns true or false.
 *
 * @example
 * import { isBoolean } from 'Acid';
 * isBoolean(true);
 * // => true
 */
export const isBooleanCall = isConstructorNameFactory('Boolean');
export const isBoolean = isTypeFactory(isBooleanCall);
