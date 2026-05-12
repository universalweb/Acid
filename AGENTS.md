# Agent

- **Core Loop:** After every task, consult this `AGENTS.md` file. Propose improvements to compact/refine instructions or append learned knowledge to `## NOTES`. Always confirm edits with the user.

## Coding Rules

- **Syntax:** ES2022+ (`let`/`const`, optional chaining, nullish coalescing, `async`/`await`). Write clean, descriptive names.
- **Specialty:** Modern, minimal, clean, performant JS
- **Imports:** Use `#` path aliases (via `jsconfig.json`/`package.json`) instead of complex `../`. Format multi-line destructuring compactly (up to 8 vars/line).
- **Utilities:** Prefer utility functions in `source` folders instead of writing custom inline implementations.

## Project Structure

When told to 'map the project structure':

1. Read the `source/` folder to discover utility functions.
2. Update the `### Utilities Map` below, listing each function, a concise description of what it does, and its import location.
3. Use only these mapped functions to ensure the project remains dependency-free.

- `AGENTS.md`: Source of truth for agent behavior and workflow.
- `Configs`: (`package.json`, `jsconfig.json`, `eslint.config.js`) Workspace settings, module definitions, aliases.

### Utilities Map (`source/`)

Three entry points: `source/basic.js` (general), `source/index.js` (general + Node/Bun `filesystem`), `source/browser.js` (general + `browser`).

- **arrays** — `chunk`, `clear`, `clone`, `compactMap`, `compactMapAsync`, `concurrentEach`, `difference`, `drop`, `dropRight`, `each`, `eachAsync`, `eachRight`, `eachRightAsync`, `ensure`, `every`, `everyAsync`, `filter`, `filterAsync`, `first`, `flatten`, `flattenDeep`, `getNumberInsertIndex`, `initial`, `intersect`, `invoke`, `isMatch`, `largest`, `last`, `map`, `mapAsync`, `mapRight`, `mapWhile`, `partition`, `range`, `remove`, `rest`, `right`, `sample`, `shuffle`, `smallest`, `sortNumberAscending`, `sortNumberDescending`, `take`, `takeRight`, `union`, `unique`, `untilFalse`, `untilTrue`, `whileCompactMap`, `whileEach`, `whileMap`, `without`, `xor`, `zip`
- **browser** (browser bundle only) — `agent`, `append`, `attribute`, `clipboard` (`copyToClipboard`, `readFromClipboard`), `console`, `cookie` (`getCookie`, `setCookie`, `removeCookie`), `dimensions`, `download`, `event`, `frag`, `importScript`, `info`, `is`, `isEnter`, `queryString` (`parseQuery`, `stringifyQuery`), `ready`, `selector`, `storage`
- **buffers** — `clear`, `ensure`
- **classes** — `construct`, `extendClass`, `Emitter`, `LRUCache`
- **collection** — `countBy`, `countKey`, `countWithoutKey`, `findIndex`, `findIndexCache`, `findItem`, `getCollectionInsertIndex`, `getHighest`, `getLowest`, `groupBy`, `indexBy`, `invoke`, `invokeAsync`, `keyBy`, `pluck`, `sortBy`, `sortCollectionAlphabetically`, `sortCollectionAlphabeticallyReverse`, `sortCollectionAscending`, `sortCollectionDescending`
- **files** — `getExtension`, `getFilename`, `isFile`, `isFileCSS`, `isFileHTML`, `isFileJS`, `isFileJSON`
- **filesystem** (Node/Bun bundle only) — `copyFolder`, `currentFile`, `currentPath`, `env`, `isDirectoryPath`, `isFilePath`, `pathExists`, `readJSON`, `readText`, `walkDir`, `writeJSON`, `writeText`
- **functions** — `after`, `ary`, `before`, `chain`, `cond`, `constant`, `curry`, `curryRight`, `debounce`, `ifInvoke`, `negate`, `nthArg`, `once`, `over`, `overAsync`, `overEvery`, `property`, `propertyOf`, `rearged`, `throttle`, `wrap`
- **internal** — `apply`, `array`, `isSame`, `object`, `regexTestFactory`
- **math** — `add`, `ceilTo`, `clamp`, `deduct`, `divide`, `floorTo`, `increment`, `max`, `mean`, `median`, `min`, `multiply`, `progress`, `randomFloat`, `randomInt`, `remainder`, `roundTo`, `subtract`, `subtractAll`, `subtractReverse`, `sumAll`
- **numbers** — `isEven`, `isNegative`, `isNumberEqual`, `isNumberInRange`, `isNumberNotInRange`, `isOdd`, `isPositive`, `isZero`
- **objects** — `assign`, `compactKeys`, `compactMap`, `compactMapAsync`, `consolidate`, `copy`, `defaults`, `each`, `eachAsync`, `every`, `everyAsync`, `filter`, `filterAsync`, `getEntries`, `hasKeys`, `invert`, `isMatch`, `keys`, `map`, `mapAsync`, `mapKeys`, `mapValues`, `omit`, `pick`, `pluckObject`, `size`, `zip`
- **regexps** — `arrayToRegex`, `escapeRegex`
- **strings** — `camelCase`, `chunkString`, `htmlEntities`, `initialString`, `insertInRange`, `kebabCase`, `lowerCase`, `randomString`, `rangeUp`/`rangeDown`, `rawURLDecode`, `replaceList`, `restString`, `rightString`, `sanitize`, `slugify`, `snakeCase`, `tokenize`, `truncate`, `truncateRight`, `upperCase`, `upperFirst`, `upperFirstAll`, `upperFirstLetter`, `upperFirstOnly`, `upperFirstOnlyAll`, `words`
- **types** — `cloneType`, `getChild`, `getParent`, `getType`, `getTypeName`, `hasValue`, `isArguments`, `isArray`, `isArrayBuffer`, `isArrayLike`, `isAsync`, `isBigInt`, `isBoolean`, `isBuffer`, `isChild`, `isCloneable`, `isConstructor`, `isConstructorFactory`, `isDate`, `isDeno`, `isEmpty`, `isError`, `isF32`, `isF64`, `isFalse`, `isFalsy`, `isFloat`, `isFunction`, `isGenerator`, `isI16`, `isI32`, `isI8`, `isIndexable`, `isIterable`, `isKindAsync`, `isMap`, `isNodejs`, `isNotArray`, `isNotNumber`, `isNotString`, `isNull`, `isNumber`, `isParent`, `isPlainObject`, `isPrimitive`, `isPromise`, `isRegex`, `isRelated`, `isSafeInt`, `isSameType`, `isSet`, `isString`, `isTrue`, `isTruthy`, `isType`, `isTypeFactory`, `isTypeNameFactory`, `isTypedArray`, `isU16`, `isU32`, `isU8`, `isU8C`, `isUndefined`, `isWeakMap`, `noValue`, `notEmpty`, `sameClass`, `sameType`
- **utilities** — `arraysToObject`, `assert`, `bindAll`, `cacheNativeMethod`, `clear`, `clone`, `compact`, `compactMap`, `concurrent`, `concurrentEach`, `concurrentStatus`, `delay`, `each`, `every`, `everyArg`, `filter`, `flow`, `flowAsync`, `forCompactMap`, `forEach`, `forEachAsync`, `forMap`, `forOf`, `forOfAsync`, `forOfCompactMap`, `forOfCompactMapAsync`, `forOfEvery`, `forOfEveryAsync`, `forOfFilter`, `forOfFilterAsync`, `forOfMap`, `forOfMapAsync`, `generateLoop`, `get`, `has`, `hasDot`, `hasLength`, `ifNotAssign`, `ifValue`, `inAsync`, `inSync`, `interval`, `isEqual`, `jsonParse`, `jsonParseTry`, `map`, `memoize`, `merge`, `model`, `nextFrame`, `noop`, `notEqual`, `overArgs`, `pair`, `promise`, `propertyMatch`, `retry`, `returnValue`, `set`, `setKey`, `setValue`, `store`, `stringify`, `stubArray`, `stubFalse`, `stubObject`, `stubString`, `stubTrue`, `timer`, `times`, `timesAsync`, `toPath`, `toggle`, `uid`, `uniqID`, `uuid`, `virtualStorage`, `withTimeout`
