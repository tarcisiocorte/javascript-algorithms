/**
 * Best Time to Buy and Sell Stock I
 * @param {number[]} prices
 * @return {number}
 */
function maxProfit(prices) {
  let minPrice = Infinity;
  let maxProfit = 0;

  for (let i = 0; i < prices.length; i++) {
    const price = prices[i];

    // atualiza o menor preço encontrado até agora
    minPrice = Math.min(minPrice, price);

    // calcula o lucro possível vendendo hoje
    const profit = price - minPrice;

    // atualiza o maior lucro
    maxProfit = Math.max(maxProfit, profit);
  }

  return maxProfit;
}

module.exports = maxProfit;
