import { isConstructorFactory } from './isConstructor.js';
/**
 * Checks if the source is a Int8Array.
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
export const isI8 = isConstructorFactory('Int8Array');
