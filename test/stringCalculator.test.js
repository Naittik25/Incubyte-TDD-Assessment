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

  test("returns sum of numbers with new line as delimiter", () => {
    expect(add("4\n7,13")).toBe(24);
  })

  test("returns sum of numbers with new line and custom delimiter", () => {
    expect(add("//;\n7;13")).toBe(20);
  })

  test("throws error for negative numbers", () => {
    expect(() => add("8,-14,19")).toThrow("Negative numbers not allowed: -14");
  })

  test("throws error for multiple negative numbers", () => {
    expect(() => add("6,-13,21,-35")).toThrow("Negative numbers not allowed: -13,-35");
  })