import { hasValue } from './hasValue.js';
/**
 * Checks to see if the constructor is that of a native object.
 *
 * @function isConstructor
 * @category type
 * @param {Object} target - The target object.
 * @param {Object} nativeObject - The source object.
 * @returns {Object} - Returns the target object.
 *
 * @example
 * import { isConstructor } from 'Acid';
 * isConstructor(2, Number);
 * // => true
*/
export function isConstructor(obj, nativeObject) {
	return (hasValue(obj)) ? obj.constructor === nativeObject : false;
}
/**
 * Checks to see if the constructor is that of a native object.
 *
 * @function isConstructor
 * @category type
 * @param {Object} target - The target object.
 * @param {...Object} source - The source object.
 * @returns {Object} - Returns the target object.
 *
 * @example
 * import { isConstructor } from 'Acid';
 * isConstructor(2, Number);
 * // => {b: 2, a: 1}
*/
export function isConstructorFactory(source) {
	return (target) => {
		return isConstructor(target, source);
	};
}
export function constructorName(source) {
	return source?.constructor?.name;
}
function isConstructorNameFactory(target) {
	return (source) => {
		return source && constructorName(source) === target || false;
	};
}