/** Implement an algorithm to determine if a string has all unique characters. */

const hasUniqueCharacters = (str) => {
    const charSet = new Set();
    for (let i = 0; i < str.length; i++) {
        if (charSet.has(str[i])) {
            return false;
        }
        charSet.add(str[i]);
    }
    return true;
};

module.exports = hasUniqueCharacters;