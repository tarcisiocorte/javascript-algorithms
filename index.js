const PalindromePermutation = require('./challenge/pallindrome-permutation');

// Exemplo de uso
const input = "Tact Coa";
  
//const result1 = PalindromePermutation.isPermutationOfPalindromeSolution1(input);
//console.log(`Solução 1: "${input}" é uma permutação de um palíndromo? ${result1}`);

//const result2 = PalindromePermutation.isPermutationOfPalindromeSolution2(input);
//console.log(`Solução 2: "${input}" é uma permutação de um palíndromo? ${result2}`);

const result3 = PalindromePermutation.isPermutationOfPalindromeSolution3(input);
console.log(`Solução 3: "${input}" é uma permutação de um palíndromo? ${result3}`);


