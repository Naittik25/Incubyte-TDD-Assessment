const { add } = require('../src/stringCalculator');

  test("return 0 for an empty string", () => {
    expect(add('')).toBe(0);
  });