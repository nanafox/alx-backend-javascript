/**
 * Retrieves an array of student IDs from a list of student objects.
 *
 * This function takes an array of student objects and returns an array
 * containing only the IDs of the students.
 *
 * @param {Array} studentsList - An array of student objects.
 * @returns {Array} An array of student IDs.
 */
export default function getListStudentIds(studentsList) {
  // let's send an empty array if we received bad input.
  if (!Array.isArray(studentsList)) {
    return [];
  }

  return studentsList.map((student) => student.id);
}
