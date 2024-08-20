#!/usr/bin/env node

const fs = require('fs');
const { csvToJSON, logStudentInfo } = require('./utils');

/**
 * Reads a CSV file, converts it to JSON, and logs the number of students
 * and their fields.
 *
 * @param {string} path - The path to the CSV file.
 * @throws Error - If the file cannot be read or parsed.
 */
async function countStudents(path) {
  try {
    const data = await fs.promises.readFile(path, 'utf8');
    const studentData = JSON.parse(csvToJSON(data));

    console.log(`Number of students: ${studentData.length}`);

    logStudentInfo(studentData, 'CS');
    logStudentInfo(studentData, 'SWE');
  } catch (error) {
    throw new Error('Cannot load the database');
  }
}

module.exports = countStudents;
