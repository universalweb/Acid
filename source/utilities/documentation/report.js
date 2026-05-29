import { readFile } from 'node:fs/promises';
import path from 'node:path';
import { walkDir } from '../../filesystem/walk.js';
import { extractExamples, runExample } from './jsdoc.js';
import { readDocs, buildPathTree, buildCategoryTree } from './tree.js';

const DEFAULT_SKIP_NAMES = new Set(['node_modules', '.git']);
function defaultSkip(entryName) {
	return entryName.startsWith('.') || DEFAULT_SKIP_NAMES.has(entryName);
}
function serializeError(error) {
	if (!error) return null;
	return {
		name: error.name || 'Error',
		message: error.message || String(error),
		stack: error.stack,
	};
}
function nextTick() {
	return new Promise((resolve) => setImmediate(resolve));
}
async function runExamplesForFile(filePath, content, options) {
	const examples = extractExamples(content);
	const examplesLength = examples.length;
	const results = [];
	let passed = 0;
	let capturedRejection = null;
	function rejectionHandler(reason) {
		capturedRejection = reason;
	}
	process.on('unhandledRejection', rejectionHandler);
	try {
		for (let exampleIndex = 0; exampleIndex < examplesLength; exampleIndex++) {
			const code = examples[exampleIndex];
			const startMs = Date.now();
			capturedRejection = null;
			try {
				await runExample(code, options);
				await nextTick();
				if (capturedRejection) {
					throw capturedRejection;
				}
				passed++;
				results.push({ index: exampleIndex, ok: true, durationMs: Date.now() - startMs, code });
			} catch (error) {
				const normalized = error instanceof Error ? error : new Error(String(error));
				results.push({
					index: exampleIndex,
					ok: false,
					durationMs: Date.now() - startMs,
					code,
					error: serializeError(normalized),
				});
			}
		}
	} finally {
		process.off('unhandledRejection', rejectionHandler);
	}
	return { filePath, total: examplesLength, passed, failed: examplesLength - passed, results };
}
/**
 * Runs every JSDoc example under `rootDir`, captures failures with their errors, and returns a structured report.
 *
 * The report contains a summary, a per-file breakdown, a flat failures list, and the doc trees by path and by category
 * with example results merged into each doc record so consumers can navigate "doc + test status" together.
 *
 * @function runReport
 * @category utility
 * @ignoreTest
 * @async
 * @type {Function}
 * @param {String} rootDir - Directory to crawl.
 * @param {Object} [options] - Forwarded to the example runner. See `remapImports` for `from`/`to`/`baseDir`.
 * @param {Boolean} [options.strict=true] - Wrap `assert(...)` so Error returns throw.
 * @returns {Promise<Object>} - `{summary, files, failures, path, category}`.
 *
 * @example
 * import { runReport } from '@universalweb/acid';
 * const report = await runReport('./source');
 */
export async function runReport(rootDir, options = {}) {
	const { extensions = ['.js'], skip = defaultSkip } = options;
	const absoluteRoot = path.resolve(rootDir);
	const startMs = Date.now();
	const allFiles = await walkDir(absoluteRoot, { skip });
	const filesLength = allFiles.length;
	const files = [];
	const failures = [];
	let totalExamples = 0;
	let totalPassed = 0;
	for (let fileIndex = 0; fileIndex < filesLength; fileIndex++) {
		const filePath = allFiles[fileIndex];
		const matchesExtension = extensions.some((ext) => filePath.endsWith(ext));
		if (!matchesExtension) continue;
		const content = await readFile(filePath, 'utf8');
		const fileReport = await runExamplesForFile(filePath, content, options);
		if (fileReport.total === 0) continue;
		fileReport.relPath = path.relative(absoluteRoot, filePath);
		files.push(fileReport);
		totalExamples += fileReport.total;
		totalPassed += fileReport.passed;
		const fileResults = fileReport.results;
		const fileResultsLength = fileResults.length;
		for (let resultIndex = 0; resultIndex < fileResultsLength; resultIndex++) {
			const result = fileResults[resultIndex];
			if (!result.ok) {
				failures.push({
					filePath,
					relPath: fileReport.relPath,
					exampleIndex: result.index,
					code: result.code,
					error: result.error,
				});
			}
		}
	}
	const docs = await readDocs(absoluteRoot, { extensions, skip });
	const resultsByFile = new Map();
	for (let fileIndex = 0; fileIndex < files.length; fileIndex++) {
		resultsByFile.set(files[fileIndex].filePath, files[fileIndex].results);
	}
	const docsLength = docs.length;
	for (let docIndex = 0; docIndex < docsLength; docIndex++) {
		const doc = docs[docIndex];
		const fileResults = resultsByFile.get(doc.filePath);
		if (!fileResults) {
			doc.examplesResults = doc.examples.map(() => ({ ok: null }));
			continue;
		}
		// Match this doc's examples to file-level results by code identity.
		const docResults = [];
		const docExamplesLength = doc.examples.length;
		for (let exampleIndex = 0; exampleIndex < docExamplesLength; exampleIndex++) {
			const code = doc.examples[exampleIndex];
			const match = fileResults.find((entry) => entry.code === code);
			docResults.push(match ? { ok: match.ok, error: match.error ?? null } : { ok: null });
		}
		doc.examplesResults = docResults;
	}
	const pathTree = buildPathTree(docs, { rootDir: absoluteRoot });
	const categoryTree = buildCategoryTree(docs);
	return {
		summary: {
			files: files.length,
			examples: totalExamples,
			passed: totalPassed,
			failed: totalExamples - totalPassed,
			durationMs: Date.now() - startMs,
		},
		files,
		failures,
		path: pathTree,
		category: categoryTree,
	};
}
