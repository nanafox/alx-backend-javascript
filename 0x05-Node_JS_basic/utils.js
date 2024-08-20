#!/usr/bin/env node

// Utility functions

/**
 * Converts a CSV string to a JSON string.
 *
 * @param {string} csv - The CSV string to convert.
 * @returns {string} - The resulting JSON string.
 */
function csvToJSON(csv) {
  const lines = csv.trim().split('\n');
  const result = [];
  const headers = lines[0].split(',');

  lines.slice(1).forEach((line) => {
    if (line.trim() === '') return; // Skip empty lines
    const obj = {};
    const currentLine = line.split(',');

    headers.forEach((header, index) => {
      obj[header] = currentLine[index];
    });
    result.push(obj);
  });

  return JSON.stringify(result);
}

/**
 * Logs the number of students in a specific field and their names.
 *
 * @param {Array} students - The array of student objects.
 * @param {string} field - The field to filter students by.
 */
function logStudentInfo(students, field) {
  const filteredStudents = students.filter(
    (student) => student.field === field,
  );

  console.log(
    `Number of students in ${field}: ${filteredStudents.length}. `
    + `List: ${filteredStudents.map(
      (student) => student.firstname,
    ).join(', ')}`,
  );
}

module.exports = { csvToJSON, logStudentInfo };
