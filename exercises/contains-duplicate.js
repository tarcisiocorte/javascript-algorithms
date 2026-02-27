function containsDuplicate(nums) {
    if (nums.length < 2) return false;

    let uniq = new Set();
    for (const num of nums) {
        if (uniq.has(num)) return true;
        uniq.add(num);
    }
    return false;
}

module.exports = { containsDuplicate };