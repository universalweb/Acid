import { mapArray } from '../array/map.js';
import { mapObject } from '../object/map.js';
import { generateLoop } from './generateLoop.js';
import { mapAsyncArray } from '../array/mapAsync.js';
import { mapAsyncObject } from '../object/mapAsync.js';
import { forOfMap } from './forOfMap.js';
import { forOfMapAsync } from './forOfMapAsync.js';
/**
 * Iterates through the calling object and creates a new object based on the calling object's type with the results of the iteratee on every element in the calling object.
 *
 * @function map
 * @category utility
 * @type {Function}
 * @param {Array | object | Function} source - Object that will be looped through.
 * @param {Function} iteratee - Transformation function which is passed item, key, the newly created map object and arguments unique to mapArray or mapObject depending on the object type.
 * @param {object | Function} [results = {}] - Object that will be used to assign results.
 * @returns {Array | object | Function} - A new object of the same calling object's type.'.
 *
 * @example
 * import { map, assert } from 'Acid';
 * assert(map({a: 1, b: 2, c: 3}, (item) => {
 *   return item * 2;
 * }), {a: 2, b: 4, c: 6});
 */
export const map = generateLoop(mapArray, mapAsyncArray, mapObject, mapAsyncObject, forOfMap, forOfMapAsync);

