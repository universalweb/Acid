
# What is Acid?

**[AcidJS](https://acidjs.com) is a robust, modern, modular, & async focused Javascript utility library for browser based environments.**

Acid provides a large collection of utility functions with an emphasis on modern ECMAScript standards & async features.  
New ECMAScript features are added or used to replace existing methods, when they provide value & have broad enough support.  
There are little to no pollyfills for missing features.  

### INSTALL Acid

`npm i Acid` (Case sensitive)

### Node Module Import Syntax

`const { isArray } = require('Acid');`  
`const utility = require('Acid');`  

### ES Node Module Import Syntax

`import { isArray } from 'Acid/index.es.js';`  
`import * as utility from 'Acid/index.es.js';`  

### ES Browser Module Import Syntax

`import { isArray } from './Acid/browser.es.js';`  
`import * as utility from './Acid/browser.es.js';`  

### Script tag

`<script id="AcidLib" data-index="main.js" defer src="browser.js"></script>`  

After the document is ready Acid looks for the id of "AcidLib".  
If a "data-index" attribute is found it'll use the value as a URL (default URL is "/index.js") and import it as a script.  

---

### LINKS

[Documentation](https://acidjs.com)  
[Sentivate](https://sentivate.com)  
[Universal Web](https://universalweb.io)  
[Tom Marchi](https://tommarchi.com)  

## Methods

All methods are available from the root object \$ or can be imported using import export syntax found in the module folder.  
If extreme tree shaking and compression is required use the [source folder](https://github.com/universalweb/Acid/tree/master/source) located on the [github repo](https://github.com/universalweb/Acid/tree/master/).  

© copyright 2022 [Universal Web, Inc](https://universalweb.io)
