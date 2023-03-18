import { everyArray } from '../array/every.js';
import { everyAsyncArray } from '../array/everyAsync.js';
import { everyAsyncObject } from '../object/everyAsync.js';
import { everyObject } from '../object/every.js';
import { generateLoop } from './generateLoop.js';
import { forOfEvery } from './forOfEvery.js';
import { forOfEveryAsync } from './forOfEveryAsync.js';
/**
 * Iterates through the given object while the iteratee returns true.
 *
 * @function every
 * @category utility
 * @type {Function}
 * @param {object | Array | Function} source - Object that will be looped through.
 * @param {Function} iteratee - Transformation function which is passed item, key, calling array, and array length.
 * @returns {boolean} - Returns true if all values returned are true or false if one value returns false.
 *
 * @example
 * import { every, assert } from 'Acid';
 * assert(every({a: false, b: true, c: true}, (item) => {
 *  return item;
 * }), false);
 */
export const every = generateLoop(everyArray, everyAsyncArray, everyObject, everyAsyncObject, forOfEvery, forOfEveryAsync);
