import { isConstructorFactory, isConstructorNameFactory } from './isConstructor.js';
import { isTypeFactory } from './isTypeFactory.js';
/**
 * Checks if an object or objects are a Uint8Array.
 *
 * @function isU8
 * @category type
 * @param {*} source - Object to be checked.
 * @returns {Boolean} - Returns true or false.
 *
 * @example
 * import { isU8 } from 'Acid';
 * isU8(new Uint8Array());
 * // => true
 */
export const isU8Call = isConstructorNameFactory('Uint8Array');
export const isU8 = isTypeFactory(isU8Call);
