import { isConstructorNameFactory } from './isConstructor.js';
import { isTypeFactory } from './isTypeFactory.js';
/**
 * Checks if the value is a RegExp.
 *
 * @function isRegExp
 * @category type
 * @param {*} value - Object to be checked.
 * @returns {boolean} - Returns true or false.
 *
 * @example
 * import { isRegExp, assert } from 'Acid';
 * assert(isRegExp(/test/), true);
 */
export const isRegExpCall = isConstructorNameFactory('RegExp');
export const isRegExp = isTypeFactory(isRegExpCall);
