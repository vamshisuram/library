var app = app || {};

console.log('book view  beginning..');

app.BookView = Backbone.View.extend({
  tagName: 'div',
  className: 'bookContainer',
  template: _.template($('#bookTemplate').html()),

  render: function(){
    this.$el.html( this.template( this.model.toJSON() ) );
    return this;
  },

  events: {
    'click .delete': 'deleteBook'
  },

  deleteBook: function() {
    this.model.destroy();
    this.remove();
  }


});
