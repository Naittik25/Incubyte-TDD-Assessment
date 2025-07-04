function add(numbers) {
  if (numbers === "") {
    return 0;
  }
  const nums = numbers.split(",").map(Number);
  return nums.reduce((x, y) => x + y, 0);
}

module.exports = { add };