const binarySearch = require('./index');

describe('binarySearch', () => {
    it('should return the index of the target element if found', () => {
        const arr = Array.from({ length: 1000000 }, (_, index) => index + 1);
        const target = 5001;
        const result = binarySearch(arr, target);
        expect(result).toBe(5000);
    });
});