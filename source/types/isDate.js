import { isConstructorFactory } from './isConstructorFactory.js';
import { isTypeFactory } from './isTypeFactory.js';
/**
 * Checks if the value is a Date.
 *
 * @function isDate
 * @category type
 * @param {*} source - Object to be checked.
 * @returns {Boolean} - Returns true or false.
 *
 * @example
 * import { isDate, assert } from '@universalweb/acid';
 * assert(isDate(new Date()), true);
 */
export const isDateCall = isConstructorFactory(Date);
export const isDate = isTypeFactory(isDateCall);
