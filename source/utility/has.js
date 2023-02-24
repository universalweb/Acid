/**
 * Checks if the value includes something.
 *
 * @function has
 * @category utility
 * @param {Array|String} value - Object to be checked.
 * @param {*} search - Object that is being searched for.
 * @returns {boolean} - Returns true or false.
 *
 * @example
 * has('My name is Acidjs', 'Acidjs');
 * // => true
*/
export function has(value, ...search) {
	return value && value.includes && value.includes(...search);
}
