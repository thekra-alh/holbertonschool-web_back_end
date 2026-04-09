#!/usr/bin/node

// Display welcome message
process.stdout.write('Welcome to Holberton School, what is your name?\n');

// Set encoding
process.stdin.setEncoding('utf8');

// Read input
process.stdin.on('readable', () => {
  const chunk = process.stdin.read();
  if (chunk !== null) {
    const name = chunk.trim();
    process.stdout.write(`Your name is: ${name}\n`);
  }
});

// Handle end of input - only for piped/non-interactive mode
process.stdin.on('end', () => {
  process.stdout.write('This important software is now closing\n');
});
