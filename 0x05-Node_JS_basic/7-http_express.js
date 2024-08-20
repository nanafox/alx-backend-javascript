#!/usr/bin/env node

const express = require('express');

const { summarizeStudentInfoByMajor } = require('./utils');

const app = express();
const port = 1245;

const dbFile = process.argv[2];
const studentMajors = ['CS', 'SWE'];

// Endpoint for index page
app.get('/', (req, res) => {
  res.send('Hello Holberton School!');
});

// Endpoint for retrieving all students in the database and their majors
app.get('/students', (req, res) => {
  summarizeStudentInfoByMajor(dbFile, studentMajors)
    .then(([studentsInfo, totalNumber]) => {
      res.send('This is the list of our students\n'
        + `Number of students: ${totalNumber}\n`
        + `${studentsInfo}`);
    })
    .catch((error) => {
      console.error(error);
      res.status(500).send('Cannot load the database');
    });
});

app.listen(port, () => {
  console.log(`The server is listening on port ${port}`);
});

module.exports = app;
