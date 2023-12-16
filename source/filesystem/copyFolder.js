import {
	copyFile,
	mkdir,
	readdir,
	stat
} from 'fs/promises';
import { eachAsyncArray } from '../arrays/eachAsync.js';
import path from 'path';
async function copyToPath(sourceFolder, destinationFolder, file) {
	const sourcePath = path.join(sourceFolder, file);
	const destinationPath = path.join(destinationFolder, file);
	await copyFile(sourcePath, destinationPath);
}
export async function copyFolder(sourceFolder, destinationFolder) {
	const files = await readdir(sourceFolder);
	await eachAsyncArray(files, async (file) => {
		const sourcePath = path.join(sourceFolder, file);
		const filestats = await stat(sourcePath);
		if (filestats.isDirectory()) {
			const folderDestination = path.join(destinationFolder, file.replace(sourceFolder, ''));
			await mkdir(folderDestination, {
				recursive: true
			});
			await copyFolder(sourcePath, folderDestination);
		} else {
			await copyToPath(sourceFolder, destinationFolder, file);
		}
	});
	return true;
}

