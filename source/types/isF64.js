import { isConstructorFactory, isConstructorNameFactory } from './isConstructor.js';
import { isTypeFactory } from './isTypeFactory.js';
/**
 * Checks if an object or objects are a Float64Array.
 *
 * @function isF64
 * @category type
 * @param {*} source - Object to be checked.
 * @returns {Boolean} - Returns true or false.
 *
 * @example
 * import { isF64 } from '@universalweb/acid';
 * isF64(new Float64Array());
 * // => true
 */
export const isF64Call = isConstructorNameFactory('Float64Array');
export const isF64 = isTypeFactory(isF64Call);
