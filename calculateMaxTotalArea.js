
function getMaxTotalArea(sideLengths) {

    const MOD = 10**9 + 7;

    sideLengths.sort((a, b) => b - a);

    const frequency = {};

    for (const length of sideLengths) {
        if (frequency[length]) {
            frequency[length]++;
        } else {
            frequency[length] = 1;
        }
    }

    let result = 0;

    let dimensions = [0, 0];

    for (let i = 0; i < sideLengths.length;) {
        if (frequency[sideLengths[i]] >= 2) {
            if (dimensions[0] === 0) {
                dimensions[0] = sideLengths[i];
            } else {
                dimensions[1] = sideLengths[i];
            }
            frequency[sideLengths[i]] -= 2;
            i++;
        } else {
            if (frequency[sideLengths[i] - 1]) {
                frequency[sideLengths[i] - 1]++;
                sideLengths[i]--;
                continue;
            }
        }
        i++;

        if (dimensions[0] > 0 && dimensions[1] > 0) {
            result = (result + dimensions[0] * dimensions[1]) % MOD;
            dimensions[0] = 0;
            dimensions[1] = 0;
        }
    }
    return result;
}

const sideLengths = [2, 6, 6, 2, 3, 5];
console.log(getMaxTotalArea(sideLengths));
