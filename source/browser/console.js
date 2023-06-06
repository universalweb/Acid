import { isString } from '../types/isString.js';
import { stringify } from '../utilities/json.js';
const generateTheme = (color, bg) => {
	return `color:${color};background:${bg};`;
};
export const themes = {
	alert: generateTheme('#fff', '#f44336'),
	important: generateTheme('#fff', '#E91E63'),
	notify: generateTheme('#fff', '#651FFF'),
	warning: generateTheme('#000', '#FFEA00'),
};
/**
  * Console.trace wrapper with theme support.
  *
  * @function cnsl
  * @category browser
  * @ignoreTest
  * @type {Function}
  * @param {Object} value - The value to be logged.
  * @param {String} themeName - The name of the theme to be used.
  * @returns {undefined} - Returns undefined.
  *
  * @example
  * cnsl('Lucy', 'notify');
  * // 'Lucy'
*/
export const cnsl = (value, themeName) => {
	const data = isString(value) ? value : stringify(value);
	if (themeName === 'alert' || themeName === 'warning') {
		return console.trace(`%c${data}`, `${themes[themeName]}font-size:13px;padding:2px 5px;border-radius:2px;`);
	}
	console.log(`%c${data}`, `${themes[themeName]}font-size:13px;padding:2px 5px;border-radius:2px;`);
};
/**
  * Create color themes for cnsl method.
  *
  * @function cnslTheme
  * @category browser
  * @ignoreTest
  * @type {Function}
  * @param {String} themeName - The name of the theme.
  * @param {String} color - The text color.
  * @param {String} background - The background color of the block.
  * @returns {undefined} - Returns undefined.
  *
  * @example
  * cnslTheme('BlackNWhite', '#fff', '#000');
*/
export const cnslTheme = (themeName, color, background) => {
	themes[themeName] = generateTheme(color, background);
};

