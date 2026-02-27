const { containsDuplicate } = require('./contains-duplicate');
describe('containsDuplicate', () => {
    it('should return true when there are duplicates and false when no duplicates is found', () => {
        expect(containsDuplicate([1, 2, 3, 1])).toBe(true);
        expect(containsDuplicate([2, 3, 4, 5])).toBe(false);
        expect(containsDuplicate([3, 3])).toBe(true);
    });
});
