'use strict';

window.onload = function() {
  const bookTitles = [
    'black_swan',
    'fooled_by_randomness',
    'antifragile',
    'on_inteligence'
  ];
  const books = [
    {
      id: 'black_swan',
      title: 'Black Swan',
      author: 'Taleb',
    },
    {
      id: 'fooled_by_randomness',
      title: 'Fooled by Randomness',
      author: 'Taleb',
    },
    {
      id: 'antifragile',
      title: 'Antifragile',
      author: 'Taleb',
    },
    {
      id: 'on_inteligence',
      title: 'On Inteligence',
      author: 'Hawkins',
    }
  ];

  const list = document.getElementById('list');

  bookTitles.map((bookTitle) => {
    const a = document.createElement('li');
    a.innerHTML = bookTitle;
    list.appendChild(a);
  })

  const ol = document.createElement('ol');

  books.map((book) => {
    const li = document.createElement('li');
    li.innerHTML = "<b>" + book.title + "</b> by <i>" + book.author + "</i>";
    ol.appendChild(li);
  })

  document.body.appendChild(ol);

  $( "button.continue" ).html( "Next Step..." );
}

