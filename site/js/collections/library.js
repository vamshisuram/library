var app = app || {};
console.log('library collection beginning..');
app.Library = Backbone.Collection.extend({
  model: app.Book,
  url: '/api/books'
});
