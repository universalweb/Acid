import { isConstructorFactory, isConstructorNameFactory } from './isConstructor.js';
import { isTypeFactory } from './isTypeFactory.js';
/**
 * Checks if an object or objects are a Int8Array.
 *
 * @function isI8
 * @category type
 * @param {*} source - Object to be checked.
 * @returns {boolean} - Returns true or false.
 *
 * @example
 * import { isInt8 } from 'Acid';
 * isInt8(new Int8Array());
 * // => true
 */
export const isI8Call = isConstructorNameFactory('Int8Array');
export const isI8 = isTypeFactory(isI8Call);
