#!/usr/bin/env node

process.stdout.write('Welcome to Holberton School, what is your name?\n');

/**
 * Accept user name as input and print it on the standard output.
 */
function getUsername() {
  process.stdin.on('data', (username) => {
    process.stdout.write(`Your name is: ${username}`);
    process.exit(0);
  });
}

if (process.stdin.isTTY) {
  getUsername();
} else {
  getUsername();
  process.on('exit', () => {
    process.stdout.write('This important software is now closing\n');
  });
}
