(async () => {
	const response = await fetch('template.html');
	const template = await response.text();
	const items = window.docMap.items;
	const {
		eachObject,
		eachArray,
		upperFirst,
		ensureArray,
		keys,
		filter,
		compactKeys,
		map,
		isEnter
	} = $;
	const regexComplexLink = /\[([\w\s\d]+)\]\(((https|http)?:\/\/[\w\d./()_?=#]+)\)/igm;
	const colorize = (description, itemName, type) => {
		const compiledTypes = ensureArray(type.split('|')).map((objType) => {
			return `<span class="param${(objType === '*') ? 'anything' : objType.replace('...', 'rest')}">${upperFirst((objType === '*') ? 'Anything (*)' : objType)}</span>`;
		}).join(` | `);
		return `<tr>
				<td class="param${upperFirst(itemName.replace(/([^a-z*])/ig, ''))} paramName">${upperFirst(itemName)}</td>
				<td>${compiledTypes}</td>
				<td>${upperFirst(description)}</td>
			</tr>`;
	};
	const colorizeReturn = (description, type) => {
		const compiledTypes = ensureArray(type.split('|')).map((objType) => {
			return `<span class="param${(objType === '*') ? 'anything' : objType.replace(/([^a-z*])/ig, '')}">${upperFirst((objType === '*') ? 'Anything (*)' : objType)}</span>`;
		}).join(` | `);
		return `<tr>
					<td>${compiledTypes}</td>
					<td>${upperFirst(description)}</td>
				</tr>`;
	};
	eachObject(items, (item) => {
		if (item.params) {
			eachArray(item.params, (param, key) => {
				item.params[key].source = colorize(param.description.replace('- ', ''), param.name, param.type);
			});
		}
		if (item.description) {
			item.description = item.description.replace(regexComplexLink, `<a href="$2">$1</a>`);
		}
		if (item.returns) {
			if (item.returns.description) {
				item.returns.source = colorizeReturn(item.returns.description.replace('- ', ''), item.returns.type);
			} else {
				item.returns.source = colorizeReturn(item.returns.source, item.returns.type);
			}
		}
		if (item.examples) {
			item.examples = map(item.examples, (exampleCode) => {
				exampleCode.sourceOld = exampleCode.source;
				exampleCode.source = window.hljs.highlight(window.js_beautify(exampleCode.source), {
					language: 'javascript',
				}).value;
				return exampleCode;
			});
		}
	});
	window.app = new window.Ractive({
		data() {
			return {
				libraryName: 'Acid',
				search: '',
				$: window.$,
				filter(docItems, searchFilter) {
					return compactKeys(filter(docItems, (docItem, docKey) => {
						return (`${docItem.catergoryName} ${docKey}`).includes(searchFilter);
					})).sort();
				},
				categories: window.docMap.categories,
				getDocItem(item) {
					return items[item];
				},
				methodCount: keys(window.docMap.items).length,
				items,
			};
		},
		el: 'body',
		oncomplete() {
			location.hash && document.getElementById(location.hash.replace('#', '')).scrollIntoView({
				behavior: 'auto',
				block: 'center',
				inline: 'center'
			});
		},
		template,
	});
	window.app.on({
		goTo(context, id) {
			context.original.preventDefault();
			document.getElementById(id).scrollIntoView({
				behavior: 'auto',
				block: 'center',
				inline: 'center'
			});
		},
		search(context) {
			const {
				original
			} = context;
			const {
				searchFilter,
			} = context.get();
			if (isEnter(original)) {
				original.stopPropagation();
				original.preventDefault();
				original.stopImmediatePropagation();
				const findDiv = document.getElementById(searchFilter);
				if (findDiv) {
					findDiv.scrollIntoView({
						behavior: 'auto',
						block: 'center',
						inline: 'center'
					});
					history.pushState(undefined, '', `/#${searchFilter}`);
				}
			}
		}
	});
})();
