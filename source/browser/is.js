import { hasValue } from '../internal/is';
/**
 * Checks if value is a plain DOM Node.
 *
 * @function isDom
 * @category browser
 * @ignoreTest
 * @param {*} value - Object to be checked.
 * @returns {boolean} - Returns true or false.
 *
 * @example
 * isDom(document.querySelectorAll('.test'));
 * // => true
*/
export const isDom = (value) => {
	return value && value.nodeType !== 9;
};
/**
 * Checks if the value is a HTMLCollection.
 *
 * @function isHTMLCollection
 * @category browser
 * @ignoreTest
 * @param {*} value - Object to be checked.
 * @returns {boolean} - Returns true or false.
 *
 * @example
 * isHTMLCollection(document.getElementsByClassName('test'));
 * // => true
*/
const objectHTMLCollection = '[object HTMLCollection]';
export function isHTMLCollection(source) {
	return (hasValue(source)) ? source.toString() === objectHTMLCollection : false;
}
/**
 * Checks if the value is a NodeList.
 *
 * @function isNodeList
 * @category browser
 * @ignoreTest
 * @param {*} value - Object to be checked.
 * @returns {boolean} - Returns true or false.
 *
 * @example
 * isNodeList(document.querySelectorAll('.test'));
 * // => true
*/
const objectNodeList = '[object NodeList]';
export function isNodeList(source) {
	return (hasValue(source)) ? source.toString() === objectNodeList : false;
}
