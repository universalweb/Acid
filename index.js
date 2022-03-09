const docredux = require('docredux');
const buildDocs = () => {
	return docredux.build.json({
		destination: `${__dirname}/docs/`,
		source: `${__dirname}/docs/browser.bundle.js`,
	});
};
const rollup = require('rollup').rollup;
const { terser } = require('rollup-plugin-terser');
const format = require('prettier-eslint');
const tinyLR = require('tiny-lr')();
const liveReload = require('connect-livereload');
const fs = require('fs');
const watch = require('node-watch');
const express = require('express');
const path = require('path');
const app = express();
const expressRoot = '/';
const expressPort = 8890;
const liveReloadPort = 35729;
const liveReloadStart = () => {
	app.use(liveReload());
	app.use(express.static(`${__dirname}/docs`));
	app.listen(expressPort);
	tinyLR.listen(liveReloadPort);
};
const notifyLiveReload = (evt, filename) => {
	const fileName = path.relative(expressRoot, filename);
	tinyLR.changed({
		body: {
			files: [fileName],
		},
	});
};
const beautify = (source, destination) => {
	console.log('Beautify');
	const text = fs.readFileSync(source).toString();
	const eslintConfigLocation = (source.includes('.es.js') && './source/.eslintrc') || './.eslintrc';
	const eslintConfig = JSON.parse(fs.readFileSync(eslintConfigLocation).toString());
	const formattedCode = format({
		eslintConfig,
		prettierOptions: {
			parser: 'babel',
		},
		text,
	});
	fs.writeFileSync(destination || source, formattedCode, 'utf8');
};
const copyFile = (start, end) => {
	fs.writeFileSync(end, fs.readFileSync(path.join(__dirname, start)).toString(), 'utf8');
};
const build = async () => {
	console.log('Build Client START');
	const browserBundle = await rollup({
		input: './source/browser.js',
	});
	const browserBundleProduction = await rollup({
		input: './source/browser.js',
		plugins: [
			terser()
		]
	});
	await browserBundle.write({
		file: './build/browser.bundle.js',
		format: 'umd',
		name: '$',
		sourcemap: true
	});
	await browserBundle.write({
		file: './build/browser.bundle.es.js',
		format: 'es',
		name: '$',
		sourcemap: true
	});
	await browserBundleProduction.write({
		file: './build/browser.js',
		format: 'umd',
		name: '$',
		sourcemap: true
	});
	await browserBundleProduction.write({
		file: './build/browser.es.js',
		format: 'es',
		name: '$',
		sourcemap: true
	});
	beautify('./build/browser.bundle.js');
	copyFile('./build/browser.bundle.js', './docs/browser.bundle.js');
	copyFile('./build/browser.bundle.es.js', './docs/browser.bundle.es.js');
	copyFile('./build/browser.js', './docs/browser.js');
	console.log('Build Client END');
	console.log('Build Server START');
	const index = await rollup({
		input: './source/index.js',
	});
	const indexProduction = await rollup({
		input: './source/index.js',
		plugins: [
			terser()
		]
	});
	await index.write({
		file: './build/index.bundle.js',
		format: 'umd',
		name: '$',
		sourcemap: true
	});
	await index.write({
		file: './build/index.bundle.es.js',
		format: 'es',
		name: '$',
		sourcemap: true
	});
	await indexProduction.write({
		file: './build/index.js',
		format: 'umd',
		name: '$',
		sourcemap: true
	});
	await indexProduction.write({
		file: './build/index.es.js',
		format: 'es',
		name: '$',
		sourcemap: true
	});
	beautify('./build/index.bundle.js');
	copyFile('./build/index.bundle.js', './docs/index.bundle.js');
	copyFile('./build/index.bundle.es.js', './docs/index.bundle.es.js');
	copyFile('./build/index.js', './docs/index.js');
	console.log('Build Server END');
	console.log('Build Complete');
	console.log('Docs Started');
	await buildDocs();
	console.log('Docs Complete');
	console.log('NPM Started');
	copyFile('./build/index.js', './npm/index.js');
	copyFile('./build/index.es.js', './npm/index.es.js');
	copyFile('./build/browser.js', './npm/browser.js');
	copyFile('./build/browser.es.js', './npm/browser.es.js');
	copyFile('./LICENSE', './npm/LICENSE');
	copyFile('./README.md', './npm/README.md');
	console.log('NPM Complete');
	console.log('Build Complete');
};
build();
liveReloadStart();
watch('./source/', {
	recursive: true
}, async (evt, filename) => {
	await build();
	notifyLiveReload(evt, filename);
});
watch('./docs/', {
	recursive: true
}, async (evt, filename) => {
	notifyLiveReload(evt, filename);
});
