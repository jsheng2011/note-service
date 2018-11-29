var express = require('express');
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

var routes = require('./api/routes/noteRoutes'); //importing route
routes(app); //register the route


app.listen(port);


app.use(function(req, res) {
    res.status(404).send({url: req.originalUrl + ' not found'})
});

console.log('Notes RESTful API server started on: ', port);
