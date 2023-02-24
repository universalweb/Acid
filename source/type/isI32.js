import { isConstructorFactory } from './isConstructor.js';
/**
 * Checks if the source is a Int32Array.
 *
 * @function isI32
 * @category type
 * @param {*} source - Object to be checked.
 * @returns {boolean} - Returns true or false.
 *
 * @example
 * import { isI32 } from './Acid.js';
 * isI32(new Int32Array());
 * // => true
*/
export const isI32 = isConstructorFactory('Int32Array');
