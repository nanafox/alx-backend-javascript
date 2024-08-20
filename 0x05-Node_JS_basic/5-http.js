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
    summarizeStudentInfoByMajor(dbFile, studentMajors)
      .then(([studentsInfo, totalNumber]) => {
        res.write('This is the list of our students\n');
        res.write(`Number of students: ${totalNumber}\n`);
        res.end(studentsInfo);
      })
      .catch(() => {
        res.statusCode = 500;
        res.end('Internal Server Error');
      });
  } else { // For all other endpoints not implemented, let's return 404
    res.statusCode = 404;
    res.end('Not Found');
  }
});

app.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});

module.exports = app;
