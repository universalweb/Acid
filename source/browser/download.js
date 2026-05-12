/**
 * Triggers a browser download for a Blob or string content.
 *
 * @function download
 * @category browser
 * @ignoreTest
 * @type {Function}
 * @param {Blob|String} source - Blob or string contents to download.
 * @param {String} filename - Suggested filename.
 * @param {String} [mime='application/octet-stream'] - MIME type when source is a string.
 * @returns {undefined}
 *
 * @example
 * import { download } from '@universalweb/acid';
 * download('hello world', 'hello.txt', 'text/plain');
 */
export function download(source, filename, mime = 'application/octet-stream') {
	const blob = source instanceof Blob ? source : new Blob([source], { type: mime });
	const url = URL.createObjectURL(blob);
	const link = document.createElement('a');
	link.href = url;
	link.download = filename;
	document.body.appendChild(link);
	link.click();
	document.body.removeChild(link);
	URL.revokeObjectURL(url);
}
