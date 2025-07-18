const maxSumSubarray = require("./longestSubarrayWithStaticLength");

describe("maxSumSubarray", () => {
  it("should return the correct max sum for example scenario 1", () => {
    const nums = [1, 4, 2, 10, 23, 3, 1, 0, 20];
    const k = 4;
    expect(maxSumSubarray(nums, k)).toBe(39);
  });

  it("should return the correct max sum for example scenario 2", () => {
    const nums = [-1, -2, -3, -4];
    const k = 2;
    expect(maxSumSubarray(nums, k)).toBe(-3);
  });

  it("should return null for arrays smaller than k", () => {
    const nums = [1, 2, 3];
    const k = 4;
    expect(maxSumSubarray(nums, k)).toBeNull();
  });

  it("should return the correct max sum for a scenario with positive and negative numbers", () => {
    const nums = [4, -1, 2, 1, -7, 6, 5, 3];
    const k = 3;
    expect(maxSumSubarray(nums, k)).toBe(14); // [6, 5, 3] has the max sum of 14
  });

  it("should handle single element arrays correctly", () => {
    const nums = [10];
    const k = 1;
    expect(maxSumSubarray(nums, k)).toBe(10);
  });
});
