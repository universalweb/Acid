import { eachArray } from '../arrays/each.js';
import { eachObject } from '../objects/each.js';
import { isBoolean } from '../types/isBoolean.js';
import { keys } from '../objects/keys.js';
/**
 * Checks to see of the browser agent has a string.
 *
 * @function isAgent
 * @category browser
 * @type {Function}
 * @param {String} source - The string to search for.
 * @returns {Boolean} - Returns true or false.
 * @example
 * isAgent('mobile');
 * // => false
 */
export function isAgent(source) {
	return (source) ? isAgent[source] : keys(isAgent);
}
const userAgent = globalThis.navigator?.userAgentData;
if (userAgent) {
	eachObject(userAgent, (value, key) => {
		if (isBoolean(value) && value) {
			isAgent[key] = value;
		}
	});
	eachArray(userAgent.brands, (value) => {
		isAgent[value.brand] = value.version;
	});
} else if (navigator.userAgent) {
	let userAgentNormalized = navigator.userAgent.toLowerCase();
	userAgentNormalized = userAgentNormalized.replace(/_/g, '.');
	userAgentNormalized = userAgentNormalized.replace(/[#_,;()]/g, '');
	const userAgentSplit = userAgentNormalized.split(/ |\//);
	eachArray(userAgentSplit, (item) => {
		isAgent[item] = true;
	});
}

