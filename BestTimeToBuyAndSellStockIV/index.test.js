const Solution = require("./index");

describe("Best Time to Buy and Sell Stock IV", () => {
  let solution;

  beforeEach(() => {
    solution = new Solution();
  });

  test("should return 0 when prices array is empty", () => {
    expect(solution.maxProfit(2, [])).toBe(0);
  });

  test("should return 0 when k is 0", () => {
    expect(solution.maxProfit(0, [1, 2, 3])).toBe(0);
  });

  test("should return correct profit for k=2 and prices=[3,2,6,5,0,3]", () => {
    expect(solution.maxProfit(2, [3, 2, 6, 5, 0, 3])).toBe(7);
  });

  test("should return correct profit when k is large enough for unlimited transactions", () => {
    expect(solution.maxProfit(100, [1, 2, 3, 4, 5])).toBe(4);
  });

  test("should return 0 for prices in decreasing order", () => {
    expect(solution.maxProfit(2, [5, 4, 3, 2, 1])).toBe(0);
  });
});
