function URLify(str, trueLength) {
    // Convert the string to an array of characters
    let charArray = str.split('');

    // Count the number of spaces in the first trueLength characters
    let spaceCount = 0;
    for (let i = 0; i < trueLength; i++) {
        if (charArray[i] === ' ') {
            spaceCount++;
        }
    }

    // Calculate the new length of the string
    let index = trueLength + spaceCount * 2;

    // If there are extra spaces at the end, add a null character at the true length position
    if (trueLength < str.length) charArray[trueLength] = '\0';

    // Modify the string starting from the end and moving backwards
    for (let i = trueLength - 1; i >= 0; i--) {
        if (charArray[i] === ' ') {
            // Replace spaces with "%20"
            charArray[index - 1] = '0';
            charArray[index - 2] = '2';
            charArray[index - 3] = '%';
            index -= 3;
        } else {
            // Move characters to the new position
            charArray[index - 1] = charArray[i];
            index--;
        }
    }

    // Convert the array back to a string and return it
    return charArray.join('');
}

module.exports = URLify;