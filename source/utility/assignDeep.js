import namespace from '../namespace/index';
import { assign, keys } from '../internal/object';
import { isArray, isPlainObject, isFunction } from '../internal/is';
const objectCreate = Object.create;
/**
  * Creates new object with deeply assigned values from another object.
  *
  * @function assignDeep
  * @category utility
  * @type {Function}
  * @param {Object|Function|Class|Array} target - Object to be assigned new properties.
  * @param {Object|Function|Class|Array} source - Object from which properties are extracted.
  * @param {boolean} [mergeArrays = true] - Array from which items are assigned to the new object.
  * @returns {Object} - Returns object with the newly assigned properties.
  *
  * @example
  * assignDeep({a:1}, {b:2});
  * // => {a:1, b:2}
*/
export const assignDeep = (target, source, mergeArrays = false, indexArg, lengthArg, objectKeysArg) => {
	if (target) {
		if (objectKeysArg) {
			const currentKey = objectKeysArg.pop();
			if (currentKey) {
				const sourceItem = source[currentKey];
				target[currentKey] = assignDeep(target[currentKey], sourceItem, mergeArrays);
			} else if (!lengthArg) {
				return target;
			}
			if (lengthArg) {
				let index = indexArg || 0;
				index++;
				if (index < lengthArg) {
					return assignDeep(target, source, mergeArrays, index, lengthArg, objectKeysArg);
				}
			}
			return assignDeep(target, source, mergeArrays, null, null, objectKeysArg);
		} else if (lengthArg) {
			if (indexArg < lengthArg) {
				let index = indexArg || 0;
				const sourceItem = source[index];
				if (sourceItem) {
					const targetItem = target[index];
					if (mergeArrays) {
						target.push(assignDeep(targetItem, sourceItem, mergeArrays));
					} else {
						target[index] = assignDeep(targetItem, sourceItem, mergeArrays);
					}
					index++;
					if (index < lengthArg) {
						return assignDeep(target, source, mergeArrays, index, lengthArg, objectKeysArg);
					}
				}
			}
		} else if (isArray(source)) {
			if (lengthArg === 0) {
				return target;
			}
			return assignDeep(target, source, mergeArrays, 0, source.length);
		} else if (isPlainObject(source)) {
			const objectKeys = keys(source);
			return assignDeep(target, source, mergeArrays, null, null, objectKeys);
		}
	} else if (isPlainObject(source)) {
		if (objectKeysArg) {
			return assignDeep({}, source, mergeArrays, null, null, objectKeysArg);
		}
		return assignDeep({}, source, mergeArrays);
	} else if (isArray(source)) {
		if (indexArg < lengthArg) {
			return assignDeep([], source, mergeArrays, indexArg, lengthArg, objectKeysArg);
		}
		return assignDeep([], source, mergeArrays);
	}
	if (!target) {
		return source;
	}
	return target;
};
/**
  * Creates a deep clone of an object.
  *
  * @function assignDeep
  * @category utility
  * @type {Function}
  * @param {Object} source - Source object to clone.
  * @returns {Object} - Returns a deep clone of an object.
  *
  * @example
  * clone({b:2})
  * // => {a:1, b:2}
*/
const structuredCloneSafe = globalThis.structuredClone;
let clone;
if (structuredCloneSafe) {
	clone = (item) => {
		return globalThis.structuredClone(item);
	};
} else {
	clone = (item) => {
		if (isPlainObject(item)) {
			return assignDeep({}, item);
		} else if (isArray(item)) {
			return assignDeep([], item);
		}
		return objectCreate(item);
	};
}
export { clone };
assign(namespace, {
	assignDeep,
	clone
});
