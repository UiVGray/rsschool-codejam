const assert = require("assert");

function make(...args) {
    const argList = [];
    function tempFunction(...varargs) {
        if (typeof varargs[0] === "function") {
            assert(varargs.length === 1);
            return argList.reduce(varargs[0]);
        }
        argList.push(...varargs);
        return tempFunction;
    }

    return tempFunction(...args);
}

module.exports = make;
