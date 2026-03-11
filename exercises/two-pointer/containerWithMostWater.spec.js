const calculateContainerWithMostWater = require("./containerWithMostWater");

describe("calculateContainerWithMostWater", () => {
  test("should return 0 for an empty array", () => {
    const input = [];
    const output = calculateContainerWithMostWater(input);
    expect(output).toBe(0); // The expected output for an empty array is 0
  });

  test("should return 0 for an array with less than 2 elements", () => {
    const input = [1];
    const output = calculateContainerWithMostWater(input);
    expect(output).toBe(0); // The expected output for an array with one element is 0
  });

  test("should return the correct area for a simple case", () => {
    const input = [1, 1];
    const output = calculateContainerWithMostWater(input);
    expect(output).toBe(1); // The expected output for this input is 1
  });

  test("should return the correct area for another simple case", () => {
    const input = [1, 2, 1];
    const output = calculateContainerWithMostWater(input);
    expect(output).toBe(2); // The expected output for this input is 2
  });

  test("should return the correct area for mixed heights", () => {
    const input = [1, 3, 2, 5, 25, 24, 5];
    const output = calculateContainerWithMostWater(input);
    expect(output).toBe(24); // The expected output for this input is 24
  });
});
