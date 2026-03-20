/**
 * Parses a string or buffer for JSDoc syntax and extracts it into a structured object.
 *
 * @param {string|Buffer} source - The source code to scan.
 * @returns {Array<Object>} An array of parsed JSDoc objects.
 */
export const parseJSDoc = (source) => {
  const content = Buffer.isBuffer(source) ? source.toString('utf8') : String(source);
  const jsDocPattern = /\/\*\*\s*([\s\S]*?)\s*\*\//g;
  
  const results = [];
  
  let match;
  
  while ((match = jsDocPattern.exec(content)) !== null) {
    const rawComment = match[1];
    const lines = rawComment.split('\n');
    
    const parsed = {
      description: '',
      tags: []
    };
    
    let currentTag = null;

    lines.forEach((line) => {
      // Clean up the line: remove leading whitespace and asterisks
      const cleanLine = line.replace(/^\s*\*\s?/, '').trim();
      
      if (!cleanLine) return; // Skip empty lines
      
      // Check if it's a tag line (starts with @)
      if (cleanLine.startsWith('@')) {
        const tagPattern = /^@(\w+)\s+(?:\{([^}]+)\}\s+)?(?:([\w.-]+)\s*(?:-\s*)?)?(.*)$/;
        const tagMatch = cleanLine.match(tagPattern);
        
        if (tagMatch) {
          currentTag = {
            tag: tagMatch[1],
            type: tagMatch[2] || undefined,
            name: tagMatch[3] || undefined,
            description: tagMatch[4] || ''
          };
          // Clean up undefined properties
          if (!currentTag.type) delete currentTag.type;
          if (!currentTag.name) delete currentTag.name;
          
          parsed.tags.push(currentTag);
        } else {
          // Fallback if structured regex doesn't match perfectly
          const simpleMatch = cleanLine.match(/^@(\w+)\s*(.*)$/);
          if (simpleMatch) {
            currentTag = {
              tag: simpleMatch[1],
              description: simpleMatch[2] || ''
            };
            parsed.tags.push(currentTag);
          }
        }
      } else {
        // If we are currently parsing a tag, append to tag description
        if (currentTag) {
          currentTag.description += (currentTag.description ? ' ' : '') + cleanLine;
        } else {
          // Otherwise, it's part of the main description
          parsed.description += (parsed.description ? '\n' : '') + cleanLine;
        }
      }
    });

    results.push(parsed);
  }
  
  return results;
};

// --- Example Usage ---

/**
 * Calculates the sum of two numbers.
 *
 * @param {number} a - The first number to add.
 * @param {number} b - The second number to add.
 * @returns {number} The sum of a and b.
 * @example
 * const result = add(2, 3);
 * console.log(result);
 */
export function add(a, b) {
  return a + b;
}

const exampleSource = `
/**
 * Calculates the sum of two numbers.
 *
 * @param {number} a - The first number to add.
 * @param {number} b - The second number to add.
 * @returns {number} The sum of a and b.
 * @example
 * const result = add(2, 3);
 * console.log(result);
 */
export function add(a, b) {
  return a + b;
}
`;

// Test parsing the string
const parsedDocumentation = parseJSDoc(exampleSource);
console.log('--- Parsed JSDoc ---');
console.log(JSON.stringify(parsedDocumentation, null, 2));
