const missingNumber = require('./index');

describe('missingNumber', () => {
    it('should find the missing number in a sorted array', () => {
        const result = missingNumber([2, 4, 6, 10, 12]);
        expect(result).toBe(8);

        const result2 = missingNumber([1, 2, 3, 5]);
        expect(result2).toBe(4);

        const result3 = missingNumber([0]);
        expect(result3).toBe(null);

        const result4 = missingNumber([1, 3]);
        expect(result4).toBe(null);
    });
});