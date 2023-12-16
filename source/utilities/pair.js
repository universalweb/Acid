import { eachRight } from '../arrays/eachRight.js';
/**
 * Takes the first two arguments given and returns them inside a new array.
 *
 * @function pair
 * @category utility
 * @param {*} argument1 - The source object.
 * @param {*} argument2 - The source object.
 * @returns {Array} The array which holds the pair.
 *
 * @example
 * import { pair, assert } from '@universalweb/acid';
 * assert(air(1, 2), [1, 2]);
 */
export function pair(argument1, argument2) {
	return [argument1, argument2];
}
