const hasUniqueCharacters = require("./string-has-all-unique-characters");

hasUniqueCharacters
describe('hasUniqueCharacters', () => {
    test('should return true for strings with all unique characters', () => {
        expect(hasUniqueCharacters('abc')).toBe(true);
        expect(hasUniqueCharacters('')).toBe(true);
        expect(hasUniqueCharacters('a')).toBe(true);
    });

    test('should return false for strings with repeated characters', () => {
        expect(hasUniqueCharacters('aabbcc')).toBe(false);
        expect(hasUniqueCharacters('abcabc')).toBe(false);
    });
});
