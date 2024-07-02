/**
 * Updates student grades based on the city they are located in using
 * Object.assign for immutability.
 *
 * @param {Array} studentsList - List of student objects.
 * @param {string} city - City name to filter students by.
 * @param {Array} newGrades - List of grade objects with studentId and grade.
 * @returns {Array} - Updated list of student objects with grades.
 * @throws {TypeError} - If studentsList is not an array, newGrades is not an
 * array, or city is not a string.
 */
export default function updateStudentGradeByCity(studentsList, city, newGrades) {
  if (!Array.isArray(studentsList)) {
    throw new TypeError('studentsList must be an array');
  }

  if (!Array.isArray(newGrades)) {
    throw new TypeError('newGrades must be an array');
  }

  if (typeof city !== 'string') {
    throw new TypeError('city must be a string');
  }

  return studentsList
    .filter((student) => student.location === city)
    .map((student) => {
      const gradeObj = newGrades.find((grade) => grade.studentId === student.id);
      return Object.assign(student, { grade: gradeObj ? gradeObj.grade : 'N/A' });
    });
}
