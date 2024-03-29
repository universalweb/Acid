const truncateDown = (string, maxLength, stringLength) => {
	const breakAll = string.split('');
	const breakAllLength = breakAll.length;
	let item;
	let index = stringLength - maxLength;
	for (; index < breakAllLength && index >= 0; index--) {
		item = breakAll[index];
		if (item === ' ') {
			break;
		}
	}
	return string.slice(0, index).trim();
};
const truncateUp = (string, maxLength, stringLength) => {
	const breakAll = string.split('');
	const breakAllLength = breakAll.length;
	let item;
	let index = maxLength;
	for (; index < breakAllLength && index > 0; index++) {
		item = breakAll[index];
		if (item === ' ') {
			break;
		}
	}
	return string.substring(index, stringLength).trim();
};
/**
 * Truncates the string, accounting for word placement and character count.
 *
 * @function truncate
 * @type {Function}
 * @category string
 * @param {String} string - String to be truncated.
 * @param {Number} maxLength - The desired max length of the string.
 * @returns {String} - The mutated string.
 *
 * @example
 * import { truncate, assert } from '@universalweb/acid';
 * assert(truncate('Where is Lucy?', 2), 'Where is');
 */
export function truncate(string, maxLength) {
	const stringLength = string.length;
	return (stringLength > maxLength) ? truncateDown(string, maxLength, stringLength) : string;
}
/**
 * Truncates the string, accounting for word placement and character count from the right.
 *
 * @function truncateRight
 * @type {Function}
 * @category string
 * @param {String} string - String to be truncated.
 * @param {Number} maxLength - The desired max length of the string.
 * @returns {String} - The mutated string.
 *
 * @example
 * import { truncateRight, assert } from '@universalweb/acid';
 * assert(truncateRight('Where is Lucy?', 6), 'Lucy?');
 */
export function truncateRight(string, maxLength) {
	const stringLength = string.length;
	return (stringLength > maxLength) ? truncateUp(string, maxLength, stringLength) : string;
}
