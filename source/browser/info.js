const protocol = location.protocol;
const protocolSocket = (protocol === 'http:') ? 'ws' : 'wss';
const hostname = location.hostname;
/**
 * Holds client hardware, browser, and host info.
 *
 * @memberof $
 * @category browser
 * @ignoreTest
 * @property {object} info - Client hardware & host info.
 * @type {object}
 */
export const info = {
	hardware: {
		cores: navigator.hardwareConcurrency
	},
	host: {
		name: hostname,
		protocol,
		protocolSocket,
	}
};

