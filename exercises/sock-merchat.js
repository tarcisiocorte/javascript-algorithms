function sockMerchant(n, ar) {
    let counts = {};
    let pairs = 0;

    for (let color of ar) {
        counts[color] = (counts[color] || 0) + 1;
        if (counts[color] % 2 === 0) {
            pairs++;
        }
    }

    return pairs;
}

module.exports = sockMerchant;