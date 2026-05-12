import { readFile, writeFile, stat } from 'node:fs/promises';
/**
 * Reads a file as UTF-8 text.
 *
 * @function readText
 * @category filesystem
 * @async
 * @type {Function}
 * @param {String} path - Absolute or relative file path.
 * @returns {Promise<String>} - File contents.
 *
 * @example
 * import { readText } from '@universalweb/acid';
 * const text = await readText('./README.md');
 */
export function readText(path) {
	return readFile(path, 'utf8');
}
/**
 * Reads and parses a JSON file.
 *
 * @function readJSON
 * @category filesystem
 * @async
 * @type {Function}
 * @param {String} path - Absolute or relative file path.
 * @returns {Promise<*>} - Parsed JSON value.
 *
 * @example
 * import { readJSON } from '@universalweb/acid';
 * const pkg = await readJSON('./package.json');
 */
export async function readJSON(path) {
	return JSON.parse(await readFile(path, 'utf8'));
}
/**
 * Writes a string to a file as UTF-8.
 *
 * @function writeText
 * @category filesystem
 * @async
 * @type {Function}
 * @param {String} path - Destination path.
 * @param {String} contents - String contents to write.
 * @returns {Promise<void>}
 *
 * @example
 * import { writeText } from '@universalweb/acid';
 * await writeText('./out.txt', 'hi');
 */
export function writeText(path, contents) {
	return writeFile(path, contents, 'utf8');
}
/**
 * Stringifies a value and writes it to a file as UTF-8.
 *
 * @function writeJSON
 * @category filesystem
 * @async
 * @type {Function}
 * @param {String} path - Destination path.
 * @param {*} value - JSON-serializable value.
 * @param {Number} [indent=2] - JSON.stringify indentation.
 * @returns {Promise<void>}
 *
 * @example
 * import { writeJSON } from '@universalweb/acid';
 * await writeJSON('./out.json', {ok: true});
 */
export function writeJSON(path, value, indent = 2) {
	return writeFile(path, JSON.stringify(value, null, indent), 'utf8');
}
/**
 * Checks whether a path exists on the filesystem.
 *
 * @function pathExists
 * @category filesystem
 * @async
 * @type {Function}
 * @param {String} path - Path to check.
 * @returns {Promise<Boolean>} - True when the path exists.
 *
 * @example
 * import { pathExists } from '@universalweb/acid';
 * await pathExists('./package.json');
 */
export async function pathExists(path) {
	try {
		await stat(path);
		return true;
	} catch {
		return false;
	}
}
/**
 * Returns true if the path is an existing directory.
 *
 * @function isDirectoryPath
 * @category filesystem
 * @async
 * @type {Function}
 * @param {String} path - Path to check.
 * @returns {Promise<Boolean>}
 *
 * @example
 * import { isDirectoryPath } from '@universalweb/acid';
 * await isDirectoryPath('./source');
 */
export async function isDirectoryPath(path) {
	try {
		const result = await stat(path);
		return result.isDirectory();
	} catch {
		return false;
	}
}
/**
 * Returns true if the path is an existing regular file.
 *
 * @function isFilePath
 * @category filesystem
 * @async
 * @type {Function}
 * @param {String} path - Path to check.
 * @returns {Promise<Boolean>}
 *
 * @example
 * import { isFilePath } from '@universalweb/acid';
 * await isFilePath('./package.json');
 */
export async function isFilePath(path) {
	try {
		const result = await stat(path);
		return result.isFile();
	} catch {
		return false;
	}
}
