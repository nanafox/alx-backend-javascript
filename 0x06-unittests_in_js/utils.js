#!/usr/bin/env node

/**
 * Return the type of the object.
 * @param variable - The object to check the type of.
 * @returns {string} The type of the object.
 */
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


module.exports = getType;
