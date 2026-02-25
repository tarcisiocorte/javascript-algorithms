const checkPermutation = require('./check-permutation');

describe('checkPermutation', () => {
  
  test('should return true for valid permutations', () => {
    expect(checkPermutation("abc", "bca")).toBe(true);
    expect(checkPermutation("12345", "54321")).toBe(true);
    expect(checkPermutation("permutation", "mutationper")).toBe(true);
  });

  test('should return false for strings of different lengths', () => {
    expect(checkPermutation("abc", "abcd")).toBe(false);
    expect(checkPermutation("apple", "aple")).toBe(false);
  });

  test('should return false if characters are different', () => {
    expect(checkPermutation("abc", "abd")).toBe(false);
    expect(checkPermutation("hello", "world")).toBe(false);
  });

  test('should be case sensitive (unless specified otherwise)', () => {
    // 'A' and 'a' have different ASCII values
    expect(checkPermutation("Apple", "apple")).toBe(false);
  });

  test('should consider whitespace as a character', () => {
    expect(checkPermutation("taco", "taco ")).toBe(false);
  });

  test('should return true for empty strings', () => {
    expect(checkPermutation("", "")).toBe(true);
  });

});