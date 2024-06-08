#!/usr/bin/node
// Writing a JavaScript script that updates the text of the <header> element to New Header!!!
$('div#update_header').click(() => {
    $('header').text('New Header!!!');
});
