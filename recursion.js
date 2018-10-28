function recursion(inTree) {
    let outArray = [];

    function unwrapTree(inTreePart, level)
    {
        if (!outArray[level]) {
            outArray[level] = [];
        }

        outArray[level].push(inTreePart['value']);

        if (inTreePart['left']) {
            unwrapTree(inTreePart['left'], level + 1);
        }

        if (inTreePart['right']) {
            unwrapTree(inTreePart['right'], level + 1);
        }
    }

    unwrapTree(inTree, 0);

    return outArray;
}

module.exports = recursion;