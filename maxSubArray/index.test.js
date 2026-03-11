const maxSubArray = require('./index');

describe('Maximum Subarray - maxSubArray', () => {
  test('should return the max subarray sum for mixed positive and negative values', () => {
    expect(maxSubArray([-2, 1, -3, 4, -1, 2, 1, -5, 4])).toBe(6);
    expect(maxSubArray([1])).toBe(1);
    expect(maxSubArray([5, 4, -1, 7, 8])).toBe(23);
    expect(maxSubArray([-8, -3, -6, -2, -5, -4])).toBe(-2);
    expect(maxSubArray([0, 0, 0, 0])).toBe(0);
  });
});
