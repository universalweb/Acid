import { isConstructorNameFactory } from './isConstructor.js';
import { isTypeFactory } from './isTypeFactory.js';
/**
 * Checks if an object or objects are a ArrayBuffer.
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
export const isBufferCall = isConstructorNameFactory('ArrayBuffer');
export const isBuffer = isTypeFactory(isBufferCall);
