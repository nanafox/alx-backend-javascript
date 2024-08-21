#!/usr/bin/env node

const calculateNumber = require("./0-calcul");
const assert = require("assert");

function getType(variable) {
  if (variable === null) {
    return 'null';
  }
  if (Array.isArray(variable)) {
    return 'array';
  }
  if (typeof variable === 'object') {
    return Object.prototype.toString.call(variable).slice(8, -1).toLowerCase();
  }
  return typeof variable;
}

/**
 * Test the `calculateNumber()` function.
 */
describe("calculateNumber()", () => {
  const tests = [
    {args: [1, 2], expected: 3},
    {args: [1, 1.3], expected: 2},
    {args: [0.5, 0.5], expected: 2},
    {args: [10.3, 5.6], expected: 16},
    {args: [1.5, 3.7], expected: 6},
    {args: [2.4, 3.6], expected: 6},
    {args: [1.1, 2.9], expected: 4},
    {args: [0.1, 0.9], expected: 1},
    {args: [5.5, 5.5], expected: 12},
    {args: [7.2, 3.8], expected: 11},
    {args: [2.5, 2.5], expected: 6},
    {args: [9.9, 0.1], expected: 10},
    {args: [4.4, 4.6], expected: 9},
    {args: [6.7, 2.3], expected: 9},
    {args: [3.3, 3.3], expected: 6},
    {args: [2.4, 3.6], expected: 6},
    {args: [1.1, 2.9], expected: 4},
    {args: [5.5, 5.5], expected: 12},
    {args: [7.2, 3.8], expected: 11},
    {args: [2.5, 2.5], expected: 6},
    {args: [9.9, 0.1], expected: 10},
    {args: [4.7, 4.6], expected: 10},
    {args: [6.7, 2.3], expected: 9},
    {args: [3.3, 3.3], expected: 6},
    {args: [2.6, 2.4], expected: 5},
    {args: [1.4, 1.6], expected: 3},
    {args: [0.4, 0.6], expected: 1},
    {args: [5.4, 5.6], expected: 11},
    {args: [7.6, 3.4], expected: 11},
    {args: [2.1, 2.9], expected: 5},
    {args: [9.4, 0.6], expected: 10},
    {args: [4.5, 4.5], expected: 10},
    {args: [6.3, 2.7], expected: 9},
    {args: [3.7, 3.3], expected: 7},
    {args: [2.2, 2.8], expected: 5},
    {args: [1.9, 1.1], expected: 3},
    {args: [0.7, 0.3], expected: 1},
    {args: [5.8, 5.2], expected: 11},
    {args: [7.1, 3.9], expected: 11},
    {args: [2.3, 2.7], expected: 5},
    {args: [9.2, 0.8], expected: 10},
    {args: [4.8, 4.2], expected: 9},
    {args: [6.6, 2.4], expected: 9},
    {args: [3.1, 3.9], expected: 7},
  ];

  tests.forEach(({args, expected}) => {
    it(`correctly adds ${args[0]} and ${args[1]} as ${expected}`, () => {
      const res = calculateNumber(...args);
      assert.strictEqual(res, expected);
    });
  });

  const invalid_args = [
    {args: [3, '4'], expected: TypeError},
    {args: [null, null], expected: TypeError},
    {args: ['3', 4], expected: TypeError},
    {args: ['4.3', '1.2'], expected: TypeError},
    {args: ['4.3', undefined], expected: TypeError},
    {args: [[1, 4], {number: 3}], expected: TypeError},
  ];
  invalid_args.forEach(({args, expected}) => {
    it(`throws a TypeError when ${getType(args[0])} and ${getType(args[1])} are passed as arguments`,
      () => {
        assert.throws(() => calculateNumber(...args), expected);
      },
    );
  });

  it(`throws a TypeError when any or all of the arguments are omitted`, () => {
    assert.throws(() => calculateNumber(4), TypeError);
    assert.throws(() => calculateNumber(), TypeError);
  });
});
