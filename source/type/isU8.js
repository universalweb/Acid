import { isConstructorFactory } from './isConstructor.js';
/**
 * Checks if the source is a Uint8Array.
 *
 * @function isU8
 * @category type
 * @param {*} source - Object to be checked.
 * @returns {boolean} - Returns true or false.
 *
 * @example
 * import { isU8 } from 'Acid';
 * isU8(new Uint8Array());
 * // => true
 */
export const isU8 = isConstructorFactory('Uint8Array');
