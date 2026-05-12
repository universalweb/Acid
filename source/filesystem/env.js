/**
 * Returns the value of an environment variable, or `fallback` when not set.
 *
 * @function env
 * @category filesystem
 * @type {Function}
 * @param {String} variableName - Environment variable name.
 * @param {String} [fallback] - Value to return when the variable is unset.
 * @returns {String|undefined} - The environment variable value or fallback.
 *
 * @example
 * import { env } from '@universalweb/acid';
 * const port = env('PORT', '3000');
 */
export function env(variableName, fallback) {
	const variableValue = globalThis.process?.env?.[variableName];
	return variableValue === undefined ? fallback : variableValue;
}
