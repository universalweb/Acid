import { readDocs } from './tree.js';
function normalizeParam(tag) {
	return {
		name: tag.name || '',
		type: tag.type || '',
		optional: Boolean(tag.optional),
		defaultValue: tag.defaultValue ?? null,
		description: tag.description || '',
	};
}
function normalizeReturn(tag) {
	if (!tag) {
		return null;
	}
	return { type: tag.type || '', description: tag.description || '' };
}
function pickTagDescriptions(tags, tagName) {
	const collected = [];
	const tagsLength = tags.length;
	for (let tagIndex = 0; tagIndex < tagsLength; tagIndex++) {
		const tag = tags[tagIndex];
		if (tag.tag === tagName && tag.description) {
			collected.push(tag.description.trim());
		}
	}
	return collected;
}
function tagsByName(tags, tagName) {
	const matches = [];
	const tagsLength = tags.length;
	for (let tagIndex = 0; tagIndex < tagsLength; tagIndex++) {
		const tag = tags[tagIndex];
		if (tag.tag === tagName) {
			matches.push(tag);
		}
	}
	return matches;
}
function normalizeDoc(record) {
	const params = tagsByName(record.tags, 'param').map(normalizeParam);
	const returnTag = tagsByName(record.tags, 'returns')[0] || tagsByName(record.tags, 'return')[0];
	const see = pickTagDescriptions(record.tags, 'see');
	const isAsync = Boolean(tagsByName(record.tags, 'async').length || record.tags.find((tag) => tag.tag === 'function' && /Async\b/.test(tag.description || '')));
	const isIgnoredTest = Boolean(tagsByName(record.tags, 'ignoreTest').length);
	const typeTag = tagsByName(record.tags, 'type')[0];
	const kind = (record.tags.find((tag) => tag.tag === 'class') && 'class') || 'function';
	return {
		name: record.name,
		category: record.category,
		description: (record.description || '').trim(),
		kind,
		isAsync,
		isIgnoredTest,
		signature: { params, returns: normalizeReturn(returnTag), type: typeTag?.type || typeTag?.description || '' },
		examples: record.examples.slice(),
		see,
		filePath: record.filePath,
		relPath: record.relPath,
	};
}
function buildMapByCategory(normalized) {
	const byCategory = new Map();
	const docsLength = normalized.length;
	for (let docIndex = 0; docIndex < docsLength; docIndex++) {
		const doc = normalized[docIndex];
		if (!byCategory.has(doc.category)) {
			byCategory.set(doc.category, new Map());
		}
		byCategory.get(doc.category).set(doc.name, doc);
	}
	return byCategory;
}
function buildMapByPath(normalized) {
	const byPath = new Map();
	const docsLength = normalized.length;
	for (let docIndex = 0; docIndex < docsLength; docIndex++) {
		const doc = normalized[docIndex];
		if (!byPath.has(doc.relPath)) {
			byPath.set(doc.relPath, []);
		}
		byPath.get(doc.relPath).push(doc);
	}
	return byPath;
}
function categoryToObject(categoryMap) {
	const out = {};
	for (const [name, doc] of categoryMap) {
		out[name] = doc;
	}
	return out;
}
/**
 * Robust documentation map built from parsed JSDoc. Indexed by name, category, and path; ready to drive a docs site. Use `DocMap.create(rootDir)` to crawl a source tree, or pass a pre-parsed flat list of doc records.
 *
 * @class DocMap
 * @category utility
 * @ignoreTest
 *
 * @example
 * import { DocMap } from '@universalweb/acid';
 * const docMap = await DocMap.create('./source');
 * docMap.byName.get('assert');
 * [...docMap.categories()];
 */
export class DocMap {
	static async create(rootDir, options = {}) {
		const flat = await readDocs(rootDir, options);
		return new DocMap(flat, { rootDir });
	}
	static fromDocs(flat, options = {}) {
		return new DocMap(flat, options);
	}
	constructor(flatDocs, options = {}) {
		this.options = options;
		this.flat = flatDocs.map(normalizeDoc);
		this.byName = new Map();
		const flatLength = this.flat.length;
		for (let docIndex = 0; docIndex < flatLength; docIndex++) {
			const doc = this.flat[docIndex];
			this.byName.set(doc.name, doc);
		}
		this.byCategory = buildMapByCategory(this.flat);
		this.byPath = buildMapByPath(this.flat);
		this.generatedAt = new Date().toISOString();
	}
	categories() {
		return [...this.byCategory.keys()].sort();
	}
	names() {
		return [...this.byName.keys()].sort();
	}
	paths() {
		return [...this.byPath.keys()].sort();
	}
	categorySize(categoryName) {
		const entries = this.byCategory.get(categoryName);
		return entries ? entries.size : 0;
	}
	summary() {
		const exampleCount = this.flat.reduce((total, doc) => total + doc.examples.length, 0);
		const testableCount = this.flat.reduce((total, doc) => total + (doc.isIgnoredTest ? 0 : doc.examples.length), 0);
		return {
			generatedAt: this.generatedAt,
			totalDocs: this.flat.length,
			totalCategories: this.byCategory.size,
			totalPaths: this.byPath.size,
			totalExamples: exampleCount,
			testableExamples: testableCount,
		};
	}
	toJSON() {
		const categories = [];
		const sortedCategories = this.categories();
		const sortedCategoriesLength = sortedCategories.length;
		for (let categoryIndex = 0; categoryIndex < sortedCategoriesLength; categoryIndex++) {
			const categoryName = sortedCategories[categoryIndex];
			categories.push({ name: categoryName, items: categoryToObject(this.byCategory.get(categoryName)) });
		}
		const paths = [];
		const sortedPaths = this.paths();
		const sortedPathsLength = sortedPaths.length;
		for (let pathIndex = 0; pathIndex < sortedPathsLength; pathIndex++) {
			const pathKey = sortedPaths[pathIndex];
			paths.push({ path: pathKey, items: this.byPath.get(pathKey) });
		}
		return {
			summary: this.summary(),
			categories,
			paths,
			docs: this.flat,
		};
	}
}
