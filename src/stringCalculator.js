function add(numbers) {
  if (numbers === "") {
    return 0;
  }

  if (!numbers) {
    return 0;
  }

  let delimiters = [",", "\n"];
  if (numbers.startsWith("//")) {
    const delimiterLine = numbers.split("\n")[0];
    numbers = numbers.split("\n").slice(1).join("\n");
    
    const customDelimiters = delimiterLine.match(/\[(.*?)\]/g);
    if (customDelimiters) {
      delimiters = customDelimiters.map(d => d.slice(1, -1));
    } else {
      delimiters = [delimiterLine.substring(2)];
    }
  }

  // Escape special regex characters
  const escapedDelimiters = delimiters.map(d => 
    d.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")
  );
  const regex = new RegExp(escapedDelimiters.join("|"));
  
  const nums = numbers.split(regex)
    .map(num => num === "" ? 0 : Number(num))
    .filter(num => num <= 1000);

  const negatives = nums.filter(n => n < 0);
  if (negatives.length) { 
    throw new Error("Negative numbers not allowed: " + negatives.join(","));
  }

  return nums.reduce((sum, n) => sum + n, 0);
}

module.exports = { add };