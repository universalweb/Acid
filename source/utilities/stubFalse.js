/**
 * This method returns false.
 *
 * @function stubFalse
 * @category utility
 * @type {Function}
 * @returns {Boolean} - Returns false.
 *
 * @example
 * import { stubFalse } from '@universalweb/acid';
 * stubFalse();
 * // => false
 */
export const falsy = false;
export const stubFalse = () => {
	return falsy;
};
