/**
 * Retrieves students from a list based on a specific location.
 *
 * This function filters a list of student objects based on the provided
 * location and returns an array of students from that location.
 *
 * @param {Array} studentsList - An array of student objects.
 * @param {string} location - The location to filter the students by.
 * @returns {Array} An array of student objects from the specified location.
 */
export default function getStudentsByLocation(studentsList, location) {
  if (!Array.isArray(studentsList)) {
    throw new TypeError('studentsList must be an array');
  }

  if (typeof location !== 'string') {
    throw new TypeError('location must be a string');
  }

  return studentsList.filter((student) => student.location === location);
}
