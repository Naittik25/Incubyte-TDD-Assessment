/**
 * String Calculator - TDD Assessment
 * Supports:
 * - Empty string => returns 0
 * - Comma and newline as default delimiters
 * - Custom single or multiple delimiters, including multi-character ones
 * - Ignores numbers > 1000
 * - Throws error for negative numbers
 */

function add(numbers) {
  if (numbers === "") {
    return 0;
  }

  if (!numbers) {
    return 0;
  }

  let delimiters = [",", "\n"];

  // Handle custom delimiters (//<delimiter>\n or //[<delim1>][<delim2>]...\n)
  if (numbers.startsWith("//")) {
    const delimiterLine = numbers.split("\n")[0];
    numbers = numbers.split("\n").slice(1).join("\n");
    
    const customDelimiters = delimiterLine.match(/\[(.*?)\]/g);
    if (customDelimiters) {
      // Extract all custom delimiters from brackets
      delimiters = customDelimiters.map(d => d.slice(1, -1));
    } else {
      // Single character delimiter (e.g., //;\n1;2)
      delimiters = [delimiterLine.substring(2)];
    }
  }

  // Escape special regex characters in delimiters
  const escapedDelimiters = delimiters.map(d => 
    d.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")
  );

  // Create regex pattern for all delimiters
  const regex = new RegExp(escapedDelimiters.join("|"));
  
  // Split string and convert to numbers, ignore > 1000
  const nums = numbers.split(regex)
    .map(num => num === "" ? 0 : Number(num))
    .filter(num => num <= 1000);

  // Throw error if any negative numbers found
  const negatives = nums.filter(n => n < 0);
  if (negatives.length) { 
    throw new Error("Negative numbers not allowed: " + negatives.join(","));
  }

  // Sum all valid numbers
  return nums.reduce((sum, n) => sum + n, 0);
}

module.exports = { add };