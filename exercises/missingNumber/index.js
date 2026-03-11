// Exemplo: [2, 4, 6, 10, 12] -> 8
// Premissa: array ordenado, progressao aritmetica e exatamente 1 valor faltando.
const missingNumber = (arr) => {
    if (arr.length < 3) return null;

    const n = arr.length; // quantidade atual (com 1 faltando)
    const first = arr[0];
    const last = arr[n - 1];
    const step = (last - first) / n;

    let left = 0;
    let right = n - 1;

    while (left <= right) {
        const mid = Math.floor((left + right) / 2);
        const expected = first + mid * step;

        if (arr[mid] === expected) {
            left = mid + 1;
        } else {
            right = mid - 1;
        }
    }

    return first + left * step;
};

module.exports = missingNumber;


const nums = [2, 4, 6, 8, 10, 12, 16, 20, 22];
let low = 0;
let high = nums.length - 1;
let first = nums[low];
let last = nums[high];
let step = (last - first) / nums.length;
let mid;

while (high >= low) {
    mid = Math.floor((low + high) / 2);

    if (nums[mid] === (nums[mid - 1] + step)) {
        low = mid + 1;
    } else {
        high = mid - 1;
    }
}
console.log(`Missing number is: ${first + (low * step)}`);

