(async () => {
	const response = await fetch('template.html');
	const template = await response.text();
	const app = new window.Ractive({
		data() {
			const context = this;
			const items = window.docMap.items;
			const {
				eachObject,
				eachArray,
				upperFirst
			} = $;
			const colorize = (item, typeArg) => {
				const type = typeArg.replace('*', 'anything');
				return `<span class="param${type}">${upperFirst(type)}</span> ${upperFirst(item)}`;
			};
			const colorizeReturn = (item, typeArg) => {
				const type = typeArg.replace('*', 'anything');
				return `<span class="param${type}">${upperFirst(type)}</span> - ${upperFirst(item)}`;
			};
			eachObject(items, (item, value) => {
				if (item.params) {
					eachArray(item.params, (param, key) => {
						item.params[key].source = colorize(param.description, param.type);
					});
				}
				if (item.returns) {
					if (item.returns.description) {
						item.returns.source = colorizeReturn(item.returns.description, item.returns.type);
					} else {
						item.returns.source = colorizeReturn(item.returns.source, item.returns.type);
					}
				}
			});
			return {
				libraryName: 'Acid',
				company: 'Arity',
				search: '',
				$: window.$,
				categories: window.docMap.categories,
				getDocItem(item) {
					return items[item];
				},
				methodCount: Object.keys(window.docMap.items).length,
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
