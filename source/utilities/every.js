import { everyArray } from '../arrays/every.js';
import { everyAsyncArray } from '../arrays/everyAsync.js';
import { everyAsyncObject } from '../objects/everyAsync.js';
import { everyObject } from '../objects/every.js';
import { forOfEvery } from './forOfEvery.js';
import { forOfEveryAsync } from './forOfEveryAsync.js';
import { generateLoop } from './generateLoop.js';
/**
 * Iterates through the given object while the iteratee returns true.
 *
 * @function every
 * @category utility
 * @type {Function}
 * @param {Object | Array | Function} source - Object that will be looped through.
 * @param {Function} iteratee - Transformation function which is passed item, key, calling array, and array length.
 * @returns {Boolean} - Returns true if all values returned are true or false if one value returns false.
 *
 * @example
 * import { every, assert } from '@universalweb/acid';
 * assert(every({a: false, b: true, c: true}, (item) => {
 *  return item;
 * }), false);
 */
export const every = generateLoop(everyArray, everyAsyncArray, everyObject, everyAsyncObject, forOfEvery, forOfEveryAsync);
