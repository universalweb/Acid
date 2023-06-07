import { hasValue } from './hasValue.js';
/**
 * Checks to see if the constructor is that of a native object.
 *
 * @function isConstructor
 * @category type
 * @param {Object} target - The object to be checked.
 * @param {Object} source - The source constructor object.
 * @returns {Object} - Returns the target object.
 *
 * @example
 * import { isConstructor, assert } from '@universalweb/acid';
 * assert(isConstructor(2, Number), true);
 */
export function isConstructor(target, source) {
	return target?.constructor === source || false;
}
export function isConstructorFactory(source) {
	return (target) => {
		return isConstructor(target, source);
	};
}
export function constructorName(source) {
	return source?.constructor?.name;
}
export function isConstructorNameFactory(source) {
	return (target) => {
		return constructorName(target) === source || false;
	};
}
