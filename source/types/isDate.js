import { isConstructorNameFactory } from './isConstructor.js';
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
 * import { isDate, assert } from 'Acid';
 * assert(isDate(new Date()), true);
 */
export const isDateCall = isConstructorNameFactory('Date');
export const isDate = isTypeFactory(isDateCall);
