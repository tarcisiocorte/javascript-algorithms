/** Check Permutation: Given two strings, write a method to decide if one is a permutation of the
other.  */
const checkPermutation = (input1, input2) => {
    if (input1.length !== input2.length) {
        return false;
    }

    let charCodes = new Array(128).fill(0);
    for (let c of input1) {
        charCodes[c.charCodeAt(0)]++;
    }

    for (let i = 0; i < input2.length; i++) {
        charCodes[input2.charCodeAt(i)]--;
        if (charCodes[input2.charCodeAt(i)] < 0) {
            return false;
        }
    }
    return true;
};

module.exports = checkPermutation;