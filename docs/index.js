(async () => {
	const response = await fetch('template.html');
	const template = await response.text();
	window.app = new window.Ractive({
		data() {
			const items = window.docMap.items;
			const {
				eachObject,
				eachArray,
				upperFirst,
				ensureArray,
				keys,
				filter,
				compactKeys
			} = $;
			const colorize = (description, itemName, type) => {
				const compiledTypes = ensureArray(type.split('|')).map((objType) => {
					return `<span class="param${(objType === '*') ? 'anything' : objType}">${upperFirst((objType === '*') ? 'Anything (*)' : objType)}</span>`;
				})
					.join(` | `);
				return `<table class="uk-table-striped uk-table-hover uk-table uk-table-small uk-table-divider">
							<thead>
								<tr>
									<th>Parameter</th>
									<th>Type</th>
									<th>Description</th>
								</tr>
							</thead>
							<tbody>
								<tr>
									<td class="param${itemName}">${upperFirst(itemName)}</td>
									<td>${compiledTypes}</td>
									<td>${upperFirst(description)}</td>
								</tr>
							</tbody>
						</table>`;
			};
			const colorizeReturn = (description, type) => {
				const compiledTypes = ensureArray(type.split('|')).map((objType) => {
					return `<span class="param${(objType === '*') ? 'anything' : objType}">${upperFirst((objType === '*') ? 'Anything (*)' : objType)}</span>`;
				})
					.join(` | `);
				return `<table class="uk-table">
							<thead>
								<tr>
									<th>Returns: Type(s)</th>
									<th>Description</th>
								</tr>
							</thead>
							<tbody>
								<tr>
									<td>${compiledTypes}</td>
									<td>${upperFirst(description)}</td>
								</tr>
							</tbody>
						</table>`;
			};
			eachObject(items, (item) => {
				if (item.params) {
					eachArray(item.params, (param, key) => {
						item.params[key].source = colorize(param.description.replace('- ', ''), param.name, param.type);
					});
				}
				if (item.returns) {
					if (item.returns.description) {
						item.returns.source = colorizeReturn(item.returns.description.replace('- ', ''), item.returns.type);
					} else {
						item.returns.source = colorizeReturn(item.returns.source, item.returns.type);
					}
				}
			});
			return {
				libraryName: 'Acid',
				search: '',
				$: window.$,
				filter(docItems, searchFilter) {
					return compactKeys(filter(docItems, (docItem, docKey) => {
						return (`${docItem.catergoryName} ${docItem.description} ${docKey}`).includes(searchFilter);
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
		onrender() {
			const script = document.createElement('script');
			script.src = 'pretty.js';
			document.querySelector('head').appendChild(script);
		},
		template,
	});
})();
