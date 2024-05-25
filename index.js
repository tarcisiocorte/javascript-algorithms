// index.js
const getMaxTotalArea = require('./calculateMaxTotalArea');

// Example usage
const sideLengths = [2, 6, 6, 2, 3, 5];
const maxTotalArea = getMaxTotalArea(sideLengths);
console.log(`The maximum total area is: ${maxTotalArea}`);
