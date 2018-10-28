/* global describe it:true */
/* eslint no-undef: "error" */

const assert = require("assert");
const sumOfOther = require("../sumOfOther");
const make = require("../make");
const recursion = require("../recursion");

describe("Tests for codejam", () => {
    describe("sumOfOther test cases", () => {
        it("test 1", () => {
            assert.deepStrictEqual(sumOfOther([2, 3, 4, 1]), [8, 7, 6, 9]);
        });
        it("test 2", () => {
            assert.deepStrictEqual(sumOfOther([1, 1, 1, 1, 1, 1]),
                [5, 5, 5, 5, 5, 5]);
        });
        it("test 3", () => {
            assert.deepStrictEqual(sumOfOther([1, 3, 3, 7]), [13, 11, 11, 7]);
        });
    });
    describe("make test cases", () => {
        function sum(a, b) {
            return a + b;
        }

        function mult(a, b) {
            return a * b;
        }

        it("test 1", () => {
            assert.deepStrictEqual(make(15)(34, 21, 666)(41)(sum), 777);
        });

        it("test 2", () => {
            assert.deepStrictEqual(make(1)(2, 3)(4, 5, 6)(sum), 21);
        });

        it("test 3", () => {
            assert.deepStrictEqual(make(1)(2, 3)(4, 5, 6)(mult), 720);
        });
    });
    describe("recursion test cases", () => {
        const tree1 = {
            value: 100,
            left: { value: 90, left: { value: 70 }, right: { value: 99 } },
            right: { value: 120, left: { value: 110 }, right: { value: 130 } },
        };
        it("test 1", () => {
            assert.deepStrictEqual(recursion(tree1), [[100], [90, 120], [70, 99, 110, 130]]);
        });

        const tree2 = { value: 1, left: { value: 2 }, right: { value: 3 } };
        it("test 2", () => {
            assert.deepStrictEqual(recursion(tree2), [[1], [2, 3]]);
        });

        const tree3 = {
            value: 80,
            left: { value: 32, left: { value: 10 }, right: { value: 58 } },
            right: { value: 93, right: { value: 100 }, left: { value: 86 } },
        };
        it("test 3", () => {
            assert.deepStrictEqual(recursion(tree3), [[80], [32, 93], [10, 58, 86, 100]]);
        });
    });
});
