/**
 * Checks if the value is a safe integer (within `Number.MIN_SAFE_INTEGER` and `Number.MAX_SAFE_INTEGER`). Alias of `Number.isSafeInteger`.
 *
 * @function isSafeInt
 * @category type
 * @param {*} source - Object to be checked.
 * @returns {Boolean} - Returns true or false.
 *
 * @example
 * import { isSafeInt, assert } from '@universalweb/acid';
 * assert(isSafeInt(1), true);
 * assert(isSafeInt(Number.MAX_SAFE_INTEGER + 1), false);
 */
export const isSafeInt = Number.isSafeInteger;
