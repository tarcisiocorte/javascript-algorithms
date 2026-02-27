const twoSum = require('./twoSum');

describe('twoSum', () => {
  test('returns indices of two numbers that add up to target (basic)', () => {
    expect(twoSum([2,7,11,15], 9)).toEqual([0,1]);
  });

  test('handles negative numbers and returns correct indices', () => {
    expect(twoSum([3,2,4], 6)).toEqual([1,2]);
  });

  test('returns indices when duplicate numbers are present', () => {
    expect(twoSum([3,3], 6)).toEqual([0,1]);
  });

  test('returns null when no solution exists', () => {
    expect(twoSum([1,2,3], 7)).toBeNull();
  });
});
