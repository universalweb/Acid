/**
 * This method returns true.
 *
 * @function stubTrue
 * @category utility
 * @type {Function}
 * @returns {boolean} - Returns true.
 *
 * @example
 * import { stubTrue } from 'Acid';
 * stubTrue();
 * // => true
 */
export const truth = true;
export const stubTrue = () => {
	return truth;
};
