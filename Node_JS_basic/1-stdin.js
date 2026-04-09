#!/usr/bin/node

// Display welcome message
console.log('Welcome to Holberton School, what is your name?');

// Set encoding
process.stdin.setEncoding('utf8');

// Read input
process.stdin.on('readable', () => {
  const chunk = process.stdin.read();
  if (chunk !== null) {
    // Remove trailing newline but preserve the input
    const name = chunk.replace(/\n$/, '');
    console.log(`Your name is: ${name}`);
    
    // If stdin is not a TTY (piped), exit after showing name
    if (!process.stdin.isTTY) {
      console.log('This important software is now closing');
      process.exit();
    }
  }
});

// Handle end of input (Ctrl+D in interactive mode)
process.stdin.on('end', () => {
  if (process.stdin.isTTY) {
    console.log('This important software is now closing');
  }
});
