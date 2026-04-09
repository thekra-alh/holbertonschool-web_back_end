#!/usr/bin/node

// Display welcome message
process.stdout.write('Welcome to Holberton School, what is your name?\n');

// Set encoding for stdin to handle input properly
process.stdin.setEncoding('utf8');

// Read user input
process.stdin.on('readable', () => {
  const chunk = process.stdin.read();
  if (chunk !== null) {
    // Display the name input by the user
    process.stdout.write(`Your name is: ${chunk}`);
  }
});

// Handle end of input (Ctrl+D or pipe)
process.stdin.on('end', () => {
  process.stdout.write('This important software is now closing\n');
});
