import namespace from '../namespace/index';
import { assign } from '../internal/object';
import { each } from './each';
import { isArray, isPlainObject } from '../internal/is';
/**
  * Creates new object with deeply assigned values from another object/array.
  *
  * @function assignDeep
  * @category utility
  * @type {Function}
  * @param {Object} target - Object to be assigned new properties.
  * @param {Object} source - Object from which properties are extracted.
  * @param {boolean} [mergeArrays = true] - Array from which items are assigned to the new object.
  * @returns {Object} - Returns object with the newly assigned properties.
  *
  * @example
  * assignDeep({a:1}, {b:2})
  * // => {a:1, b:2}
*/
export const assignDeep = (target, source, mergeArrays = true) => {
	each(source, (item, key) => {
		if (isPlainObject(item) && isPlainObject(target[key])) {
			assignDeep(target[key], item, mergeArrays);
		} else if (mergeArrays && isArray(item) && isArray(target[key])) {
			target[key].push(...item);
		} else {
			target[key] = item;
		}
	});
	return target;
};
assign(namespace, {
	assignDeep
});
