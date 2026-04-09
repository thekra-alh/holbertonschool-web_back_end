#!/usr/bin/node

// Display welcome message
process.stdout.write('Welcome to Holberton School, what is your name?\n');

// Set encoding for stdin
process.stdin.setEncoding('utf8');

// Handle input
process.stdin.on('data', (data) => {
  const name = data.trim();
  process.stdout.write(`Your name is: ${name}\n`);
  
  // If stdin is not a TTY (piped input), we need to close immediately
  if (!process.stdin.isTTY) {
    process.stdout.write('This important software is now closing\n');
    process.exit();
  }
});

// Handle end of input (Ctrl+D in interactive mode)
process.stdin.on('end', () => {
  process.stdout.write('This important software is now closing\n');
});
