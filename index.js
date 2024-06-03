const LinkedList = require("./linked-lists/linkedList");

const list = new LinkedList();
list.add(1);
list.add(2);
list.add(3);
list.print(); // 1, 2, 3
list.remove(2);
list.print(); // 1, 3

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
