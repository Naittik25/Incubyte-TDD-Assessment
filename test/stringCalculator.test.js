const { add } = require('../src/stringCalculator');

// Base case: empty input
test("return 0 for an empty string", () => {
  expect(add('')).toBe(0);
});

// Single number input
test("returns number for single value", () => {
  expect(add("5")).toBe(5);
});

// Two comma-separated numbers
test("returns sum of two comma-separated numbers", () => {
  expect(add("3,4")).toBe(7);
});

// Multiple comma-separated numbers
test("returns sum of multiple numbers", () => {
  expect(add("6,9,14,19,27")).toBe(75);
});

// Newline as delimiter
test("returns sum of numbers with new line as delimiter", () => {
  expect(add("4\n7,13")).toBe(24);
});

// Custom single-character delimiter
test("returns sum of numbers with new line and custom delimiter", () => {
  expect(add("//;\n7;13")).toBe(20);
});

// Negative number error
test("throws error for negative numbers", () => {
  expect(() => add("8,-14,19")).toThrow("Negative numbers not allowed: -14");
});

// Multiple negative numbers
test("throws error for multiple negative numbers", () => {
  expect(() => add("6,-13,21,-35")).toThrow("Negative numbers not allowed: -13,-35");
});

// Variable number of inputs
test("handles unknown amount of numbers", () => {
  expect(add("1,2,3,4,5")).toBe(15);
});

// Multi-character delimiter
test("handles multi-character delimiter", () => {
  expect(add("//[***]\n1***2***3")).toBe(6);
});

// Numbers > 1000 are ignored
test("ignores numbers greater than 1000", () => {
  expect(add("2,1001,6")).toBe(8);
});

// Multiple single-character delimiters
test("handles multiple delimiters", () => {
  expect(add("//[*][%]\n1*2%3")).toBe(6);
});

// Multiple multi-character delimiters
test("handles complex multiple delimiters", () => {
  expect(add("//[**][%%]\n1**2%%3")).toBe(6);
});
