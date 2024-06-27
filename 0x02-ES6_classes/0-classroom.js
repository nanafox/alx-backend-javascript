/**
 * Represents a class constructor for creating a classroom with a maximum student size.
 */
export default class ClassRoom {
  /**
   * Represents a class constructor for setting the maximum student size.
   * @param {number} maxStudentSize - The maximum number of students allowed in the class.
   */
  constructor(maxStudentSize) {
    if (typeof maxStudentSize !== 'number') {
      throw new Error('maxStudentSize must be a number');
    }
    if (maxStudentSize <= 0) {
      throw new Error('maxStudentSize must be greater than 0');
    }

    this._maxStudentSize = maxStudentSize;
  }
}
