#!/usr/bin/node
// Writing a JavaScript script that fetches from URL and displays the value of hello from that fetch in the HTML tag
$.ajax({
    url: 'https://fourtonfish.com/hellosalut/?lang=fr',
    type: 'GET',
    dataType: 'json',
    success: (json) => {
      $('div#hello').text(json);
    }
});
