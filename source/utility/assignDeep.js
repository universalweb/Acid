import { keys } from '../internal/object';
import { isArray, isPlainObject, hasValue } from '../internal/is';
export const objectCreate = Object.create;
const assignDeepRecursion = (target, source, mergeArrays = false, indexArg, lengthArg, objectKeysArg) => {
	if (hasValue(target)) {
		if (objectKeysArg) {
			const currentKey = objectKeysArg.pop();
			if (currentKey) {
				const sourceItem = source[currentKey];
				console.log(currentKey, target[currentKey], sourceItem);
				target[currentKey] = assignDeepRecursion(target[currentKey], sourceItem, mergeArrays);
				console.log(target[currentKey]);
			} else if (!lengthArg) {
				return target;
			}
			if (lengthArg) {
				let index = indexArg || 0;
				index++;
				if (index < lengthArg) {
					return assignDeepRecursion(target, source, mergeArrays, index, lengthArg, objectKeysArg);
				}
			}
			return assignDeepRecursion(target, source, mergeArrays, null, null, objectKeysArg);
		} else if (lengthArg) {
			if (indexArg < lengthArg) {
				let index = indexArg || 0;
				const sourceItem = source[index];
				if (hasValue(sourceItem)) {
					const targetItem = target[index];
					if (mergeArrays) {
						target.push(assignDeepRecursion(targetItem, sourceItem, mergeArrays));
					} else {
						target[index] = assignDeepRecursion(targetItem, sourceItem, mergeArrays);
					}
					index++;
					if (index < lengthArg) {
						return assignDeepRecursion(target, source, mergeArrays, index, lengthArg, objectKeysArg);
					}
				}
			}
		} else if (isArray(source)) {
			if (lengthArg === 0) {
				return target;
			}
			return assignDeepRecursion(target, source, mergeArrays, 0, source.length);
		} else if (isPlainObject(source)) {
			const objectKeys = keys(source);
			return assignDeepRecursion(target, source, mergeArrays, null, null, objectKeys);
		} else {
			return source;
		}
	} else if (isPlainObject(source)) {
		if (objectKeysArg) {
			return assignDeepRecursion({}, source, mergeArrays, null, null, objectKeysArg);
		}
		return assignDeepRecursion({}, source, mergeArrays);
	} else if (isArray(source)) {
		if (indexArg < lengthArg) {
			return assignDeepRecursion([], source, mergeArrays, indexArg, lengthArg, objectKeysArg);
		}
		return assignDeepRecursion([], source, mergeArrays);
	}
	if (!hasValue(target)) {
		return source;
	}
	return target;
};
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
export function assignDeep(target, source, mergeArrays = true) {
	return assignDeepRecursion(target, source, mergeArrays);
}
/**
  * Creates a structuredClone clone of an object if no structuredClone then assignDeep is used.
  *
  * @function clone
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
			return assignDeepRecursion({}, item);
		} else if (isArray(item)) {
			return assignDeepRecursion([], item);
		}
		return objectCreate(item);
	};
}
export { clone };

