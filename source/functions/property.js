import { get } from '../utilities/get.js';
/**
 * Creates a function that returns the value at `path` of a given object.
 *
 * @function property
 * @category function
 * @type {Function}
 * @param {String|Array} path - Property path.
 * @returns {Function} - Function that takes an object and returns the value at path.
 *
 * @example
 * import { property, assert } from '@universalweb/acid';
 * assert(property('a.b')({a: {b: 5}}), 5);
 */
export function property(path) {
	return (object) => get(path, object);
}
/**
 * Creates a function that returns the value at `path` from a fixed `object`.
 *
 * @function propertyOf
 * @category function
 * @type {Function}
 * @param {Object} object - Object to read from.
 * @returns {Function} - Function that takes a path and returns the value at that path.
 *
 * @example
 * import { propertyOf, assert } from '@universalweb/acid';
 * assert(propertyOf({a: {b: 5}})('a.b'), 5);
 */
export function propertyOf(object) {
	return (path) => get(path, object);
}
