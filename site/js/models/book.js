var app = app || {};
console.log('book model  beginning..');
app.Book = Backbone.Model.extend({
  defaults: {
    coverImage: 'img/download.jpg',
    title: 'No title',
    author: 'Unknown',
    releaseDate: 'Unknown',
    keywords: 'None'
  },

  parse: function(response){
    response.id = response._id;
    return response;
  }

});
