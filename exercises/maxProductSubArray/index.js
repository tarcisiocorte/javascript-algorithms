const maxProductSubArray = function (nums) {
    let maxHere = nums[0];
    let minHere = nums[0];
    let maxSoFar = nums[0];
    for (let i = 1; i < nums.length; i++) {
        const temp = nums[i];
        if (temp < 0) {
            [maxHere, minHere] = [minHere, maxHere];
        }
        maxHere = Math.max(temp, maxHere * temp);
        minHere = Math.min(temp, minHere * temp);
        maxSoFar = Math.max(maxSoFar, maxHere);
    }
    return maxSoFar;
};

module.exports = maxProductSubArray;
