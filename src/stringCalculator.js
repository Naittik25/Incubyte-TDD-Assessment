function add(numbers) {
  if (numbers === "") {
    return 0;
  }

  let delimiters = [",", "\n"];
  if (numbers.startsWith("//")) {
    const delimiter = numbers.charAt(2);
    numbers = numbers.slice(4);
    delimiters = [delimiter];
  }

  const regex = new RegExp(delimiters.join("|"));
  const nums = numbers.split(regex).map(Number);
  return nums.reduce((sum, n) => sum + n, 0);
}

module.exports = { add };