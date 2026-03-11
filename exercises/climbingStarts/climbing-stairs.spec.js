const climbStairs = require("./climbing-stairs");

describe("climbStairs", () => {
  it("returns the number of distinct ways to reach the top", () => {
    const scenarios = [
      { n: 1, expected: 1 },
      { n: 2, expected: 2 },
      { n: 3, expected: 3 },
      { n: 4, expected: 5 },
      { n: 5, expected: 8 },
      { n: 10, expected: 89 },
      { n: 45, expected: 1836311903 },
    ];

    scenarios.forEach(({ n, expected }) => {
      expect(climbStairs(n)).toBe(expected);
    });
  });
});
