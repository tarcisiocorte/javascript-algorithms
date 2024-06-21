/** 
 * exectar testes na classe Compression
const StringCompressor = require("./challenge/string-compression-1.6");
const compressor = new StringCompressor();

//console.log(compressor.compressBad("aabcccccaaa")); // Output: a2b1c5a3
console.log(compressor.compressString("aabcccccaaa")); // Output: a2b1c5a3

console.log(compressor.compressBad("abc")); // Output: abc
console.log(compressor.compressString("abc")); // Output: abc

console.log(compressor.compressBad("aabbcc")); // Output: aabbcc
console.log(compressor.compressString("aabbcc")); // Output: aabbcc

console.log(compressor.compressBad("aaAAaa")); // Output: a2A2a2
console.log(compressor.compressString("aaAAaa")); // Output: a2A2a2
***/

/***
 * 
 *  
const OneWay = require("./challenge/one-way-1.5");
const oneway = new OneWay();
const input1 = "pale";
const input2 = "ple";
const result = oneway.oneEditAwayOptimized(input1, input2);
console.log(`"${input1}", "${input2}": ${result}`);

**/

/** 
const PalindromePermutation = require('./challenge/pallindrome-permutation');

// Exemplo de uso
const input = "Tact Coa";
  
//const result1 = PalindromePermutation.isPermutationOfPalindromeSolution1(input);
//console.log(`Solução 1: "${input}" é uma permutação de um palíndromo? ${result1}`);

//const result2 = PalindromePermutation.isPermutationOfPalindromeSolution2(input);
//console.log(`Solução 2: "${input}" é uma permutação de um palíndromo? ${result2}`);

const result3 = PalindromePermutation.isPermutationOfPalindromeSolution3(input);
console.log(`Solução 3: "${input}" é uma permutação de um palíndromo? ${result3}`);
***/
