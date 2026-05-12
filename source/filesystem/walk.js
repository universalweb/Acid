import { readdir } from 'node:fs/promises';
import path from 'node:path';
/**
 * Recursively walks a directory and yields each file path. Subdirectories whose names
 * pass the optional `skip` predicate are not descended into.
 *
 * @function walkDir
 * @category filesystem
 * @async
 * @type {Function}
 * @param {String} root - Root directory to walk.
 * @param {Object} [options]
 * @param {Function} [options.skip] - Predicate `(name, fullPath) => boolean`. Return true to skip.
 * @returns {Promise<String[]>} - Flat array of absolute file paths.
 *
 * @example
 * import { walkDir } from '@universalweb/acid';
 * const files = await walkDir('./source', { skip: (name) => name === 'node_modules' });
 */
export async function walkDir(root, { skip } = {}) {
	const out = [];
	async function recurse(dir) {
		const entries = await readdir(dir, { withFileTypes: true });
		for (const entry of entries) {
			const fullPath = path.join(dir, entry.name);
			if (skip?.(entry.name, fullPath)) {
				continue;
			}
			if (entry.isDirectory()) {
				await recurse(fullPath);
			} else if (entry.isFile()) {
				out.push(fullPath);
			}
		}
	}
	await recurse(root);
	return out;
}
