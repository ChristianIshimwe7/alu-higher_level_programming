#!/usr/bin/node
// Writing a JavaScript script that fetches a character from URL
$.ajax({
    url: 'https://swapi-api.hbtn.io/api/people/5/?format=json',
    type: 'GET',
    success: (result) => {
      $('div#character').text(result.name);
    }
});
