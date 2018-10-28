const assert = require('assert')
const sumOfOther = require('../sumOfOther')
const make = require('../make')

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
    });
    describe('make test cases', () => {
        function sum(a, b) {
            return a + b;
        }

        function mult(a, b) {
            return a * b;
        }

        it('test 1', () => {
            assert.deepStrictEqual(make(15)(34, 21, 666)(41)(sum), 777);
        });

        it('test 2', () => {
            assert.deepStrictEqual(make(1)(2, 3)(4, 5 ,6)(sum), 21);
        });

        it('test 3', () => {
            assert.deepStrictEqual(make(1)(2, 3)(4, 5 ,6)(mult), 720);
        });

    })
})  