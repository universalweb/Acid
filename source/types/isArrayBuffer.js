import { isConstructorNameFactory } from './isConstructor.js';
import { isTypeFactory } from './isTypeFactory.js';
/**
 * Checks if an object or objects are a ArrayBuffer.
 *
 * @function isArrayBuffer
 * @category type
 * @param {*} source - Object to be checked.
 * @returns {boolean} - Returns true or false.
 *
 * @example
 * import { isArrayBuffer, assert } from 'Acid';
 * assert(isArrayBuffer(new ArrayBuffer()), true);
*/
export const isArrayBufferCall = isConstructorNameFactory('ArrayBuffer');
export const isArrayBuffer = isTypeFactory(isArrayBufferCall);
