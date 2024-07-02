/**
 * Checks if a Set has all the values from an array.
 *
 * @param {Set} set - The Set to check for values.
 * @param {Array} array - The array of values to check against the Set.
 * @returns {boolean} - True if the Set contains all values from the array, false otherwise.
 */
export default function hasValuesFromArray(set, array) {
  return array.every((value) => set.has(value));
}
