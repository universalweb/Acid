
# What is Acidjs?

**[Acidjs](https://acidjs.com) is a robust, modern, modular, & async focused Javascript utility library.**

### INSTALL Acidjs

THEN RUN `pnpm i github:@universalweb/utilitylib` (Case sensitive)

### ES Module Import Syntax

`import { isArray } from 'universalweb/utilitylib';`  
`import * as utility from 'universalweb/utilitylib';`

### Require Syntax

`const { isArray } = require('@universalweb/utilitylib');`  
`const utility = require('@universalweb/utilitylib');`

### ES Browser Module Import Syntax

`import { isArray } from './browser.es.js';`  
`import * as utility from './browser.es.js';`  

### Script tag

`<script id="AcidLib" data-index="main.js" defer src="browser.js"></script>`  

After the document is ready Acid looks for the id of "AcidLib".  
If a "data-index" attribute is found it'll use the value as a URL (default URL is "/index.js") and import it as a script.  

---

### LINKS

[Documentation](https://acidjs.com)  
[Universal Web](https://universalweb.io)  

## Methods

All methods are available from the root object \$ or can be imported using import export syntax found in the module folder.  
If extreme tree shaking and compression is required use the [source folder](https://github.com/universalweb/Acid/tree/master/source) located on the [github repo](https://github.com/universalweb/Acid/tree/master/).  

© copyright 2025 [Universal Web](https://universalweb.io)
