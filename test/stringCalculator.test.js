const { add } = require('../src/stringCalculator');

  test("return 0 for an empty string", () => {
    expect(add('')).toBe(0);
  });

  test("returns number for single value", () => {
    expect(add("5")).toBe(5);
  });

  test("returns sum of two numbers", () => {
    expect(add("3,4")).toBe(7);
  })

  test("returns sum of multiple numbers", () => {
    expect(add("6,9,14,19,27")).toBe(75);
  })