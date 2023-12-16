import { noop } from './noop';
/**
 * This method returns a new empty array.
 *
 * @function stubArray
 * @category utility
 * @type {Function}
 * @returns {Array} - Returns the new empty array.
 *
 * @example
 * import { stubArray, assert } from '@universalweb/acid';
 * assert(stubArray(), []);
 */
export const stubArray = () => {
	return [];
};

