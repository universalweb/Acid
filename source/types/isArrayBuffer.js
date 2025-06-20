import { isConstructorFactory } from './isConstructorFactory.js';
import { isTypeFactory } from './isTypeFactory.js';
/**
 * Checks if an object or objects are a ArrayBuffer.
 *
 * @function isArrayBuffer
 * @category type
 * @param {*} source - Object to be checked.
 * @returns {Boolean} - Returns true or false.
 *
 * @example
 * import { isArrayBuffer, assert } from '@universalweb/acid';
 * assert(isArrayBuffer(new ArrayBuffer()), true);
 */
export const isArrayBufferCall = isConstructorFactory(ArrayBuffer);
export const isArrayBuffer = isTypeFactory(isArrayBufferCall);
