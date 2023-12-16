import { stubArray } from './stubArray';
/**
 * This method returns false.
 *
 * @function stubFalse
 * @category utility
 * @type {Function}
 * @returns {Boolean} - Returns false.
 *
 * @example
 * import { stubFalse, assert } from '@universalweb/acid';
 * assert(stubFalse(), false);
 */
export const falsy = false;
export const stubFalse = () => {
	return falsy;
};
