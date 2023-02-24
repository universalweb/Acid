/**
 * This method returns false.
 *
 * @function stubFalse
 * @category function
 * @type {Function}
 * @returns {boolean} - Returns false.
 *
 * @example
 * import { stubArray } from './Acid.js';
 * stubFalse();
 * // => false
 */
export const falsy = false;
export const stubFalse = () => {
	return falsy;
};
