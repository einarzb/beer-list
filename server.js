var express = require('express');
var bodyParser = require('body-parser');

var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/beerslist');

var app = express();

app.use(express.static('public'));
app.use(express.static('node_modules'));

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

app.get('/beers', function(req, res) {
  console.log("beer");  
});

app.listen(8000, function() {
  console.log("beer list project. Listening on 8000.")

});
