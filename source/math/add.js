/**
 * Adds two numbers.
 *
 * @function add
 * @category math
 * @type {Function}
 * @param {number} augend - First number.
 * @param {number} addend - Second number which is being added to another (augend).
 * @returns {number} - Returns the sum of the arguments.
 *
 * @example
 * import { add, assert } from 'Acid';
 * assert(add(1, 1), 2);
 */
export function add(augend, addend) {
	return augend + addend;
}
