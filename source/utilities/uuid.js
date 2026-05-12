/**
 * Generates an RFC 4122 v4 UUID string. Uses crypto.randomUUID when available, otherwise falls back
 * to Math.random (not cryptographically secure). Do not use the fallback for security-critical IDs.
 *
 * @function uuid
 * @category utility
 * @type {Function}
 * @returns {String} - A 36-character UUID v4 string.
 *
 * @example
 * import { uuid, assert } from '@universalweb/acid';
 * assert(uuid().length, 36);
 */
const cryptoRef = globalThis.crypto;
const hasNativeUUID = typeof cryptoRef?.randomUUID === 'function';
export function uuid() {
	if (hasNativeUUID) {
		return cryptoRef.randomUUID();
	}
	return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, (char) => {
		const random = (Math.random() * 16) | 0;
		const value = char === 'x' ? random : (random & 0x3) | 0x8;
		return value.toString(16);
	});
}
