import { getType } from './getType.js';
import { getTypeName } from './getTypeName.js';
import { hasValue } from './hasValue.js';
/**
 * Checks to see if the constructor is that of a native object.
 *
 * @function isType
 * @category type
 * @param {Object} target - The object to be checked.
 * @param {Object} source - The source constructor object.
 * @returns {Object} - Returns the target object.
 *
 * @example
 * import { isType, assert } from '@universalweb/acid';
 * assert(isType(2, Number), true);
 */
export function isType(target, source) {
	const constructorObject = getType(target);
	return (constructorObject && constructorObject === source) || false;
}
export { isType as isConstructor };
export function isTypeNameFactory(source) {
	return (target) => {
		const constructorNameString = getTypeName(target);
		return (constructorNameString && constructorNameString === source) || false;
	};
}
