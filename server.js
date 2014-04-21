
var application_root = __dirname,
    express = require('express'),
    path = require('path'),
    mongoose = require('mongoose');

var app = express();

app.configure( function() {
  app.use( express.bodyParser() );

  app.use( express.methodOverride() );

  app.use( app.router );

  app.use( express.static( path.join( application_root, 'site' ) ) );

  app.use( express.errorHandler({ dumpExceptions: false, showStack: true }) );
});

var port = 3000;

app.get('/api', function(request, response){
  response.send('Library API is running.');
});

mongoose.connect('mongodb://localhost:27017/library_database');

var Book = new mongoose.Schema({
  title: String,
  author: String,
  releaseData: Date
});

var BookModel = mongoose.model( 'Book', Book);

app.get('api/books', function(request, response){
  console.log("api got hit");
  return BookModel.find( function(err, books){
    if(!err) {
      return console.log("getting books");
    } else {
      return console.log("error in getting books");
    }
  });
});

app.listen( port, function(){
  console.log("Express server listening on port %d in %s mode", port, app.settings.env );
});
