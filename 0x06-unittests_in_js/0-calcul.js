#!/usr/bin/env node

/**
 * Return the integer sum of two numbers.
 * @param a {number} - The first number.
 * @param b {number} - The second number.
 * @returns {number} The sum of the two numbers rounded up.
 */
function calculateNumber(a, b) {
  if (typeof a !== "number") {
    throw new TypeError("'a' must be a number");
  }

  if (typeof b !== "number") {
    throw new TypeError("'b' must be a number");
  }

  return Math.round(a) + Math.round(b);
}

module.exports = calculateNumber;
