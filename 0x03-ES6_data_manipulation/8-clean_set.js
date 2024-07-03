/**
 * Returns a string of set values that start with a specific string.
 *
 * @param {Set} set - The Set containing values to filter.
 * @param {string} startString - The specific string that the values should start with.
 * @returns {string} - A string of values from the set that start with the
 * specified string, separated by '-'.
 */
export default function cleanSet(set, startString) {
  if (!startString || startString.length === 0) {
    return '';
  }

  return [...set]
    .filter((string) => (string !== undefined ? string.startsWith(startString) : ''))
    .map((string) => (string !== undefined ? string.slice(startString.length) : ''))
    .join('-');
}
