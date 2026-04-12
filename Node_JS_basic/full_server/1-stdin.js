cat > 1-stdin.js << 'EOF'
#!/usr/bin/node

// Display welcome message
process.stdout.write('Welcome to Holberton School, what is your name?\n');

// Handle user input
process.stdin.on('data', (data) => {
  const name = data.toString().trim();
  process.stdout.write(`Your name is: ${name}\n`);
  process.stdin.end();
});

// Handle program end (when input stream closes)
process.stdin.on('end', () => {
  process.stdout.write('This important software is now closing\n');
});
EOF
