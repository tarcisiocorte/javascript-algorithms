class Solution {
  maxProfit(k, prices) {
    if (prices.length === 0 || k === 0) {
      return 0;
    }

    if (k >= prices.length / 2) {
      let maxProfit = 0;
      for (let i = 1; i < prices.length; i++) {
        if (prices[i] > prices[i - 1]) {
          maxProfit += prices[i] - prices[i - 1];
        }
      }
      return maxProfit;
    }

    const buy = new Array(k + 1).fill(Number.NEGATIVE_INFINITY);
    const sell = new Array(k + 1).fill(0);

    for (const price of prices) {
      for (let j = 1; j <= k; j++) {
        buy[j] = Math.max(buy[j], sell[j - 1] - price);
        sell[j] = Math.max(sell[j], buy[j] + price);
      }
    }

    return sell[k];
  }
}

module.exports = Solution;
