const getMaxTotalArea = require('./calculateMaxTotalArea'); // Adjust the path if necessary

describe('getMaxTotalArea', () => {
    test('should return the correct area for the given side lengths', () => {
        const sideLengths = [2, 6, 6, 2, 3, 5];
        expect(getMaxTotalArea(sideLengths)).toBe(12); 
    });

    test('should return 0 for an empty array', () => {
        const sideLengths = [];
        expect(getMaxTotalArea(sideLengths)).toBe(0);
    });

    test('should return 0 when no rectangles can be formed', () => {
        const sideLengths = [3];
        expect(getMaxTotalArea(sideLengths)).toBe(0);
    });

    test('should handle large numbers correctly', () => {
        const sideLengths = [1000000000, 1000000000, 1000000000, 1000000000];
        expect(getMaxTotalArea(sideLengths)).toBe(49);
    });

    test('should handle cases with multiple possible rectangles', () => {
        const sideLengths = [4, 4, 4, 4, 2, 2, 2, 2];
        expect(getMaxTotalArea(sideLengths)).toBe(20);
    });

    test('should handle cases with frequencies more than two', () => {
        const sideLengths = [4, 4, 4, 4, 4, 4, 4, 4];
        expect(getMaxTotalArea(sideLengths)).toBe(32); 
    });

    test('should handle large input size correctly', () => {
        const sideLengths = new Array(1000).fill(10);
        expect(getMaxTotalArea(sideLengths)).toBe(25000);
    });
});
