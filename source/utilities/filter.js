import { filterArray } from '../arrays/filter.js';
import { filterAsyncArray } from '../arrays/filterAsync.js';
import { filterAsyncObject } from '../objects/filterAsync.js';
import { filterObject } from '../objects/filter.js';
import { generateLoop } from './generateLoop.js';
import { forOfFilter } from './forOfFilter.js';
import { forOfFilterAsync } from './forOfFilterAsync.js';
/**
 * Iterates through the calling object and creates a new object of the same calling object's type with all elements that pass the test implemented by the iteratee.
 *
 * @function filter
 * @category utility
 * @type {Function}
 * @param {Array | object | Function} source - Object that will be looped through.
 * @param {Function} iteratee - Transformation function which is passed item, key, the newly created map object and arguments unique to mapArray or mapObject depending on the object type.
 * @param {Object | Function} [results = {}] - Object that will be used to assign results.
 * @returns {Array | object | Function} - A new object of the same calling object's type.
 *
 * @example
 * import { filter, assert } from '@universalweb/acid';
 * assert(filter({a: false, b: true, c: true}, (item) => {
 *   return item;
 * }), {b: true, c: true});
 */
export const filter = generateLoop(filterArray, filterAsyncArray, filterObject, filterAsyncObject, forOfFilter, forOfFilterAsync);

