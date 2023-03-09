import { isConstructorFactory } from './isConstructor.js';
/**
 * Checks if the source is a Int16Array.
 *
 * @function isI16
 * @category type
 * @param {*} source - Object to be checked.
 * @returns {boolean} - Returns true or false.
 *
 * @example
 * import { isI16 } from 'Acid';
 * isI16(new Int16Array());
 * // => true
 */
export const isI16 = isConstructorFactory('Int16Array');
