class PalindromePermutation {
  // Solution #1: Using frequency table and checking odd counts
  /**
   * Checks if the given phrase is a permutation of a palindrome.
   * @param {string} phrase - The input phrase to check.
   * @returns {boolean} - True if the phrase is a permutation of a palindrome, false otherwise.
   */
  static isPermutationOfPalindromeSolution1(phrase) {
    const table = this.buildCharFrequencyTable(phrase);
    return this.checkMaxOneOdd(table);
  }

  /**
   * Verifies that no more than one character has an odd count.
   * @param {number[]} table - The frequency table of character counts.
   * @returns {boolean} - True if at most one character has an odd count, false otherwise.
   */
  static checkMaxOneOdd(table) {
    let foundOdd = false;
    for (const count of table) {
      if (count % 2 === 1) {
        if (foundOdd) {
          return false;
        }
        foundOdd = true;
      }
    }
    return true;
  }

  /**
   * Maps each character to a number. a -> 0, b -> 1, c -> 2, etc.
   * This is case insensitive. Non-letter characters map to -1.
   * @param {string} c - The character to map.
   * @returns {number} - The corresponding number for the character.
   */
  static getCharNumber(c) {
    const a = "a".charCodeAt(0);
    const z = "z".charCodeAt(0);
    const val = c.toLowerCase().charCodeAt(0);
    if (a <= val && val <= z) {
      return val - a;
    }
    return -1;
  }

  /**
   * Counts how many times each character appears in the phrase.
   * @param {string} phrase - The input phrase to analyze.
   * @returns {number[]} - The frequency table of character counts.
   */
  static buildCharFrequencyTable(phrase) {
    const table = new Array(26).fill(0);
    for (const c of phrase) {
      const x = this.getCharNumber(c);
      if (x !== -1) {
        table[x]++;
      }
    }
    return table;
  }

  // Solution #2: Checking odd counts during frequency table construction
  /**
   * Checks if the given phrase is a permutation of a palindrome.
   * @param {string} phrase - The input phrase to check.
   * @returns {boolean} - True if the phrase is a permutation of a palindrome, false otherwise.
   */
  static isPermutationOfPalindromeSolution2(phrase) {
    let countOdd = 0;
    const table = new Array(26).fill(0);
    for (const c of phrase) {
      const x = this.getCharNumber(c);
      if (x !== -1) {
        table[x]++;
        if (table[x] % 2 === 1) {
          countOdd++;
        } else {
          countOdd--;
        }
      }
    }
    return countOdd <= 1;
  }

  // Solution #3: Using bit vector to track parity of character counts
  /**
   * Checks if the given phrase is a permutation of a palindrome.
   * @param {string} phrase - The input phrase to check.
   * @returns {boolean} - True if the phrase is a permutation of a palindrome, false otherwise.
   */
  static isPermutationOfPalindromeSolution3(phrase) {
    const bitVector = this.createBitVector(phrase);
    return bitVector === 0 || this.checkExactlyOneBitSet(bitVector);
  }

  /**
   * Creates a bit vector for the string. For each letter with value i, toggle the ith bit.
   * @param {string} phrase - The input phrase to analyze.
   * @returns {number} - The bit vector representing the parity of character counts.
   */
  static createBitVector(phrase) {
    let bitVector = 0;
    for (const c of phrase) {
      const x = this.getCharNumber(c);
      bitVector = this.toggle(bitVector, x);
    }
    return bitVector;
  }

  /**
   * Toggles the ith bit in the integer.
   * @param {number} bitVector - The current bit vector.
   * @param {number} index - The bit index to toggle.
   * @returns {number} - The updated bit vector.
   */
  static toggle(bitVector, index) {
    if (index < 0) return bitVector;

    const mask = 1 << index;
    if ((bitVector & mask) === 0) {
      bitVector |= mask;
    } else {
      bitVector &= ~mask;
    }
    return bitVector;
  }

  /**
   * Checks that exactly one bit is set by subtracting one from the integer and
   * ANDing it with the original integer.
   * @param {number} bitVector - The bit vector to check.
   * @returns {boolean} - True if exactly one bit is set, false otherwise.
   */
  static checkExactlyOneBitSet(bitVector) {
    return (bitVector & (bitVector - 1)) === 0;
  }
}

module.exports = PalindromePermutation;
