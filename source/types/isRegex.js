import { isConstructorFactory } from './isConstructorFactory.js';
import { isTypeFactory } from './isTypeFactory.js';
/**
 * Checks if the value is a RegExp.
 *
 * @function isRegex
 * @category type
 * @param {*} source - Object to be checked.
 * @returns {Boolean} - Returns true or false.
 *
 * @example
 * import { isRegex, assert } from '@universalweb/acid';
 * assert(isRegex(/test/), true);
 */
export const isRegexCall = isConstructorFactory(RegExp);
export const isRegex = isTypeFactory(isRegexCall);
