/**
  * Attaches an event listener to a node.
  *
  * @function eventAdd
  * @category browser
  * @type {Function}
  * @param {Node} node - Given node.
  * @param {string} eventName - A string representing the event type.
  * @param {Object|Function} callback - The object which receives a notification when an event of the specified type occurs.
  * @param {Boolean} useCapture - The default value is false, which will use the bubbling propagation, when the value is set to true, the event uses the capturing propagation.
  * @returns {Node} - Returns given node.
  *
  * @example
  * eventAdd(document.body, 'click', () => {console.log('CLICKED');});
  * // = > document.body
*/
export const eventAdd = (node, eventName, callback, useCapture) => {
	node.addEventListener(eventName, callback, useCapture);
	return node;
};
/**
  * Attaches an event listener to a node.
  *
  * @function eventRemove
  * @category browser
  * @type {Function}
  * @param {Node} node - Given node.
  * @param {string} eventName - A string representing the event type.
  * @param {Object|Function} callback - The object which receives a notification when an event of the specified type occurs.
  * @param {Boolean} useCapture - The default value is false, which will use the bubbling propagation, when the value is set to true, the event uses the capturing propagation.
  * @returns {Node} - Returns given node.
  *
  * @example
  * eventRemove(document.body, () => {console.log('CLICKED');});
  * // = > Undefined
*/
export const eventRemove = (node, eventName, callback, useCapture) => {
	node.removeEventListener(eventName, callback, useCapture);
	return node;
};

