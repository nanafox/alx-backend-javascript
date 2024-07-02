/**
 * Calculates the sum of student IDs in a list of student objects.
 *
 * This function takes an array of student objects and calculates the sum of
 * their IDs.
 *
 * @param {Array} studentsList - An array of student objects.
 * @returns {number} The sum of student IDs.
 */
export default function getStudentIdsSum(studentsList) {
  if (!Array.isArray(studentsList)) {
    throw TypeError("studentsList must be an array");
  }

  return (
    studentsList.reduce((accumulator, student) => {
      if (!Number.isInteger(student.id)) {
        throw TypeError("StudentId must be an integer");
      }
      return accumulator + student.id;
    }, 0)
  );
}
