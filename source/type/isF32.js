import { isConstructorFactory } from './isConstructor.js';
/**
 * Checks if the source is a Float32Array.
 *
 * @function isF32
 * @category type
 * @param {*} source - Object to be checked.
 * @returns {boolean} - Returns true or false.
 *
 * @example
 * import { isFloat32 } from './Acid.js';
 * isFloat32(new Float32Array());
 * // => true
*/
export const isF32 = isConstructorFactory('Float32Array');
