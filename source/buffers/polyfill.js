const textEncoder = new TextEncoder();
function decoderFor(encoding) {
	return new TextDecoder(encoding);
}
const hexChars = '0123456789abcdef';
function hexEncode(bytes) {
	const bytesLength = bytes.length;
	let out = '';
	for (let byteIndex = 0; byteIndex < bytesLength; byteIndex++) {
		const value = bytes[byteIndex];
		out += hexChars[value >> 4] + hexChars[value & 0x0f];
	}
	return out;
}
function hexDecode(text) {
	const trimmed = text.length % 2 === 0 ? text : text.slice(0, -1);
	const trimmedLength = trimmed.length;
	const bytes = new Uint8Array(trimmedLength / 2);
	for (let charIndex = 0; charIndex < trimmedLength; charIndex += 2) {
		bytes[charIndex / 2] = parseInt(trimmed.slice(charIndex, charIndex + 2), 16);
	}
	return bytes;
}
function base64Encode(bytes) {
	let binary = '';
	const bytesLength = bytes.length;
	for (let byteIndex = 0; byteIndex < bytesLength; byteIndex++) {
		binary += String.fromCharCode(bytes[byteIndex]);
	}
	return globalThis.btoa(binary);
}
function base64Decode(text) {
	const binary = globalThis.atob(text);
	const binaryLength = binary.length;
	const bytes = new Uint8Array(binaryLength);
	for (let charIndex = 0; charIndex < binaryLength; charIndex++) {
		bytes[charIndex] = binary.charCodeAt(charIndex);
	}
	return bytes;
}
function asciiDecode(bytes) {
	let out = '';
	const bytesLength = bytes.length;
	for (let byteIndex = 0; byteIndex < bytesLength; byteIndex++) {
		out += String.fromCharCode(bytes[byteIndex] & 0x7f);
	}
	return out;
}
function latin1Decode(bytes) {
	let out = '';
	const bytesLength = bytes.length;
	for (let byteIndex = 0; byteIndex < bytesLength; byteIndex++) {
		out += String.fromCharCode(bytes[byteIndex]);
	}
	return out;
}
function asciiEncode(text) {
	const textLength = text.length;
	const bytes = new Uint8Array(textLength);
	for (let charIndex = 0; charIndex < textLength; charIndex++) {
		bytes[charIndex] = text.charCodeAt(charIndex) & 0x7f;
	}
	return bytes;
}
function latin1Encode(text) {
	const textLength = text.length;
	const bytes = new Uint8Array(textLength);
	for (let charIndex = 0; charIndex < textLength; charIndex++) {
		bytes[charIndex] = text.charCodeAt(charIndex) & 0xff;
	}
	return bytes;
}
function encodeString(text, encoding = 'utf-8') {
	const normalized = encoding.toLowerCase();
	if (normalized === 'utf-8' || normalized === 'utf8') {
		return textEncoder.encode(text);
	}
	if (normalized === 'hex') {
		return hexDecode(text);
	}
	if (normalized === 'base64' || normalized === 'base64url') {
		return base64Decode(normalized === 'base64url' ? text.replace(/-/g, '+').replace(/_/g, '/') : text);
	}
	if (normalized === 'ascii') {
		return asciiEncode(text);
	}
	if (normalized === 'binary' || normalized === 'latin1') {
		return latin1Encode(text);
	}
	throw new Error(`Unknown encoding: ${encoding}`);
}
function decodeBytes(bytes, encoding = 'utf-8') {
	const normalized = encoding.toLowerCase();
	if (normalized === 'utf-8' || normalized === 'utf8') {
		return decoderFor('utf-8').decode(bytes);
	}
	if (normalized === 'hex') {
		return hexEncode(bytes);
	}
	if (normalized === 'base64') {
		return base64Encode(bytes);
	}
	if (normalized === 'base64url') {
		return base64Encode(bytes).replace(/\+/g, '-').replace(/\//g, '_')
			.replace(/[=]+$/, '');
	}
	if (normalized === 'ascii') {
		return asciiDecode(bytes);
	}
	if (normalized === 'binary' || normalized === 'latin1') {
		return latin1Decode(bytes);
	}
	throw new Error(`Unknown encoding: ${encoding}`);
}
/**
 * Minimal browser Buffer polyfill extending Uint8Array. Implements the most common Node.js Buffer surface: static `from`, `alloc`, `allocUnsafe`, `concat`, `isBuffer`, `byteLength`; instance `toString`, `write`, `slice`, `equals`. Supported encodings: utf-8 / utf8, hex, base64, base64url, ascii, binary / latin1.
 *
 * @class BUFFER
 * @category buffer
 * @ignoreTest
 *
 * @example
 * import { BUFFER } from '@universalweb/acid';
 * const buf = BUFFER.from('hi', 'utf-8');
 * buf.toString('hex');
 */
export class BUFFER extends Uint8Array {
	static from(value, encodingOrOffset, viewLength) {
		if (typeof value === 'string') {
			const bytes = encodeString(value, encodingOrOffset);
			return new BUFFER(bytes.buffer, bytes.byteOffset, bytes.byteLength);
		}
		if (value instanceof ArrayBuffer) {
			const offset = encodingOrOffset ?? 0;
			const view = viewLength === undefined ? new Uint8Array(value, offset) : new Uint8Array(value, offset, viewLength);
			return new BUFFER(view.buffer, view.byteOffset, view.byteLength);
		}
		if (ArrayBuffer.isView(value)) {
			const view = new Uint8Array(value.buffer, value.byteOffset, value.byteLength);
			return new BUFFER(view.buffer, view.byteOffset, view.byteLength);
		}
		if (Array.isArray(value) || (value && typeof value.length === 'number')) {
			return new BUFFER(Uint8Array.from(value).buffer);
		}
		throw new TypeError('Unsupported BUFFER.from input');
	}
	static alloc(size, fill = 0) {
		const buffer = new BUFFER(size);
		if (fill !== 0) {
			buffer.fill(fill);
		}
		return buffer;
	}
	static allocUnsafe(size) {
		return new BUFFER(size);
	}
	/**
	 * Identifies a Buffer or BUFFER polyfill instance. Works whether or not the polyfill has been installed onto `globalThis.Buffer` — it directly checks against the `BUFFER` class and falls back to any pre-existing `globalThis.Buffer.isBuffer` (Node's native check) when present and distinct.
	 *
	 * @function isBuffer
	 * @category buffer
	 * @ignoreTest
	 * @param {*} value - Value to test.
	 * @returns {Boolean} - True when `value` is a Buffer/BUFFER instance.
	 */
	static isBuffer(value) {
		if (value instanceof BUFFER) {
			return true;
		}
		const nativeBuffer = globalThis.Buffer;
		if (nativeBuffer && nativeBuffer !== BUFFER && typeof nativeBuffer.isBuffer === 'function') {
			return nativeBuffer.isBuffer(value);
		}
		return false;
	}
	static byteLength(value, encoding = 'utf-8') {
		if (typeof value !== 'string') {
			return value?.byteLength ?? value?.length ?? 0;
		}
		return encodeString(value, encoding).length;
	}
	static concat(buffers, totalLength) {
		const buffersLength = buffers.length;
		let runningTotal = totalLength;
		if (runningTotal === undefined) {
			runningTotal = 0;
			for (let bufferIndex = 0; bufferIndex < buffersLength; bufferIndex++) {
				runningTotal += buffers[bufferIndex].length;
			}
		}
		const target = new BUFFER(runningTotal);
		let offset = 0;
		for (let bufferIndex = 0; bufferIndex < buffersLength; bufferIndex++) {
			const current = buffers[bufferIndex];
			const writeLength = Math.min(current.length, runningTotal - offset);
			target.set(current.subarray(0, writeLength), offset);
			offset += writeLength;
			if (offset >= runningTotal) {
				break;
			}
		}
		return target;
	}
	toString(encoding = 'utf-8', start = 0, end = this.length) {
		const view = this.subarray(start, end);
		return decodeBytes(view, encoding);
	}
	write(text, offsetOrEncoding, lengthOrEncoding, finalEncoding) {
		let offset = 0;
		let maxLength = this.length;
		let encoding = 'utf-8';
		if (typeof offsetOrEncoding === 'number') {
			offset = offsetOrEncoding;
			if (typeof lengthOrEncoding === 'number') {
				maxLength = lengthOrEncoding;
				if (typeof finalEncoding === 'string') {
					encoding = finalEncoding;
				}
			} else if (typeof lengthOrEncoding === 'string') {
				encoding = lengthOrEncoding;
			}
		} else if (typeof offsetOrEncoding === 'string') {
			encoding = offsetOrEncoding;
		}
		const bytes = encodeString(text, encoding);
		const writeLength = Math.min(bytes.length, maxLength, this.length - offset);
		this.set(bytes.subarray(0, writeLength), offset);
		return writeLength;
	}
	equals(other) {
		if (!(other instanceof Uint8Array)) {
			return false;
		}
		if (this.length !== other.length) {
			return false;
		}
		const selfLength = this.length;
		for (let byteIndex = 0; byteIndex < selfLength; byteIndex++) {
			if (this[byteIndex] !== other[byteIndex]) {
				return false;
			}
		}
		return true;
	}
}
/**
 * Installs `BUFFER` as `globalThis.Buffer` when no Buffer implementation is already present. Returns the active Buffer (existing or shim).
 *
 * @function installBufferPolyfill
 * @category buffer
 * @ignoreTest
 * @type {Function}
 * @returns {Function} - The active Buffer constructor on `globalThis`.
 *
 * @example
 * import { installBufferPolyfill } from '@universalweb/acid';
 * const ActiveBuffer = installBufferPolyfill();
 */
export function installBufferPolyfill() {
	if (!globalThis.Buffer) {
		globalThis.Buffer = BUFFER;
	}
	return globalThis.Buffer;
}
installBufferPolyfill();
