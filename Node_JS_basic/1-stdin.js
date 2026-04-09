#!/usr/bin/node

// Display welcome message
console.log('Welcome to Holberton School, what is your name?');

// Set encoding
process.stdin.setEncoding('utf8');

// Read input
process.stdin.on('data', (data) => {
  const name = data.trim();
  console.log(`Your name is: ${name}`);
  
  // End the program after showing the name
  process.exit();
});

// This will run when process.exit() is called or when program ends
process.on('exit', () => {
  console.log('This important software is now closing');
});
