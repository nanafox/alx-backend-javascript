#!/usr/bin/env node

/**
 * Return the integer sum of two numbers.
 * @param type {string} - The type of operation to be perform. Allowed
 * options are 'SUM', 'SUBTRACT', 'DIVIDE'.
 * @param a {number} - The first number.
 * @param b {number} - The second number.
 * @returns {number} The sum of the two numbers rounded up.
 */
function calculateNumber(type, a, b) {
  if (typeof a !== 'number' || typeof b !== 'number') {
    throw new TypeError('Both arguments must be numbers');
  }

  const operations = {
    SUM: (a, b) => Math.round(a) + Math.round(b),
    SUBTRACT: (a, b) => Math.round(a) - Math.round(b),
    DIVIDE: (a, b) => {
      if (Math.round(b) === 0) {
        return 'Error';
      }
      return Math.round(a) / Math.round(b);
    },
  };

  const operation = operations[type];
  if (!operation) {
    throw new Error(`Invalid operation type. Allowed types are ${Object.keys(operations)}`);
  }

  return operation(a, b);
}

module.exports = calculateNumber;
