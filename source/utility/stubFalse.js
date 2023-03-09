/**
 * This method returns false.
 *
 * @function stubFalse
 * @category utility
 * @type {Function}
 * @returns {boolean} - Returns false.
 *
 * @example
 * import { stubArray } from 'Acid';
 * stubFalse();
 * // => false
 */
export const falsy = false;
export const stubFalse = () => {
	return falsy;
};
