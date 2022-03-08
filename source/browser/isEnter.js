/**
  * Checks if the keycode of the event is strictly equal to 13.
  *
  * @function isEnter
  * @category browser
  * @type {Function}
  * @param {Object} eventObject - Object to be checked.
  * @returns {boolean} - Returns true if the keycode property of the object equals 13.
  *
  * @example
  * isEnter('click');
  * // => false
*/
export const isEnter = (eventObject) => {
	return eventObject.keyCode === 13;
};

