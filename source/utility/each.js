import {
	compactMapArray, eachArray, filterArray, mapArray, whileArray
} from '../array/each';
import {
	compactMapObject, eachObject, filterObject, mapObject, whileObject
} from '../object/each';
import { hasValue, isArray, isFunction, isPlainObject } from '../internal/is';
const forEachWrap = (object, callback) => {
	return object.forEach(callback);
};
const generateCheckLoops = (arrayLoop, objectLoop) => {
	return (source, iteratee, results) => {
		let returned;
		if (!hasValue(source)) {
			return;
		} else if (isArray(source)) {
			returned = arrayLoop;
		} else if (isPlainObject(source) || isFunction(source)) {
			returned = objectLoop;
		} else if (source.forEach) {
			returned = forEachWrap;
		} else {
			returned = objectLoop;
		}
		return returned(source, iteratee, results);
	};
};
/**
 * Iterates through the given object while the iteratee returns true.
 *
 * @function eachWhile
 * @category utility
 * @type {Function}
 * @param {object | Array | Function} source - Object that will be looped through.
 * @param {Function} iteratee - Transformation function which is passed item, key, calling array, and array length.
 * @returns {boolean} - Returns true if all values returned are true or false if one value returns false.
 * @example
 * eachWhile({a: false, b: true, c: true}, (item) => {
 *  return item;
 * });
 * // => false
 */
export const eachWhile = generateCheckLoops(whileArray, whileObject);
/**
 * Iterates through the given object.
 *
 * @function each
 * @category utility
 * @type {Function}
 * @param {Array | object | Function} source - Object that will be looped through.
 * @param {Function} iteratee - Transformation function which is passed item, key, the newly created map object and arguments unique to mapArray or mapObject depending on the object type.
 * @returns {Array | object | Function} - The originally given object.
 * @test
 * (async () => {
 *   const tempList = [];
 *   each({a: 1, b: 2, c: 3}, (item) => {
 *     tempList.push(item);
 *   });
 *   return assert(tempList, [1, 2, 3]);
 * });
 * @example
 * each({a: 1, b: 2, c: 3}, (item) => {
 *   console.log(item);
 * });
 * // => {a: 1, b: 2, c: 3}
 */
export const each = generateCheckLoops(eachArray, eachObject);
/**
 * Iterates through the calling object and creates a new object of the same calling object's type with all elements that pass the test implemented by the iteratee.
 *
 * @function filter
 * @category utility
 * @type {Function}
 * @param {Array | object | Function} source - Object that will be looped through.
 * @param {Function} iteratee - Transformation function which is passed item, key, the newly created map object and arguments unique to mapArray or mapObject depending on the object type.
 * @param {object | Function} [results = {}] - Object that will be used to assign results.
 * @returns {Array | object | Function} - A new object of the same calling object's type.
 * @example
 * filter({a: false, b: true, c: true}, (item) => {
 *   return item;
 * });
 * // => {b: true, c: true}
 */
export const filter = generateCheckLoops(filterArray, filterObject);
/**
 * Iterates through the calling object and creates a new object based on the calling object's type with the results of the iteratee on every element in the calling object.
 *
 * @function map
 * @category utility
 * @type {Function}
 * @param {Array | object | Function} source - Object that will be looped through.
 * @param {Function} iteratee - Transformation function which is passed item, key, the newly created map object and arguments unique to mapArray or mapObject depending on the object type.
 * @param {object | Function} [results = {}] - Object that will be used to assign results.
 * @returns {Array | object | Function} - A new object of the same calling object's type.
 * @example
 * map({a: 1, b: 2, c: 3}, (item) => {
 *   return item * 2;
 * });
 * // => {a: 2, b: 4, c: 6}
 */
export const map = generateCheckLoops(mapArray, mapObject);
/**
 * Iterates through the calling object and creates a new object based on the calling object's type with the results, (excludes results which are null or undefined), of the iteratee on every element in the calling object.
 *
 * @function compactMap
 * @category utility
 * @type {Function}
 * @param {Array | object | Function} source - Object that will be looped through.
 * @param {Function} iteratee - Transformation function which is passed item, key, the newly created map object and arguments unique to mapArray or mapObject depending on the object type.
 * @param {object | Function} [results = {}] - Object that will be used to assign results.
 * @returns {Array | object | Function} - A new object of the same calling object's type.
 * @example
 * compactMap({a: null, b: 2, c: 3}, (item) => {
 *   return item;
 * });
 * // => {b: 2, c: 3}
 */
export const compactMap = generateCheckLoops(compactMapArray, compactMapObject);

