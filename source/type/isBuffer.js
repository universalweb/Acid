import { isConstructorFactory } from './isConstructor.js';
/**
 * Checks if the source is a ArrayBuffer.
 *
 * @function isBuffer
 * @category type
 * @param {*} source - Object to be checked.
 * @returns {boolean} - Returns true or false.
 *
 * @example
 * isBuffer(new ArrayBuffer());
 * // => true
*/
export const isBuffer = isConstructorFactory('ArrayBuffer');
