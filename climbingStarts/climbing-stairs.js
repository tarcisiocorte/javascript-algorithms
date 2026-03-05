var climbStairs = function (n) {
    if (n <= 2) return n;

    let prev = 1, curr = 2;
    for (let i = 3; i <= n; i++) {
        let next = prev + curr;
        prev = curr;
        curr = next;
    }
    return curr;
};

module.exports = climbStairs;
