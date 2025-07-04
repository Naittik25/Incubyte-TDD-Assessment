const { add } = require('../src/stringCalculator');

  test("return 0 for an empty string", () => {
    expect(add('')).toBe(0);
  });

  test("returns number for single value", () => {
    expect(add("5")).toBe(5);
  });
