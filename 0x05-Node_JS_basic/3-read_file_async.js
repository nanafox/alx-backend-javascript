#!/usr/bin/env node

const { csvToJSON, getStudentsInfo, readDBAsync } = require('./utils');

/**
 * Counts the number of students from a database file and logs student
 * information based on their majors.
 *
 * This function reads the database file asynchronously using the
 * `readDBAsync` function. It then parses the data from CSV format to
 * JSON, counts the number of students, and logs this count. Additionally,
 * it retrieves and logs information about students majoring in 'CS'
 * (Computer Science) and 'SWE' (Software Engineering).
 *
 * @param {string} path - The file system path to the database file that
 *                        contains student data in CSV format.
 * @returns {Promise<void>} A promise that resolves when the student
 *                         information has been logged.
 * @throws {Error} Throws an error if the database file cannot be read or
 *                 if there is an issue with parsing the data.
 */
async function countStudents(path) {
  const data = await readDBAsync(path);
  const studentsData = JSON.parse(csvToJSON(data));

  console.log(`Number of students: ${studentsData.length}`);

  console.log(getStudentsInfo(studentsData, 'CS'));
  console.log(getStudentsInfo(studentsData, 'SWE'));
}

module.exports = countStudents;
