#!/usr/bin/node
// Writing a script that reads and prints the content of a file
const fs = require('fs');

fs.readFile(process.argv[2], (error, content) => {
  if (error) {
    console.log(error);
  } else {
    console.log(content.toString());
  }
});
