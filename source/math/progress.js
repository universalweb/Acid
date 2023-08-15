/**
 * Calculate the progress from a given total and current amount.
 *
 * @function calcProgress
 * @category utility
 * @type {Function}
 * @param {Number} total - The total amount.
 * @param {Number} currentAmount - The current amount.
 * @returns {Number} - The progress as a percentage.
 *
 * @example
 * import { calcProgress, assert } from '@universalweb/acid';
 * assert(calcProgress(100, 1), 1);
 */
export function calcProgress(total, currentAmount) {
	if (total === 0) {
		return false;
	}
	if (currentAmount === 0) {
		return 0;
	}
	return (currentAmount / total) * 100;
}

