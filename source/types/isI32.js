import { isConstructorFactory } from './isConstructorFactory.js';
import { isTypeFactory } from './isTypeFactory.js';
/**
 * Checks if an object or objects are a Int32Array.
 *
 * @function isI32
 * @category type
 * @param {*} source - Object to be checked.
 * @returns {Boolean} - Returns true or false.
 *
 * @example
 * import { isI32, assert } from '@universalweb/acid';
 * assert(isI32(new Int32Array()), true);
 */
export const isI32Call = isConstructorFactory(Int32Array);
export const isI32 = isTypeFactory(isI32Call);
