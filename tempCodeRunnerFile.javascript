const a = [];
`import * as caseUtility from './case';
import * as rangeUtility from './range';
import * as replaceUtility from './replace';
import * as sanitizeUtility from './sanitize';
import * as tokenizeUtility from './tokenize';
import * as truncateUtility from './truncate';
import * as typographyUtility from './typography';`.match(/as (.*) from/g).forEach((item) => {
    a.push(item.match(/\b (.*[^\S])(?! )/)[0].trim());
});
console.log(a.join(','));
