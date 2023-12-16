import { stubString } from './stubString';
/**
 * This method returns true.
 *
 * @function stubTrue
 * @category utility
 * @type {Function}
 * @returns {Boolean} - Returns true.
 *
 * @example
 * import { stubTrue, assert } from '@universalweb/acid';
 * assert(stubString(), true);
 */
export const truth = true;
export const stubTrue = () => {
	return truth;
};
