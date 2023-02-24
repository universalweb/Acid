import { eachArray } from '../array/each.js';
import { eachObject } from '../object/each.js';
import { generateLoop } from './generateLoop.js';
/**
 * Iterates through the given object.
 *
 * @function each
 * @category utility
 * @type {Function}
 * @param {Array | object | Function} source - Object that will be looped through.
 * @param {Function} iteratee - Transformation function which is passed item, key, the newly created map object and arguments unique to mapArray or mapObject depending on the object type.
 * @returns {Array | object | Function} - The originally given object.
 *
 * @example
 * import { each, assert } from './Acid.js';
 * const list = {};
 * each({a: 1, b: 2, c: 3}, (item, key) => {
 *   list[key] = item;
 * });
 * assert(list, {a: 1, b: 2, c: 3});
 */
export const each = generateLoop(eachArray, eachObject);

