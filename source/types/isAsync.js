import { isTypeFactory } from './isTypeFactory.js';
import { isTypeNameFactory } from './isType.js';
/**
 * Checks if an object is an async function.
 *
 * @function isAsync
 * @category type
 * @param {*} source - Object to be checked.
 * @returns {Boolean} - True or false.
 *
 * @example
 * import { isAsync, assert } from '@universalweb/acid';
 * assert(isAsync(async() => {}), true);
 */
export const isAsyncCall = isTypeNameFactory('AsyncFunction');
export const isAsync = isTypeFactory(isAsyncCall);
