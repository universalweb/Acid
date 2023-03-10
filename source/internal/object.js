import { cacheNativeMethod } from '../utility/cacheNativeMethod.js';
/**
 * Returns an array of all properties (enumerable or not) found directly upon a given object.
 *
 * @function getPropNames
 * @category object
 * @param {Object} source - The object whose enumerable and non-enumerable own properties are to be returned.
 * @returns {Object} - An array of strings that correspond to the properties found directly upon the given object.
 *
 * @example
 * import { getPropNames, assert } from 'Acid';
 * assert(getPropNames({ 0: 'a', 1: 'b', 2: 'c' }), ['0', '1', '2']);
 */
export const getPropNames = Object.getOwnPropertyNames;
/**
 * Returns a property descriptor for an own property (that is, one directly present on an object and not in the object's prototype chain) of a given object.
 *
 * @function getPropDesc
 * @category object
 * @param {Object} target - The target object.
 * @param {String} property - The name of the property whose description is to be retrieved.
 * @returns {Object} - A property descriptor of the given property if it exists on the object, undefined otherwise.
 *
 * @example
 * getPropDesc({ bar: 42 }, 'bar');
 * // => { configurable: true, enumerable: true, value: 42, writable: true }
 */
export const getPropDesc = Object.getOwnPropertyDescriptor;
/**
 * Defines a new property directly on an object, or modifies an existing property on an object, and returns the object.
 *
 * @function defProp
 * @category object
 * @param {Object} target - The object on which to define the property.
 * @param {String} property - The name of the property whose description is to be retrieved.
 * @param {Object} descriptor - The descriptor for the property being defined or modified.
 * @returns {Object} - The object that was passed to the function.
 *
 * @example
 * defProp({}, 'key', {
 *  enumerable: false,
 *  configurable: false,
 *  writable: false,
 *  value: 'static'
 * }).key;
 * // => 'static'
 */
export const defProp = Object.defineProperty;
export const hasProp = cacheNativeMethod(Object.hasOwnProperty);
