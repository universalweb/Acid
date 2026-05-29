import { restString } from '../strings/range.js';
const dotString = '.';
const poundString = '#';
const classTest = /^.[\w_-]+$/;
const tagTest = /^[A-Za-z]+$/;
const regexSpace = /\s/;
/**
 * Wrapper around getElementsByClassName.
 *
 * @function getByClass
 * @category browser
 * @ignoreTest
 * @type {Function}
 */
export function getByClass(className, context = document) {
	return context.getElementsByClassName(className);
}
/**
 * Wrapper around getElementsByTagName.
 *
 * @function getByTag
 * @category browser
 * @ignoreTest
 * @type {Function}
 */
export function getByTag(tagName, context = document) {
	return context.getElementsByTagName(tagName);
}
/**
 * Wrapper around getElementsByIdName.
 *
 * @function getById
 * @category browser
 * @ignoreTest
 * @type {Function}
 */
export function getById(id, context = document) {
	return context.getElementById(id);
}
/**
 * Wrapper around querySelector.
 *
 * @function querySelector
 * @category browser
 * @ignoreTest
 * @type {Function}
 */
export function querySelector(selectors, context = document) {
	return context.querySelector(selectors);
}
/**
 * Wrapper around querySelectorAll.
 *
 * @function querySelectorAll
 * @category browser
 * @ignoreTest
 * @type {Function}
 */
export function querySelectorAll(selectors, context = document) {
	return context.querySelectorAll(selectors);
}
/**
 * Returns relevant DOM node.
 *
 * @function selector
 * @category browser
 * @ignoreTest
 * @param {String} select - String to be evaluated.
 * @type {Function}
 * @returns {Node} - Returns a DOM node.
 *
 * @example
 * selector('#node');
 * // => <div id="node"></div>
 */
export function selector(select, context = document) {
	const firstLetter = select[0];
	switch (firstLetter) {
		case poundString: {
			if (!regexSpace.test(select)) {
				return getById(restString(select), context);
			}
			break;
		}
		case dotString: {
			if (classTest.test(select)) {
				return getByClass(restString(select), context);
			}
			break;
		}
		default: {
			if (tagTest.test(select)) {
				return getByTag(select, context);
			}
		}
	}
	return querySelectorAll(select, context);
}

