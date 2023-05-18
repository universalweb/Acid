import { getTypeName } from './getTypeName.js';
/**
 * Checks if an object is a TypedArray. A TypedArray object is an array-like view of an underlying binary data buffer.
 *
 * @function isTypedArray
 * @category type
 * @param {*} source - Object to be checked.
 * @returns {boolean} - Returns true or false.
 *
 * @example
 * import { isTypedArray, assert } from 'Acid';
 * assert(isTypedArray([]), false);
 * assert(isTypedArray(new Int8Array()), true);
 */
const typedArrayRegex = /Array/;
const arrayConstructorName = 'Array';
export function isTypedArray(source) {
	if (source) {
		const constructorName = getTypeName(source);
		if (typedArrayRegex.test(constructorName) && constructorName !== arrayConstructorName) {
			return true;
		}
	}
	return false;
}
