import { isConstructorNameFactory } from './isConstructor.js';
import { isTypeFactory } from './isTypeFactory.js';
/**
 * Checks if an object or objects are a Buffer.
 *
 * @function isBuffer
 * @category type
 * @param {*} source - Object to be checked.
 * @returns {boolean} - Returns true or false.
 *
 * @example
 * import { isBuffer, assert, construct } from 'Acid';
 * assert(isBuffer(Buffer.from('test')), true);
*/
export const isBufferCall = isConstructorNameFactory('Buffer');
export const isBuffer = isTypeFactory(isBufferCall);
