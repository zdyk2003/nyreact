// Require Node Modules
var express = require('express');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');



// Initialize Express for debugging & body parsing
const app = express();
app.use(bodyParser.urlencoded({
  extended: false
}));


// Serve Static Content
app.use(express.static(process.cwd() + '/public'));



// Database Configuration with Mongoose
// ---------------------------------------------------------------------------------------------------------------
// Connect to localhost if not a production environment
if(process.env.NODE_ENV == 'production'){
  // Gotten using `heroku config | grep MONGODB_URI` command in Command Line
  mongoose.connect('');
}
else{
  mongoose.connect('mongodb://localhost/nytreact');
}
const db = mongoose.connection;

// Show any Mongoose errors
db.on('error', function(err) {
  console.log('Mongoose Error: ', err);
});

// Once logged in to the db through mongoose, log a success message
db.once('open', function() {
  console.log('Mongoose connection successful.');
});

// Import the Article model
// var Article = require('./models/Article.js');
// ---------------------------------------------------------------------------------------------------------------






// Launch App
const port = process.env.PORT || 3000;
app.listen(port, function(){
  console.log('Running on port: ' + port);
});