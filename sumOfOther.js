function sumOfOther(inArray) {
    let outArray = [];

    for (let i = 0; i < inArray.length; i++) {
        let sum = 0;

        for (let j = 0; j < inArray.length; j++) {
            if (j === i) continue;

            sum += inArray[j];
        }

        outArray.push(sum);
    }

    return outArray;
}

module.exports = sumOfOther;