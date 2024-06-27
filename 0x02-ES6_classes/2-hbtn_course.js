const privateData = new WeakMap();

/**
 * Represents a Holberton Course.
 */
export default class HolbertonCourse {
  /**
   * Creates a new instance of HolbertonCourse.
   * @param {string} name - The name of the course.
   * @param {number} length - The length of the course in hours.
   * @param {string[]} students - An array of student names enrolled in the course.
   */
  constructor(name, length, students) {
    privateData.set(this, {
      validateLength(length) {
        if (typeof length !== 'number') {
          throw new TypeError('Length must be a number');
        }
        if (length <= 0) {
          throw new Error('Length must be greater than 0');
        }
      },
      validateName(name) {
        if (typeof name !== 'string') {
          throw new TypeError('Name must be a string');
        }
      },
      validateStudents(students) {
        if (!Array.isArray(students)) {
          throw new TypeError('Students must be an array');
        }

        // verify that each student is a string
        for (const student of students) {
          if (typeof student !== 'string') {
            throw new TypeError('Each student must be a string');
          }
        }

        // verify that the array is not empty
        if (students.length === 0) {
          throw new Error('Students array must not be empty');
        }
      },
    });

    privateData.get(this).validateName(name);
    privateData.get(this).validateLength(length);
    privateData.get(this).validateStudents(students);

    // now we can set the properties since we know they are valid
    this._name = name;
    this._length = length;
    this._students = students;
  }

  /**
   * Gets the name of the course.
   * @returns {string} The name of the course.
   */
  get name() {
    return this._name;
  }

  /**
   * Sets the name of the course.
   * @param {string} value - The new name of the course.
   */
  set name(value) {
    privateData.get(this).validateName(value);
    this._name = value;
  }

  /**
   * Gets the length of the course.
   * @returns {number} The length of the course in hours.
   */
  get length() {
    return this._length;
  }

  /**
   * Sets the length of the course.
   * @param {number} value - The new length of the course in hours.
   */
  set length(value) {
    privateData.get(this).validateLength(value);
    this._length = value;
  }

  /**
   * Gets the students enrolled in the course.
   * @returns {string[]} An array of student names.
   */
  get students() {
    return this._students;
  }

  /**
   * Sets the students enrolled in the course.
   * @param {string[]} value - An array of student names.
   */
  set students(value) {
    privateData.get(this).validateStudents(value);
    this._students = value;
  }
}
