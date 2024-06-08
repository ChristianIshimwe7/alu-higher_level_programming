#!/usr/bin/node
// Writing a script that prints the number of movies where the character “Wedge Antilles” is present.
const request = require('request');
const url = process.argv[2];

let count = 0;
let data;
request.get(url, (error, response) => {
  if (error) {
    console.log(error);
  } else {
    data = JSON.parse(response.body).results;
    data.forEach((obj) => {
      obj.characters.forEach((character) => {
        if (character.includes('/18/')) count++;
      });
    });
  }
  console.log(count);
});
