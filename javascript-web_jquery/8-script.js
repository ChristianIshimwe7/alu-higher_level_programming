#!/usr/bin/node
// Writing a JavaScript script that fetches and lists the title for all movies by using URL
$.ajax({
    url: 'https://swapi.co/api/films/?format=json',
    type: 'GET',
    dataType: 'json'
  }).done((json) => {
    json.results.forEach((title) => {
      $('UL#list_movies').append(`<li>${title}</li>`);
    });
});
