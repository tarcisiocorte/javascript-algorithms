// importante obserar que no Leetcode ainda podemos encontrar soluções mais otimizadas para este problema
/**
 * @param {number[]} nums
 * @return {number}
 */
/**
 * @param {number[]} nums
 * @return {number}
 */
var firstMissingPositive = function (nums) {
  // Etapa 1: Colocar cada número positivo na posição correta no array.
  // A ideia é que o número '1' deve estar na posição 0, o número '2' na posição 1, e assim por diante.
  let i = 0;
  while (i < nums.length) {
    // Verificamos se o número está fora do intervalo desejado (1 a nums.length) ou se já está na posição correta
    if (
      nums[i] <= 0 ||
      nums[i] > nums.length ||
      nums[nums[i] - 1] === nums[i]
    ) {
      i++;
    } else {
      // Se não estiver, trocamos o número para a sua posição correta
      let temp = nums[nums[i] - 1];
      nums[nums[i] - 1] = nums[i];
      nums[i] = temp;
    }
  }

  for (i = 0; i < nums.length; i++) {
    // Se o número na posição i não for i + 1, então i + 1 é o menor número positivo ausente
    if (nums[i] !== i + 1) {
      return i + 1;
    }
  }

  // Se todos os números de 1 a nums.length estiverem presentes, então o próximo número ausente é nums.length + 1
  return nums.length + 1;
};

module.exports = firstMissingPositive;
