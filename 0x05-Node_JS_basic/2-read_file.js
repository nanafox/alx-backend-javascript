#!/usr/bin/env node

const { csvToJSON, getStudentsInfo, readDBSync } = require('./utils');

/**
 * Reads a CSV file, converts it to JSON, and logs the number of students
 * and their information based on specified fields.
 *
 * This function synchronously reads the CSV file from the given path,
 * converts the data to JSON format, and logs the total number of students.
 * It also retrieves and logs information about students majoring in 'CS'
 * (Computer Science) and 'SWE' (Software Engineering).
 *
 * @param {string} path - The path to the CSV file containing student data.
 * @returns {void} This function does not return a value; it logs output
 *                 directly to the console.
 * @throws {Error} Throws an error if the file cannot be read or if there
 *                 is an issue with parsing the data.
 */
function countStudents(path) {
  const data = readDBSync(path);
  const studentsData = JSON.parse(csvToJSON(data));
  console.log(`Number of students: ${studentsData.length}`);

  console.log(getStudentsInfo(studentsData, 'CS'));
  console.log(getStudentsInfo(studentsData, 'SWE'));
}

module.exports = countStudents;
