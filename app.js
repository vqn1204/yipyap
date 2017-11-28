var express = require('express');
var path = require('path');
var logger = require('morgan');
var bodyParser = require('body-parser');


var routes = require('./routes.js');

var app = express();

// Set up mongoose connection
var mongoose = require('mongoose');
mongoose.Promise = global.Promise
var mongoDB = 'mongodb://localhost:27017/project3';
mongoose.connect(mongoDB, {useMongoClient: true});
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));


// Middleware
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

app.use('/api', routes);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});


module.exports = app;
