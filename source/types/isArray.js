/**
 * Checks if the value is an array. This references Array.isArray.
 *
 * @function isArray
 * @category type
 * @param {*} source - Object to be checked.
 * @returns {boolean} - Returns true or false.
 *
 * @example
 * import { isArray, assert } from 'Acid';
 * assert(isArray([]), true);
 * assert(isArray(2), false);
 */
export const isArray = Array.isArray;
