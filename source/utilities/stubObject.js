import { stubFalse } from './stubFalse';
/**
 * This method returns a new empty object.
 *
 * @function stubObject
 * @category utility
 * @type {Function}
 * @returns {Object} - Returns the new empty object.
 *
 * @example
 * import { stubObject, assert } from '@universalweb/acid';
 * assert(stubObject(), {});
 */
export const stubObject = () => {
	return {};
};

