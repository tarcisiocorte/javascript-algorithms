var findMin = function (nums) {
    let left = 0;
    let right = nums.length - 1;

    while (left < right) {
        const mid = Math.floor((left + right) / 2);

        // If mid is greater than right, minimum is on the right side.
        if (nums[mid] > nums[right]) {
            left = mid + 1;
        } else {
            // Otherwise, minimum is at mid or on the left side.
            right = mid;
        }
    }

    return nums[left];
};

module.exports = findMin;
