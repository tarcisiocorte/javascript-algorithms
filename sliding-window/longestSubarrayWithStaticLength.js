// Função para encontrar a maior soma de um subarray de comprimento k
function maxSumSubarray(nums, k) {
    if (nums.length < k) {
        return null;  // Retorna null se não for possível formar um subarray de comprimento k
    }

    // Calcula a soma inicial da janela
    let maxSum = 0;
    for (let i = 0; i < k; i++) {
        maxSum += nums[i];
    }

    // Usa a técnica de janela deslizante para encontrar a maior soma
    let windowSum = maxSum;
    for (let i = k; i < nums.length; i++) {
        windowSum += nums[i] - nums[i - k];
        maxSum = Math.max(maxSum, windowSum);
    }

    return maxSum;
}
module.exports = maxSumSubarray;