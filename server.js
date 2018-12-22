var express = require('express');
var cors = require('cors');
var app = express(),
  port = process.env.PORT || 12138,
  mongoose = require('mongoose'),
  NoteModel = require('./api/models/noteModel'), //created model loading here
  bodyParser = require('body-parser');
  
// mongoose instance connection url connection
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/Notedb'); 


app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Add headers
app.use(function (req, res, next) {

  // Website you wish to allow to connect
  res.setHeader('Access-Control-Allow-Origin', 'http://localhost:8080');

  // Request methods you wish to allow
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

  // Request headers you wish to allow
  res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');

  // Set to true if you need the website to include cookies in the requests sent
  // to the API (e.g. in case you use sessions)
  res.setHeader('Access-Control-Allow-Credentials', true);

  // Pass to next layer of middleware
  next();
});


var routes = require('./api/routes/noteRoutes'); //importing route
routes(app); //register the route

app.options('*', cors());
app.listen(port);


app.use(function(req, res) {
    res.status(404).send({url: req.originalUrl + ' not found'})
});

console.log('Notes RESTful API server started on: ', port);
