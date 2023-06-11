export const isNodejs = typeof globalThis.process !== 'undefined' && process.versions && process.versions.node;
