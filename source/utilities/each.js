import { eachArray } from '../arrays/each.js';
import { eachAsyncArray } from '../arrays/eachAsync.js';
import { eachAsyncObject } from '../objects/eachAsync.js';
import { eachObject } from '../objects/each.js';
import { forEach } from './forEach.js';
import { forEachAsync } from './forEachAsync.js';
import { forOf } from './forOf.js';
import { forOfAsync } from './forOfAsync.js';
import { generateLoop } from './generateLoop.js';
/**
 * Iterates through the given object.
 *
 * @function each
 * @category utility
 * @type {Function}
 * @param {Array | object | Function} source - Object that will be looped through.
 * @param {Function} iteratee - Transformation function which is passed item, key, the newly created map object and arguments unique to mapArray or mapObject depending on the object type.
 * @param {*} thisCall - An object to be given each time to the iteratee.
 * @param {*} additionalArg - An object to be given each time to the iteratee.
 * @returns {Array | object | Function} - The originally given object.
 *
 * @example
 * import { each, assert } from '@universalweb/acid';
 * const list = {};
 * each({a: 1, b: 2, c: 3}, (item, key) => {
 *   list[key] = item;
 * });
 * assert(list, {a: 1, b: 2, c: 3});
 */
export const each = generateLoop(eachArray, eachAsyncArray, eachObject, eachAsyncObject, forOf, forOfAsync);

