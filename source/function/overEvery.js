import { every } from '../utility/every.js';
/**
 * Creates a function that checks if all of the predicates return truthy when invoked with the arguments it receives.
 *
 * @function overEvery
 * @category function
 * @type {Function}
 * @param {(Array.<function>|Object.<function>)} iteratee - The list of functions to loop through.
 * @returns {Function} - Returns the new overEvery wrapped function.
 *
 * @example
 * import { overEvery, assert } from 'Acid';
 * assert(overEvery([Boolean, isFinite])('1'), true);
 */
export function overEvery(predicates) {
	return (...args) => {
		return every(predicates, (item) => {
			return item(...args);
		});
	};
}

