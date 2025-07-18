function twoNumberSum(array, targetSum) {
  const nums = {};
  for (const num of array) {
    const potentialMatch = targetSum - num;
    if (potentialMatch in nums) {
      return [potentialMatch, num];
    } else {
      nums[num] = true;
    }
  }
  return [];
}

const array = [3, 5, -4, 8, 11, 1, -1, 6];
const targetSum = 10;
const result = twoNumberSum(array, targetSum);
console.log(result);
