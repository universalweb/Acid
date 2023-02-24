import { isConstructorFactory } from './isConstructor.js';
/**
 * Checks if the source is a Float64Array.
 *
 * @function isF64
 * @category type
 * @param {*} source - Object to be checked.
 * @returns {boolean} - Returns true or false.
 *
 * @example
 * import { isF64 } from './Acid.js';
 * isF64(new Float64Array());
 * // => true
*/
export const isF64 = isConstructorFactory('Float64Array');
