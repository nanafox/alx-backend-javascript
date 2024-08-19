#!/usr/bin/env node

/**
 * Prints a message on the console.
 * @param message The message to print to the console.
 */
function displayMessage(message) {
  process.stdout.write(`${message}\n`);
}

module.exports = displayMessage;
