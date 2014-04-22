var app = app || {};

console.log('start...');

$(function(){
  var books = [{ title: 'bookone', author: 'aone', releaseData: '2008', keywords: 'number one' },
              { title: 'booktwo', author: 'atwo', releaseData: '2009', keywords: 'number two' },
              { title: 'bookthree', author: 'athree', releaseData: '2010', keywords: 'number three' },
              { title: 'bookfour', author: 'afour', releaseData: '2011', keywords: 'number four' }];

console.log('start new library view');

$('#releaseDate').datepicker();
  new app.LibraryView(books);
});
