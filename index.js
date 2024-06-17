const PalindromePermutation = require('./challenge/pallindrome-permutation');

// Exemplo de uso
const input = "Tact Coa";
  
//const result1 = PalindromePermutation.isPermutationOfPalindromeSolution1(input);
//console.log(`Solução 1: "${input}" é uma permutação de um palíndromo? ${result1}`);

//const result2 = PalindromePermutation.isPermutationOfPalindromeSolution2(input);
//console.log(`Solução 2: "${input}" é uma permutação de um palíndromo? ${result2}`);

const result3 = PalindromePermutation.isPermutationOfPalindromeSolution3(input);
console.log(`Solução 3: "${input}" é uma permutação de um palíndromo? ${result3}`);



/*** *
const URLify = require('./challenge/remove-white-space-1.3.js');
// let test URLify
//const str = 'Mr John Smith    ';
// give another example
const str = 'Copa SP de futebol junior 2021                ';
const trueLength = 30;


const url = URLify(str, trueLength);
console.log(url); // Expected output: 'Mr%20John%20Smith'

**/

/***
const LinkedList = require("./linked-lists/linkedList");

const list1 = new LinkedList();
const list2 = new LinkedList();
list1.add(2);
list1.add(4);
list1.add(3);

list2.add(5);
list2.add(6);
list2.add(4);

var addTwoNumbers = function(l1, l2) {
    let currentL1 = l1.head;
    let currentL2 = l2.head;
    let numL1 = "";
    let numL2 = "";
    while(currentL1 && currentL2){
        numL1 += currentL1.value;
        numL2 += currentL2.value;

        currentL1 = currentL1.next;
        currentL2 = currentL2.next;        
    } 
    return (Math.floor(numL1) + Math.floor(numL2)).toString().split('').reverse();  
};

console.log(addTwoNumbers(list1, list2));
***/




// addTwoNumbers([2,4,3], [5,6,4]); // Expected output: 807
// addTwoNumbers([0], [0]); // Expected output: 0
// addTwoNumbers([9,9,9,9,9,9,9], [9,9,9,9]); // Expected output: 10009998

/*** 
const firstMissingPositive = require('./cyclic-sort/firstMissingPositive');
//const nums = [3, -2, 2,0,1];
const nums = [-1,-2,-3,-4,10,11,13,0,1];
const missingPositive = firstMissingPositive(nums);
console.log(`The first missing positive integer is: ${missingPositive}`);
***/

/*** 
function getLongestSubArray(arr, k){
    if(arr.length < k)
    {
        return 'Invalid input';
    }

    let longestSubArrayLength = 0;

    // for (let i = 0; i < k; i++){
    //     longestSubArrayLength += arr[i];
    // }

    for (let i = 0; i < arr.length; i++){
        if(i < k){
            longestSubArrayLength += arr[i]
        }else{
            const currentSubArrayLength = longestSubArrayLength - arr[i-k] + arr[i];
            longestSubArrayLength = Math.max(longestSubArrayLength, currentSubArrayLength);
        }
    }
    return longestSubArrayLength;   
}

console.log(getLongestSubArray([1, 4, 2, 10, 23, 3, 1, 0, 20], 4));


// [1, 4, 2, 10, 23, 3, 1, 0, 20], k = 4
***/

//const reduceGift = require('./reduceGifts');
/** 
const getMaxTotalArea = require('./calculateMaxTotalArea');

// Example usage
const sideLengths = [2, 6, 6, 2, 3, 5];
const maxTotalArea = getMaxTotalArea(sideLengths);
console.log(`The maximum total area is: ${maxTotalArea}`);
**/

// Import the reduceGifts function from reduceGifts.js

/** 
const reduceGifts = require('./reduceGifts');

// Example usage
const prices = [9, 6, 7, 2, 7, 2];
const k = 2;
const threshold = 13;

const itemsRemoved = reduceGifts(prices, k, threshold);
console.log(`Number of items removed: ${itemsRemoved}`);  // Expected output: 2
**/
