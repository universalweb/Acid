import { forOfMap } from './forOfMap.js';
import { forOfMapAsync } from './forOfMapAsync.js';
import { generateLoop } from './generateLoop.js';
import { mapArray } from '../arrays/map.js';
import { mapAsyncArray } from '../arrays/mapAsync.js';
import { mapAsyncObject } from '../objects/mapAsync.js';
import { mapObject } from '../objects/map.js';
/**
 * Iterates through the calling object and creates a new object based on the calling object's type with the results of the iteratee on every element in the calling object.
 *
 * @function map
 * @category utility
 * @type {Function}
 * @param {Array | object | Function} source - Object that will be looped through.
 * @param {Function} iteratee - Transformation function which is passed item, key, the newly created map object and arguments unique to mapArray or mapObject depending on the object type.
 * @param {Object | Function} [results = {}] - Object that will be used to assign results.
 * @param {*} thisCall - An object to be given each time to the iteratee.
 * @param {*} additionalArg - An object to be given each time to the iteratee.
 * @returns {Array | object | Function} - A new object of the same calling object's type.
 *
 * @example
 * import { map, assert } from '@universalweb/acid';
 * assert(map({a: 1, b: 2, c: 3}, (item) => {
 *   return item * 2;
 * }), {a: 2, b: 4, c: 6});
 */
export const map = generateLoop(mapArray, mapAsyncArray, mapObject, mapAsyncObject, forOfMap, forOfMapAsync);

