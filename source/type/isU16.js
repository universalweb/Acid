import { isConstructorFactory } from './isConstructor.js';
/**
 * Checks if the source is a Uint16Array.
 *
 * @function isU16
 * @category type
 * @param {*} source - Object to be checked.
 * @returns {boolean} - Returns true or false.
 *
 * @example
 * import { isU16 } from './Acid.js';
 * isU16(new Uint16Array());
 * // => true
*/
export const isU16 = isConstructorFactory('Uint16Array');
