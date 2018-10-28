function sumOfOther(inArray) {
    const outArray = [];

    for (let i = 0; i < inArray.length; i += 1) {
        let sum = 0;

        for (let j = 0; j < inArray.length; j += 1) {
            if (j !== i) sum += inArray[j];
        }

        outArray.push(sum);
    }

    return outArray;
}

module.exports = sumOfOther;
