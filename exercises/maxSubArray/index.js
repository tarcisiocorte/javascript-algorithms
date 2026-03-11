/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function (nums) {
    maxSubArray = nums[0];
    currentSum = 0;
    for (let i = 0; i < nums.length; i++) {
        if (currentSum < 0) {
            currentSum = 0;
        }
        currentSum += nums[i];
        maxSubArray = Math.max(maxSubArray, currentSum);
    }
    return maxSubArray;
};

module.exports = maxSubArray;
