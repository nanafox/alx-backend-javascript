/**
 * Creates an Int8 typed array with a specified length, setting a value at a given position.
 *
 * @param {number} length - The length of the Int8 typed array to create.
 * @param {number} position - The position in the array to set the value.
 * @param {number} value - The value to set at the specified position.
 * @returns {DataView} - The Int8 typed array with the value set at the specified position.
 * @throws {Error} - If the position is outside the valid range.
 */
export default function createInt8TypedArray(length, position, value) {
  if (position < 0 || position >= length) {
    throw new Error('Position outside range');
  }
  const buffer = new ArrayBuffer(length);
  const intView = new DataView(buffer);
  intView.setInt8(position, value);
  return intView;
}
