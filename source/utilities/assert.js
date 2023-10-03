import { isFunction } from '../types/isFunction.js';
import { notEqual } from './notEqual.js';
import { stringify } from './json.js';
import { isKindAsync } from '../types/isKindAsync.js';
function createAssertError(source, expected, localOptions) {
	const options = globalThis.options || localOptions;
	let errorTitle;
	if (isFunction(options)) {
		errorTitle = `${options.name} : ${options.constructor.name}`;
	} else if (options) {
		errorTitle = `${options.title || options.method.name} -> ${options.file}`;
	}
	return new Error(`Test Failed: ${errorTitle}
		Result: ${stringify(source)}
		Expected: ${stringify(expected)}`, options);
}
export async function assertAsync(sourceArg, expected, options) {
	const source = await sourceArg;
	const expectedFunction = isFunction(expected) && await expected(source, options) === false;
	if (expectedFunction || notEqual(source, expected)) {
		return createAssertError(source, expected, options);
	}
	return true;
}
/**
 * Check if source value matches the expected value.
 *
 * @function assert
 * @category utility
 * @type {Function}
 * @param {*} source - The source object to compare to.
 * @param {*} expected - The expected result that's compared to the source.
 * @param {*} options - Additional options for the Error instance & unit test information.
 * @returns {Object} - Returns a deep clone of an object.
 *
 * @example
 * import { assert } from '@universalweb/acid';
 * if (!assert(1,1)) {
 * 	new Error('Assert Method Failed');
 * }
 */
export function assert(source, expected, options) {
	if (isKindAsync(source) || isKindAsync(expected)) {
		return assertAsync(source, expected, options);
	}
	const expectedFunction = isFunction(expected) && expected(source, options) === false;
	if (expectedFunction || notEqual(source, expected)) {
		return createAssertError(source, expected, options);
	}
	return true;
}
