const assert = require('assert');

function make() {
    let argList = [];
    function tempFunction() {
        if (typeof arguments[0] === 'function') {
            assert(arguments.length === 1);
            return argList.reduce(arguments[0]);
        }
        argList.push(...arguments);
        return tempFunction;
    }

    return tempFunction(...arguments);
}

module.exports = make;