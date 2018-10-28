const assert = require('assert')
const sumOfOther = require('../sumOfOther')

describe('Tests for codejam', () => {
    describe('sumOfOther test cases', () => {
        it('test 1', () => {
            assert.deepStrictEqual(sumOfOther([2, 3, 4, 1]), [8, 7, 6, 9]);
        });
        it('test 2', () => {
            assert.deepStrictEqual(sumOfOther([1, 1, 1, 1, 1, 1]),
                                   [5, 5, 5, 5, 5, 5]);
        });
        it('test 3', () => {
            assert.deepStrictEqual(sumOfOther([1, 3, 3, 7]), [13, 11, 11, 7]);
        });
    })
})  