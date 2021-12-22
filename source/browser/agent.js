import acid from '../namespace/index';
import { eachArray } from '../array/each';
import { eachObject } from '../object/each';
import { isBoolean } from '../internal/is';
import { assign, keys } from '../internal/object';
/**
  * Checks to see of the browser agent has a string.
  *
  * @function isAgent
  * @category browser
  * @ignoreTest
  * @type {Function}
  * @param {string} value - The string to search for.
  * @returns {boolean} Returns true or false.
  * @ignoreTest
  * @example
  * isAgent('mobile');
  * // => false
*/
export const isAgent = (value) => {
	return (value) ? isAgent[value] : keys(isAgent);
};
const userAgent = navigator.userAgentData;
eachObject(userAgent, (value, key) => {
	if (isBoolean(value) && value) {
		isAgent[key] = value;
	}
});
eachArray(userAgent.brands, (value) => {
	isAgent[value.brand] = value.version;
});
assign(acid, {
	isAgent
});
