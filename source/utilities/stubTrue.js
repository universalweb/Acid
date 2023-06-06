/**
 * This method returns true.
 *
 * @function stubTrue
 * @category utility
 * @type {Function}
 * @returns {Boolean} - Returns true.
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
