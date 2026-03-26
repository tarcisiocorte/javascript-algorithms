var searchInRotatedSortedArray = function (nums, target) {
  let left = 0;
  let right = nums.length - 1;

  while (left <= right) {
    const mid = Math.floor((left + right) / 2);
    const midValue = nums[mid];

    if (midValue === target) return mid;

    if (nums[left] <= midValue) {
      if (nums[left] <= target && target < midValue) {
        right = mid - 1;
      } else {
        left = mid + 1;
      }
    } else if (midValue < target && target <= nums[right]) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }

  return -1;
};

module.exports = searchInRotatedSortedArray;