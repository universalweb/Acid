import { compactMapArray } from '../arrays/compactMap.js';
import { compactMapAsyncArray } from '../arrays/compactMapAsync.js';
import { compactMapObject } from '../objects/compactMap.js';
import { compactMapAsyncObject } from '../objects/compactMapAsync.js';
import { generateLoop } from './generateLoop.js';
import { forOfCompactMap } from './forOfCompactMap.js';
import { forOfCompactMapAsync } from './forOfCompactMapAsync.js';
/**
 * Iterates through the calling object and creates a new object based on the calling object's type with the results, (excludes results which are null or undefined), of the iteratee on every element in the calling object.
 *
 * @function compactMap
 * @category utility
 * @type {Function}
 * @param {Array | object | Function} source - Object that will be looped through.
 * @param {Function} iteratee - Transformation function which is passed item, key, the newly created map object and arguments unique to mapArray or mapObject depending on the object type.
 * @param {Object | Function} [results = {}] - Object that will be used to assign results.
 * @returns {Array | object | Function} - A new object of the same calling object's type.
 *
 * @example
 * import { compactMap, assert } from 'Acid';
 * assert(compactMap({a: null, b: 2, c: 3}, (item) => {
 *   return item;
 * }), {b: 2, c: 3});
 */
export const compactMap = generateLoop(compactMapArray, compactMapAsyncArray,
	compactMapObject, compactMapAsyncObject, forOfCompactMap, forOfCompactMapAsync);
