import { isConstructorFactory } from './isConstructorFactory.js';
import { isTypeFactory } from './isTypeFactory.js';
/**
 * Checks if an object or objects are a Buffer.
 *
 * @function isBuffer
 * @category type
 * @param {*} source - Object to be checked.
 * @returns {Boolean} - Returns true or false.
 *
 * @example
 * import { isBuffer, assert } from '@universalweb/acid';
 * assert(isBuffer(Buffer.from('test')), true);
 */
export const isBufferCall = isConstructorFactory(Buffer);
export const isBuffer = isTypeFactory(isBufferCall);
