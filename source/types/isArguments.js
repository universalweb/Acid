import { hasValue } from './hasValue.js';
/**
 * Checks if the value is an Arguments object.
 *
 * @function isArguments
 * @category type
 * @param {*} source - Object to be checked.
 * @returns {Boolean} - Returns true or false.
 *
 * @example
 * import { isArguments, assert } from '@universalweb/acid';
 * assert(isArguments((function() { return arguments;})()), true);
 * assert(isArguments([]), false);
 */
const objectArguments = '[object Arguments]';
export function isArguments(source) {
	return (hasValue(source)) ? source.toString() === objectArguments : false;
}
