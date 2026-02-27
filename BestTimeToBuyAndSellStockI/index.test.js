const maxProfit = require('./index');

describe('Best Time to Buy and Sell Stock I', () => {
  test('returns 0 for empty prices', () => {
    expect(maxProfit([])).toBe(0);
  });

  test('returns 0 when prices monotonically decrease', () => {
    expect(maxProfit([5,4,3,2,1])).toBe(0);
  });

  test('returns correct max profit for sample input', () => {
    expect(maxProfit([7,1,5,3,6,4])).toBe(5);
  });

  test('handles single element array', () => {
    expect(maxProfit([10])).toBe(0);
  });

  test('handles multiple increases', () => {
    expect(maxProfit([1,2,3,4,5])).toBe(4);
  });
});
