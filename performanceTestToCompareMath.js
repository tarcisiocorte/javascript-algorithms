const right = 10;
const left = 5;
const width = right - left; // Simple subtraction

console.time("Math.abs");
for (let i = 0; i < 1000000; i++) {
  let width = Math.abs(right - left);
}
console.timeEnd("Math.abs");
