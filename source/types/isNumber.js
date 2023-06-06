import { isConstructorNameFactory } from './isConstructor.js';
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
 * import { isNumber, assert } from 'Acid';
 * assert(isNumber(1), true);
 */
export const isNumberCall = isConstructorNameFactory('Number');
export const isNumber = isTypeFactory(isNumberCall);
