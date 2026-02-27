// twoSum: return indices of the two numbers that add up to target
function twoSum(nums, target) {
  const numsMap = new Map();
  for (let i = 0; i < nums.length; i++) {
    const complement = target - nums[i];
    if (numsMap.has(complement)) {
      return [numsMap.get(complement), i];
    }
    numsMap.set(nums[i], i);
  }
  return null;
}

module.exports = twoSum;
