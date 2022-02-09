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
  * @type {Function}
  * @param {string} value - The string to search for.
  * @returns {boolean} - Returns true or false.
  * @example
  * isAgent('mobile');
  * // => false
*/
export const isAgent = (value) => {
	return (value) ? isAgent[value] : keys(isAgent);
};
const userAgent = navigator.userAgentData;
if (userAgent) {
	eachObject(userAgent, (value, key) => {
		if (isBoolean(value) && value) {
			isAgent[key] = value;
		}
	});
	eachArray(userAgent.brands, (value) => {
		isAgent[value.brand] = value.version;
	});
}
if (navigator.userAgent) {
	let userAgentNormalized = navigator.userAgent.toLowerCase();
	userAgentNormalized = userAgentNormalized.replace(/_/g, '.');
	userAgentNormalized = userAgentNormalized.replace(/[#_,;()]/g, '');
	const userAgentSplit = userAgentNormalized.split(/ |\//);
	eachArray(userAgentSplit, (item) => {
		isAgent[item] = true;
	});
}
assign(acid, {
	isAgent
});
