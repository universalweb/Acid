import { isConstructorFactory } from './isConstructorFactory.js';
import { isTypeFactory } from './isTypeFactory.js';
/**
 * Checks if an object or objects are an Error object.
 *
 * @function isError
 * @category type
 * @param {*} source - Object to be checked.
 * @returns {Boolean} - Returns true or false.
 *
 * @example
 * import { isError } from '@universalweb/acid';
 * isError(new Error());
 * // => true
 */
export const isErrorCall = isConstructorFactory(Error);
export const isError = isTypeFactory(isErrorCall);
