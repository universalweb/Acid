import { isConstructorNameFactory } from './isConstructor.js';
import { isTypeFactory } from './isTypeFactory.js';
/**
 * Checks if an object is an async function.
 *
 * @function isAsync
 * @category type
 * @param {*} value - Object to be checked.
 * @returns {boolean} - True or false.
 *
 * @example
 * import { isAsync, assert } from 'Acid';
 * assert(isAsync(async() => {}), true);
 */
export const isAsyncCall = isConstructorNameFactory('AsyncFunction');
export const isAsync = isTypeFactory(isAsyncCall);

