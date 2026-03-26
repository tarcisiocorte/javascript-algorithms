const searchInRotatedSortedArray = require('./index');

describe('searchInRotatedSortedArray in Rotated Sorted Array', () => {
  it('should return correct index for standard rotated arrays', () => {
    expect(searchInRotatedSortedArray([4, 5, 6, 7, 0, 1, 2], 0)).toBe(4);
    expect(searchInRotatedSortedArray([4, 5, 6, 7, 0, 1, 2], 3)).toBe(-1);
    expect(searchInRotatedSortedArray([5, 1, 3], 5)).toBe(0);
    expect(searchInRotatedSortedArray([5, 1, 3], 1)).toBe(1);
    expect(searchInRotatedSortedArray([5, 1, 3], 3)).toBe(2);
  });

  it('should work for non-rotated arrays', () => {
    expect(searchInRotatedSortedArray([1, 2, 3, 4, 5], 1)).toBe(0);
    expect(searchInRotatedSortedArray([1, 2, 3, 4, 5], 5)).toBe(4);
    expect(searchInRotatedSortedArray([1, 2, 3, 4, 5], 6)).toBe(-1);
  });

  it('should handle single-element arrays', () => {
    expect(searchInRotatedSortedArray([1], 1)).toBe(0);
    expect(searchInRotatedSortedArray([1], 0)).toBe(-1);
  });

  it('should handle two-element arrays', () => {
    expect(searchInRotatedSortedArray([1, 3], 1)).toBe(0);
    expect(searchInRotatedSortedArray([1, 3], 3)).toBe(1);
    expect(searchInRotatedSortedArray([3, 1], 3)).toBe(0);
    expect(searchInRotatedSortedArray([3, 1], 1)).toBe(1);
    expect(searchInRotatedSortedArray([3, 1], 2)).toBe(-1);
  });

  it('should find values around pivot boundaries', () => {
    const nums = [30, 40, 50, 5, 10, 20];

    expect(searchInRotatedSortedArray(nums, 30)).toBe(0);
    expect(searchInRotatedSortedArray(nums, 50)).toBe(2);
    expect(searchInRotatedSortedArray(nums, 5)).toBe(3);
    expect(searchInRotatedSortedArray(nums, 20)).toBe(5);
  });
});