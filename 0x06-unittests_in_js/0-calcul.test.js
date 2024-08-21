#!/usr/bin/env node

const calculateNumber = require("./0-calcul");
const assert = require("assert");
const {additionFixtures, invalidArgsFixtures} = require('./fixtures');
const getType = require('./utils');

/**
 * Test the `calculateNumber()` function.
 */
describe("calculateNumber()", () => {
  additionFixtures.forEach(({args, expected}) => {
    it(`correctly adds ${args[0]} and ${args[1]} as ${expected}`, () => {
      const res = calculateNumber(...args);
      assert.strictEqual(res, expected);
    });
  });

  invalidArgsFixtures.forEach(({args, expected}) => {
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