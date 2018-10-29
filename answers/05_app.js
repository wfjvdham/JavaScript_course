'use strict';

window.onload = function() {
  const bookTitles = [
    // Replace with your own book titles
    'harry_potter_chamber_secrets'
  ];


  // Replace with your own code
  console.log(bookTitles);

  let books_div = document.getElementById("books");
  console.log(books_div);
  books_div.textContent = bookTitles;

  $( "button.continue" ).html( "Next Step..." );
}

