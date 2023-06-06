import { hasValue } from '../types/hasValue.js';
import { difference } from '../arrays/difference.js';
/**
 * Checks if value is a plain DOM Node.
 *
 * @function isDom
 * @category browser
 * @ignoreTest
 * @param {*} source - Object to be checked.
 * @returns {Boolean} - Returns true or false.
 *
 * @example
 * import { isDom, assert } from 'Acid';
 * assert(isDom(document.querySelectorAll('head')), true);
 */
export function isDom(source) {
	return source && source.nodeType !== 9;
}
/**
 * Checks if the value is a HTMLCollection.
 *
 * @function isHTMLCollection
 * @category browser
 * @ignoreTest
 * @param {*} source - Object to be checked.
 * @returns {Boolean} - Returns true or false.
 *
 * @example
 * import { isHTMLCollection, assert } from 'Acid';
 * document.body.innerHTML = '<div class="test"></div>';
 * assert(isHTMLCollection(document.getElementsByClassName('test')), true);
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
 * @param {*} source - Object to be checked.
 * @returns {Boolean} - Returns true or false.
 *
 * @example
 * import { isNodeList, assert } from 'Acid';
 * document.body.innerHTML = '<div class="test"></div>';
 * assert(isNodeList(document.querySelectorAll('.test')), true);
 */
const objectNodeList = '[object NodeList]';
export function isNodeList(source) {
	return (hasValue(source)) ? source.toString() === objectNodeList : false;
}
