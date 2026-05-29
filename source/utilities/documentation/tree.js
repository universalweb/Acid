import path from 'node:path';
import { readFile } from 'node:fs/promises';
import { walkDir } from '../../filesystem/walk.js';
import { parseJSDoc } from './jsdoc.js';

const NAME_TAGS = ['function', 'class', 'name', 'method'];
const CATEGORY_TAG = 'category';
const DEFAULT_SKIP_NAMES = new Set(['node_modules', '.git']);

function defaultSkip(entryName) {
	return entryName.startsWith('.') || DEFAULT_SKIP_NAMES.has(entryName);
}
function findTag(tags, tagName) {
	const tagsLength = tags.length;
	for (let tagIndex = 0; tagIndex < tagsLength; tagIndex++) {
		const tag = tags[tagIndex];
		if (tag.tag === tagName) {
			return tag;
		}
	}
}
function extractName(block) {
	const nameTagsLength = NAME_TAGS.length;
	for (let nameIndex = 0; nameIndex < nameTagsLength; nameIndex++) {
		const tag = findTag(block.tags, NAME_TAGS[nameIndex]);
		if (tag?.description) {
			return tag.description.trim().split(/\s+/)[0];
		}
	}
	return null;
}
function extractCategory(block) {
	const tag = findTag(block.tags, CATEGORY_TAG);
	const value = tag?.description?.trim();
	return (value || 'uncategorized').toLowerCase();
}
function pathSegmentsFor(filePath, rootDir) {
	const relative = path.relative(rootDir, filePath);
	const dir = path.dirname(relative);
	const base = path.basename(relative, path.extname(relative));
	const segments = dir === '.' ? [] : dir.split(path.sep);
	segments.push(base);
	return segments;
}
/**
 * Reads every JS file under `rootDir`, parses the JSDoc blocks, and returns a flat list
 * of doc records ready for tree-building.
 *
 * @function readDocs
 * @category utility
 * @ignoreTest
 * @async
 * @type {Function}
 * @param {String} rootDir - Directory to crawl.
 * @param {Object} [options]
 * @param {String[]} [options.extensions=['.js']] - File extensions to include.
 * @param {Function} [options.skip] - Skip predicate `(name, fullPath) => boolean`. Defaults to skipping dotfiles and `node_modules`.
 * @returns {Promise<Array<Object>>} - Flat list of `{name, category, description, tags, examples, filePath, relPath}`.
 *
 * @example
 * import { readDocs } from '@universalweb/acid';
 * const docs = await readDocs('./source');
 */
export async function readDocs(rootDir, options = {}) {
	const { extensions = ['.js'], skip = defaultSkip } = options;
	const absoluteRoot = path.resolve(rootDir);
	const allFiles = await walkDir(absoluteRoot, { skip });
	const docs = [];
	const filesLength = allFiles.length;
	for (let fileIndex = 0; fileIndex < filesLength; fileIndex++) {
		const filePath = allFiles[fileIndex];
		const matchesExtension = extensions.some((ext) => filePath.endsWith(ext));
		if (!matchesExtension) continue;
		const content = await readFile(filePath, 'utf8');
		const blocks = parseJSDoc(content);
		const blocksLength = blocks.length;
		for (let blockIndex = 0; blockIndex < blocksLength; blockIndex++) {
			const block = blocks[blockIndex];
			const blockName = extractName(block);
			if (!blockName) continue;
			docs.push({
				name: blockName,
				category: extractCategory(block),
				description: block.description,
				tags: block.tags,
				examples: block.examples,
				filePath,
				relPath: path.relative(absoluteRoot, filePath),
			});
		}
	}
	return docs;
}
function ensureContainer(parent, key) {
	const existing = parent[key];
	if (existing && typeof existing === 'object' && !Array.isArray(existing)) {
		return existing;
	}
	const created = {};
	parent[key] = created;
	return created;
}
/**
 * Organizes a flat doc list into a filepath-based tree.
 * Example: `source.utilities.assert.assert` → the `assert` doc record.
 * Multiple JSDoc blocks per file are nested under the file-stem key by their function name.
 *
 * @function buildPathTree
 * @category utility
 * @ignoreTest
 * @type {Function}
 * @param {Array<Object>} docs - Flat list from {@link readDocs}.
 * @param {Object} [options]
 * @param {String} [options.rootKey='source'] - Top-level key wrapping the tree. Pass an empty string to omit.
 * @param {String} [options.rootDir=process.cwd()] - Used to compute relative segments. Pass the same value used for {@link readDocs}.
 * @returns {Object} - Nested tree.
 *
 * @example
 * import { readDocs, buildPathTree } from '@universalweb/acid';
 * const docs = await readDocs('./source');
 * const byPath = buildPathTree(docs, { rootDir: './source', rootKey: 'source' });
 */
export function buildPathTree(docs, options = {}) {
	const { rootKey = 'source', rootDir = process.cwd() } = options;
	const absoluteRoot = path.resolve(rootDir);
	const tree = {};
	const docsLength = docs.length;
	for (let docIndex = 0; docIndex < docsLength; docIndex++) {
		const doc = docs[docIndex];
		const segments = pathSegmentsFor(doc.filePath, absoluteRoot);
		const fullSegments = rootKey ? [rootKey, ...segments] : segments;
		let cursor = tree;
		const segmentCount = fullSegments.length;
		for (let segmentIndex = 0; segmentIndex < segmentCount; segmentIndex++) {
			cursor = ensureContainer(cursor, fullSegments[segmentIndex]);
		}
		cursor[doc.name] = doc;
	}
	return tree;
}
/**
 * Organizes a flat doc list into a category-based tree.
 * Example: `category.utility.assert` → the `assert` doc record.
 *
 * @function buildCategoryTree
 * @category utility
 * @ignoreTest
 * @type {Function}
 * @param {Array<Object>} docs - Flat list from {@link readDocs}.
 * @returns {Object} - Tree of `{[category]: {[name]: doc}}`.
 *
 * @example
 * import { readDocs, buildCategoryTree } from '@universalweb/acid';
 * const docs = await readDocs('./source');
 * const byCategory = buildCategoryTree(docs);
 */
export function buildCategoryTree(docs) {
	const tree = {};
	const docsLength = docs.length;
	for (let docIndex = 0; docIndex < docsLength; docIndex++) {
		const doc = docs[docIndex];
		const bucket = ensureContainer(tree, doc.category);
		bucket[doc.name] = doc;
	}
	return tree;
}
/**
 * Convenience pipeline: reads `rootDir`, then returns flat docs plus both views (path and category).
 *
 * @function generateDocs
 * @category utility
 * @ignoreTest
 * @async
 * @type {Function}
 * @param {String} rootDir - Directory to crawl.
 * @param {Object} [options] - Forwarded to {@link readDocs} and {@link buildPathTree}.
 * @returns {Promise<Object>} - `{flat, path, category}`.
 *
 * @example
 * import { generateDocs } from '@universalweb/acid';
 * const docs = await generateDocs('./source');
 * docs.path.source.utilities.assert.assert; // → assert doc
 * docs.category.utility.assert;             // → same doc
 */
export async function generateDocs(rootDir, options = {}) {
	const flat = await readDocs(rootDir, options);
	const path = buildPathTree(flat, { ...options, rootDir });
	const category = buildCategoryTree(flat);
	return { flat, path, category };
}
