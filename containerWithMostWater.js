/**
 * @param {number[]} height
 * @return {number}
 */
var calculateContainerWithMostWater = function(height) {
    let left = 0;
    let right = height.length - 1;
    let maxArea = 0;

    while( left < right){
        const width = right - left;
        const currentArea = Math.min(height[left], height[right]) * width;
        maxArea = Math.max(maxArea, currentArea);
        if(height[left] < height[right]){
            left++;
        }
        else{
            right--;
        }
    }

    return maxArea;    
};

const input = [8,8,6,2,5,4,8,3,2];
const output = calculateContainerWithMostWater(input);
console.log(output);
