const protocol = globalThis.location?.protocol;
const protocolSocket = (protocol === 'http:') ? 'ws' : 'wss';
const hostname = globalThis.location?.hostname;
/**
 * Holds client hardware, browser, and host info.
 *
 * @memberof $
 * @category browser
 * @ignoreTest
 * @property {Object} info - Client hardware & host info.
 * @type {Object}
 */
export const info = {
	hardware: {
		cores: globalThis.navigator?.hardwareConcurrency
	},
	host: {
		name: hostname,
		protocol,
		protocolSocket,
	}
};

