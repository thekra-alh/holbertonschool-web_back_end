#!/usr/bin/node

// Display the welcome message
process.stdout.write('Welcome to Holberton School, what is your name?\n');

// Set encoding to utf8 for stdin
process.stdin.setEncoding('utf8');

// Listen for readable event to get user input
process.stdin.on('readable', () => {
  const chunk = process.stdin.read();
  if (chunk !== null) {
    // Display the user's name
    process.stdout.write(`Your name is: ${chunk}`);
    
    // If we're not in interactive mode (piped input), we can end the program
    if (!process.stdin.isTTY) {
      process.stdout.write('This important software is now closing\n');
      process.exit();
    }
  }
});

// Handle the end of input (Ctrl+D or pipe end)
process.stdin.on('end', () => {
  process.stdout.write('This important software is now closing\n');
});
