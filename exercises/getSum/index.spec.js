const getSum = require('./index');

describe('getSum', () => {
    it('should sum two positive numbers', () => {
        expect(getSum(1, 2)).toBe(3);
        expect(getSum(7, 5)).toBe(12);
    });

    it('should handle zero', () => {
        expect(getSum(0, 0)).toBe(0);
        expect(getSum(10, 0)).toBe(10);
        expect(getSum(0, 10)).toBe(10);
    });

    it('should sum positive and negative numbers', () => {
        expect(getSum(-1, 1)).toBe(0);
        expect(getSum(-4, 9)).toBe(5);
    });

    it('should sum two negative numbers', () => {
        expect(getSum(-3, -6)).toBe(-9);
    });
});
