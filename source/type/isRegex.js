import { isConstructorNameFactory } from './isConstructor.js';
import { isTypeFactory } from './isTypeFactory.js';
/**
 * Checks if the value is a RegExp.
 *
 * @function isRegex
 * @category type
 * @param {*} value - Object to be checked.
 * @returns {boolean} - Returns true or false.
 *
 * @example
 * import { isRegex, assert } from 'Acid';
 * assert(isRegex(/test/), true);
 */
export const isRegexCall = isConstructorNameFactory('RegExp');
export const isRegex = isTypeFactory(isRegexCall);
