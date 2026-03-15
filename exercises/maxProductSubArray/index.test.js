const maxProductSubArray = require('./index');

describe('Maximum Product Subarray - maxProductSubArray', () => {
  test('should return the max product subarray for mixed positive and negative values', () => {
    expect(maxProductSubArray([-2, 6, -3, -10, 0, 2])).toBe(180);
    expect(maxProductSubArray([2,3,-2,4])).toBe(6);
    expect(maxProductSubArray([1])).toBe(1);
    expect(maxProductSubArray([-2,0,-1])).toBe(0);
    expect(maxProductSubArray([-8, -3, -6, -2, -5, -4])).toBe(5760);
    expect(maxProductSubArray([0, 0, 0, 0])).toBe(0);
  });
});
