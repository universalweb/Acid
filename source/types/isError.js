import { isConstructorFactory, isConstructorNameFactory } from './isConstructor.js';
import { isTypeFactory } from './isTypeFactory.js';
/**
 * Checks if an object or objects are an Error object.
 *
 * @function isError
 * @category type
 * @param {*} source - Object to be checked.
 * @returns {boolean} - Returns true or false.
 *
 * @example
 * import { isError } from 'Acid';
 * isError(new Error());
 * // => true
 */
export const isErrorCall = isConstructorNameFactory('Error');
export const isError = isTypeFactory(isErrorCall);
