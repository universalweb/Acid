import { isConstructorFactory } from './isConstructor.js';
/**
 * Checks if the source is a Uint32Array.
 *
 * @function isU32
 * @category type
 * @param {*} source - Object to be checked.
 * @returns {boolean} - Returns true or false.
 *
 * @example
 * import { isU32 } from './Acid.js';
 * isU32(new Uint32Array());
 * // => true
*/
export const isU32 = isConstructorFactory('Uint32Array');
