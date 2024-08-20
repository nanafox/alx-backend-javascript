#!/usr/bin/env node

const http = require('http');
const { summarizeStudentInfoByMajor } = require('./utils');

const dbFile = process.argv[2];
const studentMajors = ['CS', 'SWE'];

const hostname = '127.0.0.1';
const port = 1245;

const app = http.createServer(async (req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');

  if (req.url === '/') {
    res.end('Hello Holberton School!');
  } else if (req.url === '/students') {
    try { // Summarize student data and send it over to the user.
      const [
        studentsInfo,
        totalNumber,
      ] = await summarizeStudentInfoByMajor(dbFile, studentMajors);
      res.write('This is the list of our students\n');
      res.write(`Number of students: ${totalNumber}\n`);
      res.end(studentsInfo);
    } catch (error) { // Errors can occur when retrieving students
      res.statusCode = 500;
      res.end('Cannot load the database');
    }
  } else { // For all other endpoints not implemented, let's return 404
    res.statusCode = 404;
    res.end('Not Found');
  }
});

app.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});

module.exports = app;
