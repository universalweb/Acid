import { eachObject } from './each.js';
/**
 * Creates an inverted version of a given object by switching it's keys and values.
 *
 * @function invert
 * @type {Function}
 * @category object
 * @param {Object} thisObject - Object to be inverted.
 * @param {Array} [invertedObject = {}] - Empty object to be populated with inverted values from thisObject.
 * @returns {Object} - Returns object with keys and values switched.
 *
 * @example
 * invert({a:1});
 * // => {1:'a'}
 */
export function invert(thisObject, invertedObject = {}) {
	eachObject(thisObject, (item, key) => {
		invertedObject[item] = key;
	});
	return invertedObject;
}

