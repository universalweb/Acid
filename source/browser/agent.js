import { eachArray } from '../arrays/each.js';
import { eachObject } from '../objects/each.js';
import { hasValue } from '../types/hasValue.js';
import { isBoolean } from '../types/isBoolean.js';
import { keys } from '../objects/keys.js';
/**
 * Checks to see of the browser agent has a string.
 *
 * @function isAgent
 * @category browser
 * @ignoreTest
 * @type {Function}
 * @param {String} source - The string to search for.
 * @returns {Boolean} - Returns true or false.
 *
 * @example
 * import { isAgent, assert } from '@universalweb/acid';
 * assert(isAgent('NotThere'), false);
 */
export function isAgent(source) {
	return (hasValue(source)) ? isAgent[source] : keys(isAgent);
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
} else if (globalThis.navigator?.userAgent) {
	let userAgentNormalized = globalThis.navigator.userAgent.toLowerCase();
	userAgentNormalized = userAgentNormalized.replace(/_/g, '.');
	userAgentNormalized = userAgentNormalized.replace(/[#_,;()]/g, '');
	const userAgentSplit = userAgentNormalized.split(/ |\//);
	eachArray(userAgentSplit, (item) => {
		isAgent[item] = true;
	});
}

